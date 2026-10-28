"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { projects, type Project } from "@/data/site";
import SectionTitle from "./SectionTitle";

function Card({ p, i }: { p: Project; i: number }) {
  return (
    <article className="group flex w-[86vw] max-w-[560px] shrink-0 flex-col overflow-hidden rounded-[32px] border border-line bg-paper shadow-xl shadow-ink/5 sm:w-[520px]">
      <Link href={`/projects/${p.slug}`} className="relative m-3 block aspect-[1200/630] overflow-hidden rounded-[24px] bg-sand">
        <Image
          src={p.image}
          alt={`${p.title} screenshot`}
          fill
          sizes="(min-width: 640px) 520px, 86vw"
          className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-full bg-paper/90 px-3 py-1 font-mono text-[11px] backdrop-blur">
          {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
      </Link>
      <div className="flex flex-1 flex-col px-6 pt-2 pb-6">
        <p className="font-mono text-xs tracking-wider text-terra uppercase">
          {p.date} · {p.tagline}
        </p>
        <h3 className="mt-2 font-serif text-3xl">{p.title}</h3>
        <p className="mt-2 leading-relaxed text-muted">{p.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {p.stack.slice(0, 4).map((s) => (
            <li key={s} className="rounded-full bg-cream px-3 py-1 text-xs">
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-center gap-3 pt-6">
          <Link
            href={`/projects/${p.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-terra"
          >
            View Details <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold underline decoration-terra decoration-2 underline-offset-4"
          >
            Live site <FiArrowUpRight />
          </a>
        </div>
      </div>
    </article>
  );
}

// Desktop: the section pins and the cards slide sideways as you scroll down.
// Phones and tablets: a normal swipeable row, so nothing is hidden behind scroll tricks.
export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0.05, 0.95], [0, -distance]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      const wide = window.matchMedia("(min-width: 1024px)").matches;
      setDistance(wide ? Math.max(0, track.scrollWidth - window.innerWidth + 64) : 0);
    };
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative bg-sand/60" style={{ height: distance ? `calc(100vh + ${distance}px)` : undefined }}>
      <div className={distance ? "sticky top-0 flex h-screen flex-col justify-center overflow-hidden" : "py-24 sm:py-32"}>
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <SectionTitle index="05" kicker="Projects" title="Things I've" accent="built & shipped" />
        </div>
        <div className={distance ? "" : "overflow-x-auto pb-6 [scrollbar-width:none]"}>
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex w-max gap-6 px-5 sm:px-8 lg:pl-[max(2rem,calc((100vw-72rem)/2+2rem))]"
          >
            {projects.map((p, i) => (
              <Card key={p.slug} p={p} i={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
