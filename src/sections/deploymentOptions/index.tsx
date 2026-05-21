import { SectionHeader } from "@/components/SectionHeader";

type OrnamentCardProps = {
  glowColor: string;
  fillGradient: string;
  title: string;
  description: string;
  textColor: string;
  descriptionMaxWidth?: string;
};

const FILL_MASK = "/chakra_theme/outer_chakra_try_2.svg";
const SOLID_MASK = "/chakra_theme/solid_chakra.svg";
const THEME_IMG = "/theme.png";

const OrnamentCard = ({ glowColor, fillGradient, title, description, textColor, descriptionMaxWidth = "70%" }: OrnamentCardProps) => (
  <div className="relative flex flex-col items-center justify-start group ornament-card">
    <div
      className="relative flex items-center justify-center transition-all duration-300 group-hover:scale-[1.05] ornament-card-inner"
      style={{ filter: `drop-shadow(0 20px 40px ${glowColor})` }}
    >
      {/* Layer 0a: Soft glowing blob in the center of the card */}
      <div
        className="absolute w-[180px] h-[180px] rounded-full blur-[35px] opacity-[0.22] group-hover:opacity-[0.38] transition-all duration-300 pointer-events-none"
        style={{
          background: fillGradient,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Layer 0b: Frosted glass effect clipped to the solid chakra shape */}
      <div
        className="absolute inset-0 bg-white/[0.03] backdrop-blur-[6px] transition-all duration-300"
        style={{
          WebkitMaskImage: `url('${SOLID_MASK}')`,
          maskImage: `url('${SOLID_MASK}')`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />

      {/* Layer 0c: Tint Fill Layer inside the solid shape */}
      <div
        className="absolute inset-0 opacity-[0.08] group-hover:opacity-[0.14] transition-all duration-300"
        style={{
          backgroundImage: `${fillGradient}`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitMaskImage: `url('${SOLID_MASK}')`,
          maskImage: `url('${SOLID_MASK}')`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />

      {/* Layer 1: theme.png texture + colour gradient blended together, masked to chakra shape */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `${fillGradient}`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "screen",
          WebkitMaskImage: `url('${FILL_MASK}')`,
          maskImage: `url('${FILL_MASK}')`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />

      {/* Layer 2: Title and description stacked inside chakra */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 gap-y-1.5 overflow-hidden">
        <h3
          className="text-center text-[11px] md:text-xs font-bold leading-tight drop-shadow-lg max-w-[80%] transition-colors duration-300"
          style={{ color: textColor }}
        >
          {title}
        </h3>
        <p
          className="text-center text-[10px] md:text-[11px] font-medium leading-tight drop-shadow-lg transition-colors duration-300"
          style={{ color: textColor, maxWidth: descriptionMaxWidth }}
        >
          {description}
        </p>
      </div>
    </div>
  </div>
);

export const DeploymentOptionsSection = () => (
  <section className="relative flex flex-col items-center max-w-[2000px] w-[80%] mx-auto md:w-[75%] gap-y-3 md:gap-y-6 mt-12">
    <SectionHeader
      rootVariant=""
      title="Your infrastructure. Your rules. Zero compromise."
      showOuterWrapper={true}
      showInnerVariantWrapper={false}
      showFeatureContent={false}
      description=""
    />

    <div className="w-full bg-white border border-zinc-100 rounded-[40px] md:rounded-[50px] overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.012)] py-12 md:py-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-y-8 gap-x-8 md:gap-x-12 px-6">

        {/* Purple / violet — Managed Cloud */}
        <OrnamentCard
          fillGradient="radial-gradient(circle, #ec4899 0%, #a855f7 50%, #6366f1 100%)"
          glowColor="rgba(168, 85, 247, 0.35)"
          textColor="#5b21b6"
          title="Managed Cloud"
          description="Fully managed, auto-scaling. Live in days, zero overhead."
          descriptionMaxWidth="45%"
        />

        {/* Orange / amber — Private Cloud / VPC */}
        <OrnamentCard
          fillGradient="radial-gradient(circle, #ea580c 0%, #f97316 50%, #fbbf24 100%)"
          glowColor="rgba(249, 115, 22, 0.35)"
          textColor="#b45309"
          title="Private Cloud / VPC"
          description="AWS, Azure, GCP. Your perimeter, our expertise."
          descriptionMaxWidth="42%"
        />

        {/* Green / lime — On-Premises & Air-Gapped */}
        <OrnamentCard
          fillGradient="radial-gradient(circle, #16a34a 0%, #84cc16 50%, #a3e635 100%)"
          glowColor="rgba(132, 204, 22, 0.35)"
          textColor="#166534"
          title="On-Premises"
          description="Zero egress, fully isolated. For regulated industries."
          descriptionMaxWidth="45%"
        />

      </div>
    </div>
  </section>
);
