import { wipItems } from "@/variables/Data";

export default function Component_PigeonWorkInProgress() {
	return (
		<div className="col-span-3">
			<h2 className="mb-8 text-lg font-bold lg:mb-12 2xl:mb-16 xl:text-4xl underline-offset-8">
				Coming Soon
			</h2>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
				{wipItems.map((item, index) => (
					<div
						key={index}
						className="flex flex-col justify-center gap-4 lg:gap-8 xl:gap-12 p-8 border card aspect-[3/2]]! lg:aspect-square! border-slate-500/20 bg-slate-500/20 rounded-lg text-center"
					>
						<h2 className="text-xl uppercase font-bold h-1/2 flex items-end justify-center">
							{item.title}
						</h2>
						<p className="text-center h-1/2">{item.content}</p>
					</div>
				))}
			</div>
		</div>
	);
}