import Image from 'next/image';
import DataForSpaceJSON from "@/data/data_for__space";
const DataForSpace = DataForSpaceJSON.SunAndPlanets;
const DataForPlanets = DataForSpace.filter((planet) => planet.star_or_planet === "planet");

export default function Component_PlanetsGrid() {
	return (
		<div className="grid flex-wrap grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-8 xl:gap-12">
		{DataForPlanets.map((planet, index) => (
			<div key={index} className="w-full border rounded-lg bg-black border-slate-900 flex flex-col items-center px-4 py-8 space-y-2 text-center min-w-[200px] gap-4 max-sm:w-full [&>h2]:text-base [&>h2]:tracking-wider [&>h2]:text-center [&>h2]:font-bold lg:[&_>h2]:text-lg">
				<h2>{planet.name}</h2>
				<div className="w-full grid grid-cols-1 gap-6 pb-2 md:gap-8 lg:gap-12 [&_>_.stat-description]:text-[10px]">

					{/* Image | Start */}
					<div className={`image`}>
						<Image 
							src={`/space/planets/${planet.slug}.webp`}
							alt={planet.name}
							height={400}
							width={400}
							className={`mx-auto`}
						/>
					</div>
					{/* Image | End */}

					{/* Stats | Start */}
					<div className="grid grid-cols-2 gap-x-4 gap-y-8 [&>div]:flex [&>div]:flex-col [&>div]:tracking-wider [&>div]:text-center [&_span]:text-[10px] [&_span]:text-center [&_span]:lowercase pt-8 [&_p]:text-sm [&_p]:font-bold lg:[&_p]:text-lg">
						<div>
							<p>{planet.distanceFromSunInMiles.toLocaleString()}</p>
							<span>miles from the Sun</span>
						</div>
						<div>
							<p>{planet.rotationPeriodInHours}</p>
							<span>hours to rotate</span>
						</div>
						<div>
							<p>{planet.size}</p>
							<span>Earths (in size)</span>
						</div>
						<div>
							<p>{planet.moons}</p>
							<span >moons</span>
						</div>
					</div>
					{/* Stats | End */}

				</div>
			</div>
		))}
		</div>		
	)
}