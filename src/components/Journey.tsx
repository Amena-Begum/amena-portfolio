import type { Entry } from "@/data/site";
import SectionTitle from "./SectionTitle";

type Props = {
  id: string;
  index: string;
  kicker: string;
  title: string;
  accent: string;
  entries: Entry[];
};

// Timeline cards with a big serif year/period on the left; each card wipes in as it scrolls into view.
export default function Journey({ id, index, kicker, title, accent, entries }: Props) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
      <SectionTitle index={index} kicker={kicker} title={title} accent={accent} />
      <ol className="relative space-y-5 border-l-2 border-dashed border-line pl-6 sm:pl-10">
        {entries.map((e) => (
          <li key={e.title} className="wipe relative">
            <span className="absolute top-8 -left-[33px] size-4 rounded-full border-4 border-cream bg-terra sm:-left-[49px]" />
            <div className="grid gap-4 rounded-[28px] border border-line bg-paper p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5 sm:grid-cols-[200px_1fr] sm:p-8">
              <p className="font-mono text-xs tracking-wider text-terra uppercase sm:pt-1.5">{e.period}</p>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl">{e.title}</h3>
                <p className="mt-1 font-semibold text-teal">{e.place}</p>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted">{e.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
