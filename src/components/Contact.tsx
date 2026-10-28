import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { me } from "@/data/site";

const digits = (n: string) => n.replace(/\D/g, "");

const channels = [
  { label: "Email", value: me.email, href: `mailto:${me.email}`, icon: FiMail },
  { label: "Phone", value: me.phone, href: `tel:+${digits(me.phone)}`, icon: FiPhone },
  { label: "WhatsApp", value: me.whatsapp, href: `https://wa.me/${digits(me.whatsapp)}`, icon: FaWhatsapp },
  { label: "LinkedIn", value: "in/amena-begum123", href: me.linkedin, icon: FiLinkedin },
  { label: "GitHub", value: "Amena-Begum", href: me.github, icon: FiGithub },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <p className="reveal flex items-center gap-3 font-mono text-xs tracking-widest text-terra uppercase">
          <span>06</span>
          <span className="h-px w-8 bg-terra/40" />
          Contact
        </p>
        <h2 className="reveal mt-5 font-serif text-5xl leading-[1] tracking-tight sm:text-7xl lg:text-8xl">
          Let&apos;s build
          <br />
          <span className="italic text-terra">something together.</span>
        </h2>
        <p className="reveal mt-6 max-w-lg text-lg text-paper/70">
          I&apos;m open to internships, junior frontend or full-stack roles and freelance projects. The quickest way to reach
          me is email or WhatsApp.
        </p>

        <ul className="mt-14 divide-y divide-paper/10 border-y border-paper/10">
          {channels.map(({ label, value, href, icon: Icon }) => (
            <li key={label} className="reveal">
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 py-5 transition-[padding] duration-300 hover:px-3 sm:gap-5 sm:py-6"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-full border border-paper/15 transition-colors group-hover:border-terra group-hover:bg-terra">
                  <Icon size={19} />
                </span>
                <span className="hidden w-24 shrink-0 font-mono text-xs tracking-wider text-paper/50 uppercase sm:block">{label}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[10px] tracking-wider text-paper/50 uppercase sm:hidden">{label}</span>
                  <span className="block font-serif text-lg break-all sm:truncate sm:text-3xl sm:break-normal">{value}</span>
                </span>
                <FiArrowUpRight className="size-6 shrink-0 text-paper/40 transition group-hover:rotate-45 group-hover:text-terra" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
