{/********************************
  SITE STYLES - VARIABLES
*********************************/}
const globalPageStyles = "space-y-4 lg:space-y-8 xl:space-y-12 2xl:space-y-16 min-h-dvh";
const globalWrapperFullWidth = "w-full max-w-[2000px] flex flex-col items-center";
const globalWrapperFixedWidth = "mx-auto w-[90%] md:w-[92%] max-w-[2000px] flex flex-col items-center";
const sharedHeadingStyles = "pb-2 mx-auto mb-12 text-3xl font-bold text-center transition-all duration-500 border-b-4 border-slate-500/20 md:text-xl xl:mb-16 2xl:text-3xl w-fit";
const brandPageBackground = "bg-slate-900 bg-brand-background bg-repeat";
const brandTextColour = "text-slate-400";
const brandSharedHeadingStyles = "pb-2 mx-auto mb-12 text-3xl font-bold text-left transition-all duration-500 border-b-4 border-slate-500/20 md:text-xl xl:mb-16 2xl:text-3xl w-fit";

{/* MAG Premier League */}
const magEPL_CardStyles = "rounded-lg bg-slate-900/50 text-center font-light aspect-square flex grid-rows-[60px_1fr] items-stretch grid w-full rounded-t-none";
const magEPL_H2Styles = "text-sm bg-magpl/20 py-4 uppercase font-bold rounded-t-md text-slate-200 tracking-wider";

{/********************************
  SITE STYLES - EXPORTS
*********************************/}
export { 
	globalPageStyles,
	globalWrapperFullWidth,
	globalWrapperFixedWidth,
	sharedHeadingStyles,
	brandPageBackground,
	brandTextColour,
	brandSharedHeadingStyles,
	// MAGPL
	magEPL_CardStyles,
	magEPL_H2Styles
};