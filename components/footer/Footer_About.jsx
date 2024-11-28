import Link from "next/link";
import DataForSocials from "@/data/Data_For_Socials";
import FooterSectionHeader from "./Footer_Section_Header";
import { urlForShopify, urlForNextJS, urlForReactJS, urlForTailwindCSS } from "@/data/Variables";

export default function COMPONENT_FOOTER_ABOUT() {
  return (
    <div className={`footer-about flex flex-col col-span-1 gap-2 lg:col-span-2`}>
		<FooterSectionHeader text={`About`} />
		<div className={`flex flex-col gap-4 mb-8 sm:gap-8 sm:flex-row md:gap-12 lg:pb-8 lg:gap-16`}>
			<p className={`text-xs text-center leading-loose sm:pr-8 sm:text-left md:text-xs/relaxed lg:text-xs/loose xl:text-sm/loose lg:pr-16 [&>a:hover]:underline`}>
				My name is Michael. I am Front-End Developer from and living in the North West of England. By day, under my Bruce Wayne 👨🏻 persona, I currently work as a <a href={urlForShopify}>Shopify</a> Developer working on e-commerce websites and stores for a large web development agency. By night, during the Batman 🦸🏻‍♂️ hours, I work with <a title="NextJS" href={urlForNextJS}>Next.js</a>, <a title="React JS" href={urlForReactJS}>React</a>, and <a title="Tailwind CSS" href={urlForTailwindCSS}>Tailwind CSS</a> to create fun, interesting and practical ways of brightening one&apos;s day. I am a Batman fan, for the record.
			</p>
			<div className={`max-lg:mt-2`}>
				<ul className={`flex justify-center gap-8 sm:justify-end lg:flex-col`}>
					{DataForSocials.map((social, index) => (
					<li key={index}>
						<Link href={social.href} title={social.name} className={`group`}>
							<social.icon classes={`size-4 fill-current group-hover:fill-amber-500 duration-300 lg:size-6 xl:size-8`}/>
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
						<social.icon classes={`size-4 fill-current group-hover:fill-amber-500 duration-300 lg:size-5`}/>
					</Link>
				</li>
				))}
			</ul>
		</div>
    </div>
  );
}
