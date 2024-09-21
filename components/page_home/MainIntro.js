import Image from 'next/image'

// create a function that will output Good Morning or Good Afternoon or Good Evening depending on the time of day that I can use later inside of the h1 tag
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
    <div className={`w-full pb-8 intro max-lg:mt-8 lg:pb-8 xl:pb-12 2xl:pb-16`}>
      <div className={`grid grid-cols-1 lg:gap-32 lg:grid-cols-8`}>
        <div className={`flex flex-col justify-center col-span-1 text-base text-left rounded-lg border-slate-800 lg:col-span-5 intro-left lg:pr-8`}>
          <h1 className={`py-2 font-light leading-relaxed tracking-wide text-center sm:text-left sm:text-base lg:border-l-4 max-lg:mt-4 max-lg:font-bold lg:border-transparent decoration-8 lg:font-medium md:text-xl lg:text-2xl xl:text-3xl`}>{timeBasedGreeting()} Thank you for visiting <span className={`underline underline-offset-4 decoration-amber-500/80 decoration-2 decoration-dotted`}>my site</span></h1>
          <p className={`sm:py-2 text-xs font-light text-center sm:text-left !leading-loose tracking-wider lg:border-l-4 lg:border-transparent md:text-sm text-slate-400 text-balance`}>
            Welcome to my web development website. This is my place to share my projects, favourite resources and anything else web development related.
          </p>
        </div>
      </div>
    </div>
  )
}