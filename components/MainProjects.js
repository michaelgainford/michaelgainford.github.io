import Link from "next/link"

export default function MainProjects() {
  return (
    <div className="w-full projects-list">
      <h2 className="mb-6 text-base tracking-wide font-extralight lg:mb-8 lg:text-2xl text-slate-400">Projects</h2>
      <div className="grid grid-cols-2 gap-4 lg:gap-6 md:grid-cols-3 lg:grid-cols-4">
        <a href="dev-resources.html"
          className="flex flex-col items-center justify-center gap-4 font-light tracking-wide transition border lg:border-4 rounded-lg group/resources project border-teal-700/80 bg-slate-800 hover:bg-teal-800 text-slate-400  aspect-[3/2]">
          <span className="w-10 h-auto lg:w-16 lg:h-auto max-lg:fill-slate-100 lg:fill-slate-500 group-hover/resources:fill-slate-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path
              d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z" />
            </svg>
          </span>
          <span className="text-xs uppercase lg:text-base tracking max-lg:text-slate-100 group-hover/resources:text-slate-100">Dev Resources</span>
        </a>
        <Link href="/movies-database"
          className="flex flex-col items-center justify-center gap-4 font-light tracking-wide transition border lg:border-4 rounded-lg group/movies hover:bg-violet-700 border-violet-700/80 project bg-slate-800 text-slate-400 aspect-[3/2]">
          <span className="w-10 h-auto lg:w-16 lg:h-auto max-lg:fill-slate-100 lg:fill-slate-500 group-hover/resources:fill-slate-100">
            <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M38 9.54C18.147 15.081 5.205 34.868 8.798 54.187c5.939 31.938 43.74 44.578 66.67 22.293L80 72.075V88h8.156l-.359-24.25c-.397-26.808-.864-29.173-7.724-39.144C71.435 12.051 52.849 5.395 38 9.54m-1.965 8.662c-21.065 8.087-26.757 36.207-10.6 52.363C45.55 90.68 80 76.434 80 48c0-22.531-22.743-37.945-43.965-29.798m8.286 2.987c-5.523 2.67-5.039 11.443.765 13.847 8.905 3.688 15.066-9.912 6.299-13.906-2.957-1.348-4.175-1.338-7.064.059m-20 20c-5.523 2.67-5.039 11.443.765 13.847 8.905 3.688 15.066-9.912 6.299-13.906-2.957-1.348-4.175-1.338-7.064.059m40 0c-5.523 2.67-5.039 11.443.765 13.847 8.905 3.688 15.066-9.912 6.299-13.906-2.957-1.348-4.175-1.338-7.064.059m-18.75 4.382C44.707 46.436 44 47.529 44 48c0 1.111 2.889 4 4 4 1.111 0 4-2.889 4-4 0-1.111-2.889-4-4-4-.471 0-1.564.707-2.429 1.571m-1.25 15.618c-5.523 2.67-5.039 11.443.765 13.847 8.905 3.688 15.066-9.912 6.299-13.906-2.957-1.348-4.175-1.338-7.064.059"
                fillRule="evenodd" />
            </svg>
          </span>
          <span className="text-xs uppercase lg:text-base tracking max-lg:text-slate-100 group-hover/movies:text-slate-100">Movies Database</span>
        </Link>
        <a href="euro-2024.html"
          className="flex flex-col items-center justify-center gap-4 text-xl font-light tracking-wide transition border lg:border-4 border-blue-700/80 rounded-lg group/euros hover:bg-blue-700 project bg-slate-800 text-slate-400 aspect-[3/2]">
          <span className="w-10 h-auto lg:w-16 lg:h-auto max-lg:fill-slate-100 lg:fill-slate-500 group-hover/resources:fill-slate-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M417.3 360.1l-71.6-4.8c-5.2-.3-10.3 1.1-14.5 4.2s-7.2 7.4-8.4 12.5l-17.6 69.6C289.5 445.8 273 448 256 448s-33.5-2.2-49.2-6.4L189.2 372c-1.3-5-4.3-9.4-8.4-12.5s-9.3-4.5-14.5-4.2l-71.6 4.8c-17.6-27.2-28.5-59.2-30.4-93.6L125 228.3c4.4-2.8 7.6-7 9.2-11.9s1.4-10.2-.5-15l-26.7-66.6C128 109.2 155.3 89 186.7 76.9l55.2 46c4 3.3 9 5.1 14.1 5.1s10.2-1.8 14.1-5.1l55.2-46c31.3 12.1 58.7 32.3 79.6 57.9l-26.7 66.6c-1.9 4.8-2.1 10.1-.5 15s4.9 9.1 9.2 11.9l60.7 38.2c-1.9 34.4-12.8 66.4-30.4 93.6zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm14.1-325.7c-8.4-6.1-19.8-6.1-28.2 0L194 221c-8.4 6.1-11.9 16.9-8.7 26.8l18.3 56.3c3.2 9.9 12.4 16.6 22.8 16.6h59.2c10.4 0 19.6-6.7 22.8-16.6l18.3-56.3c3.2-9.9-.3-20.7-8.7-26.8l-47.9-34.8z" />
            </svg>
          </span>
          <span className="text-xs uppercase lg:text-base tracking max-lg:text-slate-100 g group-hover/euros:text-slate-900">Euro 2024</span>
        </a>
        <a href="jokes.html"
          className="flex flex-col items-center justify-center gap-4 text-xl font-light tracking-wide transition  border lg:border-4 rounded-lg border-rose-700/80 group/euros hover:bg-rose-700 project bg-slate-800 text-slate-400 aspect-[3/2]">
          <span className="w-10 h-auto lg:w-16 lg:h-auto max-lg:fill-slate-100 lg:fill-slate-500 group-hover/jokes:fill-slate-100">
            <svg viewBox="-8 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm141.4 389.4c-37.8 37.8-88 58.6-141.4 58.6s-103.6-20.8-141.4-58.6S48 309.4 48 256s20.8-103.6 58.6-141.4S194.6 56 248 56s103.6 20.8 141.4 58.6S448 202.6 448 256s-20.8 103.6-58.6 141.4zM343.6 196l33.6-40.3c8.6-10.3-3.8-24.8-15.4-18l-80 48c-7.8 4.7-7.8 15.9 0 20.6l80 48c11.5 6.8 24-7.6 15.4-18L343.6 196zm-209.4 58.3l80-48c7.8-4.7 7.8-15.9 0-20.6l-80-48c-11.6-6.9-24 7.7-15.4 18l33.6 40.3-33.6 40.3c-8.7 10.4 3.8 24.8 15.4 18zM362.4 288H133.6c-8.2 0-14.5 7-13.5 15 7.5 59.2 58.9 105 121.1 105h13.6c62.2 0 113.6-45.8 121.1-105 1-8-5.3-15-13.5-15z"/></svg>
          </span>
          <span className="text-xs uppercase lg:text-base tracking max-lg:text-slate-100 group-hover/jokes:text-slate-100">Jokes</span>
        </a>
      </div>
      <div className="flex justify-center mt-8 lg:mt-16">
        <Link href="#"
          className="px-8 py-4 text-sm tracking-wider uppercase border rounded main-btn bg-slate-800 border-slate-700">See More</Link>
      </div>
  </div>
  )
}