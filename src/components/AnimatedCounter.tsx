import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export function AnimatedCounter({ target, duration = 1500, prefix = "", suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const startValue = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);
      
      // Ease-out calculation
      const easeOutQuad = (t: number) => t * (2 - t);
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuad(progressPercentage));
      
      setCount(currentValue);

      if (progressPercentage < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  const formattedCount = count.toLocaleString();

  return (
    <span>
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  );
}
