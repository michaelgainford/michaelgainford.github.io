import Link from "next/link";
import DataForSocials from "/components/data/Data_For_Socials";
import FooterSectionHeader from "./Footer_Section_Header";
const footerAboutText = `My name is Michael. I am Front-End Developer. I live in the North West of England. I currently work as a Shopify Developer working on e-commerce websites and in my spare time I enjoy working on personal projects, lately using the NextJS framework.`;

export default function FOOTER_ABOUT() {
  return (
    <div className={`footer-about flex flex-col col-span-1 gap-2 lg:col-span-2`}>
		<FooterSectionHeader text={`About`} />
		<div className={`flex flex-col gap-4 mb-8 sm:gap-8 sm:flex-row md:gap-12 lg:pb-8 lg:gap-16`}>
			<p className={`text-[10px] text-center leading-loose sm:pr-8 sm:text-left md:text-xs/relaxed lg:text-sm/loose`}>
				{footerAboutText}
			</p>
			<div className={`max-lg:mt-2`}>
				<ul className={`flex justify-center gap-8 sm:justify-end lg:flex-col`}>
					{DataForSocials.map((social, index) => (
					<li key={index}>
						<Link href={social.href} title={social.name} className={`group`}>
							<social.icon classes={`size-4 fill-slate-300 group-hover:fill-amber-500 duration-300 lg:size-6 xl:size-8 `}/>
						</Link>
					</li>
					))}
				</ul>
			</div>
		</div>
		<div className={`hidden max-lg:mt-2`}>
			<ul className={`flex justify-center gap-8 sm:justify-end`}>
				{DataForSocials.map((social, index) => (
				<li key={index}>
					<Link href={social.href} title={social.name} className={`group`}>
						<social.icon classes={`size-4 fill-slate-300 group-hover:fill-amber-500 duration-300 lg:size-5`}/>
					</Link>
				</li>
				))}
			</ul>
		</div>
    </div>
  );
}
