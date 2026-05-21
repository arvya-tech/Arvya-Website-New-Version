import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { CareersPage } from "@/pages/CareersPage";
import { ContactPage } from "@/pages/ContactPage";
import { Chatbot } from "./components/Chatbot";
import { InvoicyPage } from "@/pages/InvoicyPage";
import { AnalyticsPage } from "@/pages/AnalyticsPage";
import { AiChatPage } from "@/pages/AiChatPage";
import { AgenticRagPage } from "@/pages/AgenticRagPage";
import { OnPremisePage } from "@/pages/services/OnPremisePage";
import { IndustrySpecificAiPage } from "@/pages/services/IndustrySpecificAiPage";
import { AgenticWorkflowsPage } from "@/pages/services/AgenticWorkflowsPage";
import { DataInfrastructurePage } from "@/pages/services/DataInfrastructurePage";
import { DataSovereigntyPage } from "@/pages/services/DataSovereigntyPage";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "@/pages/TermsOfServicePage";
import { CookiesPolicyPage } from "@/pages/CookiesPolicyPage";
import { CookieConsentBanner } from "./components/CookieConsentBanner";

gsap.registerPlugin(ScrollTrigger);

// Scroll to top instantly on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

// Centralized Browser Tab Title Manager
function TitleManager() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = "Arvya Tech | India's Full-Stack Sovereign AI Platform";

    if (path === "/") {
      title = "Arvya Tech | India's Full-Stack Sovereign AI Platform";
    } else if (path === "/about") {
      title = "About Us | Arvya Tech";
    } else if (path === "/products/invoicy") {
      title = "Invoicy | Arvya Tech";
    } else if (path === "/products/analytics" || path === "/products/database-analytics") {
      title = "Database Analytics | Arvya Tech";
    } else if (path === "/products/ai-chat" || path === "/products/advanced-ai-chat") {
      title = "Advanced AI Chat | Arvya Tech";
    } else if (path === "/products/agentic-rag") {
      title = "Agentic RAG | Arvya Tech";
    } else if (path === "/services/on-premise") {
      title = "On-Premise AI Deployment | Arvya Tech";
    } else if (path === "/services/industry-specific-ai") {
      title = "Industry-Specific AI Solutions | Arvya Tech";
    } else if (path === "/services/agentic-workflows") {
      title = "Agentic Workflows | Arvya Tech";
    } else if (path === "/services/data-infrastructure") {
      title = "Intelligent Data Infrastructure | Arvya Tech";
    } else if (path === "/services/data-sovereignty") {
      title = "Data Sovereignty Engineering | Arvya Tech";
    }

    document.title = title;
  }, [location]);

  return null;
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,             // Butter-smooth cinematic damping on desktop
      syncTouch: false,       // Allows native, highly-optimized hardware touch scrolling on mobile!
      wheelMultiplier: 1.0,   // Perfect mousewheel response
      smoothWheel: true,
      orientation: "vertical",
      gestureOrientation: "vertical",
    });

    // Expose lenis globally so MobileNavbar can stop/start it
    (window as unknown as Record<string, unknown>).__lenis = lenis;

    // Connect ScrollTrigger updates directly to Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // Frame-symmetrical GSAP integration: drive Lenis updates using GSAP's optimized ticker cycle
    const tickHandler = (time: number) => {
      lenis.raf(time * 1000); // lenis.raf expects milliseconds
    };
    gsap.ticker.add(tickHandler);
    
    // Deactivate lag smoothing to ensure instant trigger responses
    gsap.ticker.lagSmoothing(0);

    const refreshId = window.setTimeout(() => ScrollTrigger.refresh(), 250);

    return () => {
      window.clearTimeout(refreshId);
      gsap.ticker.remove(tickHandler);
      lenis.destroy();
      delete (window as unknown as Record<string, unknown>).__lenis;
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <TitleManager />
      <div className="min-h-screen flex flex-col relative bg-white">
        {/* Main Content Area (slides over the footer) */}
        <div className="flex-1 flex flex-col bg-zinc-50 relative z-20 shadow-[0_12.5px_50px_rgba(0,0,0,0.08)]">
          <Header />
          <Routes>
            {/* Main pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Product pages */}
            <Route path="/products/invoicy" element={<InvoicyPage />} />
            <Route path="/products/analytics" element={<AnalyticsPage />} />
            <Route path="/products/database-analytics" element={<AnalyticsPage />} />
            <Route path="/products/ai-chat" element={<AiChatPage />} />
            <Route path="/products/advanced-ai-chat" element={<AiChatPage />} />
            <Route path="/products/agentic-rag" element={<AgenticRagPage />} />

            {/* Service pages */}
            <Route path="/services/on-premise" element={<OnPremisePage />} />
            <Route path="/services/industry-specific-ai" element={<IndustrySpecificAiPage />} />
            <Route path="/services/agentic-workflows" element={<AgenticWorkflowsPage />} />
            <Route path="/services/data-infrastructure" element={<DataInfrastructurePage />} />
            <Route path="/services/data-sovereignty" element={<DataSovereigntyPage />} />

            {/* Legal pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/cookies-policy" element={<CookiesPolicyPage />} />
          </Routes>
        </div>

        {/* Footer Area (stable/fixed reveal effect) */}
        <Footer />
        
        {/* Persistent Chatbot */}
        <Chatbot />

        {/* Cookie Consent Banner */}
        <CookieConsentBanner />
      </div>
    </BrowserRouter>
  );
}
