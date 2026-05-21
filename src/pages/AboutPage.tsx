import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ── Decorative SVG ornaments ── */
const OrnamentLeft = () => (
  <svg width="48" height="48" viewBox="0 0 56 56" fill="none" className="text-zinc-300/60">
    <path d="M4 4h12c0 6.627-5.373 12-12 12V4z" fill="currentColor" />
    <path d="M20 20c0 0 0 8 8 8s8-8 8-8-0-8-8-8-8 8-8 8z" fill="currentColor" />
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <path d="M4 28s6 0 6-8S4 12 4 12v16z" fill="currentColor" />
    <path d="M36 4s0 6-8 6-8-6-8-6h16z" fill="currentColor" />
  </svg>
);
const OrnamentRight = () => (
  <svg width="48" height="48" viewBox="0 0 56 56" fill="none" className="text-zinc-300/60 scale-x-[-1]">
    <path d="M4 4h12c0 6.627-5.373 12-12 12V4z" fill="currentColor" />
    <path d="M20 20c0 0 0 8 8 8s8-8 8-8-0-8-8-8-8 8-8 8z" fill="currentColor" />
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <path d="M4 28s6 0 6-8S4 12 4 12v16z" fill="currentColor" />
    <path d="M36 4s0 6-8 6-8-6-8-6h16z" fill="currentColor" />
  </svg>
);
const CenterMandala = () => (
  <svg width="44" height="44" viewBox="0 0 72 72" fill="none" className="text-zinc-400 animate-[spin_50s_linear_infinite]">
    <path d="M36 2L41.3 15.6L55.7 10.3L50.4 24.7L64.8 30L51.2 36L64.8 42L50.4 47.3L55.7 61.7L41.3 56.4L36 70L30.7 56.4L16.3 61.7L21.6 47.3L7.2 42L20.8 36L7.2 30L21.6 24.7L16.3 10.3L30.7 15.6L36 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="36" cy="36" r="14" stroke="currentColor" strokeWidth="1.5" /><circle cx="36" cy="36" r="4" fill="currentColor" />
  </svg>
);

/* ── Data ── */
const steps = [
  { num: "01", title: "Understand Before We Build", desc: "Deep assessment of your domain, workflows, data, and constraints before a single line of code is written." },
  { num: "02", title: "Architect for Reality", desc: "Systems designed to perform in the real world — scalable architecture, compliance integration, and security from day one." },
  { num: "03", title: "Build With Precision", desc: "Meticulous engineering validated against domain expertise, tested rigorously, and delivered to production standards." },
  { num: "04", title: "Deploy and Own It", desc: "Full deployment lifecycle ownership — integration, testing, go-live, and ongoing optimisation." },
  { num: "05", title: "Improve Continuously", desc: "Ongoing monitoring, model refinement, and system updates to ensure continued value as your organisation evolves." },
];

const expectations = [
  { title: "Direct Access to Experts", desc: "You work with our senior engineers and domain specialists — not account managers or junior consultants." },
  { title: "Radical Transparency", desc: "Clear communication about timelines, challenges, and trade-offs. No surprises. No hidden complexity." },
  { title: "Full Accountability", desc: "We own what we build. If something isn't performing, we fix it — without debate." },
  { title: "Long-Term Partnership", desc: "Our best relationships are long-term partnerships, not one-time projects. We're invested in your success beyond deployment." },
];

