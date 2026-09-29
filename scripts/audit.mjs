import { mkdir, writeFile } from "node:fs/promises";
import { chromium } from "playwright";

const baseUrl = process.argv[2] ?? "http://localhost:3000";
const outputDir = ".audit";
const widths = [1440, 1024, 760, 390];
const routes = [
  { path: "/", name: "home" },
  { path: "/services", name: "services" },
  { path: "/products", name: "products" },
  { path: "/about", name: "about" },
  { path: "/contact", name: "contact" },
];

const measure = () => {
  const doc = document.documentElement;
  const overflowing = [...document.querySelectorAll("main *")]
    .filter((el) => el.getBoundingClientRect().right > window.innerWidth + 1)
    .slice(0, 5)
    .map(
      (el) =>
        `${el.tagName.toLowerCase()}.${el.className.toString().slice(0, 40)}`,
    );

  const isVisible = (el) => {
    if (!el) return false;
    const style = getComputedStyle(el);
    return style.display !== "none" && style.visibility !== "hidden";
  };

  return {
    scrollWidth: doc.scrollWidth,
    innerWidth: window.innerWidth,
    horizontalOverflow: doc.scrollWidth > window.innerWidth,
    overflowingElements: overflowing,
    headings: [...document.querySelectorAll("h1,h2,h3")].length,
    h1Count: document.querySelectorAll("h1").length,
    sections: document.querySelectorAll("main section").length,
    desktopNavVisible: isVisible(
      document.querySelector('nav[aria-label="Primary"]'),
    ),
    mobileNavHidden:
      document.querySelector("#mobile-nav")?.hasAttribute("hidden") ?? null,
    hamburgerVisible: isVisible(
      document.querySelector('button[aria-controls="mobile-nav"]'),
    ),
    imagesMissingAlt: [...document.querySelectorAll("img")].filter(
      (img) => !img.hasAttribute("alt"),
    ).length,
    buttonsWithoutName: [...document.querySelectorAll("button")].filter(
      (button) =>
        !button.textContent.trim() && !button.getAttribute("aria-label"),
    ).length,
    linksWithoutName: [...document.querySelectorAll("a")].filter((link) => {
      const label = link.getAttribute("aria-label") ?? link.textContent.trim();
      return label.length === 0;
    }).length,
  };
};

await mkdir(`${outputDir}/screenshots`, { recursive: true });

const browser = await chromium.launch();
const findings = [];

for (const route of routes) {
  for (const width of widths) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    const consoleMessages = [];
    const pageErrors = [];
    const failedRequests = [];

    page.on("console", (message) => {
      if (["error", "warning"].includes(message.type())) {
        consoleMessages.push(`${message.type()}: ${message.text()}`);
      }
    });
    page.on("pageerror", (error) => pageErrors.push(error.message));
    page.on("response", (response) => {
      if (response.status() >= 400) {
        failedRequests.push(`${response.status()} ${response.url()}`);
      }
    });

    const response = await page.goto(`${baseUrl}${route.path}`, {
      waitUntil: "load",
    });
    await page.waitForTimeout(600);

    await page.evaluate(async () => {
      const viewport = window.innerHeight;
      const total = document.documentElement.scrollHeight - viewport;
      let position = 0;

      while (position < total) {
        position = Math.min(position + viewport * 0.8, total);
        window.scrollTo(0, position);
        await new Promise((resolve) => setTimeout(resolve, 120));
      }

      window.scrollTo(0, 0);
      await new Promise((resolve) => setTimeout(resolve, 250));
    });

    const metrics = await page.evaluate(measure);
    await page.screenshot({
      path: `${outputDir}/screenshots/${route.name}-${width}.png`,
      fullPage: true,
    });

    findings.push({
      route: route.path,
      width,
      status: response?.status() ?? 0,
      ...metrics,
      consoleMessages,
      pageErrors,
      failedRequests,
    });

    await page.close();
  }
}

await browser.close();

const problems = findings.filter(
  (finding) =>
    finding.status >= 400 ||
    finding.horizontalOverflow ||
    finding.consoleMessages.length > 0 ||
    finding.pageErrors.length > 0 ||
    finding.imagesMissingAlt > 0 ||
    finding.buttonsWithoutName > 0 ||
    finding.linksWithoutName > 0 ||
    finding.h1Count !== 1,
);

await writeFile(
  `${outputDir}/report.json`,
  JSON.stringify({ findings, problems }, null, 2),
);

for (const finding of findings) {
  const flags = [
    finding.status >= 400 ? `status=${finding.status}` : "",
    finding.horizontalOverflow
      ? `overflow ${finding.scrollWidth}>${finding.innerWidth}`
      : "",
    finding.consoleMessages.length
      ? `console=${finding.consoleMessages.length}`
      : "",
    finding.pageErrors.length ? `pageerror=${finding.pageErrors.length}` : "",
  ].filter(Boolean);

  console.log(
    `${finding.route.padEnd(11)} ${String(finding.width).padStart(5)}px  ` +
      `nav=${finding.desktopNavVisible ? "desktop" : "mobile"}  ` +
      `sections=${finding.sections}  h1=${finding.h1Count}  ` +
      (flags.length ? `ISSUE: ${flags.join(" ")}` : "ok"),
  );
}

console.log(
  `\n${problems.length === 0 ? "No problems found" : `${problems.length} route/width combinations need attention`}`,
);
console.log(
  `Screenshots in ${outputDir}/screenshots, full report in ${outputDir}/report.json`,
);
