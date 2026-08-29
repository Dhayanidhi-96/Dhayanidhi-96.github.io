"use client";

import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import type { ArchitectureNode, ArchitectureEdge } from "@/data/projects";

interface ArchitectureDiagramProps {
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
}

export function ArchitectureDiagram({ nodes, edges }: ArchitectureDiagramProps) {
  return (
    <AnimateOnScroll>
      <div className="rounded-xl border border-border-subtle bg-surface/30 p-6 md:p-8 overflow-x-auto">
        <div className="flex flex-wrap items-center justify-center gap-3 min-w-[300px]">
          {nodes.map((node, i) => {
            const hasEdgeAfter = edges.some(
              (e) =>
                e.from === node.id &&
                nodes.findIndex((n) => n.id === e.to) === i + 1
            );

            return (
              <div key={node.id} className="flex items-center gap-3">
                {/* Node */}
                <div className="group relative flex flex-col items-center">
                  <div className="px-4 py-3 rounded-lg border border-border bg-background text-center transition-all duration-200 hover:border-accent hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] min-w-[100px]">
                    <p className="text-sm font-medium text-text-primary">
                      {node.label}
                    </p>
                    {node.description && (
                      <p className="text-[10px] font-mono text-text-muted mt-1">
                        {node.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Arrow connector */}
                {hasEdgeAfter && i < nodes.length - 1 && (
                  <div className="flex items-center text-border">
                    <div className="w-6 md:w-10 h-px bg-border" />
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" className="text-border -ml-px">
                      <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </AnimateOnScroll>
  );
}
