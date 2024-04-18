import Image from 'next/image'

export default function MainIntro() {
  return (
    <div className="lg:pt-8 intro">
      <div className="grid grid-cols-1 lg:gap-32 lg:grid-cols-8">
        <div className="flex flex-col justify-center col-span-1 text-base text-left lg:col-span-5 intro-left lg:pr-8 ">
          <h1 className="lg:border-l-4 max-lg:font-bold lg:border-slate-800 lg:pl-8 text-sm sm:text-md tracking-wide text-left font-light lg:font-medium lg:text-3xl text-slate-400 py-2 lg:py-4 leading-relaxed">Hi! Thank you for visiting michaelgainford.dev</h1>
          <p className="lg:border-l-4  lg:border-slate-800 lg:pl-8 text-xs md:text-sm font-light leading-loose tracking-wider text-slate-400 py-2">
            Welcome to my web development website. This is my place to share my projects, favourite resources and anything else web development related.
          </p>
        </div>
        <div className="flex flex-col justify-center col-span-1 lg:col-span-3 max-lg:hidden intro-right">
          <div className=" p-12 rounded-lg min-h-[300px] flex justify-center items-center  hover:bg-slate-900 transition text-slate-400 uppercase tracking-wider text-xs">
            <span className="flex items-center justify-center w-full h-full fill-slate-100 text-slate-300 group-hover/resources:fill-slate-100">
              <Image src="/hand.svg" alt="Hand Icon" className="stroke-slate-300 fill-slate-300 text-slate-300 animate-bounce" width={168} height={168} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}