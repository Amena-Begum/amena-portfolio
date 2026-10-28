import { learning, skills } from "@/data/site";
import SectionTitle from "./SectionTitle";

// Skills as keyboard keys: each key sits on a darker base and presses down when hovered or tapped.
export default function Skills() {
  return (
    <section id="skills" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle index="02" kicker="Skills" title="My toolbox, one" accent="key at a time" />

        <div className="grid gap-x-12 gap-y-14 lg:grid-cols-2">
          {skills.map((group) => (
            <div key={group.title} className="reveal">
              <div className="flex items-baseline justify-between border-b border-line pb-3">
                <h3 className="font-serif text-2xl">{group.title}</h3>
                <span className="text-sm text-muted">{group.note}</span>
              </div>
              <ul className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4">
                {group.items.map(({ name, icon: Icon, color }) => (
                  <li key={name} className="rounded-2xl bg-line pb-1.5">
                    <div
                      tabIndex={0}
                      className="flex h-full -translate-y-0 flex-col items-center gap-2 rounded-2xl border border-line bg-cream px-2 pt-4 pb-3 text-center transition-transform duration-150 hover:translate-y-1 focus-visible:translate-y-1 active:translate-y-1.5"
                    >
                      <Icon size={26} style={{ color }} />
                      <span className="text-xs leading-tight font-medium">{name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="reveal mt-16 flex flex-col gap-4 rounded-[28px] border border-dashed border-teal/40 bg-teal/5 p-6 sm:flex-row sm:items-center">
          <p className="shrink-0 font-serif text-xl text-teal italic">Currently learning →</p>
          <ul className="flex flex-wrap gap-2">
            {learning.map((l) => (
              <li key={l} className="rounded-full border border-teal/25 bg-paper px-3.5 py-1.5 text-sm">
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
