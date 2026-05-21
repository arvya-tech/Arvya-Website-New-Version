import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroSection } from "@/sections/hero";
import { SpecializationsSection } from "@/sections/specializations";
import { ProductsHeading } from "@/sections/productsHeading";
import { ProductShowcaseSection } from "@/sections/productShowcase";
import { CallToActionSection } from "@/sections/callToAction";
import { CoreCapabilitiesSection } from "@/sections/coreCapabilities";
import { DeploymentOptionsSection } from "@/sections/deploymentOptions";

gsap.registerPlugin(ScrollTrigger);

const REVEAL_SELECTOR = [
  "h1",
  "h2",
  "h3",
  "h4",
  "p",
  ".reveal-item",
  ".reveal-card",
  "[data-reveal]",
].join(", ");

export const HomePage = () => {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mainRef.current) return;

    const ctx = gsap.context(() => {
      // Legacy .gsap-reveal cascade (used by CtaSection wrapper)
      const reveals = gsap.utils.toArray<HTMLElement>(".gsap-reveal");
      reveals.forEach((wrapper) => {
        gsap.set(wrapper, { opacity: 1, visibility: "visible" });

        const items = gsap.utils
          .toArray<HTMLElement>(REVEAL_SELECTOR, wrapper)
          .filter((el) => el.closest(".gsap-reveal") === wrapper);

        if (items.length === 0) {
          gsap.fromTo(
            wrapper,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: wrapper,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            },
          );
          return;
        }

        gsap.fromTo(
          items,
          { opacity: 0, y: 36, filter: "blur(7.5px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: wrapper,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          },
        );
      });

      // Soft cascade for .reveal-item inside self-animating sections
      const selfAnimSections = gsap.utils.toArray<HTMLElement>(
        "[data-self-anim]",
      );
      selfAnimSections.forEach((wrapper) => {
        const items = gsap.utils.toArray<HTMLElement>(
          ".reveal-item",
          wrapper,
        );
        if (!items.length) return;
        gsap.fromTo(
          items,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.09,
            scrollTrigger: {
              trigger: wrapper,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      });

      // Hero parallax blobs
      const heroBlobs = gsap.utils.toArray<HTMLElement>(
        "section [data-hero-blob]",
      );
      heroBlobs.forEach((blob, i) => {
        gsap.to(blob, {
          yPercent: 12 + i * 4,
          ease: "none",
          scrollTrigger: {
            trigger: blob.closest("section") || blob,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      });

      ScrollTrigger.refresh();
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={mainRef}
      className="relative bg-zinc-50 box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] min-w-[auto] outline-[3.75px] z-[100]"
    >
      <div className="bg-zinc-50 box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3.75px] w-full mx-auto">
        <HeroSection />

        <ProductsHeading />

        <div data-self-anim>
          <ProductShowcaseSection />
        </div>

        <div data-self-anim>
          <SpecializationsSection />
        </div>

        <div data-self-anim className="mt-16 md:mt-24">
          <CoreCapabilitiesSection />
        </div>

        <div data-self-anim className="mt-2 md:mt-4">
          <DeploymentOptionsSection />
        </div>

        <div className="gsap-reveal mt-24 md:mt-32">
          <CallToActionSection />
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-10 md:h-16 w-full" />
    </main>
  );
};
