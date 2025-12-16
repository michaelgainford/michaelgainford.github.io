import Image from "next/image"
import { unwatchedMovies } from "@/variables/Data";

export default function Component_MoviesToWatch() {
	return (
		<div className="w-full py-4 my-8 border-2 rounded-lg xl:py-8 border-slate-950 xl:my-16">
		<h2 className="mb-4 text-sm lg:text-lg" id="to-watch">To Watch</h2>
		<div className="min-h-[100px] movies-grid w-full flex flex-nowrap gap-4 max-sm:gap-y-6 xl:gap-12 overflow-x-auto snap-x snap-mandatory no-scrollbar">
			{unwatchedMovies.map((movie, id) => (
			<div key={id} className="flex flex-col items-center content-center duration-300 ease-in-out cursor-pointer gap-2 movie-card justify-items-center text-light_colour border-secondary group hover:bg-secondary snap-always snap-center shrink-0 w-36">
			<div className="w-full max-w-full movie-poster">
				<Image src={movie.image} className="object-cover w-full duration-1000 border-tr-md border-tl-md xl:opacity-50 xl:group-hover:opacity-100 group-hover:ease-in-out aspect-2/3!" alt={movie.title} width={144} height={216} />
				</div>
				<div className="w-full py-2 movie-info">
					<p className="movie-title bg-black w-full py-2 px-3 group-hover:pt-2 ease-in-out duration-300 xl:opacity-50 xl:group-hover:opacity-100 text-xs min-h-[60px] max-w-full flex items-center justify-center h-full line-clamp-3 text-center">
						{movie.title}
					</p>
				</div>
			</div>
			))}
		</div>
	</div>		
	)
}