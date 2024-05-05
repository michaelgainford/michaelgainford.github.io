import MainHeader from "@/components/header/MainHeader";
import H1 from "@/components/typography/H1Span";
import MainFooter from "@/components/footer/MainFooter";
import DataForQuotes from "@/components/data/DataForQuotes";
import { globalPageStyles } from "@/components/data/Variables";
import { mainStyles } from "@/components/data/Variables";

export default function Home() {
  return (
    <div className={`${globalPageStyles} bg-sky-900`}>

      <MainHeader />

      <main className={`${mainStyles}`}>

        <H1 text="Quotes" />

        <div className="flex flex-wrap justify-center w-full gap-8">
          {DataForQuotes.map((quote, index) => (
            <div key={index} className="w-1/4 p-4 space-y-4 text-center border rounded-lg border-sky-700 bg-sky-700 min-w-[200px] max-sm:w-full">
              <q className="text-sm tracking-wider text-center">{quote.quote}</q>
            </div>
          ))}
        </div>


      </main>
      <MainFooter />
    </div>
  );
}