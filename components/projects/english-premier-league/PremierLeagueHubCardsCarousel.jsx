"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "@/components/buttons/Button";

export default function PremierLeagueHubCardsCarousel({ blocks, imageRoot, containerClassName }) {
	const scrollContainerRef = useRef(null);
	const cardRefs = useRef([]);
	const programmaticScrollRef = useRef(false);
	const scrollSettleTimerRef = useRef(null);
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const container = scrollContainerRef.current;
		if (!container) return;

		const updateActiveCard = () => {
			if (programmaticScrollRef.current) return;

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
		const finishProgrammaticScroll = () => {
			if (scrollSettleTimerRef.current) {
				window.clearTimeout(scrollSettleTimerRef.current);
				scrollSettleTimerRef.current = null;
			}

			programmaticScrollRef.current = false;
			updateActiveCard();
		};
		const handleScroll = () => {
			if (!programmaticScrollRef.current) {
				updateActiveCard();
				return;
			}

			if (scrollSettleTimerRef.current) {
				window.clearTimeout(scrollSettleTimerRef.current);
			}
			scrollSettleTimerRef.current = window.setTimeout(finishProgrammaticScroll, 150);
		};

		updateActiveCard();
		container.addEventListener("scroll", handleScroll, { passive: true });
		container.addEventListener("scrollend", finishProgrammaticScroll);
		window.addEventListener("resize", updateActiveCard);

		return () => {
			container.removeEventListener("scroll", handleScroll);
			container.removeEventListener("scrollend", finishProgrammaticScroll);
			window.removeEventListener("resize", updateActiveCard);
			if (scrollSettleTimerRef.current) {
				window.clearTimeout(scrollSettleTimerRef.current);
			}
		};
	}, [blocks.length]);

	const scrollToIndex = (index) => {
		const container = scrollContainerRef.current;
		const card = cardRefs.current[index];
		if (!container || !card) return;
		setActiveIndex(index);
		if (Math.abs(container.scrollLeft - card.offsetLeft) < 1) return;
		programmaticScrollRef.current = true;
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
					className="flex h-10 w-10 items-center justify-center rounded-full border border-epl-400 bg-white text-epl-700 transition-colors hover:bg-epl-700 hover:text-white hover:pointer-events-auto active:bg-epl-700 active:text-white disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-100 disabled:text-slate-400 disabled:opacity-100"
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
					className="flex h-10 w-10 items-center justify-center rounded-full border border-epl-400 bg-white text-epl-700 transition-colors hover:bg-epl-700 hover:text-white hover:pointer-events-auto active:bg-epl-700 active:text-white disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-100 disabled:text-slate-400 disabled:opacity-100"
					aria-label="Go to next card"
				>
					<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
						<path d="m9 18 6-6-6-6" />
					</svg>
				</button>
			</div>

			<div className="relative w-full max-w-full overflow-hidden lg:overflow-visible">
				<div
					ref={scrollContainerRef}
					className="w-full max-w-full min-h-75 flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-px-0 scroll-smooth pb-3 no-scrollbar lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-16 lg:overflow-visible lg:snap-none lg:scroll-auto lg:pb-0 [&>div]:max-w-full [&>div]:border-0 lg:[&>div]:border lg:[&>div]:border-slate-200 [&>div]:bg-white [&>div]:shadow-card [&>div]:rounded-2xl [&>div]:flex [&>div]:flex-col [&>div]:justify-between [&>div]:h-full [&>div]:transition-all [&>div]:hover:shadow-card-xl [&>div]:hover:-translate-y-1 [&_h2]:uppercase [&_h2]:font-extrabold [&_h2]:mb-2 [&_h2]:tracking-wide"
				>
				{blocks.map((block, index) => (
					<div
						key={index}
						ref={(element) => {
							cardRefs.current[index] = element;
						}}
						className="snap-start shrink-0 min-w-full sm:min-w-[78%] lg:min-w-0 p-4 md:p-8 lg:p-0 lg:mx-2 lg:relative lg:overflow-hidden flex flex-col h-full gap-4 rounded-2xl group"
					>
						<div className="flex-1 flex flex-col justify-between lg:contents">
							<div className="relative w-full mb-6 lg:mb-0 lg:order-1 aspect-[16/8.6] sm:aspect-video rounded-xl lg:rounded-none overflow-hidden">
								<Image
									src={`${imageRoot}/${block.image}`}
									alt={block.title}
									fill
									className="object-cover rounded-xl lg:rounded-none w-full h-full group-hover:scale-105 transition-transform duration-300"
									loading={index < 2 ? "eager" : "lazy"}
									priority={index < 2}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-epl-700/80 via-epl-500/40 to-transparent pointer-events-none rounded-xl lg:rounded-none" />
								<h2 className="absolute bottom-4 left-4 right-4 z-10 !mb-0 text-xl lg:left-8 lg:right-8 lg:text-3xl !normal-case !tracking-normal leading-tight text-white">{block.title}</h2>
							</div>
							<p className="lg:order-3 lg:mx-8 text-sm tracking-wide mb-4 lg:mb-0 line-clamp-4">{block.content}</p>
							<div className="lg:order-4 lg:mx-8 lg:mb-8 flex justify-start mt-auto">
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
