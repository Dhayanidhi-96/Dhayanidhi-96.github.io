"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import type { ProjectResult } from "@/data/projects";

interface ResultsGridProps {
  results: ProjectResult[];
  summary: string;
}

export function ResultsGrid({ results, summary }: ResultsGridProps) {
  if (results.length === 0) {
    return (
      <AnimateOnScroll>
        <p className="text-text-secondary leading-relaxed">{summary}</p>
      </AnimateOnScroll>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {results.map((result, i) => (
          <AnimateOnScroll key={result.label} delay={i * 0.1}>
            <div className="text-center p-5 rounded-xl border border-border-subtle bg-surface/30">
              <div className="text-2xl md:text-3xl font-bold text-text-primary mb-1">
                {result.value}
              </div>
              <p className="text-xs text-text-muted">{result.label}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
      <AnimateOnScroll>
        <p className="text-sm text-text-secondary">{summary}</p>
      </AnimateOnScroll>
    </div>
  );
}
