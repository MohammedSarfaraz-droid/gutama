import { ChevronRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const FAQS = [
  { question: "How long does carpentry typically take?", answer: "Timeline depends on scope, access, and weather. We provide a clear schedule before starting." },
  { question: "Do you provide warranty coverage?", answer: "Yes. Workmanship protection and applicable manufacturer warranties are provided." },
  { question: "Can you inspect existing conditions first?", answer: "Absolutely. We begin with an on-site inspection and share recommendations before work starts." },
] as const;

export function CarpentryFaqSection() {
  return (
    <Section className="bg-background">
      <Container>
        <Reveal className="mb-12 text-center"><h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">Frequently Asked Questions</h2><div className="gold-divider" /></Reveal>
        <div className="mx-auto max-w-3xl space-y-3">
          {FAQS.map((item) => (
            <details key={item.question} className="glass-card group overflow-hidden border border-border/40 px-6 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-foreground marker:content-none"><span>{item.question}</span><ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-90" /></summary>
              <p className="mt-3 border-t border-border/30 pt-3 leading-relaxed text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}