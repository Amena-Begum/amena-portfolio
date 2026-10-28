"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiDownload, FiExternalLink, FiEye, FiX } from "react-icons/fi";
import { me } from "@/data/site";

// "View Resume" button that opens the resume in a popup. Portalled to <body>; mounted on first click.
export default function ResumeViewer({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [used, setUsed] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setUsed(true);
          setOpen(true);
        }}
        className={className}
      >
        <FiEye /> View Resume
      </button>

      {used &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                className="fixed inset-0 z-[100] flex flex-col bg-ink/70 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                role="dialog"
                aria-modal="true"
                aria-label="Resume"
              >
                <div className="flex items-center justify-between gap-3 bg-paper px-4 py-3 sm:px-6" onClick={(e) => e.stopPropagation()}>
                  <p className="font-serif text-lg italic">Resume — {me.name}</p>
                  <div className="flex items-center gap-2">
                    <a
                      href={me.resume}
                      download
                      className="inline-flex items-center gap-2 rounded-full bg-terra px-4 py-2 text-sm font-semibold text-paper"
                    >
                      <FiDownload /> <span className="hidden sm:inline">Download</span> PDF
                    </a>
                    <a
                      href={me.resume}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open PDF in a new tab"
                      className="grid size-9 place-items-center rounded-full border border-line"
                    >
                      <FiExternalLink />
                    </a>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      aria-label="Close resume"
                      className="grid size-9 place-items-center rounded-full border border-line"
                    >
                      <FiX />
                    </button>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:py-10">
                  <motion.div
                    className="relative mx-auto aspect-[794/1123] w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-2xl"
                    initial={{ y: 60, rotate: -2, opacity: 0 }}
                    animate={{ y: 0, rotate: 0, opacity: 1 }}
                    exit={{ y: 60, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 24 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image src="/resume-preview.jpg" alt={`Resume of ${me.name}`} fill sizes="(min-width: 768px) 768px, 100vw" className="object-contain" />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
