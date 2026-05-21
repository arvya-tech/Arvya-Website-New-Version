export const DesktopNavActions = () => {
  return (
    <div className="flex items-center gap-x-3">
      <button
        type="button"
        onClick={() => window.location.href = "/contact"}
        className="relative font-medium inline-flex items-center justify-center bg-zinc-50 shadow-[rgba(0,0,0,0.09)_0px_0px_15px_0px_inset,rgba(0,0,0,0.2)_0px_0px_1px_0px] text-center text-nowrap overflow-hidden px-5 py-2 rounded-full font-season_mix text-[17px] hover:bg-zinc-100 transition-colors duration-200"
      >
        <span className="relative inline-flex items-center gap-x-2 z-10">
          Contact Us
        </span>
      </button>
    </div>
  );
};
