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
      className="relative z-[1002] flex-shrink-0 inline-flex flex-col items-center justify-center w-[38px] h-[38px] bg-white/80 hover:bg-white border border-zinc-200/60 outline-none p-1 rounded-full shadow-sm active:scale-90 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
      style={{
        transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
      }}
    >
      {/* Top line */}
      <span
        className="absolute block bg-zinc-800 rounded-full h-[1.5px] w-[18px] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        style={{
          top: "50%",
          left: "50%",
          transform: isOpen
            ? "translate(-50%, -50%) rotate(45deg)"
            : "translate(-50%, calc(-50% - 5px))",
        }}
      />
      {/* Middle line */}
      <span
        className="absolute block bg-zinc-800 rounded-full h-[1.5px] w-[18px] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: isOpen ? 0 : 1,
          scaleX: isOpen ? 0 : 1,
        }}
      />
      {/* Bottom line */}
      <span
        className="absolute block bg-zinc-800 rounded-full h-[1.5px] w-[18px] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        style={{
          top: "50%",
          left: "50%",
          transform: isOpen
            ? "translate(-50%, -50%) rotate(-45deg)"
            : "translate(-50%, calc(-50% + 5px))",
        }}
      />
    </button>
  );
};
