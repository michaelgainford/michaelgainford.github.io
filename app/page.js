import MainHeader from "@/components/header/MainHeader";
import MainIntro from "@/components/page_home/MainIntro";
import MainResources from "@/components/page_home/MainResources";
import MainFooter from "@/components/footer/MainFooter";
import MainProjects from "@/components/page_home/MainProjects";
import { mainStyles } from "@/components/data/Variables";
import { globalPageStyles } from "@/components/data/Variables";

const pageBackground = "bg-slate-900 bg-brand-background bg-repeat";
const pageTextColour = "text-slate-400";

export default function Home() {
  return (
    <div className={`${pageBackground} ${pageTextColour} ${globalPageStyles}`}>
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