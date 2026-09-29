import { DarkBanner } from "@/components/DarkBanner";
import { Reveal } from "@/components/Reveal";
import { stagger } from "@/lib/reveal";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { commitments, roles } from "@/lib/company";

export function TeamAndCommitments() {
  return (
    <>
      <DarkBanner
        eyebrow="Quality & trust"
        title="Committed to quality and trust"
        lede="Four commitments we make to every client, whether the project is a single landing page or a full platform."
      >
        <ul className="mt-10 grid gap-grid sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((commitment, index) => (
            <Reveal
              as="li"
              key={commitment.title}
              delay={stagger(index)}
              className="rounded-card border border-navyBorder bg-navyCard p-card"
            >
              <span aria-hidden="true" className="text-2xl">
                {commitment.glyph}
              </span>
              <h3 className="mt-4 font-display text-base font-bold tracking-tight text-white">
                {commitment.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {commitment.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </DarkBanner>

      <Section>
        <SectionHeading
          align="center"
          eyebrow="The team"
          title="Seven roles, one small team"
          lede="We are deliberately lean. Every person here works directly on client work, which is why nobody is a layer between you and the person doing the work."
        />

        <ul className="mt-10 grid gap-grid sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, index) => (
            <Reveal
              as="li"
              key={role.title}
              delay={stagger(index)}
              className="flex flex-col rounded-card border border-line bg-white p-card"
            >
              <span
                aria-hidden="true"
                className="grid h-12 w-12 place-items-center rounded-chip bg-primaryDark font-display text-sm font-bold text-white"
              >
                {initials(role.title)}
              </span>
              <h3 className="mt-4 font-display text-base font-bold tracking-tight text-ink">
                {role.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {role.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}

function initials(title: string) {
  return title
    .split(" ")
    .filter((word) => word !== "&" && word.length > 2)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
