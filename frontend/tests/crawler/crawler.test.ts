import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'url';
import { fileURLToPath } from 'url';
import * as fsExtra from 'fs';
import pathModule from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = pathModule.dirname(__filename);

const results: any[] = [];
const errorReportsDir = pathModule.join(__dirname, '../../debug-reports');

const KNOWN_ROUTES = [
  '/',
  '/about',
  '/infrastructure',
  '/services',
  '/services/buy-medicines',
  '/doctors',
  '/team',
  '/contact',
  '/patient-corner/patient-stories'
];

test.beforeAll(async () => {
  if (!fsExtra.existsSync(errorReportsDir)) {
    fsExtra.mkdirSync(errorReportsDir, { recursive: true });
  }
});

test.describe('Verification Tester', () => {
  for (const urlPath of KNOWN_ROUTES) {
    test(`Verify route: ${urlPath}`, async ({ page }) => {
      const errors: string[] = [];
      const pageErrors: any[] = [];

      page.on('console', msg => {
        if (msg.type() === 'error') errors.push(msg.text());
      });

      page.on('pageerror', exception => {
        pageErrors.push({ message: exception.message, stack: exception.stack });
      });

      console.log(`Verifying: ${urlPath}`);
      try {
        await page.goto(urlPath, { waitUntil: 'networkidle', timeout: 30000 });
        
        // Wait for root to have content
        await page.waitForFunction(() => {
          const root = document.getElementById('root');
          return root && root.children.length > 0;
        }, { timeout: 10000 }).catch(() => {
          errors.push("TIMEOUT: #root element is empty after 10s");
        });

        const hasErrorBoundary = await page.locator('h1:has-text("Something went wrong")').count() > 0;
        const isWhitePage = await page.evaluate(() => {
           const root = document.getElementById('root');
           return !root || root.innerHTML.trim() === '';
        });

        const result = {
          path: urlPath,
          status: hasErrorBoundary ? 'ERROR_BOUNDARY' : (isWhitePage ? 'WHITE_PAGE' : (pageErrors.length > 0 ? 'CRASHED' : 'OK')),
          consoleErrors: errors,
          pageErrors
        };
        results.push(result);

        await page.screenshot({ path: pathModule.join(errorReportsDir, `verify-${urlPath.replace(/\//g, '_') || 'index'}.png`) });
      } catch (e: any) {
        results.push({ path: urlPath, status: 'FAILED', error: e.message });
      }
    });
  }

  test.afterAll(async () => {
    fsExtra.writeFileSync(
      pathModule.join(errorReportsDir, 'route-report.json'),
      JSON.stringify(results, null, 2)
    );
  });
});
