"use client";

import { achievements } from "@/data/achievements";
import { Section } from "@/components/layout/Section";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export function Achievements() {
  return (
    <Section label="Achievements" connector>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((stat, i) => (
          <AnimateOnScroll key={stat.label} delay={i * 0.1}>
            <div className="text-center p-6 rounded-xl border border-border-subtle bg-surface/30">
              <div className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-sm font-medium text-text-secondary mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-text-muted">{stat.description}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </Section>
  );
}
