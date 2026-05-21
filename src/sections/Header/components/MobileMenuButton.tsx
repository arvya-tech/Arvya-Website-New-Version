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
      className="relative z-[1001] flex-shrink-0 inline-flex flex-col items-center justify-center w-8 h-8 bg-transparent outline-none border-none p-1 rounded-lg active:bg-zinc-100 transition-colors duration-150"
    >
      {/* Top line */}
      <span
        className="absolute block bg-zinc-900 rounded-full h-[2px] w-[22px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          top: "50%",
          left: "50%",
          transform: isOpen
            ? "translate(-50%, -50%) rotate(45deg)"
            : "translate(-50%, calc(-50% - 7px))",
        }}
      />
      {/* Middle line */}
      <span
        className="absolute block bg-zinc-900 rounded-full h-[2px] w-[22px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
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
        className="absolute block bg-zinc-900 rounded-full h-[2px] w-[22px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          top: "50%",
          left: "50%",
          transform: isOpen
            ? "translate(-50%, -50%) rotate(-45deg)"
            : "translate(-50%, calc(-50% + 7px))",
        }}
      />
    </button>
  );
};
