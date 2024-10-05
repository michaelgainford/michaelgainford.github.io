export default function ICON_HAMBURGER_NAV({ classes }) {
  return (
      <svg 
        xmlns={`http://www.w3.org/2000/svg`} 
        viewBox={`0 0 24 24`} 
        className={`hamburger-menu hamburger-menu-icon h-4 lg:h-6 w-4 lg:w-6 fill-slate-100`}>
        <g 
          stroke={`none`} 
          strokeWidth={`1`} 
          fill={`none`} 
          fillRule={`evenodd`}>
          <g>
            <rect id={`Rectangle`} fillRule={`nonzero`} x={`0`} y={`0`} width={`24`} height={`24`}>
            </rect>
            <line x1={`5`} y1={`7`} x2={`19`} y2={`7`} stroke={`#FFF`} strokeWidth={`2`} strokeLinecap={`round`}>
            </line>
            <line x1={`5`} y1={`17`} x2={`19`} y2={`17`} stroke={`#FFF`} strokeWidth={`2`} strokeLinecap={`round`}>
            </line>
            <line x1={`5`} y1={`12`} x2={`19`} y2={`12`} stroke={`#FFF`} strokeWidth={`2`} strokeLinecap={`round`}>
            </line>
          </g>
        </g>
      </svg>
  );
}
