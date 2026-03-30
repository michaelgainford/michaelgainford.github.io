"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "@/components/buttons/Button";

export default function PremierLeagueHubCardsCarousel({ blocks, imageRoot, containerClassName }) {
	const scrollContainerRef = useRef(null);
	const cardRefs = useRef([]);
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const container = scrollContainerRef.current;
		if (!container) return;

		const updateActiveCard = () => {
			const cardElements = cardRefs.current;
			if (!cardElements.length) return;

			const containerStart = container.scrollLeft;
			let closestIndex = 0;
			let smallestDistance = Number.POSITIVE_INFINITY;

			cardElements.forEach((card, index) => {
				if (!card) return;
				const distance = Math.abs(card.offsetLeft - containerStart);
				if (distance < smallestDistance) {
					smallestDistance = distance;
					closestIndex = index;
				}
			});

			setActiveIndex(closestIndex);
		};

		updateActiveCard();
		container.addEventListener("scroll", updateActiveCard, { passive: true });
		window.addEventListener("resize", updateActiveCard);

		return () => {
			container.removeEventListener("scroll", updateActiveCard);
			window.removeEventListener("resize", updateActiveCard);
		};
	}, [blocks.length]);

	const scrollToIndex = (index) => {
		const container = scrollContainerRef.current;
		const card = cardRefs.current[index];
		if (!container || !card) return;
		setActiveIndex(index);
		container.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
	};

	const goToPreviousCard = () => {
		const nextIndex = Math.max(0, activeIndex - 1);
		scrollToIndex(nextIndex);
	};

	const goToNextCard = () => {
		const nextIndex = Math.min(blocks.length - 1, activeIndex + 1);
		scrollToIndex(nextIndex);
	};

	return (
		<div className={`${containerClassName} w-full max-w-full overflow-hidden`}>
			<div className="mb-3 grid grid-cols-[2.5rem_1fr_2.5rem] items-center gap-3 lg:hidden">
				<button
					type="button"
					onClick={goToPreviousCard}
					disabled={activeIndex === 0}
					className="flex h-10 w-10 items-center justify-center rounded-full border border-epl-400 bg-white text-epl-700 transition-colors hover:bg-epl-700 hover:text-white active:bg-epl-700 active:text-white disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-100 disabled:text-slate-400 disabled:opacity-100"
					aria-label="Go to previous card"
				>
					<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
						<path d="m15 18-6-6 6-6" />
					</svg>
				</button>
				<p className="text-center text-xs font-semibold uppercase tracking-wide text-epl-600 whitespace-nowrap">
					Card {activeIndex + 1} of {blocks.length}
				</p>
				<button
					type="button"
					onClick={goToNextCard}
					disabled={activeIndex === blocks.length - 1}
					className="flex h-10 w-10 items-center justify-center rounded-full border border-epl-400 bg-white text-epl-700 transition-colors hover:bg-epl-700 hover:text-white active:bg-epl-700 active:text-white disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-100 disabled:text-slate-400 disabled:opacity-100"
					aria-label="Go to next card"
				>
					<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
						<path d="m9 18 6-6-6-6" />
					</svg>
				</button>
			</div>

			<div className="relative w-full max-w-full overflow-hidden">
				<div
					ref={scrollContainerRef}
					className="w-full max-w-full min-h-[300px] flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-px-0 scroll-smooth pb-3 no-scrollbar lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-16 lg:overflow-visible lg:snap-none lg:scroll-auto lg:pb-0 [&>div]:max-w-full [&>div]:border-0 lg:[&>div]:border lg:[&>div]:border-slate-200 [&>div]:bg-white [&>div]:shadow-lg [&>div]:rounded-2xl [&>div]:flex [&>div]:flex-col [&>div]:justify-between [&>div]:h-full [&>div]:transition-all [&>div]:hover:shadow-2xl [&>div]:hover:-translate-y-1 [&_h2]:uppercase [&_h2]:font-extrabold [&_h2]:mb-2 [&_h2]:tracking-wide"
				>
				{blocks.map((block, index) => (
					<div
						key={index}
						ref={(element) => {
							cardRefs.current[index] = element;
						}}
						className="snap-start shrink-0 min-w-full sm:min-w-[78%] lg:min-w-0 p-4 md:p-8 flex flex-col h-full gap-4 rounded-2xl group"
					>
						<h2 className="pl-2 text-sm lg:text-base leading-none border-l-4 lg:border-l-8 border-amber-500 group-hover:border-epl-500 transition-colors duration-200">{block.title}</h2>
						<div className="flex-1 flex flex-col justify-between">
							<div className="relative w-full mb-6 aspect-[16/8.6] sm:aspect-video rounded-xl overflow-hidden">
								<Image
									src={`${imageRoot}/${block.image}`}
									alt={block.title}
									fill
									className="object-cover rounded-xl w-full h-full group-hover:scale-105 transition-transform duration-300"
									loading={index < 2 ? "eager" : "lazy"}
									priority={index < 2}
									placeholder="blur"
									blurDataURL="/placeholder-files/blurred-image.webp"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-epl-700/80 via-epl-500/40 to-transparent pointer-events-none rounded-xl" />
							</div>
							<p className="text-sm tracking-wide mb-4 line-clamp-4">{block.content}</p>
							<div className="flex justify-start mt-auto">
								<Button
									label={block.button}
									href={block.buttonHref}
									title={block.buttonTitle}
									background_colour="bg-epl-500"
									border_colour="border-epl-500"
									text_colour="text-white"
									hover_background_colour="hover:bg-epl-800"
									hover_text_colour="hover:text-amber-400"
								/>
							</div>
						</div>
					</div>
				))}
				</div>
				<div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-white to-transparent lg:hidden" />
				<div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-white to-transparent lg:hidden" />
			</div>

			<div className="mt-3 flex items-center justify-center gap-2 lg:hidden">
				{blocks.map((block, index) => (
					<button
						key={block.title}
						type="button"
						onClick={() => scrollToIndex(index)}
						aria-label={`Go to ${block.title}`}
						aria-current={activeIndex === index ? "true" : "false"}
						className={`h-2.5 rounded-full transition-all duration-200 ${activeIndex === index ? "w-8 bg-epl-500" : "w-2.5 bg-epl-200 hover:bg-epl-300"}`}
					/>
				))}
			</div>
		</div>
	);
}
