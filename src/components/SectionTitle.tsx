type Props = {
  index: string;
  kicker: string;
  title: string;
  accent: string;
};

// Serif section heading with an italic accent word and a hand-drawn underline that draws on scroll.
export default function SectionTitle({ index, kicker, title, accent }: Props) {
  return (
    <div className="reveal mb-12 sm:mb-16">
      <p className="flex items-center gap-3 font-mono text-xs tracking-widest text-terra uppercase">
        <span>{index}</span>
        <span className="h-px w-8 bg-terra/40" />
        {kicker}
      </p>
      <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl">
        {title}{" "}
        <span className="relative inline-block italic text-terra">
          {accent}
          <svg
            aria-hidden
            className="draw absolute -bottom-2 left-0 h-3 w-full text-terra/60"
            viewBox="0 0 200 12"
            preserveAspectRatio="none"
            fill="none"
          >
            <path d="M2 9 C 50 2, 110 2, 198 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" pathLength="1" />
          </svg>
        </span>
      </h2>
    </div>
  );
}
