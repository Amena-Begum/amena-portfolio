"use client";

import { useEffect, useRef } from "react";

const CODE = `const amena = {
  role: "Full-Stack Developer",
  stack: ["React", "Next.js", "TS"],
  loves: "solving problems",
  status: "open to work ✓",
};`;

// Code card that types itself out once, like an editor. Writes straight to the DOM (no re-renders);
// the full code is rendered on the server so it's readable even before JavaScript loads.
export default function TypeCode() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0;
    el.textContent = "";
    const id = setInterval(() => {
      i += 2;
      el.textContent = CODE.slice(0, i);
      if (i >= CODE.length) clearInterval(id);
    }, 28);
    return () => {
      clearInterval(id);
      el.textContent = CODE;
    };
  }, []);

  return (
    <div className="w-72 overflow-hidden rounded-2xl border border-ink/10 bg-ink text-[12px] text-sand shadow-2xl shadow-ink/30 sm:w-80">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[11px] text-white/40">amena.ts</span>
      </div>
      <pre className="min-h-[136px] px-4 py-3 font-mono leading-relaxed whitespace-pre-wrap">
        <code ref={ref}>{CODE}</code>
        <span className="caret ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 bg-terra" />
      </pre>
    </div>
  );
}
