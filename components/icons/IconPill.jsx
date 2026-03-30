export default function ICON_PILL({ classes, fill }) {
  return (
    <svg
      className={classes}
      viewBox={`0 0 24 24`}
      xmlns={`http://www.w3.org/2000/svg`}
      fill={fill}
      aria-hidden={`true`}
    >
      <g transform={`rotate(-45 12 12)`}>
        <path className={fill} d={`M6 8h6v8H6z`} opacity={`0.85`} />
        <path className={fill} d={`M12 8h6v8h-6z`} opacity={`0.55`} />
        <rect x={`6`} y={`8`} width={`12`} height={`8`} rx={`4`} fill={`none`} stroke={`currentColor`} strokeWidth={`1.7`} />
        <path d={`M12 8v8`} stroke={`currentColor`} strokeWidth={`1.3`} strokeLinecap={`round`} />
      </g>
    </svg>
  );
}
