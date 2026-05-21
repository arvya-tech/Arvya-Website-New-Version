import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowLeft,
  ArrowUpRight,
  BrainCircuit,
  Zap,
  RefreshCw,
  Wrench,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    Icon: BrainCircuit,
    badge: "Orchestration",
    title: "Collaborative Workforces",
    description:
      "Instead of a single chatbot trying to do everything, we deploy a network of specialized agents. They talk to each other, hand off tasks, and cross-validate results under a secure, centralized supervisor framework.",
  },
  {
    Icon: Wrench,
    badge: "Integration",
    title: "Real-World Action Engines",
    description:
      "Give your agents hands to work with. We safely connect them to your databases, CRMs, APIs, and custom scripts with automated authentication, strict rate limits, and bulletproof failover systems.",
  },
  {
    Icon: RefreshCw,
    badge: "Memory",
    title: "Deep Context & Adaptive Memory",
    description:
      "No more gold-fish memory. Our agents maintain long-term context using fast vector search while utilizing clean short-term scratchpads to map out multi-step processes on the fly.",
  },
  {
    Icon: Zap,
    badge: "Governance",
    title: "Bulletproof Oversight",
    description:
      "You remain in absolute control. Every single step taken by an agent is traceable, logged, and audited. For high-stakes actions, custom approval gates ensure nothing runs without human sign-off.",
  },
];

const processSteps = [
  { step: "01", badge: "Design", title: "Process Anatomy", desc: "We dissect your manual business operations, mapping out exactly where agents can automate decision loops and handoffs." },
  { step: "02", badge: "Setup", title: "Tailored Brains", desc: "We configure every agent with custom personas, hyper-specific system prompts, and secure local tool access." },
  { step: "03", badge: "Deployment", title: "Seamless Plumbing", desc: "We connect the agents directly to your internal software ecosystem, ensuring complete, end-to-end data security." },
  { step: "04", badge: "Audit", title: "Control Center", desc: "We deploy custom dashboard interfaces that let your team monitor operations, pause pipelines, or override steps live." },
];

