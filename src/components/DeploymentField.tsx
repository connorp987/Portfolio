import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import styles from "./DeploymentField.module.css";

type Node = { x: number; y: number; r: number; glow: number; base: number };
type Pulse = { x: number; y: number; radius: number; speed: number; max: number };

const SIGNAL: [number, number, number] = [255, 176, 0];
const IDLE: [number, number, number] = [88, 103, 122];

/**
 * The signature element: a field of ~1,700 nodes standing in for the store
 * footprint. Amber "deployment" pulses sweep outward, lighting nodes as they
 * pass — a rollout rippling across the fleet. Static for reduced-motion users.
 */
export function DeploymentField() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let cols = 0;
    let rows = 0;

    const build = () => {
      const rect = wrap.getBoundingClientRect();
      w = Math.max(1, rect.width);
      h = Math.max(1, rect.height);
      dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Spacing tuned so a desktop hero lands near ~1,700 nodes.
      const spacing = w < 640 ? 26 : 22;
      cols = Math.max(6, Math.floor(w / spacing));
      rows = Math.max(6, Math.floor(h / spacing));
      const gapX = w / cols;
      const gapY = h / rows;

      nodes = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const jx = (Math.random() - 0.5) * gapX * 0.45;
          const jy = (Math.random() - 0.5) * gapY * 0.45;
          nodes.push({
            x: c * gapX + gapX / 2 + jx,
            y: r * gapY + gapY / 2 + jy,
            r: Math.random() < 0.06 ? 1.6 : 1.1,
            glow: 0,
            base: 0.22 + Math.random() * 0.26,
          });
        }
      }
    };

    const spawnPulse = () => {
      // Origin biased toward the lower-left, so rollouts read as sweeping up.
      const ox = w * (0.05 + Math.random() * 0.5);
      const oy = h * (0.55 + Math.random() * 0.4);
      pulses.push({
        x: ox,
        y: oy,
        radius: 0,
        speed: 0.9 + Math.random() * 0.5,
        max: Math.hypot(w, h) * 0.9,
      });
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, w, h);
      const cx = w * 0.32;
      const cy = h * 0.6;
      const maxd = Math.hypot(w, h) * 0.5;
      for (const n of nodes) {
        const d = Math.hypot(n.x - cx, n.y - cy);
        const k = Math.max(0, 1 - d / maxd);
        const lit = Math.pow(k, 1.6) * 0.9;
        paint(n, lit);
      }
    };

    const paint = (n: Node, lit: number) => {
      const t = Math.min(1, lit);
      const cr = Math.round(IDLE[0] + (SIGNAL[0] - IDLE[0]) * t);
      const cg = Math.round(IDLE[1] + (SIGNAL[1] - IDLE[1]) * t);
      const cb = Math.round(IDLE[2] + (SIGNAL[2] - IDLE[2]) * t);
      const alpha = n.base + t * 0.75;
      if (t > 0.25) {
        ctx.shadowColor = `rgba(${SIGNAL[0]},${SIGNAL[1]},${SIGNAL[2]},${t * 0.7})`;
        ctx.shadowBlur = 8 * t;
      } else {
        ctx.shadowBlur = 0;
      }
      ctx.beginPath();
      ctx.fillStyle = `rgba(${cr},${cg},${cb},${alpha})`;
      ctx.arc(n.x, n.y, n.r + t * 1.1, 0, Math.PI * 2);
      ctx.fill();
    };

    let last = performance.now();
    let sinceSpawn = 0;
    const tick = (now: number) => {
      const dt = Math.min(48, now - last);
      last = now;
      sinceSpawn += dt;
      if (sinceSpawn > 1100 && pulses.length < 3) {
        spawnPulse();
        sinceSpawn = 0;
      }

      ctx.clearRect(0, 0, w, h);

      // advance pulses
      for (const p of pulses) p.radius += p.speed * (dt / 16.6) * 6;
      pulses = pulses.filter((p) => p.radius < p.max);

      const band = 26;
      for (const n of nodes) {
        let hit = 0;
        for (const p of pulses) {
          const d = Math.abs(Math.hypot(n.x - p.x, n.y - p.y) - p.radius);
          if (d < band) {
            const edge = 1 - d / band;
            const fade = 1 - p.radius / p.max;
            hit = Math.max(hit, edge * fade);
          }
        }
        if (hit > n.glow) n.glow = hit;
        n.glow *= 0.94; // trailing decay
        paint(n, n.glow);
      }
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(tick);
    };

    build();
    if (reduced) {
      drawStatic();
    } else {
      spawnPulse();
      raf = requestAnimationFrame(tick);
    }

    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(raf);
      build();
      if (reduced) {
        drawStatic();
      } else {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    });
    ro.observe(wrap);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [reduced]);

  return (
    <div className={styles.wrap} ref={wrapRef} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.scan} />
    </div>
  );
}
