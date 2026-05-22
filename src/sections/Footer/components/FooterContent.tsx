import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterColumn } from "@/sections/Footer/components/FooterColumn";
import { Link } from "react-router-dom";

export const FooterContent = () => {
  return (
    <div className="relative max-w-[2000px] mx-auto z-[100]">
      <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-6 pb-6">

        {/* Brand */}
        <div className="shrink-0">
          <FooterBrand />
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 w-full">
          <FooterColumn
            title="Products"
            links={[
              { label: "Founding Legals", href: "/products/founding-legals" },
              { label: "Invoicy", href: "/products/invoicy" },
              { label: "Database Analytics", href: "/products/database-analytics" },
              { label: "Advanced AI Chat", href: "/products/advanced-ai-chat" },
              { label: "Agentic RAG Systems", href: "/products/agentic-rag" },
              { label: "Enterprise Chatbots", href: "/products/enterprise-chatbots" },
            ]}
          />
          <FooterColumn
            title="Specializations"
            links={[
              { label: "On-Premise AI Deployment", href: "/services/on-premise" },
              { label: "Agentic Workflows", href: "/services/agentic-workflows" },
              { label: "Industry-Specific AI", href: "/services/industry-specific-ai" },
              { label: "Intelligent Data Infrastructure", href: "/services/data-infrastructure" },
              { label: "Data Sovereignty Engineering", href: "/services/data-sovereignty" },
            ]}
          />
          <FooterColumn
            title="Company"
            links={[
              { label: "About", href: "/about" },
              { label: "Careers", href: "/careers" },
              { label: "Contact", href: "/contact" },
            ]}
          />
          <FooterColumn
            title="Socials"
            links={[
              { label: "info@arvya.in", href: "mailto:info@arvya.in" },
              { label: "LinkedIn", href: "https://www.linkedin.com/company/arvya-tech-pvt-ltd/" },
            ]}
          />
          <FooterColumn
            title="Legal"
            links={[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
              { label: "Cookies Policy", href: "/cookies-policy" },
            ]}
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-200 pt-3 text-stone-400 text-[12px] flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="font-matter">© 2025 Arvya Tech Private Limited. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/privacy-policy" className="font-matter hover:text-stone-600 transition-colors">Privacy</Link>
          <Link to="/terms-of-service" className="font-matter hover:text-stone-600 transition-colors">Terms</Link>
          <Link to="/cookies-policy" className="font-matter hover:text-stone-600 transition-colors">Cookies</Link>
        </div>
      </div>
    </div>
  );
};
