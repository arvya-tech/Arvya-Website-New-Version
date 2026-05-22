export const DesktopNavActions = () => {
  return (
    <div className="flex items-center gap-x-3">
      <button
        type="button"
        onClick={() => window.location.href = "/contact"}
        className="btn-glass-morphic font-medium inline-flex items-center justify-center text-center text-nowrap px-6 py-2 rounded-full font-season_mix text-[17px]"
      >
        Contact Us
      </button>
    </div>
  );
};
