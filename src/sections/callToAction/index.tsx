import { useEffect, useState, useRef } from "react";

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
      className="relative box-border caret-transparent max-w-[1800px] min-h-[auto] min-w-[auto] outline-[3.75px] w-[76.5%] mb-10 mx-auto md:w-[67.5%] md:mb-0"
    >
      <div className="box-border caret-transparent contents outline-[3.75px]">
        {/* Outer white border frame — reduced by 10% */}
        <div className="bg-white box-border caret-transparent outline-[3.75px] border border-neutral-200 p-2.5 rounded-[45px] border-solid md:p-3.5 md:rounded-[72.5px]">

          {/* Dark gradient card — height reduced from 562.5px to 506.25px (exactly 10%) */}
          <div className="relative items-center bg-[linear-gradient(160deg,rgb(19,18,30)_0%,rgb(30,27,55)_40%,rgb(100,116,180)_100%)] shadow-[rgba(0,0,0,0.05)_0px_0px_0px_1px] box-border caret-transparent flex flex-col justify-end min-h-[506.25px] outline-[3.75px] overflow-hidden rounded-[31.25px] md:rounded-[58.75px]">

            {/* Noise texture overlay */}
            <div className="absolute bg-[url('https://assets.sarvam.ai/tr:f-auto/assets/misc/white-noise.webp')] bg-size-[640px_640px] box-border caret-transparent mix-blend-soft-light opacity-50 outline-[3.75px] pointer-events-none inset-0" />

            {/* ── Headline — top positioning reduced by 10% ── */}
            <div className="absolute text-white box-border caret-transparent outline-[3.75px] text-center w-full z-10 px-6 top-[47.5px] md:top-12">
              <p className="text-base box-border caret-transparent block leading-[1.2] outline-[3.75px] md:text-[27.5px] md:leading-[1.15] font-season_mix font-[420] tracking-[-0.005em]">
                Ready to deploy AI built for your industry?
              </p>
              <p className="text-[13.75px] md:text-[16.25px] text-white/75 font-matter font-light leading-[1.55] mt-2.5 md:mt-3.5 max-w-[600px] mx-auto">
                Tell us your challenge — we&#39;ll map the right solution for your organisation.
              </p>
            </div>

            {/* ── Sri Chakra Background Theme Watermark (Hero-Style) ── */}
            <div className="cta-chakra-bg-wrap">
              {/* Sri Chakra image covering the entire card and rotating on scroll */}
              <div
                className="absolute inset-0 opacity-[0.16] mix-blend-overlay transition-transform duration-100 ease-out"
                style={{
                  backgroundImage: "url('/theme_Ss.png')",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  transform: `rotate(${rotation}deg)`,
                }}
              />
              {/* Radial spotlight gradient to blend edges seamlessly */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at center, rgba(19,18,30,0) 25%, rgba(19,18,30,0.88) 92%)",
                }}
              />
            </div>

            {/* ── CTA Button — height & padding scaled down by 10% ── */}
            <div className="relative flex items-center justify-center z-10 mb-10 md:mb-14">
              <a
                href="/contact"
                className="relative text-blue-950 text-[17.5px] md:text-[20px] font-[580] items-center backdrop-blur-[7.5px] bg-[linear-gradient(rgba(255,255,255,0.62)_0%,rgba(255,255,255,0.28)_100%)] box-border caret-transparent flex justify-center leading-6 min-h-[auto] min-w-[auto] outline-[3.75px] text-nowrap border overflow-hidden px-4.5 py-2 md:px-5 md:py-2.5 rounded-[41943000px] border-solid border-[rgba(255,255,255,0.45)] font-season_mix transition-transform hover:scale-105 active:scale-95 duration-200"
              >
                Get in touch
                <span className="absolute text-base shadow-[rgba(255,255,255,0.55)_0px_0px_5px_0px_inset] box-border caret-transparent block leading-6 outline-[3.75px] pointer-events-none text-nowrap rounded-[41943000px] inset-0" />
              </a>
            </div>

            {/* Inner bottom glow */}
            <div className="absolute shadow-[rgb(165,187,252)_0px_-50px_100px_0px_inset] box-border caret-transparent outline-[3.75px] pointer-events-none rounded-[31.25px] inset-0 md:rounded-[58.75px]" />
          </div>
        </div>
      </div>
    </section>
  );
};