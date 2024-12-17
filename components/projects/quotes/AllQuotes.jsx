import DataForQuotesJSON from "@/data/data_for__quotes.json";
const DataForQuotes = DataForQuotesJSON.Quotes;

export default function COMPONENT_ALL_QUOTES() {
    return (
        <div className="columns-3xs gap-x-4 lg:gap-x-8 mb-16" >
        {DataForQuotes.map((quote, index) => (
        <div key={index} className="p-4 space-y-4 text-center mb-8 break-inside-avoid border rounded-lg border-sky-400 bg-sky-100 text-sky-900 flex items-center max-sm:w-full lg:p-8 shadow-md shadow-sky-200 hover:bg-sky-700 hover:text-sky-100 transition duration-300 ease-in-out">
            <q className="text-sm tracking-wider text-center lg:text-lg xl:text-xl max-w-[80vw]">
                {quote.quote}
            </q>
        </div>
        ))}
    </div>
    )
}