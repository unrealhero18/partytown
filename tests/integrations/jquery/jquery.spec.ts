import { test, expect } from '@playwright/test';

test('JQuery', async ({ page }) => {
  await page.goto('/tests/integrations/jquery/');
  await page.waitForSelector('.completed');
  const element = await page.waitForSelector('#pterrors');

  expect(await element.textContent()).toEqual('NO ERROR');
});
