import { useEffect, useRef } from "react";
import gsap from "gsap";
import { HeroContent } from "@/sections/hero/components/HeroContent";

export const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-animate",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.14,
          ease: "power2.out",
          delay: 0.2,
        },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative box-border caret-transparent flex flex-col items-center justify-center outline-[3.75px] overflow-hidden min-h-screen pt-20 md:pt-24"
    >
      {/* Top fade — lets the frosted header float cleanly over the gradient */}
      <div className="absolute bg-[linear-gradient(to_bottom,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)] box-border caret-transparent h-28 w-full z-10 left-0 top-0 pointer-events-none" />

      {/* ── Gradient backdrop matching brand palette ──
          Colors: White base · Warm peach/orange glow (center) ·
                  Soft mint-green tones (right) · Navy-cyan haze (left/edges)
          Reference: Sarvam-style warm spotlight on cool-lavender field
      */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-full min-h-screen">

        {/* 1. Base Canvas: soft blend of indigo, purple, and green */}
        <div className="absolute inset-0 bg-[linear-gradient(175deg,rgba(238,242,255,0.85)_0%,rgba(243,232,255,0.6)_35%,rgba(240,253,244,0.4)_65%,rgba(255,255,255,0)_100%)]" />

        {/* 2. Centre: rich blue radial glow */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[-4%] h-[600px] w-[1125px] max-w-[130%] rounded-[100%] blur-[100px] opacity-70
          bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.55)_0%,rgba(59,130,246,0.32)_30%,rgba(147,197,253,0.15)_58%,rgba(255,255,255,0)_72%)]" />

        {/* 3. Left arc: deep purple spotlight */}
        <div className="absolute left-[-8%] top-[5%] h-[625px] w-[725px] rounded-full blur-[125px] opacity-55
          bg-[radial-gradient(circle,rgba(168,85,247,0.38)_0%,rgba(139,92,246,0.20)_40%,rgba(216,180,254,0.06)_68%,rgba(255,255,255,0)_82%)]" />

        {/* 4. Right arc: fresh glowing emerald/mint green spotlight */}
        <div className="absolute right-[-10%] top-[12%] h-[600px] w-[750px] rounded-full blur-[137.5px] opacity-50
          bg-[radial-gradient(circle,rgba(52,211,153,0.35)_0%,rgba(16,185,129,0.18)_42%,rgba(209,250,229,0.06)_68%,rgba(255,255,255,0)_82%)]" />

        {/* 5. Centre bloom: soft lavender-blue highlight */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[8%] h-[400px] w-[875px] max-w-[110%] rounded-full blur-[112.5px] opacity-40
          bg-[radial-gradient(ellipse_at_center,rgba(216,180,254,0.40)_0%,rgba(186,230,253,0.22)_45%,rgba(255,255,255,0)_72%)]" />

        {/* 6. theme.png — textured pattern overlaid and blended with the gradient */}
        <div
          className="absolute inset-0 mix-blend-overlay opacity-[0.18] pointer-events-none"
          style={{
            backgroundImage: "url('/theme.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* 7. Bottom fade to white */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]" />
      </div>

      <HeroContent />
    </section>
  );
};
