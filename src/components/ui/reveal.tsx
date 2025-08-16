import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay before animation start (ms) once visible */
  delayMs?: number;
  /** Animation duration in milliseconds */
  durationMs?: number;
  /** Initial vertical offset in pixels (positive moves down) */
  offsetY?: number;
};

const Reveal: React.FC<RevealProps> = ({ children, className, delayMs = 0, durationMs = 1400, offsetY = 12 }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let timeoutId: number | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          const run = () => setVisible(true);
          if (delayMs > 0) {
            timeoutId = window.setTimeout(run, delayMs);
          } else {
            run();
          }
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={[
        "transition-all",
        visible ? "opacity-100 translate-y-0" : `opacity-0 translate-y-[${offsetY}px]`,
        className ?? "",
      ].join(" ")}
      style={{
        transitionDuration: `${durationMs}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;


