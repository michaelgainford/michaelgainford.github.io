import Link from "next/link";
const adminLinkStyles =
	"flex px-8 py-4 text-center transition-all duration-300 border-transparent rounded-lg border-3 bg-slate-500/20 hover:bg-amber-500 hover:border-amber-500 hover:text-slate-900 min-w-fit xl:h-full";

export default function Component_PigeonNav() {
	return (
		<div className="min-w-[300px] lg:w-full">
			<h1 className="mb-8 font-bold lg:mb-12 2xl:mb-16 text-lg: xl:text-4xl underline-offset-8">
				Admin
			</h1>
			<div className="space-y-8 xl:flex xl:w-full xl:gap-8">
				<Link
					href="/pigeon/site-maintenance-tracker"
					className={adminLinkStyles}
				>
					Site Maintenance Tracker
				</Link>
				<Link href="/general/site-style-guide" className={adminLinkStyles}>
					Site Style Guide
				</Link>
			</div>
		</div>
	);
}