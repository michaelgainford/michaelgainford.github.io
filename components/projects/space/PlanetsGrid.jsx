"use client";

import Image from 'next/image';
import DataForSpaceJSON from "@/data/data_for__space";
const DataForSpace = DataForSpaceJSON.SunAndPlanets;
const DataForPlanets = DataForSpace
	.filter((planet) => planet.star_or_planet === "planet")
	.sort((a, b) => a.order - b.order);

const numberFormatter = new Intl.NumberFormat("en-GB");

export default function Component_PlanetsGrid() {
	return (
		<div className="w-full">
			<p className="mb-3 text-center text-xxs uppercase tracking-[0.16em] text-sky-200/75 sm:hidden">
				Swipe to explore planets
			</p>
			<div className="flex snap-x snap-mandatory scroll-px-4 scroll-smooth gap-4 overflow-x-auto pb-2 no-scrollbar sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:snap-none lg:grid-cols-3 lg:gap-6 xl:gap-8 2xl:grid-cols-4">
				{DataForPlanets.map((planet, index) => (
					<div key={index} className="group w-[82vw] max-w-[360px] min-w-[260px] shrink-0 snap-start snap-always rounded-xl border border-sky-200/15 bg-black/90 p-4 text-center shadow-lg shadow-black/25 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/35 hover:bg-black sm:w-full sm:max-w-none sm:min-w-0 sm:shrink sm:snap-none">
						<div className="mb-3 flex items-center justify-between">
							<span className="rounded-full border border-sky-200/25 bg-slate-950/50 px-2 py-1 text-xxs uppercase tracking-wider text-sky-200">Planet {planet.order}</span>
							<span className="text-xxs uppercase tracking-widest text-slate-400">{planet.slug}</span>
						</div>
						<h2 className="mb-4 text-base font-bold tracking-wide text-slate-100 lg:text-lg">{planet.name}</h2>
						<div className="relative mb-5 overflow-hidden rounded-lg border border-sky-200/15 bg-black/30 p-2">
							<Image 
								src={`/space/planets/${planet.slug}.webp`}
								alt={planet.name}
								height={400}
								width={400}
								className="mx-auto transition-transform duration-500 group-hover:scale-105"
							/>
						</div>
						<div className="grid grid-cols-2 gap-2 pt-1 text-left">
							<div className="rounded-md border border-sky-200/10 bg-slate-950/60 p-2">
								<p className="text-xs font-semibold text-slate-100">{numberFormatter.format(planet.distanceFromSunInMiles)}</p>
								<span className="text-[10px] uppercase tracking-wide text-slate-400">Miles from Sun</span>
							</div>
							<div className="rounded-md border border-sky-200/10 bg-slate-950/60 p-2">
								<p className="text-xs font-semibold text-slate-100">{planet.rotationPeriodInHours}</p>
								<span className="text-[10px] uppercase tracking-wide text-slate-400">Rotation Hours</span>
							</div>
							<div className="rounded-md border border-sky-200/10 bg-slate-950/60 p-2">
								<p className="text-xs font-semibold text-slate-100">{planet.size}</p>
								<span className="text-[10px] uppercase tracking-wide text-slate-400">Earth Sizes</span>
							</div>
							<div className="rounded-md border border-sky-200/10 bg-slate-950/60 p-2">
								<p className="text-xs font-semibold text-slate-100">{planet.moons}</p>
								<span className="text-[10px] uppercase tracking-wide text-slate-400">Moons</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}