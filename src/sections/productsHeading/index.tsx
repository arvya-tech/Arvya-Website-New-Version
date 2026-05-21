import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ProductsHeading = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
      id="products"
      ref={sectionRef}
      className="relative box-border max-w-[2000px] w-[88%] mx-auto pt-4 md:pt-8 pb-4 md:pb-6 md:w-[85%]"
    >
      <div className="text-center max-w-5xl mx-auto px-4">
        <h2 className="font-season_mix font-[420] text-stone-900 text-[1.15rem] md:text-[1.65rem] lg:text-[2rem] leading-[1.05] tracking-[-0.015em] whitespace-nowrap">
          Products
        </h2>
      </div>
    </section>
  );
};
