"use client";

import { motion } from "framer-motion";

const stages = [
  { label: "Research", delay: 0 },
  { label: "Model", delay: 0.15 },
  { label: "System", delay: 0.3 },
  { label: "Production", delay: 0.45 },
];

export function PipelineDiagram() {
  return (
    <div className="flex items-center justify-center gap-0 py-4" aria-label="Pipeline: Research to Production">
      {stages.map((stage, i) => (
        <div key={stage.label} className="flex items-center">
          {/* Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8 + stage.delay }}
            className="flex flex-col items-center gap-2"
          >
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-accent/80 border-2 border-accent" />
              {i === stages.length - 1 && (
                <motion.div
                  className="absolute inset-0 w-3 h-3 rounded-full bg-accent/40"
                  animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
            </div>
            <span className="text-[10px] md:text-xs font-mono text-text-muted whitespace-nowrap">
              {stage.label}
            </span>
          </motion.div>

          {/* Connector line */}
          {i < stages.length - 1 && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.3, delay: 0.9 + stage.delay }}
              className="w-12 md:w-20 h-px bg-border origin-left mb-5"
            />
          )}
        </div>
      ))}
    </div>
  );
}
