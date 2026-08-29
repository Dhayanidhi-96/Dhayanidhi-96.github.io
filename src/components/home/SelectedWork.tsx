"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Section } from "@/components/layout/Section";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export function SelectedWork() {
  return (
    <Section
      id="work"
      label="Selected Work"
      title="Shipped Systems"
      subtitle="Production AI applications engineered and deployed end-to-end."
      connector
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {projects.map((project, i) => (
          <AnimateOnScroll key={project.slug} delay={i * 0.1} className="h-full">
            <ProjectCard project={project} index={i} />
          </AnimateOnScroll>
        ))}
      </div>
    </Section>
  );
}
