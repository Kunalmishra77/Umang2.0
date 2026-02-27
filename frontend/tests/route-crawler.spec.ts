import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

const BASE_URL = 'http://localhost:5173';
const reportDir = path.join(process.cwd(), 'debug-reports');
const reportFile = path.join(reportDir, 'route-report.json');

test.describe('Route Crawler', () => {
  const results: any[] = [];
  const visited = new Set<string>();
  const toVisit = new Set<string>(['/']);

  test.beforeAll(async () => {
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
  });

  test('Dynamic Crawl All Internal Links', async ({ page }) => {
    // Set viewport to desktop to ensure all links are visible
    await page.setViewportSize({ width: 1280, height: 800 });

    while (toVisit.size > 0) {
      const route = Array.from(toVisit)[0];
      toVisit.delete(route);
      
      if (visited.has(route)) continue;
      visited.add(route);

      if (route.includes('.') || route.startsWith('http')) continue;

      const fullUrl = `${BASE_URL}${route}`;
      console.log(`Crawling: ${fullUrl}`);

      const consoleErrors: string[] = [];
      const pageErrors: any[] = [];
      const failedRequests: any[] = [];

      const consoleHandler = (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()); };
      const pageErrorHandler = (error) => pageErrors.push({ message: error.message, stack: error.stack });
      const requestFailedHandler = (request) => failedRequests.push({ url: request.url(), error: request.failure()?.errorText });

      page.on('console', consoleHandler);
      page.on('pageerror', pageErrorHandler);
      page.on('requestfailed', requestFailedHandler);

      try {
        const response = await page.goto(fullUrl, { waitUntil: 'networkidle', timeout: 30000 });
        
        // Wait a bit for animations/dynamic content
        await page.waitForTimeout(1000);

        // Collect new links
        const links = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('a[href^="/"]'))
            .map(a => a.getAttribute('href'))
            .filter(href => href && !href.includes('#')) as string[];
        });

        for (const link of links) {
          if (!visited.has(link)) {
            toVisit.add(link);
          }
        }

        const isWhitePage = await page.evaluate(() => {
          const root = document.getElementById('root');
          return !root || root.innerHTML.trim() === '';
        });

        const hasErrorBoundary = await page.locator('h1:has-text("Something went wrong")').count() > 0;
        const isNotFound = await page.locator('h1:has-text("404"), span:has-text("Page Not Found")').count() > 0;
        
        const status = (response?.status() || 0);
        const success = status < 400 && !isWhitePage && !hasErrorBoundary && !isNotFound && pageErrors.length === 0;

        results.push({
          route,
          url: fullUrl,
          status,
          success,
          isWhitePage,
          hasErrorBoundary,
          isNotFound,
          consoleErrors: [...consoleErrors],
          pageErrors: [...pageErrors],
          failedRequests: [...failedRequests]
        });

        // Always take screenshot for first few or if failed
        if (!success || visited.size <= 10) {
          const screenshotPath = path.join(reportDir, `crawl-${route.replace(/\//g, '_') || 'home'}.png`);
          await page.screenshot({ path: screenshotPath, fullPage: true }).catch(() => {});
        }
      } catch (error: any) {
        results.push({
          route,
          url: fullUrl,
          success: false,
          error: error.message
        });
        const screenshotPath = path.join(reportDir, `crash-${route.replace(/\//g, '_') || 'home'}.png`);
        await page.screenshot({ path: screenshotPath, fullPage: true }).catch(() => {});
      } finally {
        page.off('console', consoleHandler);
        page.off('pageerror', pageErrorHandler);
        page.off('requestfailed', requestFailedHandler);
      }

      if (visited.size > 50) { // Reduced limit for faster debugging
        console.warn('Reached 50 visited routes, stopping crawl.');
        break;
      }
    }

    fs.writeFileSync(reportFile, JSON.stringify(results, null, 2));
    console.log(`Report saved to ${reportFile}`);
    
    const failures = results.filter(r => !r.success);
    if (failures.length > 0) {
       console.error(`Found ${failures.length} failed routes!`);
    }
    expect(failures.length).toBe(0);
  });
});
