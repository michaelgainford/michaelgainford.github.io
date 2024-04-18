import Link from "next/link"
import MainFooterAbout from "./MainFooterAbout"
import MainFooterNav from "./MainFooterNav"

export default function mainFooter() {
  return (
    <footer className="w-[90%] md:w-[92%] lg:-[95%] border-b flex flex-col lg:justify-between  gap-1 pt-6 mx-auto lg:pt-4 header-content lg:pb-2 border-slate-700 lg:gap-4 mt-32 tracking-wider">
      <div className="w-full justify-between mb-12 lg:flex-row max-lg:gap-y-8 lg:gap-x-24 grid grid-cols-1 lg:grid-cols-3">
        
        <MainFooterNav />
        <MainFooterAbout />

      </div>
      <div className="pt-4 text-xs text-left copyright border-slate-700">
        <p>&copy; copyright 2024</p>
      </div>
  </footer>
  )
}