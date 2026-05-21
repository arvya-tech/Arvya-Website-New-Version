export const MobileNavbarLogo = () => {
  return (
    <a
      href="/"
      className="relative flex items-center gap-1 transition-opacity hover:opacity-90 py-0.5"
    >
      <img
        src="/Arvya_Logo.png"
        alt="Arvya Logo"
        className="block h-[25px] sm:h-[27.5px] w-auto max-w-full object-contain shrink-0"
      />
      <span className="font-playfair text-[25px] sm:text-[27.5px] font-[600] text-stone-900 tracking-tight leading-none">
        Arvya
      </span>
    </a>
  );
};