import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowLeft,
  ArrowUpRight,
  BrainCircuit,
  ShieldCheck,
  TrendingUp,
  Database,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    Icon: BrainCircuit,
    badge: "Custom Training",
    title: "Specialized Lexicon Tuning",
    description:
      "We train models directly on your custom nomenclature—whether that means complex legal clauses, medical records, financial ledgers, or technical engineering manuals.",
  },
  {
    Icon: Database,
    badge: "Taxonomy",
    title: "Structured Knowledge Mapping",
    description:
      "We map your AI's reasoning directly to your company's existing organizational taxonomy, product hierarchies, and internal relational databases.",
  },
  {
    Icon: ShieldCheck,
    badge: "Guardrails",
    title: "Hard-Coded Compliance",
    description:
      "Never worry about out-of-bounds answers. We apply mathematical constraints to make sure the AI strictly adheres to regulatory frameworks (like SEBI, RBI, or HIPAA) natively.",
  },
  {
    Icon: TrendingUp,
    badge: "RLHF",
    title: "Continuous Expert Tuning",
    description:
      "Your AI gets smarter every single day. We build secure loops where your team's direct feedback continually refines the model's weights, increasing accuracy over time.",
  },
];

export const IndustrySpecificAiPage = () => {
  const pageRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const refreshId = window.setTimeout(() => ScrollTrigger.refresh(), 100);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fade-in-el",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
      gsap.fromTo(
        ".mockup-panel",
        { opacity: 0, scale: 0.96, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, delay: 0.4, ease: "power3.out" }
      );

      if (triggerRef.current) {
        gsap.fromTo(
          ".feature-card",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "top 78%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, pageRef);

    return () => {
      window.clearTimeout(refreshId);
      ctx.revert();
    };
  }, []);

  return (
    <main ref={pageRef} className="relative bg-zinc-50 flex flex-col grow z-[100] overflow-hidden min-h-screen pt-28 pb-20 md:pb-28">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[750px] h-[750px] rounded-full blur-[225px] opacity-50 bg-gradient-to-tr from-indigo-500/20 via-blue-500/10 to-transparent -z-10 pointer-events-none" />
      <div className="absolute top-[30%] left-0 w-[500px] h-[500px] rounded-full blur-[175px] opacity-30 bg-gradient-to-br from-indigo-500/15 to-transparent -z-10 pointer-events-none" />

      <div className="max-w-[2000px] w-[88%] mx-auto md:w-[85%]">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors text-[10.5px] font-matter font-medium uppercase tracking-wider mb-10 fade-in-el"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Platform Overview
        </Link>

        {/* ── Hero Section ── */}
        <div className="grid lg:grid-cols-12 gap-8 items-center pt-4">
          <div className="lg:col-span-7 space-y-4">
            <h1 className="text-3xl md:text-[38px] font-season_mix font-[420] text-stone-900 leading-[1.1] fade-in-el">
              Industry-Specific AI.
              <br />
              <span className="text-indigo-600 italic font-[380]">Tuned to your domain.</span>
            </h1>

            <p className="text-[13.5px] md:text-[14.5px] font-matter font-light text-stone-500 leading-relaxed max-w-xl fade-in-el">
              Standard off-the-shelf AI models don't speak your company's language. Arvya takes open weights and fine-tunes them directly on your proprietary manuals, legal databases, and custom terminology. The result? AI that understands your specific sector, compliance rules, and workflows out of the box.
            </p>
          </div>

          {/* Right Column: Training monitor visual mockup */}
          <div className="lg:col-span-5 mockup-panel flex flex-col items-center gap-4">
            <div className="w-full max-w-[500px] bg-zinc-950 border border-zinc-800 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col">
              {/* Window Chrome */}
              <div className="flex items-center justify-between h-8 px-3 bg-zinc-900 border-b border-zinc-800 shrink-0 select-none">
                <div className="flex space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                  <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
                </div>
                <div className="h-4.5 w-48 max-w-[50%] rounded bg-zinc-950 border border-zinc-800 text-[10.5px] text-zinc-500 flex items-center justify-center font-matter_semi_mono tracking-wide">
                  arvya · tuning telemetry
                </div>
                <span className="px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase text-[8.5px] font-matter font-medium tracking-wider">Active</span>
              </div>

              {/* Training Progress Body */}
              <div className="flex-1 bg-zinc-950 flex flex-col p-3 gap-2.5 overflow-hidden select-none font-matter_semi_mono text-[9px] text-zinc-400">
                <div className="text-indigo-400">// Ingesting domain-specific tokens</div>
                {[
                  { label: "Legal Clause Corpus", detail: "48,210 files · Done", pct: "w-full", color: "bg-indigo-500" },
                  { label: "RBI Advisory Updates", detail: "12,440 files · Done", pct: "w-full", color: "bg-blue-500" },
                  { label: "Enterprise SOP Books", detail: "2,150 files · Ingesting", pct: "w-2/3", color: "bg-cyan-500" },
                ].map(({ label, detail, pct, color }) => (
                  <div key={label} className="space-y-1 bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1.5">
                    <div className="flex justify-between">
                      <span className="text-zinc-200 font-semibold">{label}</span>
                      <span className="text-zinc-500">{detail}</span>
                    </div>
                    <div className="h-1 rounded-full bg-zinc-800">
                      <div className={`h-full rounded-full ${color} ${pct}`} />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

        {/* ── Capabilities ── */}
        <div ref={triggerRef} className="mt-20 md:mt-28 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-matter font-medium tracking-widest text-indigo-600 uppercase">Capabilities</span>
            <h2 className="text-xl md:text-2.5xl font-season_mix font-[420] text-stone-900 leading-tight">
              Models that understand your business.
              <br />
              <span className="text-indigo-600 italic font-[380]">Inside and out.</span>
            </h2>
            <p className="text-[13px] md:text-[14px] font-matter font-light leading-relaxed max-w-xl mx-auto text-stone-500">
              Deploy specialized, high-accuracy models tailored to your exact industry. Whether you work in banking, law, or manufacturing, we build models that are hard-coded to respect your operational guardrails.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            {capabilities.map(({ Icon, badge, title, description }) => (
              <div
                key={title}
                className="feature-card bg-white border border-zinc-200/80 rounded-2xl p-4 lg:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.015)] space-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-shadow duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/8 text-indigo-600 shrink-0 mt-0.5">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="inline-block px-1.5 py-0.5 rounded-full text-[9.5px] font-matter font-medium tracking-wide uppercase bg-indigo-500/8 text-indigo-600 border border-indigo-500/15">
                      {badge}
                    </span>
                    <h3 className="text-sm font-season_mix font-[420] text-stone-900 leading-snug">{title}</h3>
                  </div>
                </div>
                <p className="text-xs md:text-[12.5px] font-matter font-light leading-relaxed text-stone-500">{description}</p>
              </div>
            ))}
          </div>
        </div>


        {/* ── CTA Panel ── */}
        <div className="mt-16 md:mt-24 bg-zinc-900 text-zinc-100 rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full blur-[125px] opacity-35 pointer-events-none bg-gradient-to-tr from-indigo-500 to-transparent" />
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full blur-[150px] opacity-15 pointer-events-none bg-gradient-to-br from-blue-400 to-transparent" />
          <div className="space-y-3 max-w-md text-center md:text-left z-10">
            <span className="text-indigo-400 text-xs font-matter font-medium uppercase tracking-wider">Ready to begin?</span>
            <h2 className="text-lg md:text-2xl font-season_mix font-[420] !text-white leading-snug">
              Stop compromising with generic chatbots. Build a domain expert.
            </h2>
            <p className="text-xs md:text-[13px] font-matter font-light !text-zinc-400 leading-relaxed">
              Unlock unmatched precision with a model customized for your specific workflow. Talk to our machine learning architects to build your proprietary training roadmap.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 z-10 w-full sm:w-auto shrink-0">
            <button className="px-5 py-2.5 bg-white hover:bg-zinc-100 transition-colors text-stone-900 text-xs md:text-[13px] font-matter font-medium rounded-full flex items-center justify-center gap-1.5 whitespace-nowrap">
              Speak to an AI Architect <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
