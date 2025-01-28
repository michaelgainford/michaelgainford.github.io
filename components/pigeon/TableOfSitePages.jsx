"use client";
import Link from "next/link";
import SitemapData from "@/data/data_for__sitemap.json";
const PagesInSitemap = SitemapData.Pages;
const today = new Date();

const daysInSafeZone = 7;
const daysInAttentionZone = 14;
const daysInWarningZone = 28;

export default function TABLE_OF_SITE_PAGES() {
	return (
		<div className="overflow-x-auto">
			<table className="w-full max-w-[1800px] mx-auto mt-8 mb-16 text-left text-md xl:max-w-[90dvw]">
				<thead className="text-xs lg:text-sm">
					<tr className="text-left border-b-4 border-slate-200/5 text-amber-500/70 [&>th]:py-2 [&>th]:text-center">
						<th className="py-2 text-left! pl-2">Page</th>
						<th className="py-2 text-left!">Link Path</th>
						<th>Link</th>
						<th>Last Updated</th>
						<th>Days</th>
						<th className="text-left!">Status</th>
					</tr>
				</thead>
				<tbody className="text-xs lg:text-sm">
					{PagesInSitemap.map((item, index) => (
						<tr
							key={index}
							className={`border-b border-slate-200/5 last:border-transparent [&>th]:px-4 [&>th]:py-2 ${
								Math.floor(
									(today - new Date(item.lastUpdated)) / (1000 * 60 * 60 * 24)
								) > daysInWarningZone
									? "bg-rose-500/10"
									: Math.floor(
											(today - new Date(item.lastUpdated)) /
												(1000 * 60 * 60 * 24)
									  ) > daysInAttentionZone
									? "bg-yellow-500/10"
									: ""
							}`}
						>
							<td className="uppercase pl-2">{item.name}</td>
							<td className="text-left">{item.href}</td>
							<td className="text-center">
								<Link
									className="px-2 py-1 font-bold tracking-wider lowercase transition-all duration-500 rounded-lg bg-slate-200/5 hover:bg-slate-200 hover:text-slate-900"
									href={item.href}
								>
									View
								</Link>
							</td>
							<td className="px-4 py-2 text-center">
								{new Date(item.lastUpdated).toLocaleDateString("en-GB")}
							</td>
							<td className="px-4 py-2 text-center">
								{Math.floor(
									(today - new Date(item.lastUpdated)) / (1000 * 60 * 60 * 24)
								)}
							</td>
							<td>
								<span className="px-2 py-1 font-bold w-full tracking-wider text-center rounded-lg relative">
									<span
										className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full ${
											Math.floor(
												(today - new Date(item.lastUpdated)) /
													(1000 * 60 * 60 * 24)
											) <= daysInSafeZone
												? "bg-green-500"
												: Math.floor(
														(today - new Date(item.lastUpdated)) /
															(1000 * 60 * 60 * 24)
												  ) <= daysInAttentionZone
												? "bg-sky-300"
												: Math.floor(
														(today - new Date(item.lastUpdated)) /
															(1000 * 60 * 60 * 24)
												  ) <= daysInWarningZone
												? "bg-yellow-500"
												: "bg-red-500"
										}`}
									></span>
									<span className="ml-2">
										{Math.floor(
											(today - new Date(item.lastUpdated)) /
												(1000 * 60 * 60 * 24)
										) <= daysInSafeZone
											? "Up to date"
											: Math.floor(
													(today - new Date(item.lastUpdated)) /
														(1000 * 60 * 60 * 24)
											  ) <= daysInAttentionZone
											? "Needs attention"
											: Math.floor(
													(today - new Date(item.lastUpdated)) /
														(1000 * 60 * 60 * 24)
											  ) <= daysInWarningZone
											? "Urgent"
											: "Overdue"}
									</span>
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}