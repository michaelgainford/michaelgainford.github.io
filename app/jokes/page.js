//import Image from "next/image";
import MainNav from "@/components/MainNav";
import MainLogo from "@/components/MainLogo";
import MainIntro from "@/components/MainIntro";
import MainResources from "@/components/MainResources";
import MainFooter from "@/components/MainFooter";
// import hand.svg from the public folder
//import hand from "../public/hand.svg";
import MainProjects from "@/components/MainProjects";

export default function Home() {
  return (
    <div className="bg-indigo-950">

      <header className="w-[90%] md:w-[92%] lg:-[95%] border-b flex flex-col gap-1 pt-2 mx-auto lg:border-b lg:pt-12 header-content lg:pb-9 lg:border-slate-700 lg:gap-2">
        <MainLogo />
        <MainNav />
      </header>

      <main className="mx-auto w-[90%] md:w-[92%] lg:-[95%]] flex flex-col items-center justify-between min-h-screen gap-y-12 >*:bg-slate-200">

        <MainIntro />

        <MainProjects />

        <MainResources />

        <MainFooter />

      </main>
    </div>
  );
}