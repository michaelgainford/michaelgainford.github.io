import MainFooterAbout from "@/components/footer/MainFooterAbout"
import MainFooterNav from "@/components/footer/MainFooterNav"
import Copyright from "@/components/footer/Copyright"

export default function MAIN_FOOTER() {
  return (
    <footer className={`w-[90%] md:w-[92%] lg:-[95%] max-w-[2000px] flex flex-col gap-1 pt-6 tracking-wider mx-auto header-content md:mt-8 lg:pb-2 lg:gap-4 lg:justify-between lg:pt-16 2xl:pt-24`}>
      <div className={`grid justify-between w-full grid-cols-1 lg:mb-12 lg:flex-row max-lg:gap-y-8 lg:gap-x-24 lg:grid-cols-4`}>
        <MainFooterNav />
        <MainFooterAbout />
      </div>
      <Copyright />
    </footer>
  )
}