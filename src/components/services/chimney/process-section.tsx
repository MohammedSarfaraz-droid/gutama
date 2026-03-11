import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const STEPS = ["Site assessment and planning", "Material and scope confirmation", "Core installation and build work", "Detail finishing and protection", "Final walkthrough and quality check"] as const;

export function ChimneyProcessSection() {
  return (
    <Section className="bg-background">
      <Container>
        <Reveal className="mb-16 text-center"><span className="text-sm font-medium uppercase tracking-widest text-secondary">How It Works</span><h2 className="mt-3 mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">Our Process</h2><div className="gold-divider" /></Reveal>
        <div className="mx-auto max-w-3xl space-y-4">
          {STEPS.map((step, index) => (
            <div key={step} className="glass-card relative flex items-start gap-4 p-5"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10"><span className="font-serif font-bold text-secondary">{index + 1}</span></div><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Step {index + 1}</p><p className="mt-1 font-medium text-foreground">{step}</p></div></div>
          ))}
        </div>
      </Container>
    </Section>
  );
}