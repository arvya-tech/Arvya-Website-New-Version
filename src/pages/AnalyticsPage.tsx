import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  ArrowLeft,
  Database,
  ShieldCheck,
  BarChart3,
  MessageSquare,
  Zap,
  RefreshCw,
  Wrench,
  Lock,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    Icon: MessageSquare,
    badge: "Natural Language Querying",
    title: "Conversational Semantic Query Engine",
    description:
      "Translate complex plain-English questions—such as \"Compare quarterly recurring revenue across products with historical trends\"—into optimized, dialect-aware SQL across PostgreSQL, MySQL, SQLite, and Oracle with zero manual writing.",
  },
  {
    Icon: BarChart3,
    badge: "Interactive Visual Analytics",
    title: "Automated Python-Powered Visual Analytics",
    description:
      "Complex analytical queries trigger automated python synthesis utilizing Pandas and Plotly. Render dynamic visual charts (zoom, hover, segment) inside your browser window instantly to turn raw metrics into active reports.",
  },
  {
    Icon: Wrench,
    badge: "Self-Healing SQL",
    title: "Cognitive Self-Healing SQL Critic Agent",
    description:
      "Eliminate broken queries and operational latency. Our integrated, multi-agent SQL Critic automatically intercepts database compiler errors, refines the syntax tree, and auto-corrects queries on the fly.",
  },
  {
    Icon: RefreshCw,
    badge: "Zero-Config Schema Sync",
    title: "Instant Schema Synchronization & Discovery",
    description:
      "Connect databases and map schema layout completely in under two minutes. Our cataloging agents auto-decode table structures and foreign key relationships into unified, plain-English definitions.",
  },
  {
    Icon: Zap,
    badge: "Semantic Query Caching",
    title: "Low-Latency Semantic Query Cache",
    description:
      "Leverage ChromaDB-backed vector caching to identify equivalent questions—even if worded differently. Return cached results instantly at sub-second speed, bypassing redundant computation loops completely.",
  },
  {
    Icon: ShieldCheck,
    badge: "100% Read-Only Safety Enforced",
    title: "Zero-Trust Read-Only Data Isolation",
    description:
      "Enforce structural isolation with read-only database connections and detailed audit logs. Your underlying private database rows are never modified, moved, or stored—preserving absolute data residency.",
  },
];

