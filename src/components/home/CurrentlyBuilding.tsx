"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { TechTag } from "@/components/shared/TechTag";
import { Section } from "@/components/layout/Section";

const currentWork = {
  title: "Tamil LLM Adaptation",
  status: "Active Research",
  description:
    "Fine-tuning Gemma 4 for Tamil regional language support — a language spoken by 80M+ people but severely under-resourced in LLM training data. Exploring LoRA/QLoRA adaptation strategies for low-resource Indic language domains.",
  technologies: ["LoRA", "QLoRA", "HuggingFace", "PEFT", "TRL", "Gemma 4"],
  company: "Vite Tech",
};

export function CurrentlyBuilding() {
  return (
    <Section label="Currently Building" connector>
      <AnimateOnScroll>
        <div className="relative max-w-3xl">
          <div className="rounded-xl border border-border-subtle bg-surface/50 p-6 md:p-8">
            {/* Status badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-warning" />
              </span>
              <span className="text-xs font-mono text-warning uppercase tracking-wider">
                {currentWork.status}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-text-primary mb-2">
              {currentWork.title}
            </h3>

            {/* Description */}
            <p className="text-text-secondary leading-relaxed mb-6">
              {currentWork.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {currentWork.technologies.map((tech) => (
                <TechTag key={tech} label={tech} />
              ))}
            </div>

            {/* Company */}
            <p className="mt-4 text-xs text-text-muted font-mono">
              at {currentWork.company}
            </p>
          </div>

          {/* Subtle left accent */}
          <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-warning/60 via-warning/20 to-transparent rounded-full" />
        </div>
      </AnimateOnScroll>
    </Section>
  );
}
