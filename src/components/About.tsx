import { FiFeather, FiMap } from "react-icons/fi";
import { about } from "@/data/site";
import SectionTitle from "./SectionTitle";

const hobbyIcons = [FiFeather, FiMap];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionTitle index="01" kicker="About me" title="A problem-solver who" accent="builds for the web" />

      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div className="reveal">
          <h3 className="font-mono text-xs tracking-widest text-muted uppercase">My programming journey</h3>
          <div className="mt-5 space-y-5 text-lg leading-relaxed">
            {about.journey.map((p, i) => (
              <p key={i} className={i === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-terra" : ""}>
                {p}
              </p>
            ))}
          </div>
        </div>
        <div className="reveal">
          <h3 className="font-mono text-xs tracking-widest text-muted uppercase">Work I enjoy</h3>
          <div className="mt-5 space-y-5 text-lg leading-relaxed">
            {about.work.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      <h3 className="reveal mt-20 font-mono text-xs tracking-widest text-muted uppercase">Outside of code</h3>
      <ul className="mt-5 grid gap-5 sm:grid-cols-2">
        {about.hobbies.map((h, i) => {
          const Icon = hobbyIcons[i % hobbyIcons.length];
          return (
            <li
              key={h.name}
              className={`reveal group relative overflow-hidden rounded-[28px] p-8 ${i % 2 ? "bg-teal text-paper" : "bg-sand"}`}
            >
              <Icon className="absolute -right-6 -bottom-6 size-40 opacity-10 transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-110" />
              <span className={`grid size-12 place-items-center rounded-full ${i % 2 ? "bg-paper/15" : "bg-paper"}`}>
                <Icon size={20} />
              </span>
              <h4 className="mt-6 font-serif text-3xl italic">{h.name}</h4>
              <p className={`mt-3 max-w-sm leading-relaxed ${i % 2 ? "text-paper/80" : "text-muted"}`}>{h.text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
