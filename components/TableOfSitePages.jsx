"use client";
import Link from "next/link";
import SitemapData from "@/data/Data_For_Sitemap.json";
const PagesInSitemap = SitemapData.Pages;
const today = new Date();

export default function TABLE_OF_SITE_PAGES () {
    return (
        <div className="overflow-x-auto">
            <table className="w-full max-w-[1800px] mx-auto mt-8 mb-16 text-left text-md xl:max-w-[75dvw]">
                <thead className="text-xs lg:text-sm">
                    <tr className="text-left border-b-4 border-slate-200/5 text-amber-500/70">
                        <th className="px-4 py-2">Page</th>
                        <th className="px-4 py-2 text-left">Link Path</th>
                        <th className="px-4 py-2 text-center">Link</th>
                        <th className="px-4 py-2 text-center">Last Updated</th>
                        <th className="px-4 py-2 text-center">Days Since</th>
                    </tr>
                </thead>
                <tbody className="text-xs lg:text-sm">
                    {PagesInSitemap.map((item, index) => (
                    <tr key={index} className="border-b border-slate-200/5 last:border-transparent">
                        <td className="px-4 py-2 uppercase">{item.name}</td>
                        <td className="px-4 py-2 text-left">{item.href}</td>
                        <td className="px-4 py-2 text-center">
                            <Link className="px-2 py-1 font-bold tracking-wider lowercase transition-all duration-500 rounded-lg bg-slate-200/5 hover:bg-slate-200 hover:text-slate-900" href={item.href}>View</Link>
                        </td>
                        <td className="px-4 py-2 text-center">
                            {new Date(item.lastUpdated).toLocaleDateString('en-GB')} 
                        </td>
                        <td className="px-4 py-2 text-center">
                            {Math.floor((today - new Date(item.lastUpdated)) / (1000 * 60 * 60 * 24))}
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}