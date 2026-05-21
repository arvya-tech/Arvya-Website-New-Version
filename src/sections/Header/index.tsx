import { useState, useEffect } from "react";
import { DesktopNavbar } from "@/sections/Header/components/DesktopNavbar";
import { MobileNavbar } from "@/sections/Header/components/MobileNavbar";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* The header itself — always above everything at z-[10000] */}
      <header className="fixed w-full z-[10000] top-0 inset-x-0">
        <div className="relative max-w-[1375px] w-full mx-auto pt-[11.25px] px-3 md:pt-[13.75px] md:px-6">
          {/* White pill — expands when mega-menu is open */}
          <div
            className={`
              bg-white
              border border-zinc-200/70
              border-solid
              transition-all duration-300 ease-in-out
              ${menuOpen
                ? "rounded-t-[30px] rounded-b-none md:rounded-[30px] border-b-0 md:border-b shadow-[rgba(0,0,0,0.12)_0px_10px_60px_0px]"
                : scrolled
                  ? "rounded-[42.5px] bg-white/80 backdrop-blur-3xl shadow-[rgba(0,0,0,0.06)_0px_5px_40px_0px]"
                  : "rounded-[42.5px] bg-white/70 backdrop-blur-3xl shadow-[rgba(0,0,0,0.02)_0px_2.5px_30px_0px]"
              }
            `}
          >
            <DesktopNavbar onMenuOpen={setMenuOpen} />
            <MobileNavbar />
          </div>
        </div>
      </header>

      {/*
        Page backdrop — rendered OUTSIDE <header> so it cannot
        inherit the header's stacking context or blur the header pill.
        z-[9000] keeps it below the header (z-[10000]) but above
        all page content.
      */}
      {menuOpen && (
        <div
          aria-hidden="true"
          className="header-backdrop cursor-pointer"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};