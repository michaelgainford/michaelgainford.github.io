/* function timeBasedGreeting() {
  const date = new Date();
  const hours = date.getHours();
  if (hours < 12) {
    return 'Good Morning!';
  } else if (hours >= 12 && hours < 18) {
    return 'Good Afternoon!';
  } else {
    return 'Good Evening!';
  }
} */

const detailsStyles = `border border-slate-800 rounded-lg p-4 bg-slate-900/50 group !overflow-x-auto [&_svg]:open:-rotate-180 w-full transition-all duration-300 md:max-w-[800px] lg:px-4"`
const summaryStyles = `flex justify-between md:py-4 cursor-pointer`;
const summaryHeaderSvgContainer = `flex flex-col justify-center`;
const summaryHeaderSvgStyles = `rotate-0 transform text-slate-200 transition-all duration-300 size-4 stroke-1 cursor-pointer group-hover:text-amber-500/80 lg:size-6`;

export default function HOME_INTRO() {
	return (
		<div className={`w-full pb-8 intro mb-4 lg:pb-8 xl:pb-12 2xl:pb-16`}>
			<div className={`grid grid-cols-8`}>
				<div className={`flex flex-col justify-center col-span-8 md:col-span-6 text-base text-left rounded-lg border-slate-800 lg:col-span-4 intro-left`}>
				<details className={detailsStyles}>
					<summary className={summaryStyles}>
					<h1 
						className={`text-xs text-balance py-2 font-normal leading-relaxed tracking-wide text-left decoration-8 pr-8 md:text-base lg:border-l-4 lg:border-transparent lg:font-medium lg:text-lg 2xl:text-xl`} title={`My Web Development Website`}>
						{/* {timeBasedGreeting()} */}Hi! Thank you for visiting <span className={`underline underline-offset-4 decoration-amber-500/80 decoration-2 decoration-dotted`}>my site</span>. 
					</h1>
					<span className={summaryHeaderSvgContainer}>
					<svg 
						className={summaryHeaderSvgStyles} 
						fill={`none`} 
						height={`20`} 
						width={`20`} 
						stroke={`currentColor`} 
						strokeLinecap={`round`} 
						strokeLinejoin={`round`} 
						strokeWidth={`2`} 
						viewBox={`0 0 24 24`}>
						<polyline points={`6 9 12 15 18 9`}></polyline>
					</svg>
					</span>
					</summary>
					<p className={`pt-4 text-xs font-light text-left !leading-loose tracking-wider text-slate-400 text-balance mb-4 sm:py-2 lg:text-sm lg:border-l-4 lg:border-transparent`}>
						Welcome to my web development website. This is my place to share my projects, favourite resources and anything else web development related. What makes more sense than building a website about web development? I hope you find something useful here.
					</p>
				</details>
				</div>
			</div>
		</div>
	)
}