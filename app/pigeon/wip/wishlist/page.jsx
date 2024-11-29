import Link from "next/link";
import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import Footer from "@/components/footer/Footer";
import { globalPageStyles } from "@/data/Variables";
import { mainStyles } from "@/data/Variables";

import DataForProjects from "@/data/Data_For_Projects";
{/* Sort the projects by name... */}
DataForProjects.sort((a, b) => a.name.localeCompare(b.name));
{/* ...and then by archived status */}
DataForProjects.sort((a, b) => a.archived - b.archived);

const pageStyles = `bg-slate-900 text-slate-400 bg-brand-background bg-repeat`;
const pageIntroText = `A collection of projects that I have worked on, that are a part of this website. Some of these projects are still in progress, like my digital garden. Different plants needing tending to in different way. Each project has a brief description and a category that it belongs to. Click on a project to learn more about it.`;

export default function PAGE_PROJECTS() {
	return (
		<div className={`${globalPageStyles} ${pageStyles}`}>

			<Header />
			
			<main className={`${mainStyles}`}>
				
				<H1 text={`Wishlist`} />
				
				<PageIntro 
				  text={pageIntroText}
				  classes_text_colour={`font-current`}
				  classes_text_alignment={`!text-center !text-balance`}
				  classes_font_sizes={`text-xs/5 md:text-sm/6 lg:text-base/6 !xl:text-base/6`}
				  classes_font_styling={`font-medium tracking-wider`}
				  classes_width={`max-[80dvw] lg:!max-w-[800px]`}
				  classes_margin={`!md:-mt-4 mb-12`}
				  classes_other={``}
				/>

				<div className="grid flex-wrap w-full grid-cols-1 gap-8 sm:grid-cols-2 md:gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 3xl:grid-cols-5 2xl:gap-16 motion motion-preset-slide-up motion-delay-[1000ms] motion-duration-50 [&>*]:border [&>*]:border-slate-200/5 [&>*]:flex [&>*]:items-center [&>*]:justify-center">
                    <div className="flex flex-col gap-4 p-4 item">
                        <span>External Hard Drive</span>
                        <div className="product-image">
                            <img src="https://i.ebayimg.com/images/g/txsAAOSwISxjdoyv/s-l960.webp" alt="Product Image" />
                        </div>
                        <a className="p-2 border border-slate-200/5" href="https://www.ebay.co.uk/itm/385239009601?var=653120349562&mkevt=1&mkcid=1&mkrid=710-53481-19255-0&campid=5338757644&toolid=20006&customid=ad6c6a64ea984274ebb10d1dca7b252c&_trkparms=ispr%3D1&amdata=enc%3A1QwzqpcWPSN2wH5eXQEj8Iw6">
                            View Product Link
                        </a>
                        <span>Product Price</span>
                    </div>
                    <div className="item">Item</div>
                    <div className="item">Item</div>
                    <div className="item">Item</div>
                    <div className="item">Item</div>
                    <div className="item">Item</div>
				</div>

			</main>

			<Footer />

		</div>
	);
}