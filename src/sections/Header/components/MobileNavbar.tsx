import { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
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
    className={`transform transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] flex-shrink-0 ${open ? "rotate-180" : "rotate-0"
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
  const [headerHeight, setHeaderHeight] = useState(60);
  const headerBarRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const visibleLinks = isHomePage
    ? mobileNavLinks.filter((link) => link.label !== "Home")
    : mobileNavLinks;

  // Measure header bar height so dropdown anchors perfectly below it
  useEffect(() => {
    const measure = () => {
      if (headerBarRef.current) {
        const rect = headerBarRef.current.getBoundingClientRect();
        setHeaderHeight(rect.bottom);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Lock body scroll when menu is open — Lenis-compatible approach
  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("lenis-stopped");
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.documentElement.classList.remove("lenis-stopped");
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.documentElement.classList.remove("lenis-stopped");
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
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
      {/* Header Bar */}
      <div
        ref={headerBarRef}
        className="flex items-center justify-between px-4 py-2.5 relative z-20"
      >
        <MobileNavbarLogo />
        <MobileMenuButton
          isOpen={isOpen}
          onClick={() => {
            setIsOpen(!isOpen);
            if (isOpen) setOpenSection(null);
          }}
        />
      </div>

      {/* Mobile Menu Dropdown — fixed to viewport, starts exactly where header ends */}
      {isOpen && (
        <div
          className="fixed left-0 right-0 bottom-0 z-[999] bg-black/20 backdrop-blur-sm"
          style={{ top: `${headerHeight}px` }}
          onClick={closeMenu}
        />
      )}
      <div
        className="fixed left-0 right-0 z-[9999] overflow-hidden"
        style={{
          top: `${headerHeight}px`,
          maxHeight: isOpen ? `calc(100dvh - ${headerHeight}px)` : "0px",
          transition: "max-height 0.45s cubic-bezier(0.4,0,0.2,1)",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        <div
          className="mx-3 bg-white border border-zinc-200/80 rounded-b-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.14)] overflow-y-auto overflow-x-hidden"
          style={{
            maxHeight: `calc(100dvh - ${headerHeight + 12}px)`,
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "translateY(0)" : "translateY(-8px)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col px-4 pt-4 pb-6 gap-y-1">

            {/* Navigation Links */}
            <div className="flex flex-col gap-y-0.5">
              {visibleLinks.map((link) => (
                <div key={link.label} className="border-b border-zinc-100 last:border-0">
                  {link.children ? (
                    <>
                      <button
                        onClick={() => toggleSection(link.label)}
                        className="w-full flex items-center justify-between text-zinc-900 text-[17px] font-[520] tracking-wide px-2 py-3.5 rounded-xl hover:bg-zinc-50 active:bg-zinc-100 transition-colors duration-150 outline-none"
                        aria-expanded={openSection === link.label}
                      >
                        <span>{link.label}</span>
                        <ChevronIcon open={openSection === link.label} />
                      </button>

                      {/* Sub-menu Accordion */}
                      <div
                        className="overflow-hidden"
                        style={{
                          maxHeight: openSection === link.label ? `${link.children.length * 52}px` : "0px",
                          opacity: openSection === link.label ? 1 : 0,
                          transition: "max-height 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.28s ease",
                        }}
                      >
                        <div className="flex flex-col pl-3 pr-2 pb-2 pt-0.5 gap-y-0.5">
                          {link.children.map((child) => (
                            child.external ? (
                              <a
                                key={child.label}
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-zinc-500 text-[15.5px] font-[440] px-3 py-2.5 rounded-lg hover:bg-violet-50 hover:text-violet-700 transition-all duration-150"
                                onClick={closeMenu}
                              >
                                <span className="w-1 h-1 rounded-full bg-zinc-300 flex-shrink-0" />
                                {child.label}
                              </a>
                            ) : (
                              <Link
                                key={child.label}
                                to={child.href}
                                className="flex items-center gap-2 text-zinc-500 text-[15.5px] font-[440] px-3 py-2.5 rounded-lg hover:bg-violet-50 hover:text-violet-700 transition-all duration-150"
                                onClick={closeMenu}
                              >
                                <span className="w-1 h-1 rounded-full bg-zinc-300 flex-shrink-0" />
                                {child.label}
                              </Link>
                            )
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    link.href && (
                      <Link
                        to={link.href}
                        className="block text-zinc-900 text-[17px] font-[520] tracking-wide px-2 py-3.5 rounded-xl hover:bg-zinc-50 active:bg-zinc-100 transition-colors duration-150 outline-none"
                        onClick={closeMenu}
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-y-2.5 mt-5 mb-2 px-1">
              <Link
                to="/login"
                onClick={closeMenu}
                className="block text-white font-[600] text-[16px] bg-zinc-900 text-center px-6 py-3.5 rounded-full hover:bg-zinc-800 active:scale-95 transition-all duration-200 shadow-[0_4px_14px_rgba(0,0,0,0.2)]"
              >
                Log in
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block text-zinc-800 font-[600] text-[16px] bg-zinc-100 text-center px-6 py-3.5 rounded-full hover:bg-zinc-200 active:scale-95 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>

          </nav>
        </div>
      </div>
    </div>
  );
};