export const AgenticWorkflowsPage = () => {
  const pageRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

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
      <div className="absolute top-0 right-1/4 w-[750px] h-[750px] rounded-full blur-[225px] opacity-50 bg-gradient-to-tr from-violet-500/20 via-purple-500/10 to-transparent -z-10 pointer-events-none" />
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
              Agentic Workflows.
              <br />
              <span className="text-violet-600 italic font-[380]">Work that thinks. Operations that run.</span>
            </h1>

            <p className="text-[13.5px] md:text-[14.5px] font-matter font-light text-stone-500 leading-relaxed max-w-xl fade-in-el">
              Stop prompting and start operating. Arvya builds autonomous networks of specialized AI agents that don't just answer questions—they execute complex, multi-step enterprise workflows. From secure API triggers to real-time state verification, we deploy digital workforces that collaborate, coordinate, and get work done entirely within your private perimeter.
            </p>
          </div>

          {/* Right Column: Workflow visual representation */}
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
                  arvya · workflow orchestrator
                </div>
                <span className="px-1.5 py-0.5 rounded bg-violet-500/10 text-violet-400 border border-violet-500/20 uppercase text-[8.5px] font-matter font-medium tracking-wider">Active Trace</span>
              </div>

              {/* Trace Log Body */}
              <div className="flex-1 bg-zinc-950 flex flex-col p-3 gap-2.5 overflow-hidden select-none font-matter_semi_mono text-[9.5px] text-zinc-400">
                <div className="text-violet-400">// Active Agent Handoff Pipeline</div>
                {[
                  { label: "Orchestrator", desc: "Assessed incoming ledger query", status: "Delegated", ok: true },
                  { label: "Extractor Bot", desc: "Fetched historical payment files", status: "Completed", ok: true },
                  { label: "Validator Bot", desc: "Auditing compliance rules", status: "In Progress", ok: false },
                ].map(({ label, desc, status, ok }) => (
                  <div key={label} className="bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1.5 flex justify-between items-center">
                    <div>
                      <span className={`inline-block w-1.5 h-1.5 rounded-full mr-2 ${ok ? "bg-emerald-400" : "bg-violet-400 animate-ping"}`} />
                      <span className="text-zinc-200 font-semibold">{label}</span>
                      <span className="text-zinc-500 ml-2">({desc})</span>
                    </div>
                    <span className={ok ? "text-emerald-400" : "text-violet-400"}>{status}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

        {/* ── Capabilities ── */}
        <div ref={triggerRef} className="mt-20 md:mt-28 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-matter font-medium tracking-widest text-violet-600 uppercase">Capabilities</span>
            <h2 className="text-xl md:text-2.5xl font-season_mix font-[420] text-stone-900 leading-tight">
              Intelligent cooperation.
              <br />
              <span className="text-violet-600 italic font-[380]">Governed by absolute control.</span>
            </h2>
            <p className="text-[13px] md:text-[14px] font-matter font-light leading-relaxed max-w-xl mx-auto text-stone-500">
              No more single-purpose chatbots. We build cohesive digital workforces where agents communicate, cross-check each other's work, and hand off tasks seamlessly under your watchful eye.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            {capabilities.map(({ Icon, badge, title, description }) => (
              <div
                key={title}
                className="feature-card bg-white border border-zinc-200/80 rounded-2xl p-4 lg:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.015)] space-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-shadow duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-violet-500/8 text-violet-600 shrink-0 mt-0.5">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="inline-block px-1.5 py-0.5 rounded-full text-[9.5px] font-matter font-medium tracking-wide uppercase bg-violet-500/8 text-violet-600 border border-violet-500/15">
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

        {/* ── Workflow Steps ── */}
        <div ref={processRef} className="mt-20 md:mt-28 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-matter font-medium tracking-widest text-violet-600 uppercase">Process Workflow</span>
            <h2 className="text-xl md:text-2.5xl font-season_mix font-[420] text-stone-900 leading-tight">
              From process map to secure
              <br />
              <span className="text-violet-600 italic font-[380]">automated deployment in weeks.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical connector */}
            <div className="hidden md:block absolute left-[22px] top-6 bottom-6 w-px bg-gradient-to-b from-violet-500/40 via-violet-500/20 to-transparent" />

            <div className="flex flex-col gap-4">
              {processSteps.map(({ step, badge, title, desc }) => (
                <div key={step} className="flex gap-4 items-start">
                  {/* Step bubble */}
                  <div className="shrink-0 w-11 h-11 rounded-full bg-violet-500/10 border border-violet-500/15 flex flex-col items-center justify-center z-10">
                    <span className="text-[8.5px] font-matter font-medium text-violet-500 uppercase tracking-widest leading-none">Step</span>
                    <span className="text-[13px] font-season_mix font-[420] text-violet-700 leading-none mt-0.5">{step}</span>
                  </div>
                  {/* Card */}
                  <div className="flex-1 bg-white border border-zinc-200/80 rounded-2xl p-4 lg:p-5 shadow-[0_8px_25px_rgba(0,0,0,0.015)] space-y-1.5">
                    <span className="inline-block px-1.5 py-0.5 rounded-full text-[9.5px] font-matter font-medium tracking-wide uppercase bg-violet-500/8 text-violet-600 border border-violet-500/15">
                      {badge}
                    </span>
                    <h3 className="text-sm font-season_mix font-[420] text-stone-900 leading-snug">{title}</h3>
                    <p className="text-xs md:text-[12.5px] font-matter font-light leading-relaxed text-stone-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA Panel ── */}
        <div className="mt-16 md:mt-24 bg-zinc-900 text-zinc-100 rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full blur-[125px] opacity-35 pointer-events-none bg-gradient-to-tr from-violet-500 to-transparent" />
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full blur-[150px] opacity-15 pointer-events-none bg-gradient-to-br from-indigo-400 to-transparent" />
          <div className="space-y-3 max-w-md text-center md:text-left z-10">
            <span className="text-violet-400 text-xs font-matter font-medium uppercase tracking-wider">Ready to begin?</span>
            <h2 className="text-lg md:text-2xl font-season_mix font-[420] !text-white leading-snug">
              Elevate your operations from static queries to autonomous action.
            </h2>
            <p className="text-xs md:text-[13px] font-matter font-light !text-zinc-400 leading-relaxed">
              Partner with us to map, build, and deploy custom multi-agent pipelines tailored specifically to your departments. Get complete visibility, bankable reliability, and launch in weeks.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 z-10 w-full sm:w-auto shrink-0">
            <button className="px-5 py-2.5 bg-white hover:bg-zinc-100 transition-colors text-stone-900 text-xs md:text-[13px] font-matter font-medium rounded-full flex items-center justify-center gap-1.5 whitespace-nowrap">
              Design My Workflow <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
