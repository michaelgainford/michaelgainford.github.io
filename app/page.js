import MainHeader from "@/components/MainHeader";
import MainIntro from "@/components/MainIntro";
import MainResources from "@/components/MainResources";
import MainFooter from "@/components/MainFooter";
import MainProjects from "@/components/MainProjects";

export default function Home() {
  return (
    <div className="bg-slate-900">
      <MainHeader />

      <main className="mx-auto w-[90%] md:w-[92%] lg:-[95%]] flex flex-col items-center justify-between min-h-screen gap-y-12 lg:gap-y-24 >*:bg-slate-200">

        <MainIntro />

        <MainProjects />

        <MainResources />

        <MainFooter />

      </main>
    </div>
  );
}
