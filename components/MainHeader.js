import MainLogo from '@/components/MainLogo'
import MainNav from '@/components/MainNav'

export default function MainHeader() {
  return (
    <header className="w-[90%] md:w-[92%] lg:-[95%] border-b flex flex-col lg:flex-row lg:justify-between  gap-1 pt-6 mx-auto lg:border-b lg:pt-4 header-content lg:pb-2 border-slate-700 lg:gap-2">
      <MainLogo />
      <MainNav />
    </header>
  )
}