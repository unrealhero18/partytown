import { test, expect } from '@playwright/test';

test('intersection-observer', async ({ page }) => {
  await page.goto('/tests/platform/intersection-observer/');

  const testIntersectionObserver = page.locator('#testIntersectionObserver');
  await expect(testIntersectionObserver).toHaveText('');

  const linkScrollDown = page.locator('#scrolldown');
  await linkScrollDown.click();

  await page.waitForSelector('.testIntersectionObserver');

  await expect(testIntersectionObserver).toHaveText('intersecting #testIntersectionObserver');

  const testWindowIntersectionObserver = page.locator('#testWindowIntersectionObserver');
  await expect(testWindowIntersectionObserver).toHaveText('true');

  const testWindowIntersectionObserverEntry = page.locator('#testWindowIntersectionObserverEntry');
  await expect(testWindowIntersectionObserverEntry).toHaveText('true');

  const testIntersectionRatio = page.locator('#testIntersectionRatio');
  await expect(testIntersectionRatio).toHaveText('true');
});
