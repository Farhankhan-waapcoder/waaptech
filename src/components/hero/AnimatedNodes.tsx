import * as React from 'react';

const random = (min:number, max:number) => Math.random() * (max - min) + min;

const AnimatedNodes: React.FC = () => {
  const nodes = React.useMemo(() => Array.from({ length: 28 }).map((_, i) => ({
    id: i,
    cx: random(0, 100),
    cy: random(0, 100),
    r: random(1.5, 3.5),
    delay: random(0, 3)
  })), []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {nodes.map(n => (
          <circle
            key={n.id}
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            className="fill-primary/40 animate-float-slow motion-reduce:hidden"
            style={{ animationDelay: `${n.delay}s` } as React.CSSProperties}
          />
        ))}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/10 to-background" />
    </div>
  );
};

export default AnimatedNodes;
