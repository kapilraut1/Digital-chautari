import { Button } from "@/components/Button";
import { CtaPanel } from "@/components/CtaPanel";

export function ClosingCta() {
  return (
    <CtaPanel title="Ready to build something extraordinary together?">
      <Button href="/contact" variant="light">
        Start a Project &rarr;
      </Button>
      <Button href="/services" variant="outlineLight">
        View Services
      </Button>
    </CtaPanel>
  );
}
