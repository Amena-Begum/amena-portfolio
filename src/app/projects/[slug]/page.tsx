import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiCheck, FiGithub } from "react-icons/fi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: `${p.title} — Amena Begum`, description: p.summary, openGraph: { images: [p.image] } };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Header />
      <main className="flex-1 pt-28 pb-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Link href="/#projects" className="fade-up inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink">
            <FiArrowLeft /> All projects
          </Link>

          <p className="fade-up mt-8 font-mono text-xs tracking-widest text-terra uppercase" style={{ animationDelay: "0.05s" }}>
            {p.date} · {p.tagline}
          </p>
          <h1 className="mt-3 font-serif text-6xl leading-[0.95] tracking-tight sm:text-8xl">
            <span className="mask">
              <span className="rise italic" style={{ animationDelay: "0.1s" }}>
                {p.title}
              </span>
            </span>
          </h1>

          <div className="fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.3s" }}>
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-terra px-6 py-3.5 text-sm font-semibold text-paper hover:bg-terra-dark"
            >
              Live project <FiArrowUpRight />
            </a>
            <a
              href={p.code}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-6 py-3.5 text-sm font-semibold hover:border-ink"
            >
              <FiGithub /> GitHub repository (client)
            </a>
          </div>

          <div className="fade-up relative mt-12 aspect-[1200/630] overflow-hidden rounded-[32px] border border-line bg-sand shadow-2xl shadow-ink/10" style={{ animationDelay: "0.4s" }}>
            <Image src={p.image} alt={`${p.title} screenshot`} fill priority sizes="(min-width: 1024px) 960px, 100vw" className="object-cover object-top" />
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
            <div className="space-y-14">
              <section className="reveal">
                <h2 className="font-serif text-3xl">Overview</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">{p.description}</p>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-teal text-paper">
                        <FiCheck size={12} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="reveal">
                <h2 className="font-serif text-3xl">
                  Challenges <span className="italic text-terra">I faced</span>
                </h2>
                <ol className="mt-6 space-y-4">
                  {p.challenges.map((c, i) => (
                    <li key={c} className="flex gap-5 rounded-[24px] border border-line bg-paper p-5">
                      <span className="font-serif text-3xl text-terra italic">{i + 1}</span>
                      <span className="leading-relaxed text-muted">{c}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="reveal">
                <h2 className="font-serif text-3xl">
                  Improvements & <span className="italic text-terra">future plans</span>
                </h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {p.future.map((f) => (
                    <li key={f} className="rounded-[24px] bg-sand/70 p-5">
                      {f}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="h-fit rounded-[28px] bg-ink p-6 text-paper lg:sticky lg:top-24">
              <h2 className="font-mono text-xs tracking-widest text-paper/50 uppercase">Main tech stack</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li key={s} className="rounded-full border border-paper/15 px-3 py-1.5 text-sm">
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-6 space-y-3 border-t border-paper/10 pt-6 text-sm">
                <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-2 hover:text-terra">
                  <span className="truncate">{p.live.replace(/^https:\/\//, "")}</span>
                  <FiArrowUpRight className="shrink-0" />
                </a>
                <a href={p.code} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-2 hover:text-terra">
                  <span className="truncate">{p.code.replace(/^https:\/\//, "")}</span>
                  <FiGithub className="shrink-0" />
                </a>
              </div>
            </aside>
          </div>

          <Link
            href={`/projects/${next.slug}`}
            className="group mt-20 flex items-center justify-between gap-4 rounded-[32px] bg-sand p-8 transition-colors hover:bg-terra hover:text-paper"
          >
            <span>
              <span className="block font-mono text-xs tracking-widest uppercase opacity-70">Next project</span>
              <span className="mt-1 block font-serif text-4xl italic sm:text-5xl">{next.title}</span>
            </span>
            <FiArrowRight className="size-8 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
