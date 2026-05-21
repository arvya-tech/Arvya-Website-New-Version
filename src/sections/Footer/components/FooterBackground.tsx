export const FooterBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Soft Blue glow — shifted up for perfect top/center coverage under the curve */}
      <div className="absolute top-[-30%] left-[-8%] h-[625px] w-[850px] rounded-full blur-[112.5px] footer-blob-1" />

      {/* Cyan/Sky Blue glow — shifted up for perfect top/center coverage under the curve */}
      <div className="absolute top-[-30%] right-[-5%] h-[625px] w-[875px] rounded-full blur-[112.5px] footer-blob-2" />

      {/* Blending center white/light-blue wash — shifted up */}
      <div className="absolute top-[-10%] left-[25%] h-[500px] w-[725px] rounded-full blur-[100px] footer-blob-3" />
    </div>
  );
};
