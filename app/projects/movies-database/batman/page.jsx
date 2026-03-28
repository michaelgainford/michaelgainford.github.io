import Header from "@/components/header/_Header";
import H1 from "@/components/typography/H1_Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import Footer from "@/components/footer/_Footer";
import FranchiseHero from "@/components/projects/movies-database/franchise/FranchiseHero";
import FranchisePillars from "@/components/projects/movies-database/franchise/FranchisePillars";
import FranchiseExplorer from "@/components/projects/movies-database/franchise/FranchiseExplorer";
import { globalPageStyles, globalWrapperFixedWidth } from "@/variables/Styles";
import { page, films, cast, pillars, quotes, scenes, batmanStats } from "@/variables/ProjectBatman";

const pageStyles = "relative overflow-hidden bg-slate-950 text-slate-300";

export const metadata = {
  title: "Batman",
  description: "Batman franchise page with films, cast highlights, quotes, and iconic scenes.",
};

export default function Page_Batman() {
  return (
    <div className={`${globalPageStyles} ${pageStyles}`}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.2),transparent_70%)]" />
      <Header />
      <main className={globalWrapperFixedWidth}>
        <section className="w-full max-w-[1800px] rounded-2xl border border-slate-700/70 bg-slate-950/70 p-4 shadow-2xl shadow-black/35 md:p-6 lg:p-8">
          <div className="mx-auto mb-4 w-fit rounded-full border border-amber-400/40 bg-black/60 px-4 py-1 text-xxs uppercase tracking-[0.24em] text-amber-300">
            Gotham Collection
          </div>
          <H1 text="Batman" other_classes="text-slate-100" />
          <PageIntro
            text={page.intro}
            text_colour="text-slate-200"
            other_classes="text-xs text-balance text-center leading-5 font-light md:text-sm md:mb-10"
          />

          <div className="mb-8 flex w-full justify-center gap-3 text-xs tracking-wide uppercase max-sm:flex-wrap lg:text-sm">
            <a className="rounded-full border border-amber-400/40 bg-black/70 px-4 py-2 text-amber-200 transition-all duration-300 hover:bg-amber-500/15" href="/projects/movies-database">Back To Movies Database</a>
            <a className="rounded-full border border-amber-400/40 bg-black/70 px-4 py-2 text-amber-200 transition-all duration-300 hover:bg-amber-500/15" href="#batman-explorer">Jump To Explorer</a>
          </div>

          <div className="space-y-6">
            <FranchiseHero page={page} stats={batmanStats} theme="batman" />
            <FranchisePillars pillars={pillars} theme="batman" />
            <div id="batman-explorer">
              <FranchiseExplorer films={films} cast={cast} quotes={quotes} scenes={scenes} theme="batman" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
