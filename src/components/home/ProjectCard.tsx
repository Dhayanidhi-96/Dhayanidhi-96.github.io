"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const statusConfig = {
  deployed: { label: "Deployed", color: "text-success", dot: "bg-success" },
  production: { label: "Production", color: "text-success", dot: "bg-success" },
  active: { label: "Active", color: "text-warning", dot: "bg-warning" },
  research: { label: "Research", color: "text-warning", dot: "bg-warning" },
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const status = statusConfig[project.status];

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div
        className={cn(
          "relative h-full rounded-xl border border-border-subtle bg-surface/30 p-6 md:p-8",
          "transition-all duration-300 ease-out",
          "hover:border-border hover:bg-surface/60 hover:-translate-y-0.5",
          "hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]",
          "dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
        )}
      >
        {/* Left accent line */}
        <div className="absolute left-0 top-6 bottom-6 w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Status */}
        <div className="flex items-center gap-2 mb-4">
          <span className={cn("w-1.5 h-1.5 rounded-full", status.dot)} />
          <span className={cn("text-xs font-mono uppercase tracking-wider", status.color)}>
            {status.label}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] font-mono rounded bg-surface-elevated/60 text-text-muted border border-border-subtle"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-0.5 text-[10px] font-mono text-text-muted">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-1 text-sm text-accent font-medium">
          <span>View Case Study</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
