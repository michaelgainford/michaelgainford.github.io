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


export default function MainIntro() {
  return (
    <div className={`w-full pb-8 intro lg:pb-8 xl:pb-12 2xl:pb-16`}>
      <div className={`grid grid-cols-8 lg:gap-32`}>
        <div className={`flex flex-col justify-center col-span-6 text-base text-left rounded-lg border-slate-800 lg:col-span-4 intro-left lg:pr-8`}>
          <details className={`border border-white/30`}>
            <summary>
              <h1 
                className={`text-[14px] text-balance py-2 font-light leading-relaxed tracking-wide text-left sm:text-base lg:border-l-4 max-lg:mt-4 max-lg:font-bold lg:border-transparent decoration-8 pr-8 lg:font-medium md:text-xl lg:text-2xl xl:text-3xl`} title={`My Web Development Website`}>
                  {timeBasedGreeting()} Thank you for visiting <span className={`underline underline-offset-4 decoration-amber-500/80 decoration-2 decoration-dotted`}>michaelgainford.dev</span>.
              </h1>
            </summary>
            <p className={`sm:py-2 text-[10px] sm:text-xs font-light text-left !leading-loose tracking-wider lg:border-l-4 lg:border-transparent md:text-sm text-slate-400 text-balance`}>
              Welcome to my <span>web development</span> website. This is my place to share my projects, favourite resources and anything else web development related. What makes more sense than building a website about web development? I hope you find something useful here.
            </p>
          </details>
        </div>
      </div>
    </div>
  )
}