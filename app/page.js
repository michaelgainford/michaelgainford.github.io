import MainHeader from "@/components/MainHeader";
import MainIntro from "@/components/MainIntro";
import MainResources from "@/components/MainResources";
import MainFooter from "@/components/MainFooter";
import MainProjects from "@/components/MainProjects";

export default function Home() {
  return (
    <div className="bg-slate-900 text-slate-400">
      <MainHeader />
      <main className="mx-auto w-[90%] md:w-[92%] lg:-[95%]] flex flex-col items-center justify-between min-h-screen gap-y-12 >*:bg-slate-200 py-8">
        <MainIntro />
        <div className="container flex gap-16 lg:gap-24 xl:gap-32 2xl:gap-48">
          <MainProjects />
          <MainResources />
        </div>
      </main>
      <MainFooter />
    </div>
  );
}
