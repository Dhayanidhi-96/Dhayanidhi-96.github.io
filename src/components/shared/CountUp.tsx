"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  value: string;
  duration?: number;
}

export function CountUp({ value, duration = 1500 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  // Extract numeric part and prefix/suffix
  const match = value.match(/^([<>]?)(\d[\d,]*)(\+?)(.*)$/);

  useEffect(() => {
    if (!isInView || !match) {
      if (!match) setDisplayValue(value);
      return;
    }

    const prefix = match[1];
    const numStr = match[2].replace(/,/g, "");
    const suffix = match[3] + match[4];
    const target = parseInt(numStr, 10);

    if (isNaN(target)) {
      setDisplayValue(value);
      return;
    }

    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = progress >= 1 ? target : Math.floor(eased * target);

      const formatted = current.toLocaleString("en-US");
      setDisplayValue(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration, match]);

  return <span ref={ref}>{displayValue}</span>;
}
