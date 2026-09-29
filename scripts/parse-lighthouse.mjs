import { readFileSync } from "node:fs";

const pages = ["home", "services", "products", "about", "contact"];

for (const page of pages) {
  const report = JSON.parse(readFileSync(`.lighthouse/${page}.json`, "utf8"));
  const audits = Object.values(report.audits);

  const categories = Object.fromEntries(
    Object.entries(report.categories).map(([key, value]) => [
      key,
      Math.round(value.score * 100),
    ]),
  );

  console.log(`\n=== ${page} ===`, JSON.stringify(categories));

  const a11yRefs = report.categories.accessibility?.auditRefs ?? [];
  const failingA11yIds = new Set(
    a11yRefs
      .filter((ref) => ref.weight > 0 && ref.acronym === undefined)
      .map((ref) => ref.id),
  );

  for (const audit of audits) {
    if (!failingA11yIds.has(audit.id)) continue;
    if (audit.score !== 0 && audit.score !== null) continue;

    const items = (audit.details?.items ?? [])
      .slice(0, 8)
      .map((item) => {
        const selector = item.node?.selector ?? "";
        const snippet = (item.node?.snippet ?? "").slice(0, 90);
        return `    - ${selector} :: ${snippet}`;
      })
      .join("\n");

    console.log(`  [${audit.id}] ${audit.title}`);
    if (items) console.log(items);
  }

  const bp = audits.filter(
    (audit) =>
      report.categories["best-practices"]?.auditRefs?.some(
        (ref) => ref.id === audit.id && ref.weight > 0,
      ) &&
      audit.score !== null &&
      audit.score < 1,
  );
  for (const audit of bp) {
    console.log(
      `  bp: [${audit.id}] ${audit.title} (${audit.score}) ${audit.displayValue ?? ""}`,
    );
  }
}