export const AboutPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-ar]").forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 40, filter: "blur(6.25px)" }, {
          opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
        });
      });
      ScrollTrigger.refresh();
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={ref} className="relative bg-zinc-50 flex flex-col grow z-[100] overflow-hidden">

      {/* ══════════ HERO ══════════ */}
      <section className="relative pt-36 md:pt-44 pb-10 md:pb-16 overflow-hidden">
        {/* Gradient backdrop */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[875px] md:h-[1025px] z-0">
          <div className="absolute inset-0 bg-[linear-gradient(175deg,rgba(240,246,255,1)_0%,rgba(224,242,254,0.7)_40%,rgba(240,253,250,0.5)_70%,rgba(255,255,255,0)_100%)]" />
          <div className="absolute left-1/2 -translate-x-1/2 top-[-4%] h-[550px] w-[1062.5px] max-w-[130%] rounded-[100%] blur-[100px] opacity-75 bg-[radial-gradient(ellipse_at_center,rgba(251,191,114,0.70)_0%,rgba(253,186,116,0.45)_25%,rgba(251,207,232,0.28)_50%,rgba(255,255,255,0)_70%)]" />
          <div className="absolute left-[-8%] top-[5%] h-[575px] w-[675px] rounded-full blur-[125px] opacity-60 bg-[radial-gradient(circle,rgba(6,182,212,0.42)_0%,rgba(14,165,233,0.28)_38%,rgba(56,189,248,0.12)_65%,rgba(255,255,255,0)_80%)]" />
          <div className="absolute right-[-10%] top-[12%] h-[550px] w-[700px] rounded-full blur-[137.5px] opacity-55 bg-[radial-gradient(circle,rgba(16,185,129,0.38)_0%,rgba(52,211,153,0.25)_40%,rgba(110,231,183,0.10)_68%,rgba(255,255,255,0)_82%)]" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(249,250,251,1)_100%)]" />
        </div>

        <div data-ar className="relative z-10 max-w-[1150px] mx-auto w-[90%] md:w-[80%]">
          <div className="relative bg-white/80 backdrop-blur-md rounded-[35px] md:rounded-[45px] border border-zinc-100/80 shadow-[0_5px_75px_-15px_rgba(0,0,0,0.08)] px-8 py-16 md:px-16 md:py-24">
            <div className="absolute left-6 top-6 md:left-10 md:top-10"><OrnamentLeft /></div>
            <div className="absolute right-6 top-6 md:right-10 md:top-10"><OrnamentRight /></div>
            <div className="flex justify-center mb-8 md:mb-12"><CenterMandala /></div>
            <div className="text-center max-w-[875px] mx-auto">
              <span className="inline-block text-indigo-600 text-xs font-matter font-medium uppercase tracking-[0.15em] mb-4">Who We Are</span>
              <h1 className="text-3xl md:text-[42px] font-season_mix font-[420] text-stone-900 leading-[1.1]">
                We Build What the Enterprise Actually Needs.
              </h1>
              <p className="text-[13.5px] md:text-[14.5px] font-matter font-light text-stone-500 leading-relaxed mt-5 md:mt-7">
                Not demos. Not pilots that never scale. Production-grade AI and software systems — built for the industries where the stakes are real.
              </p>
            </div>
            <div className="absolute left-6 bottom-6 md:left-10 md:bottom-10"><OrnamentLeft /></div>
            <div className="absolute right-6 bottom-6 md:right-10 md:bottom-10"><OrnamentRight /></div>
          </div>
        </div>
      </section>

      {/* ══════════ COMPANY STORY ══════════ */}
      <section className="py-16 md:py-28 px-6">
        <div data-ar className="max-w-[900px] mx-auto text-center">
          <h2 className="text-xl md:text-2.5xl font-season_mix font-[420] text-stone-900 leading-tight text-center">
            Built From Frustration.<br />Driven by a Higher Standard.
          </h2>
          <div className="text-[13.5px] md:text-[14.5px] font-matter font-light text-stone-500 leading-relaxed mt-6 md:mt-8 space-y-5 text-left md:text-center">
            <p>Arvya Tech was founded because enterprise organisations deserved better. Better than generic AI models retrofitted for industry use. Better than software that looks impressive in demos and breaks in production.</p>
            <p>We built Arvya Tech to be the company enterprise AI always needed — one that combines deep domain expertise with rigorous engineering, and takes full ownership of every system it delivers.</p>
            <p>Today, we work with organisations in banking, healthcare, legal, insurance, and government — deploying AI and software systems that perform reliably where failure is not an option.</p>
          </div>
        </div>
      </section>

      {/* ══════════ MISSION & VISION ══════════ */}
      <section className="px-6 pb-16 md:pb-28">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
          <div data-ar className="bg-white rounded-[30px] md:rounded-[35px] p-8 md:p-10 border border-zinc-100 shadow-sm">
            <span className="inline-block text-indigo-600 text-xs font-matter font-medium uppercase tracking-[0.15em] mb-4">Our Mission</span>
            <h3 className="text-sm md:text-[14.5px] font-season_mix font-[420] text-stone-900 leading-snug">
              To Deploy Intelligence That Earns Trust.
            </h3>
            <p className="text-[13px] md:text-[13.5px] font-matter font-light text-stone-500 leading-relaxed mt-4">
              Build AI and software systems that organisations can rely on — in production, at scale, under regulatory scrutiny, and over time. We measure success by outcomes: faster operations, better decisions, reduced risk, and real competitive advantage.
            </p>
          </div>
          <div data-ar className="bg-white rounded-[30px] md:rounded-[35px] p-8 md:p-10 border border-zinc-100 shadow-sm">
            <span className="inline-block text-indigo-600 text-xs font-matter font-medium uppercase tracking-[0.15em] mb-4">Our Vision</span>
            <h3 className="text-sm md:text-[14.5px] font-season_mix font-[420] text-stone-900 leading-snug">
              Enterprise AI as Trusted Standard Infrastructure.
            </h3>
            <p className="text-[13px] md:text-[13.5px] font-matter font-light text-stone-500 leading-relaxed mt-4">
              We're building toward a world where enterprise AI systems are as trusted, reliable, and indispensable as the infrastructure organisations already depend on. Where domain-specific intelligence is the standard — not the exception.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════ HOW WE BUILD ══════════ */}
      <section className="relative py-16 md:py-28 px-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 -translate-x-1/2 top-[20%] h-[625px] w-[1000px] max-w-[140%] rounded-full blur-[150px] opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(165,180,252,0.5)_0%,rgba(199,210,254,0.25)_50%,rgba(255,255,255,0)_80%)]" />
        </div>
        <div className="relative z-10 max-w-[1000px] mx-auto">
          <div data-ar className="text-center mb-12 md:mb-16">
            <span className="inline-block text-indigo-600 text-xs font-matter font-medium uppercase tracking-[0.15em] mb-4">Our Approach</span>
            <h2 className="text-xl md:text-2.5xl font-season_mix font-[420] text-stone-900 leading-tight text-center">
              Every System Follows the Same<br className="hidden md:block" /> Uncompromising Standard.
            </h2>
          </div>
          <div className="space-y-5 md:space-y-6">
            {steps.map((s) => (
              <div data-ar key={s.num} className="group flex gap-5 md:gap-7 bg-white rounded-2xl md:rounded-[27.5px] p-6 md:p-8 border border-zinc-100 shadow-sm hover:shadow-md hover:border-zinc-200/80 transition-all duration-300">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-50 to-cyan-50 flex items-center justify-center">
                  <span className="text-indigo-600 text-xs font-matter font-medium uppercase tracking-[0.15em]">{s.num}</span>
                </div>
                <div>
                  <h3 className="text-sm md:text-[14.5px] font-season_mix font-[420] text-stone-900 leading-snug">{s.title}</h3>
                  <p className="text-[12.5px] md:text-[13px] font-matter font-light text-stone-500 leading-relaxed mt-1.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ WHY ENTERPRISE ══════════ */}
      <section className="py-16 md:py-28 px-6">
        <div data-ar className="max-w-[900px] mx-auto text-center">
          <span className="inline-block text-indigo-600 text-xs font-matter font-medium uppercase tracking-[0.15em] mb-4">Why Enterprise-First</span>
          <h2 className="text-xl md:text-2.5xl font-season_mix font-[420] text-stone-900 leading-tight text-center">
            Enterprise Is All We Do.<br />And We Do It Without Compromise.
          </h2>
          <div className="text-[13.5px] md:text-[14.5px] font-matter font-light text-stone-500 leading-relaxed mt-6 md:mt-8 space-y-5 text-left md:text-center">
            <p>Enterprise AI is fundamentally different from consumer tools or startup products. The stakes are higher. The complexity is greater. Regulatory compliance, data security, system reliability, integration depth — the requirements are demanding.</p>
            <p>Arvya Tech was built specifically for this environment. Our team brings domain expertise, enterprise engineering experience, and a commitment to quality that generic AI vendors cannot match.</p>
          </div>
        </div>
      </section>

      {/* ══════════ WHAT CLIENTS EXPECT ══════════ */}
      <section className="py-16 md:py-28 px-6">
        <div data-ar className="max-w-[950px] mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block text-indigo-600 text-xs font-matter font-medium uppercase tracking-[0.15em] mb-4">The Arvya Tech Experience</span>
          <h2 className="text-xl md:text-2.5xl font-season_mix font-[420] text-stone-900 leading-tight text-center">
            What You Can Expect<br />When You Work With Us.
          </h2>
        </div>
        <div data-ar className="max-w-[1200px] mx-auto grid sm:grid-cols-2 gap-6 md:gap-8">
          {expectations.map((e, i) => (
            <div key={e.title} className="bg-white rounded-2xl md:rounded-3xl p-7 md:p-9 border border-zinc-100 shadow-sm hover:shadow-md hover:border-zinc-200/80 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-50 to-cyan-50 flex items-center justify-center mb-5">
                <span className="text-indigo-600 text-xs font-matter font-medium uppercase tracking-[0.15em]">0{i + 1}</span>
              </div>
              <h3 className="text-sm md:text-[14.5px] font-season_mix font-[420] text-stone-900 leading-snug">{e.title}</h3>
              <p className="text-[12.5px] md:text-[13px] font-matter font-light text-stone-500 leading-relaxed mt-2.5">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="relative py-16 md:py-28 px-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[500px] w-[1000px] max-w-[140%] rounded-full blur-[125px] opacity-25 bg-[radial-gradient(ellipse_at_center,rgba(251,191,114,0.5)_0%,rgba(167,139,250,0.3)_50%,rgba(255,255,255,0)_80%)]" />
        </div>
        <div data-ar className="relative z-10 max-w-[640px] mx-auto text-center">
          <h2 className="text-xl md:text-2.5xl font-season_mix font-[420] text-stone-900 leading-tight text-center">
            Ready to Work With a Team<br className="hidden md:block" /> That Takes Enterprise Seriously?
          </h2>
          <div className="flex justify-center mt-8 md:mt-10">
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white text-xs md:text-[13px] font-matter font-medium rounded-full shadow-[rgb(255,255,255)_0px_0px_15px_0px_inset,rgba(0,0,0,0.1)_0px_0px_2.5px_0px] hover:scale-105 active:scale-95 transition-transform duration-200">
              Start the Conversation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </div>
      </section>

      <div className="relative bg-zinc-50 h-16 w-full border-zinc-100 -mb-4 rounded-b-[40px] border-b border-solid md:h-28" />
    </main>
  );
};
