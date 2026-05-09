import { useState, useEffect } from "react";
import Navbar from "./components/navbar";

const NAV_LINKS = [
  { label: "What I Do", href: "what-i-do" },
  { label: "Selected Work", href: "selected-work" },
  { label: "Experience", href: "experience" },
  { label: "Nice to Meet You", href: "meet-you" },
  { label: "Let's Connect", href: "connect" },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function App() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observers = NAV_LINKS.map(({ href }) => {
      const el = document.getElementById(href);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(href);
        },
        { threshold: 0.4 },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div className="bg-background text-text min-h-screen font-montserrat">
      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 backdrop-blur-md bg-background/30">
        <Navbar
          nav_links={NAV_LINKS}
          activeLink={active}
          onLinkClick={scrollTo}
        />
      </nav>

      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col justify-end px-8 md:px-45 pb-24 pt-32">
        {/* <p className="text-sm tracking-[0.2em] text-primary uppercase mb-4">
          Available for work
        </p> */}
        <h1 className="md:text-8xl font-bold leading-none tracking-tight mb-6">
          Hi, I'm Romand.<br />I build <span className="text-primary">solutions</span> for complex problems
        </h1>
        <p className="text-xl md:text-2xl text-muted max-w-xl">
          Designer & Developer crafting thoughtful digital experiences.
        </p>
      </section>

      {/* ── WHAT I DO ── */}
      <Section id="what-i-do" label="01" title="What I Do">
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {["UI / UX Design", "Frontend Dev", "Branding"].map((s) => (
            <div
              key={s}
              className="border border-text/10 rounded-xl p-8 hover:border-primary/40 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-primary/20 mb-6" />
              <h3 className="text-lg font-semibold mb-2">{s}</h3>
              <p className="text-muted text-sm leading-relaxed">
                A short description of what you do in this area. Keep it punchy
                and honest.
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── SELECTED WORK ── */}
      <Section id="selected-work" label="02" title="Selected Work">
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {[
            "Project Alpha",
            "Project Beta",
            "Project Gamma",
            "Project Delta",
          ].map((p, i) => (
            <div
              key={p}
              className="group relative overflow-hidden rounded-xl bg-text/5 border border-text/10 hover:border-primary/40 transition-all cursor-pointer"
            >
              <div
                className={`w-full h-48 ${i % 2 === 0 ? "bg-primary/10" : "bg-text/5"}`}
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-1">{p}</h3>
                <p className="text-muted text-sm">Design · Development</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── EXPERIENCE ── */}
      <Section id="experience" label="03" title="My Experience">
        <div className="mt-10 space-y-0">
          {[
            {
              role: "Senior Designer",
              company: "Studio ABC",
              years: "2022 – Present",
            },
            {
              role: "UI Developer",
              company: "Agency XYZ",
              years: "2020 – 2022",
            },
            {
              role: "Freelance",
              company: "Various Clients",
              years: "2018 – 2020",
            },
          ].map((exp, i) => (
            <div
              key={i}
              className="flex items-start justify-between py-6 border-b border-text/10 group hover:pl-2 transition-all"
            >
              <div>
                <p className="font-semibold text-lg group-hover:text-primary transition-colors">
                  {exp.role}
                </p>
                <p className="text-muted text-sm mt-0.5">{exp.company}</p>
              </div>
              <span className="text-muted text-sm mt-1 shrink-0">
                {exp.years}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── NICE TO MEET YOU ── */}
      <Section id="meet-you" label="04" title="Nice to Meet You">
        <div className="mt-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              Hey! I'm a designer-developer hybrid based somewhere nice. I care
              deeply about craft, clarity, and making things that actually work
              for people.
            </p>
            <p>
              When I'm not pushing pixels, I'm probably reading, making coffee,
              or going on long walks while listening to podcasts.
            </p>
          </div>
          <div className="w-full aspect-square max-w-xs mx-auto rounded-2xl bg-text/5 border border-text/10 flex items-center justify-center text-muted text-sm">
            Your photo here
          </div>
        </div>
      </Section>

      {/* ── LET'S CONNECT ── */}
      <Section id="connect" label="05" title="Let's Connect">
        <div className="mt-10 flex flex-col items-start gap-6">
          <p className="text-muted max-w-lg leading-relaxed">
            Got a project in mind, want to collaborate, or just say hi? My inbox
            is always open.
          </p>

          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-background font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Say Hello →
          </a>
          <div className="flex gap-6 mt-4">
            {["Twitter", "LinkedIn", "GitHub", "Dribbble"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-sm text-muted hover:text-text transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FOOTER ── */}
      <footer className="px-8 md:px-20 py-8 border-t border-text/10 flex items-center justify-between text-muted text-sm">
        <span>© 2026 YourName</span>
        <span>Designed & built by you</span>
      </footer>
    </div>
  );
}

function Section({ id, label, title, children }) {
  return (
    <section id={id} className="px-8 md:px-20 py-24 border-t border-text/10">
      <div className="flex items-baseline gap-4">
        <span className="text-xs text-primary tracking-widest font-mono">
          {label}
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
