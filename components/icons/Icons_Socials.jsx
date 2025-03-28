import Link from "next/link";
import IconCodepen from "./IconCodepen";
import IconGithub from "./IconGithub";
import IconLinkedIn from "./IconLinkedIn";
import IconX from "./IconTwitter";

const IconsSocialsData = [
	{
		id: 1,
		icon: IconCodepen,
		title: "Codepen",
		href: "https://codepen.io/michaelgainford",
	},
	{
		id: 2,
		icon: IconGithub,
		title: "GitHub",
		href: "https://github.com/michaelgainford",
	},
	{
		id: 3,
		icon: IconLinkedIn,
		title: "LinkedIn",
		href: "https://www.linkedin.com/in/michael-gainford/",
	},
	{
		id: 4,
		icon: IconX,
		title: "X",
		href: "https://twitter.com/m1cha3lgainford",
	},
];

export default function ICONS_SKILLS({ heading, heading_styles }) {
	return (
		<div
			data-card="socials"
			id="socials"
			className="col-span-12 px-6 py-12 text-xs text-left transition-all duration-500 border rounded-lg lg:px-12 md:col-span-7 something-4 border-slate-500/10 hover:border-amber-500 hover:bg-slate-500/10 group/socials @container/socials"
		>
			<h2
				className={`${heading_styles} group-hover/socials:border-amber-500/80`}
			>
				{heading}
			</h2>
			<div className="grid grid-cols-2 gap-4 lg:gap-8 @3xl:grid-cols-4 test">
				{IconsSocialsData.map((icon, index) => (
					<Link
						key={index}
						href={icon.href}
						title={icon.title}
						className="flex items-center justify-center border rounded-lg icon aspect-square border-slate-200/5 *:size-12 *:fill-current hover:border-amber-500 hover:bg-slate-900 duration-500 transition-all overflow-hidden flex-col relative group/link [&_svg]:size-8 @-lg/socials:[&_svg]:size-12"
					>
						<icon.icon />
						<p className="absolute bottom-0 tracking-wider text-center lg:translate-y-32 lg:group-hover/link:translate-y-0 lg:text-sm !w-full block self-center">
							{icon.title}
						</p>
					</Link>
				))}
			</div>
		</div>
	);
}
