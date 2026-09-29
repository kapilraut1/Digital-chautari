import { chromium } from "playwright";

const baseUrl = process.argv[2] ?? "http://localhost:3000";
const browser = await chromium.launch();
const result = [];

const lastGridItemOpacity = (page) =>
  page.evaluate(() => {
    const items = [...document.querySelectorAll("main ul li")];
    const last = items[items.length - 1];
    if (!last) return "no-li-found";
    return getComputedStyle(last).opacity;
  });

// Normal motion: below-fold grid item starts invisible, reveals after scroll
const normal = await browser.newPage({
  viewport: { width: 1440, height: 900 },
});
await normal.goto(`${baseUrl}/`, { waitUntil: "load" });
await normal.waitForTimeout(300);
const normalBefore = await lastGridItemOpacity(normal);
result.push(
  `normal motion, below-fold item before scroll: opacity ${normalBefore}`,
);

await normal.evaluate(async () => {
  window.scrollTo(0, document.documentElement.scrollHeight);
  await new Promise((resolve) => setTimeout(resolve, 1000));
});
result.push(
  `normal motion, below-fold item after scroll: opacity ${await lastGridItemOpacity(normal)}`,
);
await normal.close();

// Reduced motion: everything visible immediately, no transitions
const reduced = await browser.newPage({
  viewport: { width: 1440, height: 900 },
});
await reduced.emulateMedia({ reducedMotion: "reduce" });
await reduced.goto(`${baseUrl}/`, { waitUntil: "load" });
await reduced.waitForTimeout(300);
const reducedState = await reduced.evaluate(() => {
  const items = [...document.querySelectorAll("main ul li")];
  const last = items[items.length - 1];
  const style = last ? getComputedStyle(last) : null;
  return {
    opacity: style ? style.opacity : "no-li-found",
    transitionProperty: style ? style.transitionProperty : null,
  };
});
result.push(
  `reduced motion: opacity ${reducedState.opacity}, transitions "${reducedState.transitionProperty}"`,
);
await reduced.close();

await browser.close();
for (const line of result) console.log(line);
