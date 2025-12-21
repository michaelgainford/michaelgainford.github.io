import Link from "next/link";
import { socials } from "@/variables/Data";
import FooterSectionHeader from "./Footer_Section_Header";
import Footer_About_Text from "./Footer_About_Text";

export default function Component_FooterAbout() {
	return (
		<div className="flex flex-col col-span-1 gap-2 footer-about lg:col-span-2">
			<FooterSectionHeader text="About" />
			<div className="flex flex-col gap-4 mb-8 sm:gap-8 sm:flex-row md:gap-12 lg:pb-8 lg:gap-16">
				<Footer_About_Text />
				<div className="max-lg:mt-2"> 
					<ul className="flex justify-center gap-8 sm:justify-end lg:flex-col">
						{socials.map((social, index) => (
						<li key={index}>
							<Link href={social.href} title={social.name} className={`group`}>
								<social.icon classes={`size-4 fill-current group-hover:fill-amber-500 duration-300 lg:size-6 xl:size-8`}/>
							</Link>
						</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}