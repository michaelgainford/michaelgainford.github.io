import Header from "@/components/header/_Header";
import H1 from "@/components/typography/H1_Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import Footer from "@/components/footer/_Footer";
import FranchiseHero from "@/components/projects/movies-database/franchise/FranchiseHero";
import FranchisePillars from "@/components/projects/movies-database/franchise/FranchisePillars";
import FranchiseExplorer from "@/components/projects/movies-database/franchise/FranchiseExplorer";
import { globalPageStyles, globalWrapperFixedWidth } from "@/variables/Styles";
import { page, films, cast, pillars, quotes, scenes, deadpoolStats } from "@/variables/ProjectDeadpool";

const pageStyles = "relative overflow-hidden bg-slate-950 text-slate-300";

export const metadata = {
  title: "Deadpool",
  description: "Deadpool franchise page with films, cast highlights, quotes, and iconic scenes.",
};

export default function Page_Deadpool() {
  return (
    <div className={`${globalPageStyles} ${pageStyles}`}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(148,163,184,0.12),transparent_72%)]" />
      <Header />
      <main className={globalWrapperFixedWidth}>
        <section className="w-full max-w-[1800px] rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 shadow-2xl shadow-black/35 md:p-6 lg:p-8">
          <div className="mx-auto mb-4 w-fit rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-1 text-xxs uppercase tracking-[0.24em] text-slate-300">
            Maximum Effort Collection
          </div>
          <H1 text="Deadpool" other_classes="text-slate-100" />
          <PageIntro
            text={page.intro}
            text_colour="text-slate-200"
            other_classes="text-xs text-balance text-center leading-5 font-light md:text-sm md:mb-10"
          />

          <div className="mb-8 flex w-full justify-center gap-3 text-xs tracking-wide uppercase max-sm:flex-wrap lg:text-sm">
            <a className="rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-slate-200 transition-all duration-300 hover:border-slate-500 hover:bg-slate-800/80" href="/projects/movies-database">Back To Movies Database</a>
            <a className="rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-slate-200 transition-all duration-300 hover:border-slate-500 hover:bg-slate-800/80" href="#deadpool-explorer">Jump To Explorer</a>
          </div>

          <div className="space-y-6">
            <FranchiseHero page={page} stats={deadpoolStats} theme="deadpool" />
            <FranchisePillars pillars={pillars} theme="deadpool" />
            <div id="deadpool-explorer">
              <FranchiseExplorer films={films} cast={cast} quotes={quotes} scenes={scenes} theme="deadpool" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
