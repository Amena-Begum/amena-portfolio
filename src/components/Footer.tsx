import Link from "next/link";
import { me, nav } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-paper/10 px-5 py-10 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © 2026 <span className="font-serif text-paper italic">{me.name}</span>. Built with Next.js & Tailwind CSS.
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {nav.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-terra">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
