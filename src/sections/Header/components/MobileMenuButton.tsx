export type MobileMenuButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export const MobileMenuButton = ({ isOpen, onClick }: MobileMenuButtonProps) => {
  return (
    <button
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      onClick={onClick}
      className="relative z-[1001] inline-flex flex-col items-center justify-center w-7 h-7 bg-transparent outline-none p-0"
    >
      {/* Top line */}
      <span
        className={`absolute left-1/2 -translate-x-1/2 block bg-zinc-900 rounded-full h-[2.5px] w-[25px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-[10px]"
        }`}
      />
      {/* Middle line */}
      <span
        className={`absolute left-1/2 -translate-x-1/2 block bg-zinc-900 rounded-full h-[2.5px] w-[25px] top-1/2 -translate-y-1/2 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
        }`}
      />
      {/* Bottom line */}
      <span
        className={`absolute left-1/2 -translate-x-1/2 block bg-zinc-900 rounded-full h-[2.5px] w-[25px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-[10px]"
        }`}
      />
    </button>
  );
};
