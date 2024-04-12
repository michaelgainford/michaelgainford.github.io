import Image from 'next/image'

export default function MainIntro() {
  return (
    <div className="intro border-yellow-500">
    <div className="grid grid-cols-1 gap-24 lg:grid-cols-8">
      <div className="col-span-1 text-base text-left lg:col-span-5 intro-left">
        <h1 className="mb-4 text-sm font-medium tracking-wide text-left lg:text-lg lg:mb-11 text-slate-300">Hi! Thank you for visiting michaelgainford.dev</h1>
        <p className="mb-4 text-xs font-light tracking-wider lg:text-base text-slate-300 leading-relaxed">
          Thank you for visiting my site. This is my place to share my projects and favourite resources with the world. I am a self-taught developer and I am currently working on my first project, a movie database. I am also working on a Euro 2024 project, which is a site to track the progress of the Euro 2024 football tournament. I am also working on a jokes project, which is a site to display jokes from an API. I am also working on a dev resources page, which is a page to display my favourite resources for learning web development. I hope you enjoy my site and find it useful.
        </p>
      </div>
      <div className="flex flex-col justify-center col-span-1 lg:col-span-3 max-lg:hidden intro-right">
        <div
          className="border p-12 rounded-lg min-h-[300px] flex justify-center items-center border-slate-700 bg-slate-800 hover:bg-slate-900 transition text-slate-400 uppercase tracking-wider text-xs">
            <span className="w-10 h-auto lg:w-16 lg:h-auto max-lg:fill-slate-100 lg:fill-slate-500 group-hover/resources:fill-slate-100">
              <Image src="/hand.svg" alt="Hand Icon" className="text-slate-300" width={100} height={100} />
            </span>

        </div>
      </div>
    </div>
  </div>
  )
}