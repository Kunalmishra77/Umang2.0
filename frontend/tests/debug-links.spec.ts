import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

const BASE_URL = 'http://localhost:5173';
const reportDir = path.join(process.cwd(), 'debug-reports');
const htmlFile = path.join(reportDir, 'home.html');

test('Log Home HTML and Crawl', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    console.log(`Crawling: ${BASE_URL}`);
    await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 30000 });
    
    const content = await page.content();
    fs.writeFileSync(htmlFile, content);
    console.log(`Home HTML saved to ${htmlFile}`);

    const links = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('a[href^="/"]'))
            .map(a => ({ href: a.getAttribute('href'), text: a.textContent?.trim() }));
    });
    console.log('Internal links found:', JSON.stringify(links, null, 2));
    
    await page.screenshot({ path: path.join(reportDir, 'home-debug.png'), fullPage: true });
});
