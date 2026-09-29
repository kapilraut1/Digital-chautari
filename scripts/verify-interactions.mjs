import { chromium } from "playwright";

const baseUrl = process.argv[2] ?? "http://localhost:3000";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const issues = [];

page.on("console", (m) => {
  if (["error", "warning"].includes(m.type()))
    issues.push(`console: ${m.text()}`);
});
page.on("pageerror", (e) => issues.push(`pageerror: ${e.message}`));

const hierarchyCheck = (pageName) =>
  page.evaluate((name) => {
    const heads = [...document.querySelectorAll("h1,h2,h3,h4,h5,h6")];
    let last = 0;
    const bad = [];
    for (const h of heads) {
      const level = Number(h.tagName[1]);
      if (level > last + 1)
        bad.push(`${h.tagName} "${h.textContent.slice(0, 30)}" after h${last}`);
      last = level;
    }
    // h1 not first
    const body = document.body.querySelector("h1,h2,h3,h4,h5,h6");
    if (body?.tagName !== "H1") bad.push("first heading is not h1");
    return `${name}: ${bad.length ? bad.join(" | ") : "hierarchy ok"} (${heads.length} headings)`;
  }, pageName);

// Products tabs
await page.goto(`${baseUrl}/products`, { waitUntil: "load" });
await page.waitForTimeout(400);
issues.push(await hierarchyCheck("products"));

const tabs = page.locator('[role="tab"]');
issues.push(`tabs=${await tabs.count()}`);
const firstPanel = page.locator('[role="tabpanel"] h2').first();
issues.push(`initial panel: "${await firstPanel.textContent()}"`);

await tabs.nth(1).click();
await page.waitForTimeout(150);
issues.push(
  `after click 2nd tab, panel: "${await page.locator('[role="tabpanel"] h2').textContent()}"`,
);
issues.push(
  `aria-selected on 2nd: ${await tabs.nth(1).getAttribute("aria-selected")}`,
);

await tabs.nth(2).click();
await page.waitForTimeout(150);
issues.push(
  `after click 3rd tab, panel: "${await page.locator('[role="tabpanel"] h2').textContent()}"`,
);

// keyboard: arrow right from 3rd tab wraps to 1st
await tabs.nth(2).focus();
await page.keyboard.press("ArrowRight");
await page.waitForTimeout(150);
issues.push(
  `after ArrowRight, active tab label: "${await page.evaluate(() => document.activeElement?.textContent)}" panel: "${await page.locator('[role="tabpanel"] h2').textContent()}"`,
);

// previews are aria-hidden and present
issues.push(
  `preview aria-hidden count: ${await page.locator('[ aria-hidden="true"]').count()}`,
);

// About heading hierarchy
await page.goto(`${baseUrl}/about`, { waitUntil: "load" });
await page.waitForTimeout(400);
issues.push(await hierarchyCheck("about"));

// About timeline dots / year pills
issues.push(
  `timeline year pills: ${await page.locator("text=/20(25|26)/").count()} | timeline items: ${await page.locator("main ol li").count()}`,
);

// Contact form
await page.goto(`${baseUrl}/contact`, { waitUntil: "load" });
await page.waitForTimeout(400);
issues.push(await hierarchyCheck("contact"));

const projectPill = page.locator('input[name="projectType"]');
issues.push(`project type radios: ${await projectPill.count()}`);
await page.locator('label:has(input[value="Software Development"])').click();
issues.push(
  `pill selected: ${await page.locator('input[value="Software Development"]').isChecked()}`,
);

await page.fill("#contact-name", "Test User");
await page.fill("#contact-email", "test@example.com");
await page.fill("#contact-subject", "A test");
await page.fill("#contact-message", "Hello from the audit");
await page.getByRole("button", { name: /Send Message/ }).click();
await page.waitForTimeout(200);
issues.push(
  `success state visible: ${await page.getByRole("status").isVisible()}`,
);

// Services heading hierarchy
await page.goto(`${baseUrl}/services`, { waitUntil: "load" });
await page.waitForTimeout(400);
issues.push(await hierarchyCheck("services"));

// pricing dark featured card
await page.goto(`${baseUrl}/services#pricing`, { waitUntil: "load" });
await page.waitForTimeout(400);
issues.push(
  `Most Popular badge: ${await page.getByText("Most Popular").count()}`,
);
const featured = page
  .locator("div.bg-navy")
  .filter({ hasText: "Most Popular" });
issues.push(`featured navy card: ${await featured.count()}`);

await browser.close();

for (const issue of issues) console.log(issue);
