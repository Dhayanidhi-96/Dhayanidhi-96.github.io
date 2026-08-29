"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import type { TechDecision as TechDecisionType } from "@/data/projects";

interface TechDecisionProps {
  decisions: TechDecisionType[];
}

export function TechDecisions({ decisions }: TechDecisionProps) {
  return (
    <div className="space-y-4">
      {decisions.map((decision, i) => (
        <AnimateOnScroll key={decision.question} delay={i * 0.08}>
          <div className="rounded-xl border border-border-subtle bg-surface/30 p-6">
            <h4 className="text-sm font-semibold text-text-primary mb-2">
              {decision.question}
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              → {decision.answer}
            </p>
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  );
}
