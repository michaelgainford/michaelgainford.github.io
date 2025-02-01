import Link from "next/link";
import { sharedHeadingStyles } from "@/data/Variables";
import Tools from "@/data/data_for__tools.json";
const ListOfTools = Tools.Tools;

export default function Component_CardTools() {
	return (
		<div data-card="tools" className="col-span-12 px-6 py-12 text-xs transition-all duration-500 border rounded-lg md:col-span-4 xl:col-span-3 something-3 border-slate-500/10 group/tools hover:border-amber-500 lg:p-8 2xl:py-16 @container group/tools">
			<h2 className={`${sharedHeadingStyles} group-hover/tools:border-amber-500/80`}>Tools I Created</h2>
			<ul className="flex flex-col gap-4 lg:gap-8 [&_li]:flex [&_a]:border  text-left [&_a]:border-slate-500/50 [&_a]:p-3 [&_a]:rounded-lg [&_a]:w-full [&_li]:w-full lg:[&_a]:py-4 [&_li]:bg-slate-600/10 lg:text-base [&_li]:not([class*='active']):opacity-25">
				{ListOfTools.map((tool, index) => (
					<li key={index} className="flex flex-col gap-2 lg:gap-4">
						<Link href={tool.href} className={`flex flex-col gap-2 text-lg  text-amber-500/80 hover:bg-slate-900 ${tool.active ? "opacity-100" : "opacity-25"}`}>
							<p className="uppercase text-sm tracking-wider">{tool.name}</p>
							<p className="text-sm text-slate-400/80">{tool.description}</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