export const AnalyticsPage = () => {
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
        { opacity: 0, scale: 0.95, y: 40 },
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
      <div className="absolute top-0 right-1/4 w-[750px] h-[750px] rounded-full blur-[225px] opacity-50 bg-gradient-to-tr from-blue-500/20 via-indigo-500/10 to-transparent -z-10 pointer-events-none" />
      <div className="absolute top-[30%] left-0 w-[500px] h-[500px] rounded-full blur-[175px] opacity-30 bg-gradient-to-br from-cyan-400/15 to-transparent -z-10 pointer-events-none" />

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
              Enterprise Data Intelligence.
              <br />
              <span className="text-blue-600 italic font-[380]">Speak the Language of Your Data.</span>
            </h1>

            <p className="text-[13.5px] md:text-[14.5px] font-matter font-light text-stone-500 leading-relaxed max-w-xl fade-in-el">
              Empower your business and product teams to query databases directly using conversational English. Arvya discovers schema taxonomies, generates highly optimized, dialect-aware SQL, self-heals compiler errors on the fly, and delivers rich interactive Plotly metrics dashboards in real-time.
            </p>

            <div className="flex flex-wrap gap-4 pt-1 fade-in-el">
              <div className="flex items-center gap-1.5 text-stone-500 text-[11.5px] md:text-xs font-matter font-light">
                <Database className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span>PostgreSQL · MySQL · SQLite · Oracle · Snowflake</span>
              </div>
            </div>
          </div>

          {/* Right Column: Chat Interface Mockup & Metrics */}
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
                  arvya · database analytics
                </div>
                <span className="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase text-[8.5px] font-matter font-medium tracking-wider">Read-Only</span>
              </div>

              {/* Chat Body */}
              <div className="flex-1 bg-zinc-950 flex flex-col p-3 gap-2.5 overflow-hidden select-none">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white text-[11px] font-matter font-light rounded-xl rounded-tr-sm px-3 py-2 max-w-[82%] leading-relaxed">
                    Which product categories drove the most revenue in Q1 2026 vs Q1 2025?
                  </div>
                </div>

                {/* Agent response */}
                <div className="flex flex-col gap-2 max-w-[95%]">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="w-4 h-4 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                      <Database className="w-2 h-2 text-blue-400" />
                    </div>
                    <span className="text-[10px] text-zinc-500 font-matter_semi_mono">Arvya · generating query...</span>
                  </div>

                  {/* SQL block */}
                  <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2.5">
                    <div className="text-[10px] text-blue-400 font-matter_semi_mono mb-1">// Auto-generated SQL</div>
                    <pre className="text-[9.5px] text-zinc-400 font-matter_semi_mono leading-normal overflow-x-auto whitespace-pre">
{`SELECT category,
  SUM(CASE WHEN yr=2026 THEN revenue END) AS rev_26,
  SUM(CASE WHEN yr=2025 THEN revenue END) AS rev_25,
  ROUND((rev_26-rev_25)/rev_25*100,1) AS yoy_pct
FROM sales WHERE quarter=1
GROUP BY category ORDER BY rev_26 DESC`}
                    </pre>
                  </div>

                  {/* Result summary */}
                  <div className="bg-zinc-900 border border-zinc-800 rounded-lg px-2.5 py-2 space-y-1">
                    <div className="text-[10px] text-zinc-300 font-matter font-light">Top categories by YoY growth:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { label: "SaaS Tools", val: "+31.2%" },
                        { label: "Cloud Infra", val: "+22.8%" },
                      ].map(({ label, val }) => (
                        <div key={label} className="flex items-center gap-1 bg-zinc-800 rounded-full px-2 py-0.5">
                          <span className="w-1 h-1 rounded-full bg-blue-400" />
                          <span className="text-[9.5px] text-zinc-300 font-matter font-light">{label}</span>
                          <span className="text-[9.5px] text-blue-400 font-matter_semi_mono">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Input bar */}
                <div className="mt-2 flex gap-1.5 items-center border-t border-zinc-800/80 pt-2.5">
                  <input
                    type="text"
                    disabled
                    placeholder="Ask anything about your data..."
                    className="flex-1 bg-zinc-900 border border-zinc-800 rounded-full px-3 py-1.5 text-[10.5px] text-zinc-500 outline-none cursor-not-allowed font-matter font-light"
                  />
                  <button disabled className="px-3 py-1.5 bg-blue-600 text-white rounded-full text-[10.5px] font-matter font-medium cursor-not-allowed shrink-0">
                    Ask
                  </button>
                </div>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="w-full max-w-[500px] grid grid-cols-3 gap-2 py-4 border-t border-zinc-200/60 mt-2 fade-in-el">
              <div className="text-center space-y-0.5">
                <div className="text-lg md:text-xl font-season_mix font-[420] text-blue-600 italic">&lt;2 min</div>
                <div className="text-[9.5px] md:text-[10.5px] uppercase tracking-wider text-stone-400 font-matter font-medium leading-tight">Database Ingestion</div>
              </div>
              <div className="text-center space-y-0.5">
                <div className="text-lg md:text-xl font-season_mix font-[420] text-blue-600 italic">0ms</div>
                <div className="text-[9.5px] md:text-[10.5px] uppercase tracking-wider text-stone-400 font-matter font-medium leading-tight">Manual SQL Drafting</div>
              </div>
              <div className="text-center space-y-0.5">
                <div className="text-lg md:text-xl font-season_mix font-[420] text-blue-600 italic">100%</div>
                <div className="text-[9.5px] md:text-[10.5px] uppercase tracking-wider text-stone-400 font-matter font-medium leading-tight">Read-Only Isolation</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Capabilities ── */}
        <div ref={triggerRef} className="mt-20 md:mt-28 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-matter font-medium tracking-widest text-blue-600 uppercase">Capabilities</span>
            <h2 className="text-xl md:text-2.5xl font-season_mix font-[420] text-stone-900 leading-tight">
              Enterprise-Wide Data Ingestion & Analytics.
              <br />
              <span className="text-blue-600 italic font-[380]">Without the engineering bottlenecks.</span>
            </h2>
            <p className="text-[13px] md:text-[14px] font-matter font-light leading-relaxed max-w-xl mx-auto text-stone-500">
              From natural language dialect translations to resilient self-healing query critical processes, Arvya builds a secure, real-time analytics layer over your databases.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            {features.map(({ Icon, badge, title, description }) => (
              <div
                key={title}
                className="feature-card bg-white border border-zinc-200/80 rounded-2xl p-4 lg:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.015)] space-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-shadow duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/8 text-blue-600 shrink-0 mt-0.5">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="inline-block px-1.5 py-0.5 rounded-full text-[9.5px] font-matter font-medium tracking-wide uppercase bg-blue-500/8 text-blue-500 border border-blue-500/15">
                      {badge}
                    </span>
                    <h3 className="text-sm font-season_mix font-[420] text-stone-900 leading-snug">{title}</h3>
                  </div>
                </div>
                <p className="text-xs md:text-[12.5px] font-matter font-light leading-relaxed text-stone-500">{description}</p>

                {/* Special security badge on last card */}
                {badge === "100% Read-Only Safety Enforced" && (
                  <div className="flex items-center gap-2 mt-1 px-3 py-1.5 bg-emerald-500/6 border border-emerald-500/20 rounded-xl w-fit">
                    <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="text-[10.5px] font-matter font-medium text-emerald-700 tracking-wide">100% Read-Only Safety Enforced</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── How It Works ── */}
        <div className="mt-16 md:mt-22 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-matter font-medium tracking-widest text-blue-600 uppercase">How It Works</span>
            <h2 className="text-xl md:text-2.5xl font-season_mix font-[420] text-stone-900 leading-tight">
              From Connection to Analysis
              <br />
              <span className="text-blue-600 italic font-[380]">in six straightforward steps.</span>
            </h2>
            <p className="text-[13px] md:text-[14px] font-matter font-light leading-relaxed max-w-xl mx-auto text-stone-500">
              No complex manual configurations. Just connect your relational storage and query data instantly with automated visualization mapping.
            </p>
          </div>

          {/* Steps — vertical connector line on desktop */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-[22px] top-6 bottom-6 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-transparent" />

            <div className="flex flex-col gap-4">
              {[
                {
                  step: "01",
                  label: "Account Provisioning",
                  title: "Access Your Sovereign Environment",
                  body: "Access your fully isolated Arvya secure workstation. Each tenant's environment is containerized to prevent configuration sharing or leakage.",
                  tag: null,
                },
                {
                  step: "02",
                  label: "Database Connection",
                  title: "Establish Isolated Relational Connection",
                  body: "Input connection details securely. Arvya supports direct dialect parsing on PostgreSQL, MySQL, SQLite, and Oracle without needing intermediate middleware.",
                  tag: null,
                },
                {
                  step: "03",
                  label: "Schema Discovery",
                  title: "Target Active Schemas for Ingestion",
                  body: "Specify the exact target schemas and tables for cataloging. Select schemas you want active—giving you full control over metadata collection.",
                  tag: null,
                },
                {
                  step: "04",
                  label: "Automated Synchronization",
                  title: "Schema Analysis & Categorization",
                  body: "The cataloging agent auto-discovers database structure, column metrics, primary key layouts, and maps cryptic abbreviations into semantic dictionary definitions.",
                  tag: "Automatic · Under 2 Minutes",
                },
                {
                  step: "05",
                  label: "Cognitive Parsing",
                  title: "Natural Language Dialogue & SQL Generation",
                  body: "Enter queries as naturally as writing a prompt. The agent reads context, drafts compliant joins across tables, and validates syntax trees automatically.",
                  tag: null,
                },
                {
                  step: "06",
                  label: "Visual Intelligence",
                  title: "Automated Visualization & Response Render",
                  body: "Analytical prompts automatically trigger structured data outputs and Plotly interactive metrics charts in real-time. Frequent queries resolve instantly from vector cache.",
                  tag: null,
                },
              ].map(({ step, label, title, body, tag }) => (
                <div key={step} className="flex gap-4 items-start">
                  {/* Step number bubble */}
                  <div className="shrink-0 w-11 h-11 rounded-full bg-blue-500/10 border border-blue-500/15 flex flex-col items-center justify-center z-10">
                    <span className="text-[8.5px] font-matter font-medium text-blue-400 uppercase tracking-widest leading-none">Step</span>
                    <span className="text-[13px] font-season_mix font-[420] text-blue-600 leading-none mt-0.5">{step}</span>
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white border border-zinc-200/80 rounded-2xl p-4 lg:p-5 shadow-[0_8px_25px_rgba(0,0,0,0.015)] space-y-1.5">
                    <span className="inline-block px-1.5 py-0.5 rounded-full text-[9.5px] font-matter font-medium tracking-wide uppercase bg-blue-500/8 text-blue-500 border border-blue-500/15">
                      {label}
                    </span>
                    <h3 className="text-sm font-season_mix font-[420] text-stone-900 leading-snug">{title}</h3>
                    <p className="text-xs md:text-[12.5px] font-matter font-light leading-relaxed text-stone-500">{body}</p>
                    {tag && (
                      <div className="flex items-center gap-1.5 pt-0.5">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/8 border border-emerald-500/20 text-emerald-700 text-[10px] font-matter font-medium">
                          <RefreshCw className="w-2.5 h-2.5" /> {tag}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA Panel ── */}
        <div className="mt-16 md:mt-24 bg-zinc-900 text-zinc-100 rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full blur-[125px] opacity-35 pointer-events-none bg-gradient-to-tr from-blue-500 to-transparent" />
          <div className="space-y-3 max-w-md text-center md:text-left z-10">
            <span className="text-blue-400 text-xs font-matter font-medium uppercase tracking-wider">Ready to begin?</span>
            <h2 className="text-lg md:text-2xl font-season_mix font-[420] !text-white leading-snug">
              Relational Storage, Queryable.
              <br />
              <span className="text-blue-400 italic font-[380]">Instant Conversational Insights.</span>
            </h2>
            <p className="text-xs md:text-[13px] font-matter font-light !text-zinc-400 leading-relaxed">
              Connect relational databases securely and deploy real-time semantic query tools across departments. Zero data leaves your corporate parameters.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 z-10 w-full sm:w-auto">
            <button className="px-5 py-2.5 bg-white hover:bg-zinc-100 transition-colors text-stone-900 text-xs md:text-[13px] font-matter font-medium rounded-full flex items-center justify-center gap-1.5 whitespace-nowrap">
              Connect Database <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

