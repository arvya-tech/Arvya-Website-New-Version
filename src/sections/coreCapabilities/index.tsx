import { SectionHeader } from "@/components/SectionHeader";

const checkIconUrl = "https://c.animaapp.com/mp4ac5ykb6YYWh/assets/icon-6.svg";

type FeatureCardProps = {
  title: string;
  description: string;
  features: string[];
};

const FeatureCard = ({ title, description, features }: FeatureCardProps) => (
  <div className="reveal-item bg-white flex flex-col border border-zinc-100 p-8 rounded-2xl border-solid md:p-10 md:rounded-[28px] shadow-[0_10px_35px_rgba(0,0,0,0.012)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.035)] hover:-translate-y-0.5">
    <h3 className="font-matter font-medium text-stone-900 text-lg md:text-[21px] tracking-[-0.01em] leading-snug min-h-[auto] min-w-[auto]">
      {title}
    </h3>
    <p className="font-matter font-light text-stone-500 text-sm md:text-[14.5px] leading-relaxed min-h-[auto] min-w-[auto] mt-3 md:mt-4">
      {description}
    </p>
    <ul className="flex flex-col list-none min-h-[auto] min-w-[auto] gap-y-3 mt-6 pl-0 md:gap-y-4 md:mt-8">
      {features.map((feature) => (
        <li className="min-h-[auto] min-w-[auto]" key={feature}>
          <span className="font-matter font-light text-neutral-700 block text-xs md:text-sm leading-relaxed min-h-[auto] min-w-[auto]">
            {feature}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export const CoreCapabilitiesSection = () => {
  return (
    <section className="relative items-center flex flex-col max-w-[2000px] min-h-[auto] min-w-[auto] gap-y-8 w-[92%] mx-auto md:gap-y-12 md:w-[84%]">
      <SectionHeader
        rootVariant="contents"
        title="Precision-built. Fully accountable."
        showOuterWrapper={true}
        showInnerVariantWrapper={false}
        description="Every engagement begins from first principles. Designed around your organisation's infrastructure, workflows, and compliance requirements — not adapted from a generic template."
        showFeatureContent={false}
      />
      <div className="gap-x-6 grid grid-cols-1 min-h-[auto] min-w-[auto] gap-y-6 w-full md:grid-cols-2">
        <FeatureCard
          title="Infrastructure independence"
          description="Arvya deploys across any environment without constraint. Private cloud, on-premise, hybrid, or fully air-gapped — with complete freedom over model selection and no vendor lock-in."
          features={[
            "Private cloud, on-premise, or air-gapped",
            "Model-agnostic — bring your own or use ours",
            "Vendor-neutral architecture by design",
            "Deep integration with existing enterprise systems",
          ]}
        />
        <FeatureCard
          title="End-to-end ownership"
          description="Our engineers are engaged from initial scoping through to post-deployment. Every system we deliver is built to enterprise-grade standards, with full accountability well beyond go-live."
          features={[
            "Dedicated senior engineer from day one",
            "Enterprise-grade security and compliance built in",
            "Full audit trails and regulatory documentation",
            "Ongoing optimisation and long-term support",
          ]}
        />
      </div>
    </section>
  );
};
