import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MobileNavbarLogo } from "@/sections/Header/components/MobileNavbarLogo";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";

// ---------------------------------------------------------------------------
// Types & Interfaces
// ---------------------------------------------------------------------------
export type SubNavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type MobileNavItem = {
  label: string;
  href?: string;
  children?: SubNavItem[];
};

// ---------------------------------------------------------------------------
// Arvya Tech Navigation Data
// ---------------------------------------------------------------------------
const mobileNavLinks: MobileNavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    children: [
      { label: "Founding Legals", href: "https://foundinglegals.com/", external: true },
      { label: "Invoicy", href: "/products/invoicy" },
      { label: "Database Analytics", href: "/products/analytics" },
      { label: "Advanced AI Chat", href: "/products/ai-chat" },
      { label: "Advanced Agentic RAG", href: "/products/agentic-rag" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "On-Premise AI Deployment", href: "/services/on-premise" },
      { label: "Industry-Specific AI Solutions", href: "/services/industry-specific-ai" },
      { label: "Agentic RAG Systems", href: "/services/agentic-rag" },
      { label: "Enterprise Software Dev", href: "/services/software-dev" },
      { label: "AI Automation", href: "/services/automation" },
      { label: "AI-Powered Analytics", href: "/services/ai-analytics" },
    ],
  },
  { label: "Company", href: "/about" },
  { label: "Careers", href: "/careers" },
];

// ---------------------------------------------------------------------------
// Helper Components
// ---------------------------------------------------------------------------
const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 12 12"
    fill="none"
    className={`transform transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${open ? "rotate-180" : "rotate-0"
      }`}
    aria-hidden="true"
  >
    <path
      d="M2 4L6 8L10 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------
export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const visibleLinks = isHomePage
    ? mobileNavLinks.filter((link) => link.label !== "Home")
    : mobileNavLinks;

  // Lock body scroll when menu is open (Apple-style premium UX)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleSection = (label: string) => {
    setOpenSection(openSection === label ? null : label);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSection(null);
  };

  return (
    <div className="md:hidden relative z-[1000] w-full">
      {/* Header Bar with Glassmorphism */}
      <div className="flex items-center justify-between px-5 py-1 border-b border-zinc-100/50 relative z-20 bg-white/85 backdrop-blur-xl transition-all duration-300">
        <MobileNavbarLogo />
        <MobileMenuButton
          isOpen={isOpen}
          onClick={() => {
            setIsOpen(!isOpen);
            if (isOpen) setOpenSection(null);
          }}
        />
      </div>

      {/* Mobile Menu Dropdown Panel */}
      <div
        className="absolute top-full left-0 w-full bg-white overflow-y-auto overflow-x-hidden border-x border-b border-zinc-200/70 rounded-b-[30px] shadow-[rgba(0,0,0,0.12)_0px_20px_60px_0px]"
        style={{
          maxHeight: isOpen ? "calc(100vh - 100px)" : "0px",
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          transition: "max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease, visibility 0.5s",
        }}
      >
        <nav className="flex flex-col px-5 py-6 gap-y-2 min-h-[calc(100vh-75px)]">

          {/* Navigation Links Mapping */}
          <div className="flex-1 flex flex-col gap-y-1">
            {visibleLinks.map((link) => (
              <div key={link.label} className="border-b border-zinc-100/60 last:border-0">
                {link.children ? (
                  <>
                    <button
                      onClick={() => toggleSection(link.label)}
                      className="w-full flex items-center justify-between text-zinc-900 text-[18.75px] font-[525] tracking-wide px-2 py-4 rounded-xl hover:bg-zinc-50 active:bg-zinc-100 transition-colors duration-200 outline-none"
                      aria-expanded={openSection === link.label}
                    >
                      <span>{link.label}</span>
                      <ChevronIcon open={openSection === link.label} />
                    </button>

                    {/* Sub-menu Accordion Animation */}
                    <div
                      className="overflow-hidden"
                      style={{
                        maxHeight: openSection === link.label ? `${link.children.length * 55}px` : "0px",
                        opacity: openSection === link.label ? 1 : 0,
                        transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
                      }}
                    >
                      <div className="flex flex-col pl-4 pr-2 pb-3 pt-1 gap-y-1">
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            target={child.external ? "_blank" : undefined}
                            rel={child.external ? "noopener noreferrer" : undefined}
                            className="text-zinc-500 text-[17.5px] font-[450] px-4 py-3 rounded-lg hover:bg-violet-50 hover:text-violet-700 transition-all duration-200"
                            onClick={closeMenu}
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="block text-zinc-900 text-[18.75px] font-[525] tracking-wide px-2 py-4 rounded-xl hover:bg-zinc-50 active:bg-zinc-100 transition-colors duration-200 outline-none"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Premium Call to Action Buttons */}
          <div className="flex flex-col gap-y-3 mt-8 mb-6 px-2">
            <a
              href="/login"
              onClick={closeMenu}
              className="text-white font-[580] text-[18.75px] bg-zinc-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_5px_15px_rgba(0,0,0,0.15)] text-center px-6 py-3.5 rounded-full hover:scale-[1.02] active:scale-95 transition-all duration-300"
            >
              Log in
            </a>
            <a
              href="/contact"
              onClick={closeMenu}
              className="text-zinc-900 font-[580] text-[18.75px] bg-zinc-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_1px_2.5px_rgba(0,0,0,0.05)] text-center px-6 py-3.5 rounded-full hover:bg-zinc-200 hover:scale-[1.02] active:scale-95 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>

        </nav>
      </div>
    </div>
  );
};