import DataForSpaceJSON from "@/data/data_for__space";
const DataForSpace = DataForSpaceJSON.SunAndPlanets;

export default function Component_SolarSystem() {
	return (
		<div className="w-full">
			<div className="mx-auto mb-6 max-w-[900px] text-center">
				<h3 className="text-sm lg:text-lg font-semibold uppercase tracking-[0.18em] text-sky-200">Orbital View</h3>
				<p className="mt-2 text-xs lg:text-sm text-slate-300/90">
					A simplified visual of our solar system to show the relative orbit order from Mercury to Neptune.
				</p>
			</div>
			<div className="solar-system mx-auto rounded-xl border border-sky-200/15 bg-black/35 p-4 lg:p-6">
				<ol aria-label="Simplified solar system orbit model">
			{DataForSpace.map((planet, index) => (
				<li
				key={index}
				className={planet.name.toLowerCase()}
				data-order={planet.order}
				data-handle={planet.name.toLowerCase()}
				></li>
			))}
				</ol>
			</div>
		</div>
	)
}