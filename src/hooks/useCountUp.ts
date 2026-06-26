import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/**
 * Counts from 0 to `to` once the element enters view. Returns a ref to attach
 * and the current display number. Reduced-motion users get the final value
 * immediately.
 */
export function useCountUp<T extends HTMLElement = HTMLElement>(
  to: number,
  durationMs = 1400
) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<T | null>(null);
  const [value, setValue] = useState(reduced ? to : 0);
  const started = useRef(false);

  useEffect(() => {
    if (reduced) {
      setValue(to);
      return;
    }
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setValue(to);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / durationMs);
            // easeOutExpo for a confident settle
            const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
            setValue(to * eased);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, durationMs, reduced]);

  return { ref, value };
}
