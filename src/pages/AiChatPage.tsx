import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowLeft,
  ArrowUpRight,
  Bot,
  ShieldCheck,
  Lock,
  MessageCircle,
  Cpu,
  Layers,
  Settings,
  ShieldAlert,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    Icon: ShieldCheck,
    badge: "Deterministic RAG",
    title: "Anti-Hallucination Knowledge Binding",
    description:
      "Anchor every conversational turn strictly to your verified internal knowledge base—including complex regulatory PDFs, policies, and product documentation—structurally eliminating hallucinations.",
  },
  {
    Icon: Lock,
    badge: "Sovereign Ingress",
    title: "Isolated Private-Cloud Deployment",
    description:
      "Run your dialogue agents completely within your own corporate firewall or private cloud boundary. Ensure that no customer prompts or metadata are ever transmitted to third-party endpoints.",
  },
  {
    Icon: Cpu,
    badge: "Intent Routing",
    title: "Dynamic Intent & Semantic Routing",
    description:
      "Categorize conversational inputs automatically to route queries to specialized sub-agents. Connect users directly to ledger extraction, vector document search, or internal database schemas instantly.",
  },
  {
    Icon: Layers,
    badge: "Hybrid Architectures",
    title: "Flexible Local & Private API Support",
    description:
      "Orchestrate sovereign dialogs across a variety of high-performance models: choose offline local LLMs (Llama-3, Mistral) for absolute security, or interface via private API endpoints depending on performance.",
  },
  {
    Icon: Settings,
    badge: "Action Triggers",
    title: "Secure Business Action Integration",
    description:
      "Transform dialogue into system actions. Program custom system hooks to trigger database lookups, invoice verification loops, or document compilation steps securely from a simple chat command.",
  },
  {
    Icon: ShieldAlert,
    badge: "Compliance Guardrails",
    title: "Real-Time Compliance & Security Guardrails",
    description:
      "Enforce compliance and toxicity filters natively on all prompt flows. Redact PII, screen toxic content, and restrict access scopes based on the operator's current structural roles.",
  },
];

export const AiChatPage = () => {
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
              Advanced AI Chat.
              <br />
              <span className="text-violet-600 italic font-[380]">Sovereign Conversational Agents.</span>
            </h1>

            <p className="text-[13.5px] md:text-[14.5px] font-matter font-light text-stone-500 leading-relaxed max-w-xl fade-in-el">
              Deploy domain-tuned conversational AI assistants that natively parse complex internal databases, understand complex corporate regulations, and execute actions—strictly inside your private-cloud boundary.
            </p>
          </div>

          {/* Right Column: AI Chat interface & metrics */}
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
                  arvya · sovereign chat
                </div>
                <span className="px-1.5 py-0.5 rounded bg-violet-500/10 text-violet-400 border border-violet-500/20 uppercase text-[8.5px] font-matter font-medium tracking-wider">Secure Session</span>
              </div>

              {/* Chat Body */}
              <div className="flex-1 bg-zinc-950 flex flex-col p-3 gap-2.5 overflow-hidden select-none">
                <div className="flex justify-end">
                  <div className="bg-violet-600 text-white text-[11px] font-matter font-light rounded-xl rounded-tr-sm px-3 py-2 max-w-[82%] leading-relaxed flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>Explain compliance review guidelines for Q3 vendor onboarding.</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 max-w-[95%]">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="w-4 h-4 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
                      <Bot className="w-2 h-2 text-violet-400" />
                    </div>
                    <span className="text-[10px] text-zinc-500 font-matter_semi_mono">Arvya Compliance Bot</span>
                  </div>

                  <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 space-y-1.5 font-matter text-[10px] leading-relaxed text-zinc-300">
                    <div>Based on <span className="underline decoration-violet-500/50 text-white">Finance Policy v3.1</span>:</div>
                    <ul className="list-disc pl-4 space-y-0.5 text-zinc-400">
                      <li>Requires CFO approvals on contracts exceeding ₹5L.</li>
                      <li>Double-audits vendor costs against baseline cost sheets.</li>
                    </ul>
                    <div className="text-[9px] text-violet-400 font-matter_semi_mono">// Source: Finance_Policy_v3.pdf</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Capabilities ── */}
        <div ref={triggerRef} className="mt-20 md:mt-28 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-matter font-medium tracking-widest text-violet-600 uppercase">Capabilities</span>
            <h2 className="text-xl md:text-2.5xl font-season_mix font-[420] text-stone-900 leading-tight">
              Sovereign Conversations.
              <br />
              <span className="text-violet-600 italic font-[380]">Configured to your organization's compliance logic.</span>
            </h2>
            <p className="text-[13px] md:text-[14px] font-matter font-light leading-relaxed max-w-xl mx-auto text-stone-500">
              Deploy AI chat agents tuned explicitly to parse complex regulatory datasets, coordinate local files, and act on live databases without privacy leakage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {features.map(({ Icon, badge, title, description }) => (
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

        {/* ── CTA Panel ── */}
        <div className="mt-16 md:mt-24 bg-zinc-900 text-zinc-100 rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full blur-[125px] opacity-35 pointer-events-none bg-gradient-to-tr from-violet-500 to-transparent" />
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full blur-[150px] opacity-15 pointer-events-none bg-gradient-to-br from-indigo-400 to-transparent" />
          <div className="space-y-3 max-w-md text-center md:text-left z-10">
            <span className="text-violet-400 text-xs font-matter font-medium uppercase tracking-wider">Ready to deploy?</span>
            <h2 className="text-lg md:text-2xl font-season_mix font-[420] !text-white leading-snug">
              Secure Sovereign Conversation.
              <br />
              <span className="text-violet-400 italic font-[380]">Private boundaries, complete control.</span>
            </h2>
            <p className="text-xs md:text-[13px] font-matter font-light !text-zinc-400 leading-relaxed">
              Deploy your local conversational AI agent systems completely within offline or air-gapped zones in days. Talk with our architects to get started.
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
