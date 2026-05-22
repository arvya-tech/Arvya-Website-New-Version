import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const specializations = [
  { title: "On-Premise AI Deployment", description: "Air-gapped, sovereign infrastructure — your data never leaves your walls. Designed for regulated industries with full compliance and rollback documentation.", path: "/services/on-premise" },
  { title: "Agentic Workflows", description: "Autonomous multi-step AI pipelines that reason, retrieve, and act. Built for real business processes, orchestrated entirely within your environment.", path: "/services/agentic-workflows" },
  { title: "Industry-Specific AI Solutions", description: "Models and systems trained on your industry's language, regulations, and data — purpose-built for domains where accuracy and compliance are non-negotiable.", path: "/services/industry-specific-ai" },
  { title: "Intelligent Data Infrastructure", description: "Real-time intelligence over your data. Dashboards, anomaly detection, and forecasting engineered for decision-makers who need answers, not noise.", path: "/services/data-infrastructure" },
  { title: "Data Sovereignty Engineering", description: "Full ownership of your data pipelines, storage, and processing. Designed to meet the strictest regulatory standards with zero third-party dependency.", path: "/services/data-sovereignty" },
];

/*
 * ALL 5 SVG LAYERS rendered inside one master viewBox="0 0 912 911".
 * Visual centre of the complete Sri Chakra design = (464, 456).
 * Each layer is translated so its own visual centre maps to (464, 456).
 *
 * Layer 1  – outermost (912×911 viewBox, already centred): tx=0,   ty=0
 * Layer 2  – 2nd ring  (545×680,  centre ≈ 271, 339):     tx=193, ty=117
 * Layer 3  – 3rd ring  (302×474,  centre ≈ 142, 237):     tx=322, ty=219
 * Layer 4  – 4th ring  (210×261,  centre ≈ 103, 129):     tx=361, ty=327
 * Layer 5  – innermost (98×91,    bindu  ≈ 45,  36):      tx=419, ty=420
 */
const LAYERS = [
  {
    tx: 0, ty: 0,
    paths: [
      "M460.774 908.902L375.586 781.505L551.074 781.223Z",
      "M269.346 781.923L307.488 689.242L375.398 781.869Z",
      "M163.068 688.704L222.525 573.746L307.523 689.25Z",
      "M174.707 220.124L299.531 220.328L225.525 318.326Z",
      "M235.029 108.272L383.511 109.756L299.509 220.258Z",
      "M462.991 3.79335L542.003 108.701L383.504 109.699Z",
      "M690.586 108.796L627.568 220.814L542.068 108.814Z",
      "M751.085 220.275L701.586 317.273L627.573 220.772Z",
      "M890.586 317.275L797.586 444.773L701.576 317.286Z",
      "M703.564 573.195L797.6 444.653L896.084 573.725Z",
      "M618.113 689.24L703.635 573.218L764.087 689.229Z",
      "M551.096 781.237L618.084 689.252L657.586 781.229Z",
      "M31.5111 573.236L128.46 444.668L222.525 573.736Z",
      "M30.9948 316.485L128.348 444.946L225.503 318.277L225.5 318.276L225.005 317.278L223.999 317.281L184.339 316.477L128.839 316.485Z",
    ],
  },
  {
    tx: 193, ty: 117,
    paths: [
      "M270.429 2.7175L328.93 113.713L212.927 113.713Z",
      "M106.932 113.723L212.928 113.728L162.43 211.234Z",
      "M33.2683 211.228L162.464 211.233L97.4648 338.727Z",
      "M97.457 338.664L163.449 467.188L29.9609 467.156Z",
      "M163.426 467.164L223.426 582.164L114.926 582.664Z",
      "M318.427 582.172L270.423 674.669L223.425 582.164Z",
      "M425.426 582.656L318.426 582.164L377.426 466.164Z",
      "M511.48 466.672L377.484 466.172L443.98 337.664Z",
      "M443.977 337.714L378.977 211.219L509.477 209.719Z",
      "M378.977 211.195L328.977 113.695L435.473 113.695Z",
    ],
  },
  {
    tx: 322, ty: 219,
    paths: [
      "M141.996 2.24307L190.497 99.749L93.995 99.749Z",
      "M93.9961 99.7657L65.9961 155.266L33.9961 99.7656L63.9961 99.7656Z",
      "M65.9961 155.359L33.4961 221.266L5.49609 155.344L34.9961 155.352Z",
      "M64 287.766L0 287.266L33.4961 221.266Z",
      "M92 355.219L34.9961 355.719L64 287.727Z",
      "M142.496 470.727L92.0002 355.227L192.997 355.229Z",
      "M193.031 355.227L220.531 287.727L249.031 354.734Z",
      "M220.531 287.758L250.527 219.758L284.027 287.25Z",
      "M218.023 155.245L279.024 155.251L250.523 219.759Z",
      "M190.501 99.7568L250.499 99.7555L218.002 155.257Z",
    ],
  },
  {
    tx: 361, ty: 327,
    paths: [
      "M102.5 1.06179L126.001 56.5525L79.0027 57.0528Z",
      "M148.008 109.544L126.016 56.5501L178.514 56.553Z",
      "M169.519 161.056L148.008 109.554L205.019 109.554Z",
      "M149.52 189.055L169.516 161.055L181.02 189.055Z",
      "M55.5117 189.039L149.511 189.037L102.515 256.537Z",
      "M35.5039 160.047L55.5039 189.047L24.5015 189.055Z",
      "M56.9993 109.547L35.5034 160.048L0 109.547Z",
      "M79.0061 57.047L57.005 109.55L26.5052 56.5444Z",
    ],
  },
  {
    tx: 419, ty: 420,
    dot: true,
    paths: ["M0.00218956 7.66846L91.0003 7.66598L45.4997 87.1689Z"],
  },
];

