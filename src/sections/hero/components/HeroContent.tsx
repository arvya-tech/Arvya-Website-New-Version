
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const HeroContent = () => {
  return (
    <div className="items-center box-border caret-transparent flex basis-auto grow-0 justify-center max-w-[2000px] min-h-[auto] min-w-[auto] outline-[3.75px] w-[85%] mx-auto pb-0 md:basis-[0%] md:grow md:w-9/12 -mt-14 md:-mt-20">
      <div className="box-border caret-transparent contents outline-[3.75px]">
        <div className="relative items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3.75px] -mt-16 md:-mt-24">
          <div className="absolute bg-[radial-gradient(rgb(165,187,252)_0%,rgb(213,226,255)_40%,rgba(0,0,0,0)_70%)] box-border caret-transparent blur-[100px] h-[250px] opacity-30 outline-[3.75px] pointer-events-none w-[375px] left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 md:blur-[125px] md:h-[500px] md:opacity-40 md:w-[750px]"></div>
          <div className="relative items-center box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3.75px] z-10 hero-animate w-full">
            <div className="items-center box-border caret-transparent gap-x-2.5 flex flex-col min-h-[auto] min-w-[auto] outline-[3.75px] gap-y-1.5 mt-0 md:gap-x-3.5 md:gap-y-2.5 md:mt-0 hero-animate">
              <img
                src="/theme.png"
                alt=""
                aria-hidden="true"
                className="w-[40px] h-auto md:w-[60px] select-none pointer-events-none theme-img-filter"
              />
              <h1 className="text-stone-900 text-[27.5px] box-border caret-transparent tracking-[-0.625px] leading-[30px] max-w-4xl min-h-[auto] min-w-[auto] outline-[3.75px] text-center font-season_mix md:text-[42.5px] md:tracking-[-1px] md:leading-[45px]">
                Autonomous AI for<br className="hidden md:block" /> Real-World Execution
              </h1>
              <p className="text-neutral-700 text-xs box-border caret-transparent leading-5 max-w-[640px] min-h-[auto] min-w-[auto] outline-[3.75px] text-center mt-3 md:text-base md:leading-[32.5px] font-light">
                We build next-generation optimization systems compatible with future quantum acceleration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
