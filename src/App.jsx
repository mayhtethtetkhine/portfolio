import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import SelectedWorkSection from "./components/SelectedWorkSection";
import ExperienceSection from "./components/ExperienceSection";
import AboutSection from "./components/AboutSection";
import ConnectSection from "./components/ConnectSection";
import data from "./data.json";

const NAV_LINKS = [
  { label: "Skills",      href: "what-i-do"      },
  { label: "Projects",  href: "selected-work"  },
  { label: "Experience",  href: "experience"     },
  { label: "About me", href: "meet-you"     },
  { label: "Contact",  href: "connect"        },
];

function smoothScrollTo(id) {
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
        ([entry]) => { if (entry.isIntersecting) setActive(href); },
        // rootMargin: push the trigger point 20% down from the top so tall
        // sections (like Selected Work) register correctly
        { threshold: 0, rootMargin: "-20% 0px -60% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div className="bg-background text-text min-h-screen font-archivo">

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 backdrop-blur-md bg-background/60 border-b border-text/5 shadow-[0_12px_40px_rgba(166,140,255,0.13)]">
        <Navbar
          nav_links={NAV_LINKS}
          activeLink={active}
          onLinkClick={smoothScrollTo}
        />
      </nav>

      {/* ── SECTIONS ── */}
      <HeroSection        data={data.hero}       />
      <SkillsSection      data={data.skills} tinytitle = {NAV_LINKS[0].label}    />
      <SelectedWorkSection data={data.work}  tinytitle = {NAV_LINKS[1].label }   />
      <ExperienceSection  data={data.experience} tinytitle = {NAV_LINKS[2].label} />
      <AboutSection       data={data.about} tinytitle = {NAV_LINKS[3].label }  />
      <ConnectSection     data={data.connect} email={data.meta.email} tinytitle = {NAV_LINKS[4].label} />

      {/* ── FOOTER ── */}
      <footer className="px-8 md:px-20 py-8 border-t border-text/10 flex items-center justify-between text-muted text-xs font-mono">
        <span>{data.meta.copyright}</span>
        <span>{data.meta.footerNote}</span>
      </footer>

    </div>
  );
}