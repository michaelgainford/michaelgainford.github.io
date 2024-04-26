import MainFooterAbout from "@/components/footer/MainFooterAbout"
import MainFooterNav from "@/components/footer/MainFooterNav"
import Copyright from "@/components/footer/Copyright"

export default function mainFooter() {
  return (
    <footer className="w-[90%] md:w-[92%] lg:-[95%] flex flex-col lg:justify-between gap-1 pt-6 mx-auto lg:pt-4 header-content lg:pb-2 border-slate-700 lg:gap-4 mt-12 md:mt-16 tracking-wider">
      <div className="grid justify-between w-full grid-cols-1 lg:mb-12 lg:flex-row max-lg:gap-y-8 lg:gap-x-24 lg:grid-cols-4">
        <MainFooterNav />
        <MainFooterAbout />
      </div>
      <Copyright />
    </footer>
  )
}