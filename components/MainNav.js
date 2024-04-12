// Setup a components called MainNav 
export default function MainNav() {
  return (
    <nav className="flex justify-start nav logo">
    <ul className="flex gap-2 pt-8 pb-4 overflow-x-auto text-xs tracking-wide uppercase lg:py-8 lg:justify-center lg:gap-7 no-scrollbar">
      <li className="">
        <a className="inline-block px-4 py-3 transition border rounded-lg lg:px-12 lg:py-5 border-slate-700 hover:bg-slate-800 min-w-max" href="/">
          Home
        </a>
      </li>
      <li className="">
        <a className="inline-block px-4 py-3 transition border border-teal-700 rounded-lg lg:px-12 lg:py-5 hover:bg-teal-900 min-w-max" href="dev-resources.html">
          Dev Resources
        </a>
      </li>
      <li className="">
        <a className="inline-block px-4 py-3 transition border border-blue-700 rounded-lg lg:px-12 lg:py-5 hover:bg-blue-900 min-w-max" href="euro-2024.html">
          Euro 2024
        </a>
      </li>
      <li className="">
        <a className="inline-block px-4 py-3 transition border rounded-lg lg:px-12 lg:py-5 border-violet-700 hover:bg-violet-900 min-w-max" href="movies-database">
          Movies DB
        </a>
      </li>
      <li className="">
        <a className="inline-block px-4 py-3 transition border rounded-lg lg:px-12 lg:py-5 border-rose-700 hover:bg-rose-900 min-w-max" href="jokes.html">
          Jokes
        </a>
      </li>
    </ul>
  </nav>
  )
}