import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IMG = "/arvya%20tech%20images";

type ProductItem = {
  id: string;
  tab: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  exploreLink?: string;
  demoLink?: string;
};

const products: ProductItem[] = [
  {
    id: "founding-legals",
    tab: "Founding Legals",
    tag: "Legal AI",
    title: "Founding Legals",
    description:
      "AI-powered legal document generation and review. Draft, analyse, and negotiate contracts at a fraction of the time — trained on the language of law.",
    image: "/Founding_Legals/Founding_legals_UI.png",
    exploreLink: "https://foundinglegals.com/",
    demoLink: "https://foundinglegals.com/contact",
  },
  {
    id: "invoicy",
    tab: "Invoicy",
    tag: "Finance Ops",
    title: "Invoicy",
    description:
      "End-to-end invoice and financial document automation. Extract, validate, and reconcile data from any document format with zero manual intervention.",
    image: "/Invoicy/Invoicy_ui_1.png",
    exploreLink: "/products/invoicy",
  },
  {
    id: "db-analytics",
    tab: "Database Analytics",
    tag: "Data Intelligence",
    title: "Database Analytics",
    description:
      "Ask complex questions about your enterprise data in plain language. Our agents write the queries, analyse the results, and surface actionable insights — no SQL required.",
    image: `${IMG}/Database%20Analytics%20dashboord.png`,
    exploreLink: "/products/analytics",
  },
  {
    id: "ai-chat",
    tab: "Advanced AI Chat",
    tag: "Conversational AI",
    title: "Advanced AI Chat",
    description:
      "Domain-aware AI deployed on your own knowledge base and infrastructure. On-premise, secure, and tuned to your organisation's language and processes.",
    image: `${IMG}/Advanced%20Ai%20Chat%20Bot.png`,
    exploreLink: "/products/ai-chat",
  },
  {
    id: "agentic-rag",
    tab: "Agentic RAG",
    tag: "Autonomous Agents",
    title: "Agentic RAG",
    description:
      "Next-generation retrieval that doesn't just find information — it reasons through it, connects disparate data points, and executes the next steps autonomously.",
    image: `${IMG}/Agentic%20RAG.png`,
    exploreLink: "/products/agentic-rag",
  },
];

