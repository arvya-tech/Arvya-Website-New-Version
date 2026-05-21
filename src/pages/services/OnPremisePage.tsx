import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  Lock,
  Server,
  Settings2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    Icon: Lock,
    badge: "Absolute Isolation",
    title: "True Air-Gapped Isolation",
    description:
      "Deploy AI models in high-security, air-gapped environments with absolutely zero inbound or outbound internet connections, completely removing all vectors of external data exposure.",
  },
  {
    Icon: Server,
    badge: "Hardware tuning",
    title: "Bare-Metal GPU Orchestration",
    description:
      "Get the absolute most out of your hardware. We calibrate and tune local GPU clusters (such as Nvidia A100s or H100s) to run open-weight models at blistering speeds with optimal memory usage.",
  },
  {
    Icon: ShieldCheck,
    badge: "Monitoring",
    title: "Immutable Access Audits",
    description:
      "Keep a flawless record of infrastructure access. We integrate enterprise role-based access controls (RBAC) and tamper-proof access logs directly into the base software layers.",
  },
  {
    Icon: Settings2,
    badge: "Deployment options",
    title: "Private Cloud & VPC Orchestration",
    description:
      "Choose exactly where your compute lives. We orchestrate deployments across private AWS VPCs, Azure Private Links, or physical server racks, matching your network security architecture.",
  },
];

const processSteps = [
  { step: "01", badge: "Audit", title: "Infrastructure Discovery", desc: "Our systems engineers evaluate your physical servers, hardware configuration, and networking protocols." },
  { step: "02", badge: "Design", title: "Architecture Engineering", desc: "We map out high-availability compute paths, local caching layers, and backup failover nodes." },
  { step: "03", badge: "Integrate", title: "On-Premise Deployment", desc: "We install the orchestration layer, serving frameworks, and models directly within your firewall limits." },
  { step: "04", badge: "Handover", title: "Vulnerability & Stress Testing", desc: "We run extreme latency benchmarks, penetration testing, and hand over a clean, fully documented system." },
];

