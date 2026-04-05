import Header from "@/components/header/_Header";
import H1 from "@/components/typography/H1_Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import Footer from "@/components/footer/_Footer";
import MatrixHero from "@/components/projects/movies-database/the-matrix/MatrixHero";
import MatrixPillars from "@/components/projects/movies-database/the-matrix/MatrixPillars";
import MatrixExplorer from "@/components/projects/movies-database/the-matrix/MatrixExplorer";
import { globalPageStyles, globalWrapperFixedWidth } from "@/variables/Styles";
import { matrixData, trilogy, cast, pillars, quotes, scenes, matrixStats } from "@/variables/ProjectMatrix";

const pageStyles = "relative overflow-hidden bg-gray-950 text-slate-300";

export default function Page_TheMatrix() {
  return (
    <div className={`${globalPageStyles} ${pageStyles}`}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(148,163,184,0.12),transparent_72%)]" />
      <Header />
      <main className={globalWrapperFixedWidth}>
        <section className="cinema-flicker w-full max-w-[1800px] rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 shadow-2xl shadow-black/35 md:p-6 lg:p-8">
          <div className="mx-auto mb-4 w-fit rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-1 text-xxs uppercase tracking-[0.24em] text-slate-300">
            The Matrix Archive
          </div>
          <H1 text="The Matrix" other_classes="text-slate-100" />
          <PageIntro
            text={matrixData.matrixPage.intro}
            text_colour="text-slate-200"
            other_classes="text-xs text-balance text-center leading-5 font-light md:text-sm md:mb-10"
          />

          <div className="mb-8 flex w-full justify-center gap-3 text-xs tracking-wide uppercase max-sm:flex-wrap lg:text-sm">
            <a className="rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-slate-200 transition-all duration-300 hover:border-slate-500 hover:bg-slate-800/80" href="/projects/movies-database">Back To Movies Database</a>
            <a className="rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-slate-200 transition-all duration-300 hover:border-slate-500 hover:bg-slate-800/80" href="#matrix-explorer">Jump To Explorer</a>
          </div>

          <div className="space-y-6">
            <MatrixHero page={matrixData.matrixPage} stats={matrixStats} />
            <MatrixPillars pillars={pillars} />
            <div id="matrix-explorer">
              <MatrixExplorer trilogy={trilogy} cast={cast} quotes={quotes} scenes={scenes} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
