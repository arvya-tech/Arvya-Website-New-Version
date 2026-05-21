import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  FileSearch,
  ShieldCheck,
  ScanLine,
  Upload,
  CheckCircle2,
  FolderOpen,
  MessageSquare,
  Sliders,
  Download,
  Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    Icon: Upload,
    badge: "Document Ingestion",
    title: "Format-Agnostic Ingestion Engine",
    description:
      "Ingest native PDFs, high-resolution scans, and multi-page image files (PNG, JPG, TIFF) via email, API, or portal upload. Enable low-quality scanned processing to reconstruct visual layouts and optimize either for rapid batch processing or maximum field extraction accuracy.",
  },
  {
    Icon: ScanLine,
    badge: "OCR & Pre-Processing",
    title: "Advanced OCR & Layout Normalization",
    description:
      "A highly resilient, multi-engine OCR pipeline corrects page rotation, performs real-time noise reduction, and normalizes complex grid structures. Even warped, shadowed, or faded documents yield precise, high-fidelity plain-text structures for downstream extraction.",
  },
  {
    Icon: FileSearch,
    badge: "Auto Classification",
    title: "Automated Taxonomy & Classification",
    description:
      "The integrated neural classifier automatically identifies the document type—categorizing files as invoices, receipts, purchase orders, or credit notes. Documents are routed to target extraction schemas immediately without manual sorting or tagging.",
  },
  {
    Icon: Sliders,
    badge: "Extraction Engine",
    title: "Adaptive Multi-Strategy Extraction",
    description:
      "Configure adaptive extraction strategies tailored to specific document structures: leverage machine-learning layouts, rigid rule-based coordinates, or hybrid LLM extractors depending on volume, variance, and target schema depth requirements.",
  },
  {
    Icon: CheckCircle2,
    badge: "Validation & Review",
    title: "High-Confidence Validation Safeguards",
    description:
      "Compare extracted data points against custom business rules and ERP records. Flagged anomalies or low-confidence fields are funneled into an intuitive human-in-the-loop exception-handling queue to secure ledger entry integrity.",
  },
  {
    Icon: Zap,
    badge: "Automation Rules",
    title: "Programmable Straight-Through Processing",
    description:
      "Define custom automation rules triggered by vendor parameters, currency thresholds, or line-item matches. Verified documents sync directly with accounting ledgers, backed by transparent unit-based consumption models and full transaction audit logs.",
  },
];

const workflow = [
  {
    step: "01",
    label: "Doc Ingestion",
    title: "Omnichannel Document Ingest",
    body: "Upload documents individually, in bulk, or sync automated ingest folders. Invoicy supports native electronic PDFs, high-density scans, and mobile photographs out of the box.",
  },
  {
    step: "02",
    label: "Normalization",
    title: "OCR & Intelligent Layout Normalization",
    body: "The preprocessing engine corrects skew, balances exposure, and removes physical document noise before passing pages to a multi-engine OCR OCR pipeline with position metadata tracking.",
  },
  {
    step: "03",
    label: "Taxonomy & Routing",
    title: "Automated Document Classification",
    body: "Deep neural nets classify files as invoices, purchase orders, credit notes, or receipts, routing them to the correct schema pipeline in milliseconds without manual tagging.",
  },
  {
    step: "04",
    label: "High-Precision Extraction",
    title: "Structured Schema Extraction",
    body: "Our model-driven parser extracts metadata, merchant entities, line-item tables, tax codes, and custom-defined fields with precision, scaling to millions of pages.",
  },
  {
    step: "05",
    label: "Business Verification",
    title: "Algorithmic Rules & Business Validation",
    body: "Every extracted field runs through automated business logic tests (tax matching, math verification, vendor verification). Fields that do not meet trust metrics are flagged.",
  },
  {
    step: "06",
    label: "Exception Management",
    title: "Human-in-the-Loop Validation Queue",
    body: "Flagged deviations are consolidated in a premium human-review workspace. Operators instantly verify and correct values with side-by-side visual highlights.",
  },
  {
    step: "07",
    label: "Ledger Integration",
    title: "Enterprise Export & System Sync",
    body: "Verified structured data exports automatically via REST API, webhooks, or direct ERP integrations. Every document maintains a detailed, compliant audit trail.",
  },
];

