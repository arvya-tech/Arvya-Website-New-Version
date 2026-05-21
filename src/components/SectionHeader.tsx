import React from "react";

export type SectionHeaderProps = {
  rootVariant: string;
  title: string;
  showOuterWrapper: boolean;
  showInnerVariantWrapper: boolean;
  description?: string;
  showFeatureContent: boolean;
  featureImageUrl?: string;
  featureImageAlt?: string;
  logoImageUrl?: string;
  logoImageAlt?: string;
  features?: {
    iconUrl: string;
    iconAlt: string;
    title: string;
    description: string;
  }[];
};

export const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div
      className={`box-border caret-transparent outline-[3.75px] ${props.rootVariant}`}
    >
      {props.showOuterWrapper ? (
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3.75px] items-center gap-x-6 flex flex-col gap-y-6 text-center w-full">
          <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3.75px] w-full gap-x-6 gap-y-6">
            <div className="items-center box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] outline-[3.75px] gap-y-4 w-full">
              <h2 className="font-season_mix font-[420] text-stone-900 text-[1.15rem] md:text-[1.65rem] lg:text-[2rem] leading-[1.1] tracking-[-0.015em] w-full px-3 md:px-0">
                {props.title}
              </h2>
              {props.description ? (
                <p className="font-matter font-light text-stone-500 text-sm box-border caret-transparent leading-[27.125px] max-w-[875px] min-h-[auto] min-w-[auto] outline-[3.75px] md:text-lg md:leading-[34.875px]">
                  {props.description}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      ) : props.showInnerVariantWrapper ? (
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3.75px]">
          <div className="items-center box-border caret-transparent flex flex-col outline-[3.75px] w-full gap-x-6 gap-y-6 text-center">
            <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3.75px] w-full gap-x-6 gap-y-6">
              <div className="items-center box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] outline-[3.75px] gap-y-4 w-full">
                <h2 className="font-season_mix font-[420] text-stone-900 text-[1.15rem] md:text-[1.65rem] lg:text-[2rem] leading-[1.1] tracking-[-0.015em] w-full px-3 md:px-0">
                  {props.title}
                </h2>
                {props.description ? (
                  <p className="font-matter font-light text-stone-500 text-sm box-border caret-transparent leading-[27.125px] max-w-[875px] min-h-[auto] min-w-[auto] outline-[3.75px] md:text-lg md:leading-[34.875px]">
                    {props.description}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3.75px] w-full gap-x-6 gap-y-6">
          <div className="items-center box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] outline-[3.75px] gap-y-4 w-full">
            <h2 className="font-season_mix font-[420] text-stone-900 text-[1.15rem] md:text-[1.65rem] lg:text-[2rem] leading-[1.1] tracking-[-0.015em] w-full px-3 md:px-0">
              {props.title}
            </h2>
            {props.description ? (
              <p className="font-matter font-light text-stone-500 text-sm box-border caret-transparent leading-[27.125px] max-w-[875px] min-h-[auto] min-w-[auto] outline-[3.75px] md:text-lg md:leading-[34.875px]">
                {props.description}
              </p>
            ) : null}
          </div>
        </div>
      )}
      {props.showFeatureContent ? (
        <div className="flex flex-col [align-items:normal] bg-white box-border caret-transparent gap-y-4 w-full border border-zinc-100 overflow-hidden p-3 rounded-3xl border-solid md:items-stretch md:flex-row md:p-6 md:rounded-[60px] outline-[3.75px]">
          <div className="relative box-border caret-transparent w-full border border-neutral-200 overflow-hidden rounded-2xl border-solid md:shrink-0 md:min-h-0 md:w-[45%] md:rounded-3xl outline-[3.75px]">
            <img
              src={props.featureImageUrl}
              alt={props.featureImageAlt}
              className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3.75px] w-full inset-0"
            />
            <div className="absolute items-center box-border caret-transparent flex justify-center mix-blend-overlay outline-[3.75px] inset-0">
              <img
                src={props.logoImageUrl}
                alt={props.logoImageAlt}
                className="box-border caret-transparent blur-0 brightness-100 max-w-full min-h-[auto] min-w-[auto] outline-[3.75px] w-20 mb-20 md:w-24 md:mb-36"
              />
            </div>
          </div>
          <div className="flex flex-col box-border caret-transparent gap-y-8 w-full px-5 py-4 md:gap-x-10 md:gap-y-10 md:w-[55%] md:px-12 md:py-10 outline-[3.75px]">
            {props.features?.map((feature) => (
              <div
                className="items-start box-border caret-transparent gap-x-2 flex min-h-[auto] outline-[3.75px] gap-y-2 md:gap-x-5 md:gap-y-5"
                key={`${feature.iconUrl}-${feature.title}`}
              >
                <img
                  src={feature.iconUrl}
                  alt={feature.iconAlt}
                  className="box-border caret-transparent shrink-0 h-6 outline-[3.75px] w-6 mt-0 md:mt-1"
                />
                <div className="box-border caret-transparent gap-x-1 flex basis-[0%] flex-col grow min-h-[auto] outline-[3.75px] gap-y-1 md:gap-x-2.5 md:gap-y-1">
                  <h3 className="text-stone-900 text-lg font-[525] box-border caret-transparent leading-[30.9375px] min-h-[auto] min-w-[auto] outline-[3.75px] md:text-xl md:leading-[33.75px]">
                    {feature.title}
                  </h3>
                  <p className="text-stone-500 text-[18.75px] box-border caret-transparent leading-[29.0625px] min-h-[auto] min-w-[auto] outline-[3.75px] md:text-base md:leading-[31px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};
