import Image from "next/image";
import MainNav from "@/components/MainNav";
import MainLogo from "@/components/MainLogo";
import MainIntro from "@/components/MainIntro";
import MainResources from "@/components/MainResources";
import MainFooter from "@/components/MainFooter";
// import hand.svg from the public folder
import hand from "../public/hand.svg";
import MainProjects from "@/components/MainProjects";

export default function Home() {
  return (
    <div className="bg-[#0f172a]">

      <header className="w-[90%] border flex flex-col gap-1 pt-2 mx-auto lg:border-b lg:pt-12 header-content lg:pb-9 lg:border-slate-700 lg:border-rose-500  lg:gap-2">
        <MainLogo />
        <MainNav />
      </header>

      <main className="mx-auto w-[90%] flex flex-col items-center justify-between min-h-screen py-12 border border-emerald-500">

        <MainIntro />

        <MainProjects />

        <MainResources />

        <MainFooter />

      </main>
    </div>
  );
}
