import { Link } from "react-router-dom";

export const NavbarLogo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-0 transition-opacity hover:opacity-90 py-0.5"
    >
      <img
        src="/Arvya_Logo.png"
        alt="Arvya"
        className="block h-[34px] md:h-[40px] w-auto max-w-full object-contain shrink-0"
      />
      <span className="font-season_mix text-[26px] md:text-[28px] font-medium text-zinc-950 tracking-tight leading-none">
        Arvya
      </span>
    </Link>
  );
};