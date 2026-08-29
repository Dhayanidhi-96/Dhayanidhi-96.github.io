"use client";

import { techStack } from "@/data/techStack";
import { Section } from "@/components/layout/Section";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export function TechStack() {
  return (
    <Section id="stack" label="Technical Stack" connector>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {techStack.map((category, i) => (
          <AnimateOnScroll key={category.name} delay={i * 0.06}>
            <div>
              <h3 className="text-sm font-semibold text-text-primary mb-1">
                {category.name}
              </h3>
              <div className="h-px w-8 bg-accent/40 mb-4" />
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-150"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </Section>
  );
}
