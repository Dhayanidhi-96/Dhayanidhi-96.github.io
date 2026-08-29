"use client";

import { experiences } from "@/data/experience";
import { Section } from "@/components/layout/Section";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export function Experience() {
  return (
    <Section id="experience" label="Engineering Experience" connector>
      <div className="relative max-w-3xl">
        {/* Vertical timeline line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-border via-border to-transparent" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <AnimateOnScroll key={exp.company} delay={i * 0.12}>
              <div className="relative pl-8">
                {/* Timeline node */}
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-border bg-background flex items-center justify-center">
                  <div className="w-[5px] h-[5px] rounded-full bg-accent" />
                </div>

                {/* Content */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 mb-1">
                    <h3 className="text-lg font-semibold text-text-primary">
                      {exp.company}
                    </h3>
                    <span className="text-xs font-mono text-text-muted">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-accent font-medium mb-3">
                    {exp.role}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed mb-3">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-surface text-text-muted border border-border-subtle"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </Section>
  );
}
