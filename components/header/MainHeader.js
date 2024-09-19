import MainLogo from '@/components/header/MainLogo'
import MainNav from '@/components/header/MainNav'
//import MainBreadcrumbs from '@/components/header/MainBreadcrumbs'
import DataForBreadcrumbs from '@/components/data/DataForBreadcrumbs'
//import MainBreadcrumbs from '@/components/header/MainBreadcrumbs'

export default function MainHeader() {
  return (
    <header className="w-full border-2 border-rose-500">
      <div className="header-content w-[90%] md:w-[92%] lg:-[95%] max-w-[2000px] flex flex-col sm:flex-row sm:justify-between gap-1 pt-6 mx-auto lg:pt-4 lg:gap-2 lg:pb-2">
        <MainLogo />
        <MainNav />
      </div>
      <div className="w-[90%] md:w-[92%] lg:-[95%] max-w-[2000px] mx-auto text-[10px] uppercase">
        <ul>
          <li>
            <a href={DataForBreadcrumbs.home.href}>{DataForBreadcrumbs.home.title}</a>
          </li>
          
        </ul>
      </div>
    </header>
  )
}