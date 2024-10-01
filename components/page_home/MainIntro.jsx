function timeBasedGreeting() {
  const date = new Date();
  const hours = date.getHours();
  if (hours < 12) {
    return 'Good Morning!';
  } else if (hours >= 12 && hours < 18) {
    return 'Good Afternoon!';
  } else {
    return 'Good Evening!';
  }
}

const detailsStyles = "border border-slate-800 rounded-lg p-4 bg-slate-900 group !overflow-x-auto [&_svg]:open:-rotate-180 w-full md:max-w-[800px] transition-all duration-300";
const summaryStyles = "flex justify-between md:py-4 cursor-pointer";
const summaryHeaderSvgStyles = "rotate-0 transform text-slate-200 transition-all duration-300 size-4 lg:size-8 cursor-pointer group-hover:text-amber-500/80";

export default function MAIN_INTRO() {
  return (
    <div className={`w-full pb-8 intro lg:pb-8 xl:pb-12 2xl:pb-16`}>
      <div className={`grid grid-cols-8 lg:gap-32`}>
        <div className={`flex flex-col justify-center col-span-8 md:col-span-6 text-base text-left rounded-lg border-slate-800 lg:col-span-4 intro-left lg:pr-8`}>
          <details className={detailsStyles}>
            <summary className={summaryStyles}>
              <h1 
                className={`text-[14px] text-balance py-2 font-light leading-relaxed tracking-wide text-left decoration-8 pr-8 md:text-base lg:border-l-4 max-lg:font-bold lg:border-transparent lg:font-medium lg:text-2xl 2xl:text-3xl`} title={`My Web Development Website`}>
                  {timeBasedGreeting()} Thank you for visiting <span className={`underline underline-offset-4 decoration-amber-500/80 decoration-2 decoration-dotted`}>my site</span>.
              </h1>
              <span>
              <svg className={summaryHeaderSvgStyles} fill={`none`} height={`20`} width={`20`} stroke={`currentColor`} strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={`2`} viewBox={`0 0 24 24`}>
                <polyline points={`6 9 12 15 18 9`}></polyline>
              </svg>
              </span>
            </summary>
            <p className={`sm:py-2 pt-4 text-xs font-light text-left !leading-loose tracking-wider lg:border-l-4 lg:border-transparent md:text-sm text-slate-400 text-balance`}>
              Welcome to my <span>web development</span> website. This is my place to share my projects, favourite resources and anything else web development related. What makes more sense than building a website about web development? I hope you find something useful here.
            </p>
          </details>
        </div>
      </div>
    </div>
  )
}