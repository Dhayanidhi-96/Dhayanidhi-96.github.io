import { cn } from "@/lib/utils";

interface TechTagProps {
  label: string;
  className?: string;
}

export function TechTag({ label, className }: TechTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono",
        "bg-surface text-text-secondary border border-border-subtle",
        "transition-colors duration-200",
        className
      )}
    >
      {label}
    </span>
  );
}
