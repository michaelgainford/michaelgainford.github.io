import Image from "next/image";
import Link from "next/link";
import { globalPageStyles } from "@/data/Variables";
import { mainStyles } from "@/data/Variables";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import H1 from "@/components/typography/H1Span";

const pageStyles = `bg-slate-900 text-slate-400 bg-brand-background bg-repeat`;
const sharedHeadingStyles = `pb-2 mx-auto mb-12 text-3xl font-bold text-left transition-all duration-500 border-b-4 border-slate-500/20 md:text-xl xl:mb-16 2xl:text-3xl w-fit`;

export default function PAGE_ABOUT() {
	return (
		<div className={`${globalPageStyles} ${pageStyles}`}>

			<Header />
			
			<main className={`${mainStyles}`}>

				<div className="flex flex-col w-full justify-center text-center motion motion-preset-slide-up motion-delay-[1000ms] motion-duration-500 max-w-[1800px]">

					<H1 text={`Site Maintenance Tracker`} font_sizes={``} other_classes={`${sharedHeadingStyles} max-lg:-mt-4 text-balance !font-light`} />

					<table className="w-full max-w-[1800px] mx-auto mt-8 mb-16 text-left text-md">
						<thead>
							<tr className="text-left">
								<th className="px-4 py-2">Page</th>
								<th className="px-4 py-2">Link</th>
								<th className="px-4 py-2">Last Updated</th>
								<th className="px-4 py-2">Days Since</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="px-4 py-2">Home</td>
								<td className="px-4 py-2"><Link href="/" className="text-blue-500">View</Link></td>
								<td className="px-4 py-2"></td>
								<td className="px-4 py-2"></td>
							</tr>
							<tr>
								<td className="px-4 py-2">About</td>
								<td className="px-4 py-2"><Link href="/" className="text-blue-500">View</Link></td>
								<td className="px-4 py-2"></td>
								<td className="px-4 py-2"></td>

							</tr>
							<tr>
								<td className="px-4 py-2">Contact</td>
								<td className="px-4 py-2"><Link href="/" className="text-blue-500">View</Link></td>
								<td className="px-4 py-2"></td>
								<td className="px-4 py-2"></td>

							</tr>
							<tr>
								<td className="px-4 py-2">Services</td>
								<td className="px-4 py-2"><Link href="/" className="text-blue-500">View</Link></td>
								<td className="px-4 py-2"></td>
								<td className="px-4 py-2"></td>

							</tr>
							<tr>
								<td className="px-4 py-2">Projects</td>
								<td className="px-4 py-2"><Link href="/" className="text-blue-500">View</Link></td>
								<td className="px-4 py-2"></td>
								<td className="px-4 py-2"></td>

							</tr>
							<tr>
								<td className="px-4 py-2">Blog</td>
								<td className="px-4 py-2"><Link href="/" className="text-blue-500">View</Link></td>
								<td className="px-4 py-2"></td>
								<td className="px-4 py-2"></td>
							</tr>
						</tbody>
					</table>
				</div>

			</main>

			<Footer />

		</div>
	);
}