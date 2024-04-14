// Setup a components called MainNav 
export default function MainNav() {
  return (
    <nav className="flex justify-start nav logo">
    <ul className="flex gap-2 pt-8 pb-4 overflow-x-hidden text-[12px] tracking-wider uppercase lg:py-8 lg:justify-center lg:gap-7 no-scrollbar text-slate-400">
      <li className="">
        <a className="inline-block px-4 py-3 transition border rounded-lg lg:px-12 lg:py-5 border-slate-700 hover:bg-slate-900 min-w-max" href="/">
          Home
        </a>
      </li>
      <li className="">
        <a className="inline-block px-4 py-3 transition border border-teal-700 rounded-lg lg:px-12 lg:py-5 hover:bg-teal-900 min-w-max" href="/dev-resources">
          Dev Resources
        </a>
      </li>
      <li className="">
        <a className="inline-block px-4 py-3 transition border border-blue-700 rounded-lg lg:px-12 lg:py-5 hover:bg-blue-900 min-w-max" href="/euro-2024">
          Euro 2024
        </a>
      </li>
      <li className="">
        <a className="inline-block px-4 py-3 transition border rounded-lg lg:px-12 lg:py-5 border-violet-700 hover:bg-violet-900 min-w-max" href="/movies-database">
          Movies DB
        </a>
      </li>
      <li className="">
        <a className="inline-block px-4 py-3 transition border rounded-lg lg:px-12 lg:py-5 border-rose-700 hover:bg-rose-900 min-w-max" href="/jokes">
          Jokes
        </a>
      </li>
    </ul>
  </nav>
  )
}