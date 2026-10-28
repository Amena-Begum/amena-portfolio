"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { me, nav } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
          scrolled ? "bg-cream/85 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md" : ""
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="font-serif text-2xl italic">
            Amena<span className="text-terra">.</span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group relative px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-ink"
                >
                  {l.label}
                  <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-terra transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/#contact"
              className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-terra sm:inline-block"
            >
              Let&apos;s talk
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid size-10 place-items-center rounded-full border border-line bg-paper lg:hidden"
              aria-label="Open menu"
            >
              <FiMenu />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu: a paper sheet slides in from the right, links follow one by one. */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-ink/30 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-[70] flex w-[86%] max-w-sm flex-col bg-paper p-6 shadow-2xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl italic">
                  Amena<span className="text-terra">.</span>
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid size-10 place-items-center rounded-full border border-line"
                  aria-label="Close menu"
                >
                  <FiX />
                </button>
              </div>
              <ul className="mt-10 space-y-1">
                {nav.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between border-b border-line py-3 font-serif text-3xl"
                    >
                      {l.label}
                      <span className="font-mono text-xs text-muted">0{i + 1}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <a href={`mailto:${me.email}`} className="mt-auto flex items-center justify-between rounded-2xl bg-terra p-4 text-paper">
                <span className="text-sm font-semibold">{me.email}</span>
                <FiArrowUpRight />
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
