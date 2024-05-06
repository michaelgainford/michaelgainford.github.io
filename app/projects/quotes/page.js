import { globalPageStyles } from "@/components/data/Variables";
import { mainStyles } from "@/components/data/Variables";
import MainHeader from "@/components/header/MainHeader";
import H1 from "@/components/typography/H1Span";
import MainFooter from "@/components/footer/MainFooter";
import DataForQuotes from "@/components/data/DataForQuotes";
const pageStyles = "bg-gradient-to-b from-sky-800 to-sky-900";

export default function Home() {
  return (
    <div className={`${globalPageStyles} ${pageStyles}`}>

      <MainHeader />

      <main className={`${mainStyles}`}>

        <H1 text="Quotes" />

        <div className="flex flex-wrap justify-center w-full gap-8">
          {DataForQuotes.map((quote, index) => (
            <div key={index} className="w-1/5 p-4 lg:p-8 space-y-4 text-center border rounded-lg border-sky-700 bg-sky-700 min-w-[200px] max-sm:w-full flex items-center">
              <q className="text-sm tracking-wider text-center">
                {quote.quote}
              </q>
            </div>
          ))}
        </div>


      </main>
      <MainFooter />
    </div>
  );
}