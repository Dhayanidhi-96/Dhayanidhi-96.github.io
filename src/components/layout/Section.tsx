import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  label?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  connector?: boolean;
}

export function Section({
  id,
  label,
  title,
  subtitle,
  children,
  className,
  connector = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 md:py-28",
        connector && "section-connector",
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-6">
        {label && (
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted mb-4">
            {label}
          </p>
        )}
        {title && (
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary mb-3">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-lg text-text-secondary max-w-2xl mb-12">
            {subtitle}
          </p>
        )}
        {!title && !subtitle && label && <div className="mb-8" />}
        {children}
      </div>
    </section>
  );
}
