import MainHeader from "@/components/header/MainHeader";
import MainIntro from "@/components/page_home/MainIntro";
import MainResources from "@/components/page_home/MainResources";
import MainFooter from "@/components/footer/MainFooter";
import MainProjects from "@/components/page_home/MainProjects";

// import the mainStyles variables from components/data/Variables.js
import { mainStyles } from "@/components/data/Variables";

export default function Home() {
  return (
    <div className="bg-slate-900 text-slate-400 space-y-4 lg:space-y-8">
      <MainHeader />
      <main className={mainStyles}>
        <MainIntro />
        <div className="flex w-full gap-12 max-lg:flex-col lg:gap-24 xl:gap-32 2xl:gap-48">
          <MainProjects />
          <MainResources />
        </div>
      </main>
      <MainFooter />
    </div>
  );
}