export const ProductShowcaseSection = () => {
  const [activeId, setActiveId] = useState(products[0].id);
  const sectionRef = useRef<HTMLElement>(null);

  const active = products.find((p) => p.id === activeId) ?? products[0];

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="what-we-do"
      ref={sectionRef}
      className="relative box-border max-w-[2000px] w-[88%] mx-auto pt-2 pb-10 md:pt-4 md:pb-14 md:w-[85%]"
    >
      <div className="mt-0">
        {/* ── Desktop tab bar ── */}
        <div className="hidden md:flex justify-center w-full">
          <div className="relative inline-flex gap-x-1">
            {products.map((product) => (
              <button
                key={product.id}
                type="button"
                role="tab"
                aria-selected={activeId === product.id}
                onClick={() => setActiveId(product.id)}
                className={[
                  "relative whitespace-nowrap text-[18.75px] font-[500] bg-transparent leading-7",
                  "text-center pt-0 pb-3 px-4 transition-colors duration-200",
                  activeId === product.id
                    ? "text-[#3f3f46]"
                    : "text-stone-400 hover:text-[#3f3f46]",
                ].join(" ")}
              >
                {product.tab}
                {activeId === product.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── Mobile select ── */}
        <div className="relative md:hidden w-full mb-6">
          <select
            aria-label="Select product"
            value={activeId}
            onChange={(e) => setActiveId(e.target.value)}
            className="w-full appearance-none bg-white border border-zinc-200 text-stone-900 font-[525] text-base px-4 py-3 rounded-2xl outline-none pr-10"
          >
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.tab}
              </option>
            ))}
          </select>
          <svg
            className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* ── Content panel ── */}
        <div
          key={activeId}
          className="mt-0 md:mt-8 bg-white rounded-[2rem] md:rounded-[2.5rem] border border-zinc-200/80 overflow-hidden shadow-[0_25px_75px_rgba(0,0,0,0.04)] animate-in fade-in duration-500"
        >
          <div className="grid md:grid-cols-2">
            {/* Text */}
            <div className="flex flex-col justify-center p-6 md:p-10 space-y-4">
              <span className="text-blue-600 text-[13.75px] font-bold uppercase tracking-widest">
                {active.tag}
              </span>
              <h3 className="font-season_mix font-[450] text-[1.15rem] md:text-[1.65rem] lg:text-[2rem] leading-[1.08] tracking-[-0.02em] text-stone-900">
                {active.title}
              </h3>
              <p className="font-matter text-[16.25px] md:text-[17.5px] leading-[1.7] text-stone-500 max-w-[525px]">
                {active.description}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {active.exploreLink ? (
                  active.exploreLink.startsWith("http") ? (
                    <a
                      href={active.exploreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-zinc-900 text-white text-sm font-[525] rounded-full hover:bg-zinc-800 transition-all duration-200 hover:shadow-lg active:scale-95 inline-flex items-center justify-center"
                    >
                      Explore Product
                    </a>
                  ) : (
                    <Link
                      to={active.exploreLink}
                      className="px-6 py-3 bg-zinc-900 text-white text-sm font-[525] rounded-full hover:bg-zinc-800 transition-all duration-200 hover:shadow-lg active:scale-95 inline-flex items-center justify-center"
                    >
                      Explore Product
                    </Link>
                  )
                ) : (
                  <button className="px-6 py-3 bg-zinc-900 text-white text-sm font-[525] rounded-full hover:bg-zinc-800 transition-all duration-200 hover:shadow-lg active:scale-95 inline-flex items-center justify-center">
                    Explore Product
                  </button>
                )}

                {active.demoLink ? (
                  <a
                    href={active.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-stone-900 text-sm font-[525] border border-zinc-200 rounded-full hover:bg-zinc-50 transition-all duration-200 active:scale-95 inline-flex items-center justify-center"
                  >
                    Request Demo
                  </a>
                ) : (
                  <button className="px-6 py-3 bg-white text-stone-900 text-sm font-[525] border border-zinc-200 rounded-full hover:bg-zinc-50 transition-all duration-200 active:scale-95 inline-flex items-center justify-center">
                    Request Demo
                  </button>
                )}
              </div>
            </div>

            {/* Image */}
            <div className={`relative h-[340px] md:h-auto min-h-[403.75px] overflow-hidden transition-all duration-300 ${(active.id === "founding-legals" || active.id === "invoicy") ? "bg-zinc-50/50 flex items-center justify-center p-3 md:p-6" : "bg-zinc-50"
              }`}>
              {(active.id === "founding-legals" || active.id === "invoicy") ? (
                /* Premium macOS Browser Window Mockup */
                <div className="w-full h-full max-h-[510px] aspect-[4/3] md:aspect-auto bg-white border border-zinc-200/70 rounded-[1rem] shadow-[0_25px_62.5px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col transition-all duration-500">
                  {/* Window Title Bar */}
                  <div className="flex items-center justify-between h-7 px-3 bg-zinc-50 border-b border-zinc-200/50 shrink-0 select-none">
                    {/* Mac Traffic Lights */}
                    <div className="flex space-x-1">
                      <span className="w-2 h-2 rounded-full bg-[#FF5F56] border border-[#E0443E]/50" />
                      <span className="w-2 h-2 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
                      <span className="w-2 h-2 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
                    </div>
                    {/* URL Bar */}
                    <div className="h-4 w-48 max-w-[50%] rounded bg-zinc-100/80 border border-zinc-200/40 text-[11.25px] text-zinc-400 flex items-center justify-center font-matter font-light tracking-wide">
                      {active.id === "founding-legals" ? "foundinglegals.com/agreements" : "invoicy.ai/dashboard"}
                    </div>
                    {/* Spacer */}
                    <div className="w-12" />
                  </div>
                  {/* Browser Content Frame */}
                  <div className="flex-1 bg-white relative overflow-hidden flex items-center justify-center p-2">
                    <img
                      key={active.image}
                      src={active.image}
                      alt={active.title}
                      loading="lazy"
                      className="w-full h-full object-contain transition-opacity duration-500"
                    />
                  </div>
                </div>
              ) : (
                <>
                  <img
                    key={active.image}
                    src={active.image}
                    alt={active.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                  />
                  <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white/20 to-transparent hidden md:block" />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
