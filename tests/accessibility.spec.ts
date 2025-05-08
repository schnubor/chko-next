import AxeBuilder from '@axe-core/playwright';
import { test, expect } from '@playwright/test';

test.describe('homepage', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3001/');
    });

    test('should not have any automatically detectable accessibility issues', async ({ page }) => {
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('should not have any automatically detectable accessibility issues with the menu visible', async ({
        page,
    }) => {
        await page.getByTestId('menu-button').click();

        const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });
});

test.describe('work page', () => {
    test('should not have any automatically detectable accessibility issues', async ({ page }) => {
        await page.goto('http://localhost:3001/perspective');

        const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });
});
