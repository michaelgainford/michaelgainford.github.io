"use client";

import Image from "next/image";
import Link from "next/link";
import { globalPageStyles } from "@/data/Variables";
import { mainStyles } from "@/data/Variables";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import H1 from "@/components/typography/H1Span";

import SitemapData from "@/data/Data_For_Sitemap.json";
const PagesInSitemap = SitemapData.Pages;

const pageStyles = `bg-slate-900 text-slate-400 bg-brand-background bg-repeat`;
const sharedHeadingStyles = `pb-2 mx-auto mb-12 text-3xl font-bold text-left transition-all duration-500 border-b-4 border-slate-500/20 md:text-xl xl:mb-16 2xl:text-3xl w-fit`;

// getTodaysDate	
const today = new Date();
//console.log('MG today', typeof today);
//const todayString = today.toString();
//console.log('MG todayString', typeof todayString);

export default function PAGE_ABOUT() {
	return (
		<div className={`${globalPageStyles} ${pageStyles}`}>

			<Header />
			
			<main className={`${mainStyles}`}>

				<div className="flex flex-col w-full justify-center text-center motion motion-preset-slide-up motion-delay-[1000ms] motion-duration-500 max-w-[1800px]">

					<H1 text={`Site Maintenance Tracker`} font_sizes={``} other_classes={`${sharedHeadingStyles} max-lg:-mt-4 text-balance !font-light border-none`} />

					<table className="w-full max-w-[1800px] mx-auto mt-8 mb-16 text-left text-md xl:max-w-[75dvw]">
						<thead>
							<tr className="text-left border-b-4 border-slate-200/5 text-amber-500/70">
								<th className="px-4 py-2">Page</th>
								<th className="px-4 py-2 text-left">Link Path</th>
								<th className="px-4 py-2 text-center">Link</th>
								<th className="px-4 py-2 text-center">Last Updated</th>
								<th className="px-4 py-2 text-center">Days Since</th>
							</tr>
						</thead>
						<tbody>
							{PagesInSitemap.map((item, index) => (
							<tr key={index} className="border-b border-slate-200/5 last:border-transparent">
								<td className="px-4 py-2">{item.name}</td>
								<td className="px-4 py-2 text-xs text-left">{item.href}</td>
								<td className="px-4 py-2 text-center">
									<Link className="px-2 py-1 text-sm font-bold tracking-wider lowercase transition-all duration-500 rounded-lg bg-slate-200/5 hover:bg-slate-200 hover:text-slate-900" href={item.href}>View</Link>
								</td>
								<td className="px-4 py-2 text-center">
									{new Date(item.lastUpdated).toLocaleDateString('en-GB')} 
								</td>
								{/* Output todays date minus the last updated date in number of days between the two dates */}
								<td className="px-4 py-2 text-center">
								{Math.floor((today - new Date(item.lastUpdated)) / (1000 * 60 * 60 * 24))}
								</td>
							</tr>
							))}
						</tbody>
					</table>
				</div>

			</main>

			<Footer />

		</div>
	);
}