export const OnPremisePage = () => {
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
      <div className="absolute top-0 right-1/4 w-[750px] h-[750px] rounded-full blur-[225px] opacity-50 bg-gradient-to-tr from-slate-400/20 via-blue-500/10 to-transparent -z-10 pointer-events-none" />
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
              On-Premise Serving.
              <br />
              <span className="text-blue-600 italic font-[380]">Absolute bare-metal control.</span>
            </h1>

            <p className="text-[13.5px] md:text-[14.5px] font-matter font-light text-stone-500 leading-relaxed max-w-xl fade-in-el">
              SaaS AI has a massive security cost. Arvya deploys advanced AI serving clusters directly within your own physical data centers, private cloud VPCs, or entirely air-gapped environments. Enjoy the full power of modern LLMs with zero data leakage and total infrastructure control.
            </p>
          </div>

          {/* Right Column: Server diagram mockup */}
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
                  arvya · server telemetry
                </div>
                <span className="px-1.5 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20 uppercase text-[8.5px] font-matter font-medium tracking-wider">Air-Gapped</span>
              </div>

              {/* Server Nodes Body */}
              <div className="flex-1 bg-zinc-950 flex flex-col p-3 gap-2.5 overflow-hidden select-none font-matter_semi_mono text-[9px] text-zinc-400">
                <div className="text-slate-400">// Private Datacenter Rack A2</div>
                {[
                  { label: "Inference Cluster", detail: "4× H100 GPU · 80GB VRAM", active: true },
                  { label: "Semantic DB Node", detail: "Qdrant server · NVMe storage", active: true },
                  { label: "Modelserving Serving", detail: "Llama-3-70B weight serving", active: true },
                ].map(({ label, detail, active }) => (
                  <div key={label} className="bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1.5 flex justify-between items-center">
                    <div>
                      <span className={`inline-block w-1.5 h-1.5 rounded-full mr-2 ${active ? "bg-emerald-400" : "bg-slate-400"}`} />
                      <span className="text-zinc-200 font-semibold">{label}</span>
                    </div>
                    <span className="text-zinc-500">{detail}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

        {/* ── Capabilities ── */}
        <div ref={triggerRef} className="mt-20 md:mt-28 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-matter font-medium tracking-widest text-blue-600 uppercase">Capabilities</span>
            <h2 className="text-xl md:text-2.5xl font-season_mix font-[420] text-stone-900 leading-tight">
              Enterprise-grade AI.
              <br />
              <span className="text-blue-600 italic font-[380]">Rooted entirely in-house.</span>
            </h2>
            <p className="text-[13px] md:text-[14px] font-matter font-light leading-relaxed max-w-xl mx-auto text-stone-500">
              Take ownership of your compute stack. We design and install high-performance serving environments that bypass public cloud APIs, ensuring maximum speed and complete network isolation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            {capabilities.map(({ Icon, badge, title, description }) => (
              <div
                key={title}
                className="feature-card bg-white border border-zinc-200/80 rounded-2xl p-4 lg:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.015)] space-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-shadow duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/8 text-blue-600 shrink-0 mt-0.5">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="inline-block px-1.5 py-0.5 rounded-full text-[9.5px] font-matter font-medium tracking-wide uppercase bg-blue-500/8 text-blue-600 border border-blue-500/15">
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
            <span className="text-xs font-matter font-medium tracking-widest text-blue-600 uppercase">Process Workflow</span>
            <h2 className="text-xl md:text-2.5xl font-season_mix font-[420] text-stone-900 leading-tight">
              A robust deployment framework
              <br />
              <span className="text-blue-600 italic font-[380]">designed for immediate activation.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical connector */}
            <div className="hidden md:block absolute left-[22px] top-6 bottom-6 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-transparent" />

            <div className="flex flex-col gap-4">
              {processSteps.map(({ step, badge, title, desc }) => (
                <div key={step} className="flex gap-4 items-start">
                  {/* Step bubble */}
                  <div className="shrink-0 w-11 h-11 rounded-full bg-blue-500/10 border border-blue-500/15 flex flex-col items-center justify-center z-10">
                    <span className="text-[8.5px] font-matter font-medium text-blue-500 uppercase tracking-widest leading-none">Step</span>
                    <span className="text-[13px] font-season_mix font-[420] text-blue-700 leading-none mt-0.5">{step}</span>
                  </div>
                  {/* Card */}
                  <div className="flex-1 bg-white border border-zinc-200/80 rounded-2xl p-4 lg:p-5 shadow-[0_8px_25px_rgba(0,0,0,0.015)] space-y-1.5">
                    <span className="inline-block px-1.5 py-0.5 rounded-full text-[9.5px] font-matter font-medium tracking-wide uppercase bg-blue-500/8 text-blue-600 border border-blue-500/15">
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
          <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full blur-[125px] opacity-35 pointer-events-none bg-gradient-to-tr from-blue-500 to-transparent" />
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full blur-[150px] opacity-15 pointer-events-none bg-gradient-to-br from-indigo-400 to-transparent" />
          <div className="space-y-3 max-w-md text-center md:text-left z-10">
            <span className="text-blue-400 text-xs font-matter font-medium uppercase tracking-wider">Ready to begin?</span>
            <h2 className="text-lg md:text-2xl font-season_mix font-[420] !text-white leading-snug">
              Reclaim your data. Own your computing power.
            </h2>
            <p className="text-xs md:text-[13px] font-matter font-light !text-zinc-400 leading-relaxed">
              Break free from third-party cloud subscriptions and data privacy concerns. Partner with our infrastructure team to design a secure, high-throughput in-house AI serving cluster.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 z-10 w-full sm:w-auto shrink-0">
            <button className="px-5 py-2.5 bg-white hover:bg-zinc-100 transition-colors text-stone-900 text-xs md:text-[13px] font-matter font-medium rounded-full flex items-center justify-center gap-1.5 whitespace-nowrap">
              Talk to an Infrastructure Architect <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
