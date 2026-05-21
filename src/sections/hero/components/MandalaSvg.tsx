export const MandalaSvg = () => {
  const cx = 120, cy = 120;
  const s = "rgba(99,102,241,0.55)";

  const petal = (r1: number, r2: number, w: number) =>
    `M ${cx},${cy - r2}` +
    ` C ${cx + w},${cy - (r2 * 0.58 + r1 * 0.42)} ${cx + w},${cy - r1} ${cx},${cy - r1}` +
    ` C ${cx - w},${cy - r1} ${cx - w},${cy - (r2 * 0.58 + r1 * 0.42)} ${cx},${cy - r2} Z`;

  const rots = (n: number) => Array.from({ length: n }, (_, i) => i * (360 / n));

  const uTri = `M ${cx},${cy - 42} L ${cx + 36.4},${cy + 21} L ${cx - 36.4},${cy + 21} Z`;
  const dTri = `M ${cx},${cy + 42} L ${cx + 36.4},${cy - 21} L ${cx - 36.4},${cy - 21} Z`;

  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      stroke={s}
      aria-hidden="true"
      className="w-36 h-36 md:w-48 md:h-48 select-none pointer-events-none"
    >
      {/* Outermost ring */}
      <circle cx={cx} cy={cy} r={114} strokeWidth="0.45" />

      {/* 32 tiny outer ornamental petals */}
      {rots(32).map((deg, i) => (
        <path key={`a${i}`} d={petal(107, 115, 2.8)}
          transform={`rotate(${deg},${cx},${cy})`} strokeWidth="0.4" />
      ))}

      {/* Outer divider circle */}
      <circle cx={cx} cy={cy} r={103} strokeWidth="0.5" />

      {/* 16 large lotus petals */}
      {rots(16).map((deg, i) => (
        <path key={`b${i}`} d={petal(78, 101, 13)}
          transform={`rotate(${deg},${cx},${cy})`} strokeWidth="0.6" />
      ))}

      {/* Second divider circle */}
      <circle cx={cx} cy={cy} r={73} strokeWidth="0.55" />

      {/* 8 medium lotus petals */}
      {rots(8).map((deg, i) => (
        <path key={`c${i}`} d={petal(53, 69, 9.5)}
          transform={`rotate(${deg},${cx},${cy})`} strokeWidth="0.6" />
      ))}

      {/* Third divider circle */}
      <circle cx={cx} cy={cy} r={48} strokeWidth="0.55" />

      {/* Interlocking triangles */}
      <path d={uTri} strokeWidth="0.7" />
      <path d={dTri} strokeWidth="0.7" />

      {/* Inner circle */}
      <circle cx={cx} cy={cy} r={23} strokeWidth="0.55" />

      {/* 8 tiny inner petals */}
      {rots(8).map((deg, i) => (
        <path key={`d${i}`} d={petal(14, 22, 5)}
          transform={`rotate(${deg},${cx},${cy})`} strokeWidth="0.5" />
      ))}

      {/* Centre ring */}
      <circle cx={cx} cy={cy} r={7} strokeWidth="0.55" />

      {/* Centre dot */}
      <circle cx={cx} cy={cy} r={2.5} fill={s} stroke="none" />
    </svg>
  );
};
