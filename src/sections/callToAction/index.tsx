import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export const CallToActionSection = () => {
  const [rotation, setRotation] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Calculate viewport entry to exit progress
      const scrollPercent = (windowHeight - elementTop) / (windowHeight + elementHeight);
      const clampedPercent = Math.max(0, Math.min(1, scrollPercent));
      
      // Rotate between -15 and +15 degrees
      const angle = (clampedPercent - 0.5) * 30;
      setRotation(angle);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative box-border caret-transparent max-w-[1800px] mb-10 mx-auto w-[88%] md:w-[67.5%] md:mb-0"
    >
      <div className="box-border caret-transparent contents outline-[3.75px]">
        {/* Outer white border frame */}
        <div className="bg-white box-border border border-neutral-200 p-2.5 rounded-[36px] md:p-3.5 md:rounded-[56px] shadow-sm">

          {/* Dark gradient card — responsive centered flex column */}
          <div className="relative flex flex-col items-center justify-between min-h-[440px] md:min-h-[480px] p-8 md:p-14 overflow-hidden rounded-[28px] md:rounded-[44px] bg-[linear-gradient(160deg,rgb(19,18,30)_0%,rgb(30,27,55)_40%,rgb(80,92,145)_100%)] shadow-inner">

            {/* Noise texture overlay */}
            <div className="absolute bg-[url('https://assets.sarvam.ai/tr:f-auto/assets/misc/white-noise.webp')] bg-size-[640px_640px] mix-blend-soft-light opacity-40 pointer-events-none inset-0" />

            {/* ── Headline — clean flow, responsive text sizes ── */}
            <div className="relative z-10 text-center max-w-[640px] mx-auto flex flex-col gap-3">
              <h2 className="text-xl sm:text-2xl md:text-[28px] leading-[1.2] font-season_mix font-[420] text-white tracking-[-0.005em]">
                Ready to deploy AI built for your industry?
              </h2>
              <p className="text-[13.5px] sm:text-[14.5px] md:text-[16px] text-white/75 font-matter font-light leading-[1.55] max-w-[540px] mx-auto">
                Tell us your challenge — we&#39;ll map the right solution for your organisation.
              </p>
            </div>

            {/* ── Sri Chakra Background Theme Watermark (Hero-Style) ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {/* Sri Chakra image zoomed and centered to focus purely on the mandala and push stars out */}
              <div
                className="absolute inset-0 opacity-[0.16] mix-blend-overlay transition-transform duration-100 ease-out"
                style={{
                  backgroundImage: "url('/theme_Ss.png')",
                  backgroundSize: "165%", // Zoomed to focus purely on central chakra and crop corner stars
                  backgroundPosition: "center 45%",
                  backgroundRepeat: "no-repeat",
                  transform: `rotate(${rotation}deg)`,
                }}
              />
              {/* Dual-layered radial & linear gradient to fully mask outer areas and bleed beautifully */}
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(19,18,30,0.85)_75%),linear-gradient(to_bottom,transparent_60%,rgba(19,18,30,0.95)_100%)]"
              />
            </div>

            {/* ── CTA Button ── */}
            <div className="relative z-10 w-full flex justify-center mt-6">
              <Link
                to="/contact"
                className="relative text-blue-950 text-[15.5px] sm:text-[16.5px] md:text-[18px] font-[580] items-center backdrop-blur-[7.5px] bg-white/75 hover:bg-white transition-all duration-300 hover:scale-105 active:scale-95 px-6 py-2.5 md:px-8 md:py-3.5 rounded-full border border-white/40 shadow-lg font-season_mix"
              >
                Get in touch
              </Link>
            </div>

            {/* Inner bottom glow overlay */}
            <div className="absolute shadow-[rgb(165,187,252)_0px_-50px_100px_0px_inset] pointer-events-none rounded-[28px] md:rounded-[44px] inset-0 opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
};