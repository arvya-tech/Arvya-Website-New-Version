import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowLeft,
  ArrowUpRight,
  BrainCircuit,
  GitBranch,
  Search,
  FileText,
  Database,
  Lock,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    Icon: GitBranch,
    badge: "Query Decomposition",
    title: "Recursive Multi-Step Query Decomposition",
    description:
      "Recursively decompose multi-faceted analytical questions into structured sub-queries. Fan out search workloads across vector spaces, keyword indices, and SQL stores simultaneously.",
  },
  {
    Icon: FileText,
    badge: "Dense Synthesis",
    title: "Traceable Semantic Synthesis & Lineage",
    description:
      "Condense hundreds of high-density text chunks into unified, contextual responses. Surfaced outcomes are fully bound to active source citations with granular verification markers.",
  },
  {
    Icon: Search,
    badge: "Cross-Format Ingestion",
    title: "Omnichannel Cross-Format Processing",
    description:
      "Parse and embed diverse files natively: ingest unstructured text, complex PDF grids, digital spreadsheets, and scanned diagrams into highly aligned semantic vectors.",
  },
  {
    Icon: BrainCircuit,
    badge: "Discrepancy Auditing",
    title: "Cognitive Self-Correction & Reconciliation",
    description:
      "Identify and resolve conflicting source material autonomously. Our verification loops analyze contradicting document revisions and highlight discrepancies for manual operators.",
  },
  {
    Icon: Database,
    badge: "Hybrid SQL Lookup",
    title: "Sovereign Dialect SQL Generation",
    description:
      "Augment vector semantic search with precise database record lookup. The agent writes and executes read-only SQL queries to verify raw counts, invoice sums, and real-time ledger records.",
  },
  {
    Icon: Lock,
    badge: "Air-Gapped Boundaries",
    title: "Zero-Trust Air-Gapped Infrastructure",
    description:
      "Deploy completely within isolated corporate parameters. Leverage local embedding engines and open-weight models to ensure 100% database sovereignty and data residency.",
  },
];

export const AgenticRagPage = () => {
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
      <div className="absolute top-0 right-1/4 w-[750px] h-[750px] rounded-full blur-[225px] opacity-50 bg-gradient-to-tr from-orange-500/20 via-amber-500/10 to-transparent -z-10 pointer-events-none" />
      <div className="absolute top-[30%] left-0 w-[500px] h-[500px] rounded-full blur-[175px] opacity-30 bg-gradient-to-br from-red-400/15 to-transparent -z-10 pointer-events-none" />

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
              Agentic RAG.
              <br />
              <span className="text-orange-600 italic font-[380]">Cognitive Reasoning & Synthesis.</span>
            </h1>

            <p className="text-[13.5px] md:text-[14.5px] font-matter font-light text-stone-500 leading-relaxed max-w-xl fade-in-el">
              Equip your systems with an advanced retrieval framework that goes beyond raw text lookup. Arvya maps multi-source datasets recursively, resolves document inconsistencies, and outputs verifiably complete syntheses on sovereign infrastructure.
            </p>
          </div>

          {/* Right Column: Reasoning Engine interface & metrics */}
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
                  arvya · reasoning engine
                </div>
                <span className="px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20 uppercase text-[8.5px] font-matter font-medium tracking-wider">Active</span>
              </div>

              {/* Console Body */}
              <div className="flex-1 bg-zinc-950 flex flex-col p-3 gap-2.5 overflow-hidden select-none">
                <div className="flex justify-end">
                  <div className="bg-orange-600 text-white text-[11px] font-matter font-light rounded-xl rounded-tr-sm px-3 py-2 max-w-[82%] leading-relaxed flex items-center gap-1.5">
                    <Search className="w-3.5 h-3.5 shrink-0" />
                    <span>Run compliance contradiction audit across workspaces</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 max-w-[95%]">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="w-4 h-4 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                      <BrainCircuit className="w-2 h-2 text-orange-400" />
                    </div>
                    <span className="text-[10px] text-zinc-500 font-matter_semi_mono">Arvya · analyzing pathways...</span>
                  </div>

                  <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 space-y-1.5 font-matter_semi_mono text-[9.5px]">
                    <div className="text-orange-400">// Reasoning Trace Loop</div>
                    <div className="flex items-start gap-1.5 text-zinc-300">
                      <span className="text-emerald-400">✓</span>
                      <span>Query decomposed: 4 factual sub-branches identified.</span>
                    </div>
                    <div className="flex items-start gap-1.5 text-zinc-300">
                      <span className="text-emerald-400">✓</span>
                      <span>Ingested 22 matching vectors from secure workspace database.</span>
                    </div>
                    <div className="flex items-start gap-1.5 text-orange-400">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping mt-1 shrink-0" />
                      <span>Contradiction audit: resolving discrepancy in file #04 vs #12...</span>
                    </div>
                  </div>

                  <div className="bg-zinc-900 border border-zinc-800 rounded-lg px-2.5 py-1.5 flex justify-between items-center text-[9px] text-zinc-400">
                    <span>Model: Llama-3-Sovereign-70B</span>
                    <span className="text-orange-400 font-matter_semi_mono">Iteration 2 / 4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Capabilities ── */}
        <div ref={triggerRef} className="mt-20 md:mt-28 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-matter font-medium tracking-widest text-orange-500 uppercase">Capabilities</span>
            <h2 className="text-xl md:text-2.5xl font-season_mix font-[420] text-stone-900 leading-tight">
              Retrieval that Reasons.
              <br />
              <span className="text-orange-500 italic font-[380]">Syntheses that are verifiably correct.</span>
            </h2>
            <p className="text-[13px] md:text-[14px] font-matter font-light leading-relaxed max-w-xl mx-auto text-stone-500">
              Traditional RAG gathers disconnected text chunks. Agentic RAG reasons: it designs execution tasks, evaluates context quality, resolves document discrepancies, and outputs compliant solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {features.map(({ Icon, badge, title, description }) => (
              <div
                key={title}
                className="feature-card bg-white border border-zinc-200/80 rounded-2xl p-4 lg:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.015)] space-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-shadow duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-orange-500/8 text-orange-600 shrink-0 mt-0.5">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="inline-block px-1.5 py-0.5 rounded-full text-[9.5px] font-matter font-medium tracking-wide uppercase bg-orange-500/8 text-orange-600 border border-orange-500/15">
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
          <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full blur-[125px] opacity-35 pointer-events-none bg-gradient-to-tr from-orange-500 to-transparent" />
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full blur-[150px] opacity-15 pointer-events-none bg-gradient-to-br from-amber-400 to-transparent" />
          <div className="space-y-3 max-w-md text-center md:text-left z-10">
            <span className="text-orange-400 text-xs font-matter font-medium uppercase tracking-wider">Ready to optimize?</span>
            <h2 className="text-lg md:text-2xl font-season_mix font-[420] !text-white leading-snug">
              Secure Autonomous Retrieval.
              <br />
              <span className="text-orange-400 italic font-[380]">Deep Reasoning. Total Security.</span>
            </h2>
            <p className="text-xs md:text-[13px] font-matter font-light !text-zinc-400 leading-relaxed">
              Connect Agentic RAG directly to your private databases and file shares. Customize retrieval pipelines for advanced compliance audit tasks.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 z-10 w-full sm:w-auto shrink-0">
            <button className="px-5 py-2.5 bg-white hover:bg-zinc-100 transition-colors text-stone-900 text-xs md:text-[13px] font-matter font-medium rounded-full flex items-center justify-center gap-1.5 whitespace-nowrap">
              Contact Systems Architect <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
