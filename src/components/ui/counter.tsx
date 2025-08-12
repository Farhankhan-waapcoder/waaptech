import React, { useEffect, useMemo, useRef, useState } from "react";

type CounterProps = {
  value: number;
  durationMs?: number;
  suffix?: string;
  prefix?: string;
  easing?: (t: number) => number;
  className?: string;
};

const defaultEasing = (t: number) => 1 - Math.pow(1 - t, 3); // easeOutCubic

const formatNumber = (n: number) => new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(n);

const Counter: React.FC<CounterProps> = ({
  value,
  durationMs = 1200,
  suffix = "",
  prefix = "",
  easing = defaultEasing,
  className,
}) => {
  const [display, setDisplay] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);
  const target = useMemo(() => Math.max(0, value), [value]);

  useEffect(() => {
    if (!ref.current || hasAnimated) return;
    let cleanup = () => {};

    const node = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          let start: number | null = null;
          let rafId = 0;
          const step = (timestamp: number) => {
            if (start === null) start = timestamp;
            const elapsed = timestamp - start;
            const t = Math.min(1, elapsed / durationMs);
            const eased = easing(t);
            setDisplay(Math.round(eased * target));
            if (t < 1) {
              rafId = requestAnimationFrame(step);
            } else {
              setDisplay(target);
              setHasAnimated(true);
            }
          };
          rafId = requestAnimationFrame(step);
          cleanup = () => cancelAnimationFrame(rafId);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cleanup();
    };
  }, [durationMs, easing, hasAnimated, target]);

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${value}${suffix}`}>
      {prefix}
      {formatNumber(display)}
      {suffix}
    </span>
  );
};

export default Counter;


