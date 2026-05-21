export const FooterBrand = () => {
  return (
    <div className="flex flex-col gap-2 max-w-xs">
      <a href="/" className="flex items-center gap-0">
        <img
          src="/Arvya_Logo.png"
          alt="Arvya"
          className="h-[30px] w-auto object-contain shrink-0"
        />
        <span className="font-season_mix text-[28px] font-medium text-zinc-950 tracking-tight leading-none">
          Arvya Tech
        </span>
      </a>

      <p className="text-stone-500 text-[16.25px] leading-relaxed font-matter">
        We build next-generation  for the real world.
      </p>
    </div>
  );
};