const gallery = [
  {
    src: "/Invoicy/Invoicy_ui_ai_agent.png",
    label: "AI Processing Agent",
    description: "Live pipeline view of document classification, extraction, and validation in real-time",
  },
  {
    src: "/Invoicy/Invoicy_ui_invoice_schema.png",
    label: "Extraction Schema Builder",
    description: "Define custom fields, map vendor-specific layouts, and configure extraction rules without code",
  },
  {
    src: "/Invoicy/Invoicy_ui_usage.png",
    label: "Usage & Credit Dashboard",
    description: "Track documents processed, credits consumed, and per-document cost in real-time",
  },
  {
    src: "/Invoicy/Invoicy_ui_workspace.png",
    label: "Workspace & Batch Review",
    description: "Group related invoices into a workspace for batch review and consolidated output tables",
  },
  {
    src: "/Invoicy/Invoicy_ui_admin_settings.png",
    label: "Admin & Automation Rules",
    description: "Configure automation triggers, team permissions, API keys, and full audit logging",
  },
];

export const InvoicyPage = () => {
  const pageRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

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

      if (galleryRef.current) {
        gsap.fromTo(
          ".gallery-card",
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: galleryRef.current,
              start: "top 80%",
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
      <div className="absolute top-0 right-1/4 w-[750px] h-[750px] rounded-full blur-[225px] opacity-50 bg-gradient-to-tr from-purple-500/20 via-indigo-500/10 to-transparent -z-10 pointer-events-none" />
      <div className="absolute top-[30%] left-0 w-[500px] h-[500px] rounded-full blur-[175px] opacity-30 bg-gradient-to-br from-fuchsia-500/15 to-transparent -z-10 pointer-events-none" />

      <div className="max-w-[2000px] w-[88%] mx-auto md:w-[85%]">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors text-[10.5px] font-matter font-medium uppercase tracking-wider mb-10 fade-in-el"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Platform Overview
        </Link>        {/* ── Hero Section ── */}
        <div className="grid lg:grid-cols-12 gap-8 items-center pt-4">
          <div className="lg:col-span-7 space-y-4">
            <h1 className="text-3xl md:text-[38px] font-season_mix font-[420] text-stone-900 leading-[1.1] fade-in-el">
              Autonomous Invoice Processing.
              <br />
              <span className="text-purple-600 italic font-[380]">Zero Manual Data Entry.</span>
            </h1>

            <p className="text-[13.5px] md:text-[14.5px] font-matter font-light text-stone-500 leading-relaxed max-w-xl fade-in-el">
              Streamline your financial operations with an enterprise-grade AI pipeline that automatically ingests, OCRs, classifies, and extracts line-item structured data from any invoice, receipt, or credit note with near-perfect accuracy. Deploy on secure, private boundaries.
            </p>

            <div className="flex flex-wrap gap-4 pt-1 fade-in-el">
              <div className="flex items-center gap-1.5 text-stone-500 text-[11.5px] md:text-xs font-matter font-light">
                <ScanLine className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                <span>PDF · Digital Formats · High-Density Scans · Image Layouts</span>
              </div>
            </div>
          </div>

          {/* Right Column: Invoicy Agent Interface Mockup & Metrics */}
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
                  arvya · invoice intelligence
                </div>
                <span className="px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 uppercase text-[8.5px] font-matter font-medium tracking-wider">Agent Mode</span>
              </div>

              {/* Chat/Processing Body */}
              <div className="flex-1 bg-zinc-950 flex flex-col p-3 gap-2.5 overflow-hidden select-none">
                {/* File Upload representation */}
                <div className="flex justify-end">
                  <div className="bg-purple-600 text-white text-[11px] font-matter font-light rounded-xl rounded-tr-sm px-3 py-2 max-w-[82%] leading-relaxed flex items-center gap-1.5">
                    <Upload className="w-3.5 h-3.5 shrink-0" />
                    <span>invoice_94021.pdf</span>
                  </div>
                </div>

                {/* Extraction feedback log */}
                <div className="flex flex-col gap-2 max-w-[95%]">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="w-4 h-4 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                      <ScanLine className="w-2 h-2 text-purple-400" />
                    </div>
                    <span className="text-[10px] text-zinc-500 font-matter_semi_mono">Arvya · running OCR & extraction...</span>
                  </div>

                  {/* JSON Extraction output */}
                  <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2.5">
                    <div className="text-[10px] text-purple-400 font-matter_semi_mono mb-1">// Structured Data Output</div>
                    <pre className="text-[9.5px] text-zinc-400 font-matter_semi_mono leading-normal overflow-x-auto whitespace-pre">
{`{
  "vendor": "Acme Industrial Corp",
  "invoice_date": "2026-05-14",
  "line_items": [
    { "desc": "Enterprise API Suite", "total": 250000.00 },
    { "desc": "Priority Support SLA", "total": 50000.00 }
  ],
  "tax_total": 45000.00,
  "grand_total": 345000.00
}`}
                    </pre>
                  </div>

                  {/* Validation results check */}
                  <div className="bg-zinc-900 border border-zinc-800 rounded-lg px-2.5 py-2 space-y-1">
                    <div className="text-[10px] text-zinc-300 font-matter font-light">Validation checks passed:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { label: "Totals Match", val: "100%" },
                        { label: "Business Rules", val: "Passed" },
                      ].map(({ label, val }) => (
                        <div key={label} className="flex items-center gap-1 bg-zinc-800 rounded-full px-2 py-0.5">
                          <span className="w-1 h-1 rounded-full bg-purple-400" />
                          <span className="text-[9.5px] text-zinc-300 font-matter font-light">{label}</span>
                          <span className="text-[9.5px] text-purple-400 font-matter_semi_mono">{val}</span>
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
                    placeholder="Ask anything about this document batch..."
                    className="flex-1 bg-zinc-900 border border-zinc-800 rounded-full px-3 py-1.5 text-[10.5px] text-zinc-500 outline-none cursor-not-allowed font-matter font-light"
                  />
                  <button disabled className="px-3 py-1.5 bg-purple-600 text-white rounded-full text-[10.5px] font-matter font-medium cursor-not-allowed shrink-0">
                    Send
                  </button>
                </div>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="w-full max-w-[500px] grid grid-cols-3 gap-2 py-4 border-t border-zinc-200/60 mt-2 fade-in-el">
              <div className="text-center space-y-0.5">
                <div className="text-lg md:text-xl font-season_mix font-[420] text-purple-600 italic">7-Step</div>
                <div className="text-[9.5px] md:text-[10.5px] uppercase tracking-wider text-stone-400 font-matter font-medium leading-tight">Automated Pipeline</div>
              </div>
              <div className="text-center space-y-0.5">
                <div className="text-lg md:text-xl font-season_mix font-[420] text-purple-600 italic">Any</div>
                <div className="text-[9.5px] md:text-[10.5px] uppercase tracking-wider text-stone-400 font-matter font-medium leading-tight">Format Extracted</div>
              </div>
              <div className="text-center space-y-0.5">
                <div className="text-lg md:text-xl font-season_mix font-[420] text-purple-600 italic">0</div>
                <div className="text-[9.5px] md:text-[10.5px] uppercase tracking-wider text-stone-400 font-matter font-medium leading-tight">Template Configuration</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Capabilities ── */}
        <div ref={triggerRef} className="mt-20 md:mt-28 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-matter font-medium tracking-widest text-purple-600 uppercase">Capabilities</span>
            <h2 className="text-xl md:text-2.5xl font-season_mix font-[420] text-stone-900 leading-tight">
              Format-Agnostic Extraction.
              <br />
              <span className="text-purple-600 italic font-[380]">Sovereign Straight-Through Processing.</span>
            </h2>
            <p className="text-[13px] md:text-[14px] font-matter font-light leading-relaxed max-w-xl mx-auto text-stone-500">
              From secure document ingestion through AI-driven OCR, automated validation, and direct ERP mapping — Invoicy manages the entire lifecycle with granular compliance auditing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            {features.map(({ Icon, badge, title, description }) => (
              <div
                key={title}
                className="feature-card bg-white border border-zinc-200/80 rounded-2xl p-4 lg:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.015)] space-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-shadow duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/8 text-purple-600 shrink-0 mt-0.5">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="inline-block px-1.5 py-0.5 rounded-full text-[9.5px] font-matter font-medium tracking-wide uppercase bg-purple-500/8 text-purple-600 border border-purple-500/15">
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

        {/* ── Workflow ── */}
        <div className="mt-20 md:mt-28 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-matter font-medium tracking-widest text-purple-600 uppercase">How It Works</span>
            <h2 className="text-xl md:text-2.5xl font-season_mix font-[420] text-stone-900 leading-tight">
              From Ingestion to System Sync
              <br />
              <span className="text-purple-600 italic font-[380]">in seven secure steps.</span>
            </h2>
            <p className="text-[13px] md:text-[14px] font-matter font-light leading-relaxed max-w-xl mx-auto text-stone-500">
              The automated extraction pipeline runs autonomously on your private cloud, routing high-confidence ledger data to your systems.
            </p>
          </div>

          <div className="relative">
            {/* Vertical connector */}
            <div className="hidden md:block absolute left-[22px] top-6 bottom-6 w-px bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent" />

            <div className="flex flex-col gap-4">
              {workflow.map(({ step, label, title, body }) => (
                <div key={step} className="flex gap-4 items-start">
                  {/* Step bubble */}
                  <div className="shrink-0 w-11 h-11 rounded-full bg-purple-500/10 border border-purple-500/15 flex flex-col items-center justify-center z-10">
                    <span className="text-[8.5px] font-matter font-medium text-purple-500 uppercase tracking-widest leading-none">Step</span>
                    <span className="text-[13px] font-season_mix font-[420] text-purple-700 leading-none mt-0.5">{step}</span>
                  </div>
                  {/* Card */}
                  <div className="flex-1 bg-white border border-zinc-200/80 rounded-2xl p-4 lg:p-5 shadow-[0_8px_25px_rgba(0,0,0,0.015)] space-y-1.5">
                    <span className="inline-block px-1.5 py-0.5 rounded-full text-[9.5px] font-matter font-medium tracking-wide uppercase bg-purple-500/8 text-purple-600 border border-purple-500/15">
                      {label}
                    </span>
                    <h3 className="text-sm font-season_mix font-[420] text-stone-900 leading-snug">{title}</h3>
                    <p className="text-xs md:text-[12.5px] font-matter font-light leading-relaxed text-stone-500">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Workspace + Agentic Chat ── */}
        <div className="mt-20 md:mt-28 grid md:grid-cols-2 gap-4 lg:gap-6">
          {/* Workspace card */}
          <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 lg:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.015)] space-y-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-shadow duration-300">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-purple-500/8 text-purple-600 shrink-0">
                <FolderOpen className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <span className="inline-block px-1.5 py-0.5 rounded-full text-[9.5px] font-matter font-medium tracking-wide uppercase bg-purple-500/8 text-purple-600 border border-purple-500/15">
                  Workspace
                </span>
                <h3 className="text-sm font-season_mix font-[420] text-stone-900 leading-snug">Consolidated Financial Workspaces</h3>
              </div>
            </div>
            <p className="text-xs md:text-[12.5px] font-matter font-light leading-relaxed text-stone-500">
              Organize digital documents by department, fiscal period, or client account. Invoicy processes batches of varying formats, auto-deduplicates overlapping records, and synthesizes a single, unified database schema from the entire workspace.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Unified Workspaces", "Batch Reconciliation", "Consolidated Financial Tables", "Categorical Tagging"].map((tag) => (
                <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] font-matter font-medium bg-purple-500/6 text-purple-700 border border-purple-500/15">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Agentic Chatbot card */}
          <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 lg:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.015)] space-y-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-shadow duration-300">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-purple-500/8 text-purple-600 shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <span className="inline-block px-1.5 py-0.5 rounded-full text-[9.5px] font-matter font-medium tracking-wide uppercase bg-purple-500/8 text-purple-500 border border-purple-500/15">
                  Agentic Chatbot
                </span>
                <h3 className="text-sm font-season_mix font-[420] text-stone-900 leading-snug">Cognitive Ledger & Document Querying</h3>
              </div>
            </div>
            <p className="text-xs md:text-[12.5px] font-matter font-light leading-relaxed text-stone-500">
              Query your unstructured financial data natively. Ask questions like "Compare Q1 SaaS expenses against the allocated budget" or "Identify outstanding invoices lacking CFO validation"—delivering instant, reliable responses with active cross-references.
            </p>

            {/* Mini chat mockup */}
            <div className="bg-zinc-950 rounded-2xl p-4 space-y-2.5 select-none border border-zinc-800">
              <div className="flex justify-end">
                <div className="bg-purple-600 text-white text-[10.5px] font-matter font-light rounded-xl rounded-tr-sm px-3 py-1.5 max-w-[82%] leading-relaxed">
                  Total outstanding invoices this month?
                </div>
              </div>
              <div className="flex gap-2 items-start">
                <div className="w-5 h-5 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageSquare className="w-2.5 h-2.5 text-purple-400" />
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl rounded-tl-sm px-3 py-1.5 text-[10.5px] text-zinc-300 font-matter font-light leading-relaxed max-w-[86%]">
                  You have <span className="text-purple-400 font-medium">14 outstanding invoices</span> totalling <span className="text-purple-400 font-medium">₹8,42,300</span> this month. 3 are flagged for review.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Product Walkthrough ── */}
        <div ref={galleryRef} className="mt-20 md:mt-28 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-matter font-medium tracking-widest text-purple-600 uppercase">Product Walkthrough</span>
            <h2 className="text-xl md:text-2.5xl font-season_mix font-[420] text-stone-900 leading-tight">
              Built for teams.
              <span className="text-purple-600 italic font-[380]"> Architected for enterprise scale.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {gallery.map(({ src, label, description }) => (
              <div
                key={label}
                className="gallery-card group bg-white border border-zinc-200/70 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden bg-zinc-50 relative">
                  <img
                    src={src}
                    alt={label}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4 space-y-1">
                  <h4 className="text-sm font-season_mix font-[420] text-stone-900 leading-snug">{label}</h4>
                  <p className="text-xs md:text-[12.5px] font-matter font-light leading-relaxed text-stone-500">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Export Destinations strip ── */}
        <div className="mt-16 md:mt-20 bg-white border border-zinc-200/70 rounded-2xl px-6 py-4 flex flex-wrap items-center justify-between gap-6 shadow-[0_8px_30px_rgba(0,0,0,0.015)]">
          <div className="space-y-0.5">
            <div className="text-[10.5px] uppercase tracking-wider text-stone-400 font-matter font-medium">Export & Integrate</div>
            <h3 className="text-sm font-season_mix font-[420] text-stone-900">Synchronize data across your software ecosystem</h3>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {["CSV", "JSON", "SAP", "Oracle", "NetSuite", "QuickBooks", "Zoho Books", "REST API"].map((name) => (
              <span key={name} className="font-matter_semi_mono text-[10px] font-semibold text-stone-500 uppercase tracking-wider px-2.5 py-1 rounded-lg bg-zinc-50 border border-zinc-100">
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* ── CTA Panel ── */}
        <div className="mt-16 md:mt-24 bg-zinc-900 text-zinc-100 rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full blur-[125px] opacity-35 pointer-events-none bg-gradient-to-tr from-purple-500 to-transparent" />
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full blur-[150px] opacity-15 pointer-events-none bg-gradient-to-br from-indigo-400 to-transparent" />
          <div className="space-y-3 max-w-md text-center md:text-left z-10">
            <span className="text-purple-400 text-xs font-matter font-medium uppercase tracking-wider">Ready to optimize?</span>
            <h2 className="text-lg md:text-2xl font-season_mix font-[420] !text-white leading-snug">
              Secure Ledger Extraction.
              <br />
              <span className="text-purple-400 italic font-[380]">Sovereign Infrastructure. Your Governance.</span>
            </h2>
            <p className="text-xs md:text-[13px] font-matter font-light !text-zinc-400 leading-relaxed">
              Deploy Invoicy entirely inside your firewalls. Speak with our systems architect to configure high-volume pipeline schemas and Straight-Through Processing.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 z-10 w-full sm:w-auto shrink-0">
            <button className="px-5 py-2.5 bg-white hover:bg-zinc-100 transition-colors text-stone-900 text-xs md:text-[13px] font-matter font-medium rounded-full flex items-center justify-center gap-1.5 whitespace-nowrap">
              Contact Systems Architect <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 transition-colors text-white text-xs md:text-[13px] font-matter font-medium border border-zinc-700 rounded-full flex items-center justify-center gap-1.5 whitespace-nowrap">
              Technical Documentation <Download className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
