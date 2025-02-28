import DataForQuotesJSON from "@/data/data_for__quotes.json";
const DataForQuotes = DataForQuotesJSON.Quotes;

export default function Component_AllQuotes() {
  return (
		<div className="columns-3xs gap-x-4 lg:gap-x-8 mb-16" >
			{DataForQuotes.map((quote, index) => (
				<div key={index} className="p-6 space-y-4 text-center mb-8 break-inside-avoid border border-sky-400 bg-white text-sky-900 flex items-center max-sm:w-full lg:p-8 shadow-md shadow-sky-200 hover:bg-sky-700 hover:text-sky-100  hover:-translate-y-1 transition-all duration-500 ease-in-out max-sm:max-w-[75%] mx-auto hover:rounded-xl">
					<q className="text-sm tracking-wider text-center lg:text-base xl:text-lg max-w-[80vw] before:content-[open-quote] before:text-xl before:mr-2 before:mt-1 before:leading-none before:font-bold before:text-sky-500 before:font-serif after:content-[close-quote] after:text-xl after:ml-2 after:mb-1 after:leading-none after:font-bold after:text-sky-500 after:font-serif hover:before:text-sky-200 hover:after:text-sky-200">
						{quote.quote}
					</q>
				</div>
			))}
    </div>
	)
}