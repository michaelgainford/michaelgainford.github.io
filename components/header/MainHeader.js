import MainLogo from '@/components/header/MainLogo'
import MainNav from '@/components/header/MainNav'

export default function MainHeader() {
  return (
    <header className="w-[90%] md:w-[92%] lg:-[95%] flex flex-col sm:flex-row sm:justify-between gap-1 pt-6 mx-auto lg:pt-4 header-content lg:pb-2 border-slate-700 lg:gap-2">
      <MainLogo />
      <MainNav />
    </header>
  )
}