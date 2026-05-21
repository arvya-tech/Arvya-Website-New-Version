import { FooterContent } from "@/sections/Footer/components/FooterContent";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";
import { FooterBackground } from "@/sections/Footer/components/FooterBackground";

export const Footer = () => {
  return (
    <footer className="relative md:sticky md:bottom-0 bg-slate-50 w-full z-0 overflow-hidden pt-8 pb-5 px-8 md:px-14">
      <FooterContent />
      <FooterBottom />
      <FooterBackground />
    </footer>
  );
};
