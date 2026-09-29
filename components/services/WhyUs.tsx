import { DarkBanner } from "@/components/DarkBanner";
import { IconChip, chipTones } from "@/components/IconChip";

const reasons = [
  "Dedicated project manager",
  "Agile development cycle",
  "Transparent pricing",
  "Post-launch support",
  "Scalable architecture",
  "Cross-platform expertise",
];

export function WhyUs() {
  return (
    <DarkBanner eyebrow="Why work with us" title="Six reasons clients stay">
      <ul className="mt-10 grid gap-grid sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, index) => (
          <li
            key={reason}
            className="flex items-center gap-4 rounded-card border border-navyBorder bg-navyCard px-6 py-5"
          >
            <IconChip tone={chipTones[index % chipTones.length]} size="sm">
              <span className="text-xs font-bold text-primaryDark">✓</span>
            </IconChip>

            <span className="text-sm font-medium text-white">{reason}</span>
          </li>
        ))}
      </ul>
    </DarkBanner>
  );
}
