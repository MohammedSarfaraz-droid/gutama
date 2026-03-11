import { CheckCircle } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function EmergencyRepairOverviewSection() {
  return (
    <Section className="bg-muted/20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          <Reveal className="max-w-3xl"><h2 className="mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl">About This Service</h2><div className="gold-divider mx-0! mb-6" /><p className="text-lg leading-relaxed text-muted-foreground">Our emergency crews stabilize active damage quickly, then transition to permanent repairs with clear scope and documentation.</p></Reveal>
          <Reveal className="glass-card border border-border/40 p-6"><p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Project Outcomes</p><ul className="space-y-3"><li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" /><span className="text-sm leading-relaxed text-muted-foreground">Site assessment and planning</span></li><li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" /><span className="text-sm leading-relaxed text-muted-foreground">Material and scope confirmation</span></li><li className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" /><span className="text-sm leading-relaxed text-muted-foreground">Final walkthrough and quality check</span></li></ul></Reveal>
        </div>
      </Container>
    </Section>
  );
}