import DataForSpaceJSON from "@/data/data_for__space";
const DataForSpace = DataForSpaceJSON.SunAndPlanets;

export default function Component_SolarSystem() {
	return (
		<div className={`w-full max-lg:mt-16 solar-system`}>
			<h3 className={`mt-8 text-base mb-4 lg:text-2xl text-center`}>The Solar System</h3>
			<ol>
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
	)
}