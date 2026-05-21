import { useLocation, Link } from "react-router-dom";
import { type LucideIcon } from "lucide-react";

// ---------- Types (exported so DesktopNavbar can use them) ----------

export type SubItem = {
  Icon?: LucideIcon;
  imageSrc?: string;
  iconBg: string;
  iconColor: string;
  title: string;
  subtitle: string;
  href: string;
  external?: boolean;
  feature?: FeatureCard;
};

export type FeatureCard = {
  title: string;
  description: string;
  href: string;
  gradient: string;
  imageSrc?: string;
  imageFit?: "cover" | "contain";
  caption: string;
};

export type NavLink = {
  label: string;
  href?: string;
  items?: SubItem[];
  feature?: FeatureCard;
};

// ---------- Data ----------

export const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    items: [
      {
        imageSrc: "/Founding_Legals/Founding  Legals.png",
        iconBg: "bg-indigo-50",
        iconColor: "text-indigo-600",
        title: "Founding Legals",
        subtitle: "Legal platform for startups",
        href: "https://foundinglegals.com/",
        external: true,
        feature: {
          title: "Founding Legals",
          description: "India's leading legal platform for startups — from incorporation to compliance, handled end-to-end.",
          href: "https://foundinglegals.com/",
          gradient: "from-indigo-600 via-violet-400 to-cyan-300",
          imageSrc: "/Founding_Legals/Founding_Legals_ui_1.png",
          imageFit: "cover",
          caption: "Legals",
        },
      },
      {
        imageSrc: "/Products_Logo/Invoice_logo.png",
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-600",
        title: "Invoicy",
        subtitle: "Intelligent invoice automation",
        href: "/products/invoicy",
        feature: {
          title: "Invoicy",
          description: "Intelligent invoice automation for modern businesses — extract, validate, and route invoices instantly.",
          href: "/products/invoicy",
          gradient: "from-emerald-500 via-teal-400 to-cyan-300",
          imageSrc: "/Invoicy/Invoicy_ui_ai_agent.png",
          imageFit: "cover",
          caption: "Invoicy",
        },
      },
      {
        imageSrc: "/Products_Logo/Database_Analytics_Logo.png",
        iconBg: "bg-cyan-50",
        iconColor: "text-cyan-600",
        title: "Database Analytics",
        subtitle: "Natural language data intelligence",
        href: "/products/analytics",
        feature: {
          title: "Database Analytics",
          description: "Query your enterprise data in plain English — instant insights without writing a single line of SQL.",
          href: "/products/analytics",
          gradient: "from-cyan-600 via-sky-400 to-blue-300",
          imageSrc: "/arvya tech images/Database analytics.png",
          imageFit: "cover",
          caption: "Analytics",
        },
      },
      {
        imageSrc: "/Products_Logo/Ai_ChatBot_Logo.png",
        iconBg: "bg-violet-50",
        iconColor: "text-violet-600",
        title: "Advanced AI Chat",
        subtitle: "Sovereign conversational AI agents",
        href: "/products/ai-chat",
        feature: {
          title: "Advanced AI Chat",
          description: "Sovereign conversational AI agents for your business — trained on your data, deployed on your infra.",
          href: "/products/ai-chat",
          gradient: "from-violet-600 via-purple-400 to-indigo-300",
          imageSrc: "/arvya tech images/chatbot.png",
          imageFit: "cover",
          caption: "AI Chat",
        },
      },
      {
        imageSrc: "/Products_Logo/Agentic_RAG_Logo.png",
        iconBg: "bg-orange-50",
        iconColor: "text-orange-600",
        title: "Advanced Agentic RAG",
        subtitle: "Autonomous retrieval & reasoning",
        href: "/products/agentic-rag",
        feature: {
          title: "Advanced Agentic RAG",
          description: "Autonomous multi-step retrieval and reasoning — AI that doesn't just answer, it thinks and acts.",
          href: "/products/agentic-rag",
          gradient: "from-orange-500 via-red-400 to-pink-300",
          imageSrc: "/arvya tech images/rag.png",
          imageFit: "cover",
          caption: "RAG",
        },
      },
    ],
    feature: {
      title: "Founding Legals",
      description:
        "India's leading legal platform for startups — from incorporation to compliance, handled end-to-end.",
      href: "https://foundinglegals.com/",
      gradient: "from-indigo-600 via-violet-400 to-cyan-300",
      caption: "Legals",
    },
  },
  {
    label: "Services",
    items: [
      {
        imageSrc: "/Services_Logo/On-premise-AI.png",
        iconBg: "bg-slate-100",
        iconColor: "text-slate-700",
        title: "On-Premise AI Deployment",
        subtitle: "Air-gapped, sovereign infrastructure",
        href: "/services/on-premise",
        feature: {
          title: "On-Premise AI Deployment",
          description: "Deploy sovereign AI entirely within your own data centres — no external API calls, no third-party providers, guaranteed by architecture.",
          href: "/services/on-premise",
          gradient: "from-slate-700 via-slate-500 to-blue-400",
          imageSrc: "/Services_Logo/On-premise-AI.png",
          imageFit: "contain",
          caption: "Infra",
        },
      },
      {
        imageSrc: "/Services_Logo/Agentic_RAG.png",
        iconBg: "bg-violet-50",
        iconColor: "text-violet-600",
        title: "Agentic Workflows",
        subtitle: "Multi-agent orchestration & tools",
        href: "/services/agentic-workflows",
        feature: {
          title: "Agentic Workflows",
          description: "Orchestrate multi-step AI agents with tool use, memory, and branching logic — built for real production workloads.",
          href: "/services/agentic-workflows",
          gradient: "from-violet-600 via-purple-400 to-indigo-300",
          imageSrc: "/Services_Logo/Agentic_RAG.png",
          imageFit: "contain",
          caption: "Agents",
        },
      },
      {
        imageSrc: "/Services_Logo/Industry_specific_ai.png",
        iconBg: "bg-indigo-50",
        iconColor: "text-indigo-600",
        title: "Industry-Specific AI",
        subtitle: "AI tailored to vertical domains",
        href: "/services/industry-specific-ai",
        feature: {
          title: "Industry-Specific AI",
          description: "AI models and pipelines purpose-built for your vertical — legal, finance, healthcare, logistics, and more.",
          href: "/services/industry-specific-ai",
          gradient: "from-zinc-100 via-zinc-50 to-zinc-200/40",
          imageSrc: "/Services_Logo/Industry_specific_ai.png",
          imageFit: "contain",
          caption: "Domain",
        },
      },
      {
        imageSrc: "/Services_Logo/Data_Infra.png",
        iconBg: "bg-cyan-50",
        iconColor: "text-cyan-600",
        title: "Intelligent Data Infrastructure",
        subtitle: "Sovereign enterprise storage & ingestion",
        href: "/services/data-infrastructure",
        feature: {
          title: "Intelligent Data Infrastructure",
          description: "Enterprise-grade data pipelines, vector stores, and semantic search — all running inside your sovereign boundary.",
          href: "/services/data-infrastructure",
          gradient: "from-cyan-600 via-sky-400 to-blue-300",
          imageSrc: "/Services_Logo/Data_Infra.png",
          imageFit: "contain",
          caption: "Data",
        },
      },
      {
        imageSrc: "/Services_Logo/Data_Sov_Eng.png",
        iconBg: "bg-amber-50",
        iconColor: "text-amber-600",
        title: "Data Sovereignty Engineering",
        subtitle: "Local compute & privacy compliance",
        href: "/services/data-sovereignty",
        feature: {
          title: "Data Sovereignty Engineering",
          description: "Engineering-first approach to data residency, on-device compute, and privacy compliance — built for regulated industries.",
          href: "/services/data-sovereignty",
          gradient: "from-amber-500 via-orange-400 to-red-300",
          imageSrc: "/Services_Logo/Data_Sov_Eng.png",
          imageFit: "contain",
          caption: "Sovereignty",
        },
      },
    ],
    feature: {
      title: "End-to-End AI Services",
      description:
        "From on-premise deployment to full agentic automation — our engineers build and ship production-grade AI with you.",
      href: "/contact",
      gradient: "from-cyan-500 via-indigo-400 to-violet-400",
      caption: "Services",
    },
  },
  {
    label: "Company",
    items: [
      {
        imageSrc: "/Company_Dropdown_Logo/Arvya_Logo.png",
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
        title: "About Arvya",
        subtitle: "Our story & mission",
        href: "/about",
        feature: {
          title: "About Arvya",
          description: "Discover the vision, values, and people building India's sovereign AI platform.",
          href: "/about",
          gradient: "from-blue-600 via-indigo-400 to-violet-300",
          imageSrc: "/Company_Dropdown_Logo/Arvya_Logo.png",
          imageFit: "contain",
          caption: "Arvya",
        },
      },
      {
        imageSrc: "/Company_Dropdown_Logo/Careers_Logo.svg",
        iconBg: "bg-amber-50",
        iconColor: "text-amber-600",
        title: "Careers",
        subtitle: "Join our growing team",
        href: "/careers",
        feature: {
          title: "Careers at Arvya",
          description: "Work on hard problems in AI infrastructure, sovereign compute, and enterprise products. Join a team that ships.",
          href: "/careers",
          gradient: "from-amber-400 via-orange-300 to-pink-300",
          imageSrc: "/Company_Dropdown_Logo/Careers_Logo.svg",
          imageFit: "contain",
          caption: "Careers",
        },
      },
    ],
    feature: {
      title: "A New Identity for Arvya",
      description:
        "Discover the vision, values, and people behind India's sovereign AI platform.",
      href: "/about",
      gradient: "from-orange-400 via-pink-300 to-indigo-400",
      caption: "Brand",
    },
  },
];

// ---------- Nav buttons row only ----------

interface Props {
  activeMenu: string | null;
  onEnter: (label: string) => void;
  onLeave: () => void;
}

export const DesktopNavLinks = ({ activeMenu, onEnter, onLeave }: Props) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const visibleLinks = isHomePage
    ? navLinks.filter((link) => link.label !== "Home")
    : navLinks;

  return (
    <div className="flex items-center gap-x-8 lg:gap-x-10">
      {visibleLinks.map((link) => (
        <div
          key={link.label}
          className="relative py-3"
          onMouseEnter={() => (link.items ? onEnter(link.label) : onLeave())}
        >
          {link.href && !link.items ? (
            <Link
              to={link.href}
              className={`nav-link-btn${activeMenu === link.label ? " nav-link-btn--active" : ""
                }`}
            >
              {link.label}
            </Link>
          ) : (
            <button
              type="button"
              aria-expanded={activeMenu === link.label}
              className={`nav-link-btn${activeMenu === link.label ? " nav-link-btn--active" : ""
                }`}
            >
              {link.label}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};
