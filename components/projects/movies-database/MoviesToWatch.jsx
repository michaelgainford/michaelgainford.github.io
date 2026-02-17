"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { unwatchedMovies } from "@/variables/ProjectMovies";

export default function Component_MoviesToWatch() {
	const scrollContainerRef = useRef(null);
	const [scrollWidth, setScrollWidth] = useState(240);

	useEffect(() => {
		const calculateScrollWidth = () => {
			if (scrollContainerRef.current) {
				const container = scrollContainerRef.current;
				const firstChild = container.querySelector('.movie-card');
				
				if (firstChild) {
					const cardWidth = firstChild.offsetWidth;
					const gap = parseInt(window.getComputedStyle(container).gap);
					setScrollWidth(cardWidth + gap);
				}
			}
		};

		// Calculate on mount
		calculateScrollWidth();

		// Create ResizeObserver to watch for viewport changes
		const resizeObserver = new ResizeObserver(calculateScrollWidth);
		if (scrollContainerRef.current) {
			resizeObserver.observe(scrollContainerRef.current);
		}

		// Also listen for window resize
		window.addEventListener('resize', calculateScrollWidth);

		return () => {
			resizeObserver.disconnect();
			window.removeEventListener('resize', calculateScrollWidth);
		};
	}, []);

	const scrollLeft = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({
				left: -scrollWidth,
				behavior: 'smooth'
			});
		}
	};

	const scrollRight = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({
				left: scrollWidth,
				behavior: 'smooth'
			});
		}
	};

	return (
		<div className="w-full py-4 my-8 border-2 rounded-lg xl:py-8 border-slate-950 xl:my-16">
		<h2 className="mb-4 text-sm lg:text-lg" id="to-watch">To Watch</h2>
		<div className="relative min-h-[100px]">
			{/* Left scroll button */}
			<button
				onClick={scrollLeft}
				className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/90 hover:bg-black text-white p-3 rounded-full transition-all duration-300 shadow-lg cursor-pointer"
				aria-label="Scroll left"
			>
				<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
					<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
				</svg>
			</button>

			{/* Right scroll button */}
			<button
				onClick={scrollRight}
				className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/90 hover:bg-black text-white p-3 rounded-full transition-all duration-300 shadow-lg cursor-pointer"
				aria-label="Scroll right"
			>
				<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
					<path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
				</svg>
			</button>

		<div ref={scrollContainerRef} className="min-h-[100px] movies-grid w-full flex flex-nowrap gap-4 max-sm:gap-y-6 xl:gap-12 overflow-x-auto snap-x snap-mandatory no-scrollbar">
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
	</div>		
	)
}