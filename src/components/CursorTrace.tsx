import React, { useEffect, useRef } from "react";

const TOKENS = ["SQL", "API", "UI", "AI", "Flow", "DB", "Logic", "Build"];

export function CursorTrace() {
  const lastDot = useRef(0);
  const lastToken = useRef(0);
  const index = useRef(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (reduceMotion || isTouch) return;

    const spawn = (x: number, y: number, type: "dot" | "token") => {
      const el = document.createElement("span");
      el.className = type === "dot" ? "cursor-trace-dot" : "cursor-trace-token";
      if (type === "token") {
        el.textContent = TOKENS[index.current % TOKENS.length];
        index.current += 1;
        el.style.setProperty("--drift-x", `${(Math.random() * 18 - 9).toFixed(1)}px`);
      }
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      document.body.appendChild(el);
      window.setTimeout(() => el.remove(), type === "dot" ? 650 : 1100);
    };

    const handleMove = (event: MouseEvent) => {
      const now = performance.now();
      if (now - lastDot.current > 34) {
        lastDot.current = now;
        spawn(event.clientX, event.clientY, "dot");
      }
      if (now - lastToken.current > 150) {
        lastToken.current = now;
        spawn(event.clientX + 10, event.clientY - 10, "token");
      }
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return null;
}
