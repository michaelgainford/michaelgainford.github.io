export default function Component_BackToTopButton() {
	return (
		<div className="fixed bottom-4 right-4 z-50">
			<a
				href="#top"
				className="flex items-center justify-center w-12 h-12 bg-slate-800 text-slate-200 rounded-full shadow-lg transition-all hover:transition duration-300 ease-in-out transform hover:scale-105"
			>
				<span className="icon-box size-6">
					<svg
						className="text-amber-500"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<polyline points="18 15 12 9 6 15"></polyline>
					</svg>
				</span>
			</a>
		</div>
	);
}