export const SpecializationsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef   = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<(SVGGElement | null)[]>([]);
  const textRefs  = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const layers = layerRefs.current.filter(Boolean) as SVGGElement[];
    const texts  = textRefs.current.filter(Boolean)  as HTMLDivElement[];

    // Initial hidden state — layers start tiny+invisible, rotated slightly
    gsap.set(layers, {
      opacity: 0,
      scale: 0.55,
      rotation: -8,
      transformOrigin: "464px 456px",
    });
    gsap.set(texts, { opacity: 0, y: 32, pointerEvents: "none" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 112px",
        end: "+=500%",       // very long — slow, cinematic scroll
        scrub: 3,            // heavy scrub = silky slow
        pin: cardRef.current,
        pinSpacing: true,
      },
    });

    // Helper: reveal layer + swap text
    const step = (idx: number, at: number) => {
      if (idx > 0) {
        tl.to(texts[idx - 1], { opacity: 0, y: -22, pointerEvents: "none", duration: 0.6, ease: "power2.in" }, at);
      }
      tl.to(
        layers[idx],
        { opacity: 1, scale: 1, rotation: 0, duration: 1.4, ease: "expo.out" },
        at + (idx > 0 ? 0.3 : 0),
      );
      tl.to(
        texts[idx],
        { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.8, ease: "power3.out" },
        at + 0.9,
      );
    };

    // Five steps spread across total duration (0 → 8 "units", scrub handles real time)
    step(0, 0);
    step(1, 2);
    step(2, 4);
    step(3, 6);
    step(4, 8);

    // Grand-finale — all layers glow then settle
    tl.to(layers, { filter: "drop-shadow(0 0 24px rgba(168,85,247,0.9))",   duration: 0.8 }, 10)
      .to(layers, { filter: "drop-shadow(0 0 12px rgba(168,85,247,0.35))", duration: 1.2 }, 10.8)
      .to({}, { duration: 2 });

    return () => { tl.scrollTrigger?.kill(); tl.kill(); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-[88%] md:w-[67.5%] max-w-[1800px] mx-auto pt-6 pb-10 md:pt-8"
    >
      {/* ── Sticky card ── */}
      <div
        ref={cardRef}
        className="w-full rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden flex flex-col justify-between"
        style={{
          background: "linear-gradient(135deg, #07070B 0%, #0F0F17 40%, #17152B 75%, #221A3B 100%)",
          border: "1px solid rgba(168, 85, 247, 0.12)",
          boxShadow: "0 40px 100px rgba(0, 0, 0, 0.75), inset 0 1px 2px rgba(255, 255, 255, 0.05)",
          minHeight: "72vh",
        }}
      >

        {/* Section label + title */}
        <div className="text-center px-6 pt-8 pb-2 md:pt-10">
          <p className="text-purple-400/80 text-[10.5px] uppercase tracking-[0.25em] font-semibold mb-2 font-matter">
            Specializations
          </p>
          <h2
            className="font-season_mix font-[420] text-[1.25rem] md:text-[1.7rem] lg:text-[2.1rem] leading-[1.1] tracking-[-0.015em]"
            style={{
              background: "linear-gradient(135deg, #FFFFFF 40%, #E9D5FF 75%, #A855F7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 2px 10px rgba(168,85,247,0.15))"
            }}
          >
            The Sacred Geometry of Sovereign AI
          </h2>
        </div>

        {/* ── Unified Responsive Container ── */}
        <div className="flex-1 flex flex-col md:flex-row items-center w-full px-6 pb-12 gap-8 md:gap-0">
          {/* LEFT/TOP — Sri Chakra SVG canvas */}
          <div className="relative w-full md:w-[50%] flex items-center justify-center pt-2 md:pt-0">
            {/* ambient radial glow */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: "75%",
                height: "75%",
                background: "radial-gradient(circle, rgba(168, 85, 247, 0.18) 0%, rgba(99, 102, 241, 0.06) 45%, transparent 75%)",
                filter: "blur(40px)"
              }}
            />

            {/* ── Master SVG ── */}
            <svg
              viewBox="0 0 912 911"
              className="w-[165px] sm:w-[185px] md:w-[min(360px,90%)] h-auto"
              aria-label="Sri Chakra mandala"
              overflow="visible"
              style={{ filter: "drop-shadow(0 8px 32px rgba(168, 85, 247, 0.15))" }}
            >
              <defs>
                {/* 1. Main glassmorphic triangle fill gradient */}
                <linearGradient id="triangleFill" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C084FC" stopOpacity="0.25" />
                  <stop offset="50%" stopColor="#818CF8" stopOpacity="0.16" />
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.08" />
                </linearGradient>

                {/* 2. Iridescent glowing border/stroke gradient */}
                <linearGradient id="triangleStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F3E8FF" />
                  <stop offset="30%" stopColor="#C084FC" />
                  <stop offset="70%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#38BDF8" />
                </linearGradient>

                {/* 3. Golden-amber inner triangle fill for Layer 5 (innermost core) */}
                <linearGradient id="innerFill" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.15" />
                </linearGradient>

                {/* 4. Golden-amber inner triangle border for Layer 5 */}
                <linearGradient id="innerStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFDF5" />
                  <stop offset="50%" stopColor="#FBBF24" />
                  <stop offset="100%" stopColor="#D97706" />
                </linearGradient>

                {/* 5. Stellar sunburst radial gradient for Bindu dot */}
                <radialGradient id="binduRadial" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="40%" stopColor="#FBBF24" />
                  <stop offset="100%" stopColor="#D97706" />
                </radialGradient>
              </defs>

              {LAYERS.map((layer, li) => (
                <g
                  key={li}
                  ref={(el) => { layerRefs.current[li] = el; }}
                  transform={`translate(${layer.tx},${layer.ty})`}
                  style={{ opacity: 0 }}
                >
                  {layer.paths.map((d, pi) => (
                    <path
                      key={pi}
                      d={d}
                      fill={li === 4 ? "url(#innerFill)" : "url(#triangleFill)"}
                      stroke={li === 4 ? "url(#innerStroke)" : "url(#triangleStroke)"}
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        filter: `drop-shadow(0 0 ${li === 4 ? "12px" : "6px"} ${li === 4 ? "rgba(251,191,36,0.3)" : "rgba(168,85,247,0.18)"})`,
                        transition: "all 0.5s ease"
                      }}
                    />
                  ))}
                  {(layer as any).dot && (
                    <circle
                      cx="45.5"
                      cy="36"
                      r="7.5"
                      fill="url(#binduRadial)"
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                      style={{ filter: "drop-shadow(0 0 12px rgba(251,191,36,0.95))" }}
                    />
                  )}
                </g>
              ))}
            </svg>
          </div>

          {/* RIGHT/BOTTOM — text panel */}
          <div className="relative w-full md:w-[50%] h-[290px] sm:h-[240px] md:h-[360px] flex items-center">
            {specializations.map((item, i) => (
              <div
                key={i}
                ref={(el) => { textRefs.current[i] = el; }}
                className="absolute inset-x-0 flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:pl-8 md:pr-12"
                style={{ opacity: 0, pointerEvents: "none" }}
              >
                <h3 className="font-season_mix font-[420] text-white text-[1.2rem] sm:text-[1.35rem] md:text-[1.45rem] lg:text-[1.65rem] leading-[1.25] mb-3 md:mb-5 tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="font-matter text-white/65 text-[14px] sm:text-[15px] md:text-[15.5px] leading-[1.7] md:leading-[1.8] max-w-[460px] mb-5 md:mb-8">
                  {item.description}
                </p>
                <div>
                  <Link
                    to={item.path}
                    className="inline-flex items-center gap-2 px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-[13px] font-semibold text-white transition-all duration-300 hover:text-purple-100 hover:bg-purple-500/10 hover:border-purple-400/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] active:scale-95 group"
                    style={{
                      background: "rgba(168, 85, 247, 0.06)",
                      border: "1px solid rgba(168, 85, 247, 0.22)",
                      backdropFilter: "blur(12px)",
                      boxShadow: "0 4px 24px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
