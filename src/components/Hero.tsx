import Image from "next/image";
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { me, stats } from "@/data/site";
import ResumeViewer from "./ResumeViewer";
import TypeCode from "./TypeCode";

const socials = [
  { href: me.github, label: "GitHub", icon: FiGithub },
  { href: me.linkedin, label: "LinkedIn", icon: FiLinkedin },
  { href: `https://wa.me/${me.whatsapp.replace(/\D/g, "")}`, label: "WhatsApp", icon: FaWhatsapp },
  { href: me.codeforces, label: "Codeforces", icon: SiCodeforces },
  { href: `mailto:${me.email}`, label: "Email", icon: FiMail },
];

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pt-28 pb-20 sm:px-8 lg:min-h-[100svh] lg:grid-cols-[1.15fr_1fr] lg:pt-24">
      <div>
        <p className="fade-up inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1.5 text-xs font-medium">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-teal" />
          </span>
          Open to internships & junior roles
        </p>

        <h1 className="mt-7 font-serif text-[3.4rem] leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.6rem]">
          <span className="mask">
            <span className="rise" style={{ animationDelay: "0.05s" }}>
              Hi, I&apos;m
            </span>
          </span>
          <span className="mask">
            <span className="rise italic text-terra" style={{ animationDelay: "0.15s" }}>
              Amena Begum
            </span>
          </span>
        </h1>

        <p className="fade-up mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-lg font-semibold sm:text-xl" style={{ animationDelay: "0.35s" }}>
          {me.role}
          <span className="inline-flex items-center gap-1 text-sm font-medium text-muted">
            <FiMapPin /> {me.location}
          </span>
        </p>
        <p className="fade-up mt-3 max-w-lg text-[17px] leading-relaxed text-muted" style={{ animationDelay: "0.45s" }}>
          {me.intro}
        </p>

        <div className="fade-up mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: "0.55s" }}>
          <ResumeViewer className="inline-flex items-center gap-2 rounded-full bg-terra px-6 py-3.5 text-sm font-semibold text-paper shadow-lg shadow-terra/25 transition hover:-translate-y-0.5 hover:bg-terra-dark" />
          <a
            href={me.resume}
            download
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-ink"
          >
            <FiDownload /> Download Resume
          </a>
        </div>

        <ul className="fade-up mt-8 flex items-center gap-2" style={{ animationDelay: "0.65s" }}>
          {socials.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="grid size-11 place-items-center rounded-full border border-line bg-paper text-muted transition hover:-translate-y-1 hover:border-terra hover:bg-terra hover:text-paper"
              >
                <Icon size={17} />
              </a>
            </li>
          ))}
        </ul>

        <dl className="fade-up mt-12 grid max-w-md grid-cols-3 divide-x divide-line border-y border-line" style={{ animationDelay: "0.75s" }}>
          {stats.map((s) => (
            <div key={s.label} className="py-4 pl-4 first:pl-0">
              <dd className="font-serif text-4xl">{s.value}</dd>
              <dt className="mt-1 text-xs text-muted">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>

      {/* Arch portrait with a rotating badge and the typing code card */}
      <div className="relative mx-auto w-full max-w-[400px] pb-16 lg:pb-0">
        <div className="absolute -inset-6 -z-10 rounded-full bg-[radial-gradient(circle_at_50%_40%,var(--color-sand),transparent_65%)]" />
        <div className="arch arch-open relative aspect-[3/4] overflow-hidden bg-sand">
          <Image
            src={me.photo}
            alt={`Photo of ${me.name}`}
            fill
            priority
            sizes="(min-width: 1024px) 400px, 90vw"
            className="zoom-out object-cover object-[50%_25%]"
          />
        </div>

        <svg className="spin-slow absolute -top-6 -right-4 size-28 text-ink sm:-right-8" viewBox="0 0 100 100" aria-hidden>
          <defs>
            <path id="circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
          </defs>
          <circle cx="50" cy="50" r="49" className="fill-paper" />
          <text className="fill-current font-mono text-[9.5px] tracking-[0.2em] uppercase">
            <textPath href="#circle">React · Next.js · TypeScript · MongoDB ·</textPath>
          </text>
          <circle cx="50" cy="50" r="9" className="fill-terra" />
        </svg>

        <div className="float absolute -bottom-2 -left-4 sm:-left-14 lg:-bottom-10">
          <TypeCode />
        </div>
      </div>
    </section>
  );
}
