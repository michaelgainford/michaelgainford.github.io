{/********************************
  SITE STYLES - VARIABLES
*********************************/}
const globalPageStyles = "space-y-4 lg:space-y-8 xl:space-y-12 2xl:space-y-16 min-h-dvh";
const globalWrapperFullWidth = "w-full max-w-[2000px] flex flex-col items-center";
const globalWrapperFixedWidth = "mx-auto w-[90%] md:w-[92%] max-w-[2000px] flex flex-col items-center";
const globalMainStyles = "mx-auto w-[90%] md:w-[92%] max-w-[2000px] flex flex-col items-center";
const globalMainElementStyles = "mx-auto w-[90%] md:w-[92%] max-w-[2000px] flex flex-col items-center";
const globalConstrainedMainStyles = "mx-auto w-[90%] md:w-[92%] max-w-[2000px] flex flex-col items-center";
const sharedHeadingStyles = "pb-2 mx-auto mb-12 text-3xl font-bold text-center transition-all duration-500 border-b-4 border-slate-500/20 md:text-xl xl:mb-16 2xl:text-3xl w-fit";
const brandPageBackground = "bg-slate-900 bg-brand-background bg-repeat";
const brandTextColour = "text-slate-400";
const brandSharedHeadingStyles = "pb-2 mx-auto mb-12 text-3xl font-bold text-left transition-all duration-500 border-b-4 border-slate-500/20 md:text-xl xl:mb-16 2xl:text-3xl w-fit";
const brandHeadingStyles = "pb-2 mx-auto mb-12 text-3xl font-bold text-left transition-all duration-500 border-b-4 border-slate-500/20 md:text-xl xl:mb-16 2xl:text-3xl w-fit";

{/* MAG Premier League */}
const magPLPageBg = "bg-linear-to-r from-[#030117] from-10% via-[#2B2659] via-50% to-[#030117] to-90%";
const magEPL_CardStyles = "rounded-lg bg-slate-900/50 text-center font-light  flex grid-rows-[60px_1fr] grid w-full border-magpl/20 border-1 overflow-clip shadow-lg group h-full";
const magEPL_H2Styles = "text-sm leading-[1.5em] bg-magpl/20 py-4 uppercase font-bold rounded-t-md text-slate-200 tracking-wider flex justify-center items-center group-hover:bg-magpl group-hover:text-slate-900 transition-all duration-500";
const mainStyles = "mx-auto w-[90%] md:w-[92%] max-w-[2000px] flex flex-col items-center";


{/********************************
  SITE STYLES - EXPORTS
*********************************/}
export { 
	globalPageStyles,
	globalWrapperFullWidth,
	globalWrapperFixedWidth,
	globalMainStyles,
	globalMainElementStyles,
	globalConstrainedMainStyles,
	sharedHeadingStyles,
	brandPageBackground,
	brandTextColour,
	brandSharedHeadingStyles,
	brandHeadingStyles,
	// MAGPL
	magPLPageBg,
	magEPL_CardStyles,
	magEPL_H2Styles,
	mainStyles
};