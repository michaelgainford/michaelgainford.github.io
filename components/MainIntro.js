import Image from 'next/image'

export default function MainIntro() {
  return (
    <div className="pt-16 intro">
      <div className="grid grid-cols-1 lg:gap-32 lg:grid-cols-8">
        <div className="flex flex-col justify-center col-span-1 text-base text-left lg:col-span-5 intro-left lg:pr-8">
          <h1 className="mb-4 text-sm tracking-wide text-left font-extralight lg:text-2xl lg:mb-6 text-slate-400">Hi! Thank you for visiting michaelgainford.dev</h1>
          <p className="mb-4 text-sm font-light leading-loose tracking-wider text-slate-400">
            Thank you for visiting my site. This is my place to share my projects and favourite resources with the world. I am a self-taught developer and I am currently working on my first project, a movie database. I am also working on a Euro 2024 project, which is a site to track the progress of the Euro 2024 football tournament. I am also working on a jokes project, which is a site to display jokes from an API. I am also working on a dev resources page, which is a page to display my favourite resources for learning web development. I hope you enjoy my site and find it useful.
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