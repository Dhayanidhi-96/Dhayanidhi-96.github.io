"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/shared/Icons";
import { TechTag } from "@/components/shared/TechTag";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import type { Project } from "@/data/projects";

const statusConfig = {
  deployed: { label: "Deployed", color: "text-success", dot: "bg-success" },
  production: { label: "Production", color: "text-success", dot: "bg-success" },
  active: { label: "Active", color: "text-warning", dot: "bg-warning" },
  research: { label: "Research", color: "text-warning", dot: "bg-warning" },
};

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const status = statusConfig[project.status];

  return (
    <div className="pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <AnimateOnScroll>
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          {/* Label */}
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted mb-4">
            Case Study
          </p>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-3">
            {project.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-text-secondary mb-6">{project.subtitle}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <TechTag key={tech} label={tech} />
            ))}
          </div>

          {/* Status + links */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${status.dot}`} />
              <span className={`text-sm font-mono ${status.color}`}>
                {status.label}
              </span>
            </div>

            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}

            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
