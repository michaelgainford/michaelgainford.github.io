import Image from 'next/image'

export default function MainIntro() {
  return (
    <div className="intro">
      <div className="grid grid-cols-1 lg:gap-32 lg:grid-cols-8">
        <div className="flex flex-col justify-center col-span-1 text-base text-left rounded-lg border-slate-800 lg:col-span-5 intro-left lg:pr-8">
          <h1 className="py-2 font-light leading-relaxed tracking-wide text-center sm:text-left sm:text-base lg:border-l-4 max-lg:mt-4 max-lg:font-bold lg:border-transparent decoration-8 lg:font-medium md:text-xl lg:text-2xl xl:text-3xl text-slate-400">Hi! Thank you for visiting <span className="underline underline-offset-4 decoration-slate-800">michaelgainford.dev</span></h1>
          <p className="sm:py-2 text-xs font-light text-center sm:text-left !leading-loose tracking-wider lg:border-l-4 lg:border-transparent md:text-sm text-slate-400">
            Welcome to my web development website. This is my place to share my projects, favourite resources and anything else web development related.
          </p>
        </div>
        <div className="flex flex-col justify-center col-span-1 lg:col-span-3 max-lg:hidden intro-right">
          <div className=" p-12 rounded-lg min-h-[200px] flex justify-center items-center  hover:bg-slate-900 transition text-slate-400 uppercase tracking-wider text-xs">
            <span className="items-center justify-center hidden w-full h-full fill-slate-100 text-slate-300 group-hover/resources:fill-slate-100">
              <Image src="/hand.svg" alt="Hand Icon" className="stroke-slate-300 fill-slate-300 text-slate-300 animate-bounce" width={168} height={168} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}