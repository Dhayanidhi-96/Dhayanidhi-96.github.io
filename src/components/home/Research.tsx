"use client";

import { Section } from "@/components/layout/Section";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { TechTag } from "@/components/shared/TechTag";

const researchAreas = [
  "LoRA / QLoRA adaptation strategies",
  "Low-resource language instruction tuning",
  "Dataset curation and quality filtering",
  "Tokenizer analysis for Tamil script",
  "Evaluation metrics for multilingual LLMs",
];

const technologies = ["LoRA", "QLoRA", "HuggingFace PEFT", "TRL", "Gemma 4"];

export function Research() {
  return (
    <Section id="research" label="Research" connector>
      <AnimateOnScroll>
        <div className="max-w-3xl">
          <h3 className="text-2xl font-semibold text-text-primary mb-4">
            Tamil LLM Adaptation
          </h3>

          <p className="text-text-secondary leading-relaxed mb-6">
            Researching fine-tuning strategies for Gemma 4 to support Tamil — a
            language spoken by 80M+ people but severely under-resourced in LLM
            training data.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-3">
                Research Areas
              </h4>
              <ul className="space-y-2">
                {researchAreas.map((area) => (
                  <li
                    key={area}
                    className="text-sm text-text-secondary flex items-start gap-2"
                  >
                    <span className="text-accent mt-1.5 text-[6px]">●</span>
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <TechTag key={tech} label={tech} />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-warning" />
              </span>
              <span className="text-xs font-mono text-warning">
                Active — at Vite Tech
              </span>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </Section>
  );
}
