import Image from "next/image";
import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1Span";
import Footer from "@/components/footer/Footer";
import { globalPageStyles } from "@/components/data/Variables";
import { mainStyles } from "@/components/data/Variables";
import DataForMyDevDashboard from "@/components/data/Data_For_MyDevDashboard";
import Button from "@/components/buttons/Button_Global";

// get today's date
const today = new Date();
// format today as dd/mm/yyyy
const todayFormatted = today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear();
// page styles
const pageStyles = "bg-slate-900 text-slate-400 bg-brand-background bg-repeat";
const detailsStyles = "border-2 border-slate-800 rounded-lg p-4 bg-slate-900 group !overflow-x-auto [&_svg]:open:-rotate-180 xl:w-[1200px] xl:mx-auto";
const summaryStyles = "flex justify-between py-4 cursor-pointer";
const summaryHeaderStyles = "text-sm";
const summaryHeaderSvgStyles = "rotate-0 transform text-slate-200 transition-all duration-300";

export default function PAGE_MY_DASHBOARD(){
	return (
	<div className={`${globalPageStyles} ${pageStyles}`}>
		<Header />
		<main className={`${mainStyles}`}>
		<H1 text={`My Dev Dashboard`} />
		<div className={`flex flex-col w-full mb-8`}>
			<details className={detailsStyles}>
			<summary className={summaryStyles}>
				<span className={summaryHeaderStyles}>My Domains</span>
				<span>
				<svg className={summaryHeaderSvgStyles} fill={`none`} height={`20`} width={`20`} stroke={`currentColor`} strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={`2`} viewBox={`0 0 24 24`}>
				<polyline points={`6 9 12 15 18 9`}></polyline>
				</svg>
				</span>
			</summary>
			<div className={`grid grid-cols-1 gap-8 lg:grid-cols-2`}>
				{DataForMyDevDashboard.map((domain, index) => (
				<div key={index} className={`domain min-w-[300px] sm:flex-wrap flex-col sm:flex-row flex-grow p-8 border-2 border-slate-800 rounded-lg space-y-2 bg-gradient-to-br from-slate-900/80 to-slate-900/90 text-sm gap-8 xl:gap-12 grid grid-cols-1 sm:grid-cols-2 items-start`}>
					<Image src={domain.image} alt={`Grey Square`} width={300} height={300} className={`object-cover object-center aspect-[3/2] @xs:aspect-[3/2]  w-full`} />
					<div className={`space-y-3`}>
						<h3 className={`text-sm font-bold tracking-wide uppercase`}>{domain.name}</h3>
						<p>URL: {domain.url}</p>
						<p>Expires: {domain.expires} <span>{domain.expires - todayFormatted} days until</span></p>
						<p>Host: {domain.host}</p>
						<div className={`py-8 space-x-4 domain-buttons`}>
						<Button label={`Site`} target={`_blank`} href={`https://${domain.url}`} />
						<Button label={`Host`} href={`https://krystal.co.uk`} />
						</div>
					</div>
				</div>
				))}
			</div>
			</details>
		</div>

		<div className={`flex flex-col w-full mb-8`}>
			<details className={detailsStyles}>
			<summary className={summaryStyles}>
				<span className={summaryHeaderStyles}>Bills/Payments</span>
				<span>
				<svg className={summaryHeaderSvgStyles} fill={`none" height="20" width="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24`}>
				<polyline points={`6 9 12 15 18 9`}></polyline>
				</svg>
				</span>
			</summary>
			<table className={`w-full py-6 mt-6 text-center border table-auto`}>
				<thead className={`mt-4 text-xs tracking-widest uppercase`}>
				<tr className={`bg-slate-950/50`}>
					<th className={`py-4 border border-slate-700`}>Invoice</th>
					<th className={`py-4 border border-slate-700`}>Amount</th>
					<th className={`py-4 border border-slate-700`}>Date</th>
				</tr>
				</thead>
				<tbody className={`py-8 text-sm bg-slate-950/30`}>
				<tr className={`bg-slate-800/40`}>
					<td className={`py-4 border border-slate-700`}>Invoice 1</td>
					<td className={`py-4 border border-slate-700`}>$100</td>
					<td className={`py-4 border border-slate-700`}>1/1/2021</td>
				</tr>
				<tr className={`bg-slate-800/40`}>
					<td className={`py-4 border border-slate-700`}>Invoice 2</td>
					<td className={`py-4 border border-slate-700`}>$200</td>
					<td className={`py-4 border border-slate-700`}>2/1/2021</td>
				</tr>
				<tr className={`bg-slate-800/40`}>
					<td className={`py-4 border border-slate-700`}>Invoice 3</td>
					<td className={`py-4 border border-slate-700`}>$300</td>
					<td className={`py-4 border border-slate-700`}>3/1/2021</td>
				</tr>
				</tbody>
			</table>
			</details>
		</div>

		<div className={`flex flex-col w-full`}>
			<details className={detailsStyles}>
			<summary className={summaryStyles}>
				<span className={summaryHeaderStyles}>Code Snippets</span>
				<span>
					<svg 
						className={`rotate-0 transform text-slate-200 transition-all duration-300`} 
						fill={`none`} 
						height={`20`} 
						width={`20`} 
						stroke={`currentColor`} 
						strokeLinecap={`round`} 
						strokeLinejoin={`round`} 
						strokeWidth={`2`} viewBox={`0 0 24 24`}>
						<polyline points={`6 9 12 15 18 9`}></polyline>
					</svg>
				</span>
			</summary>
			<div className={`w-full space-y-8 code-snippets`}>
				<div className={`code-snippet`}>
				<code className={`block p-4 overflow-auto text-sm rounded-lg bg-slate-800/50`}>
					<pre>
					&lt;!DOCTYPE html&gt;
					<br />
					&lt;html lang=&ldquo;en&rdquo;&gt;
					<br />
					&lt;head&gt;
					<br />
					&lt;meta charset=&ldquo;UTF-8&rdquo;&gt;
					<br />
					&lt;meta http-equiv=&ldquo;X-UA-Compatible&rdquo; content=&ldquo;IE=edge&rdquo;&gt;
					<br />
					&lt;meta name=&ldquo;viewport&rdquo; content=&ldquo;width=device-width,
					initial-scale=1.0&rdquo;&gt;
					<br />
					&lt;title&gt;Document&lt;/title&gt;
					<br />
					&lt;/head&gt;
					<br />

					&lt;body&gt;
						Body content goes here
					&lt;/body&gt;
					&lt;/html&gt;
					</pre>
				</code>
				</div>
				<div className={`code-snippet`}>
				<code className={`block p-4 text-sm rounded-lg bg-slate-800/50`}>npm install react</code>
				</div>
				<div className={`code-snippet`}>
				<code className={`block p-4 text-sm rounded-lg bg-slate-800/50`}>npm install react</code>
				</div>
				<div className={`code-snippet`}>
				<code className={`block p-4 text-sm rounded-lg bg-slate-800/50`}>npm install react</code>
				</div>
				<div className={`code-snippet`}>
				<code className={`block p-4 text-sm rounded-lg bg-slate-800/50`}>npm install react</code>
				</div>
				<div className={`code-snippet`}>
				<code className={`block p-4 text-sm rounded-lg bg-slate-800/50`}>npm install react</code>
				</div>
				<div className={`code-snippet`}>
				<code className={`block p-4 text-sm rounded-lg bg-slate-800/50`}>npm install react</code>
				</div>
				<div className={`code-snippet`}>
				<code className={`block p-4 text-sm rounded-lg bg-slate-800/50`}>npm install react</code>
				</div>
			</div>
			</details>
		</div>

		</main>
		<Footer />
	</div>
	);
}