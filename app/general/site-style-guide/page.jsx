import { globalPageStyles } from "@/data/Variables";
import { mainStyles } from "@/data/Variables";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import H1_Span from "@/components/typography/H1Span";

const pageStyles = `bg-slate-900 text-slate-400 bg-brand-background bg-repeat`;
const sharedHeadingStyles = `pb-2 mx-auto mb-12 text-3xl font-bold text-left transition-all duration-500 border-b-4 border-slate-500/20 md:text-xl xl:mb-16 2xl:text-3xl w-fit`;

// i want to import the json file within data/Data_For_Style_Guide_Font_Sizes.json
import { BrandColours, CSSContainerWidths, FontSizes, ProjectColours } from "@/data/Data_For_StyleGuideFontSizes.json";

export default function PAGE_SITE_STYLE_GUIDE() {
	return (
		<div className={`${globalPageStyles} ${pageStyles}`}>

			<Header />
			
			<main className={`${mainStyles}`}>

				<div className="flex w-full justify-center text-center motion motion-preset-slide-up motion-delay-[1000ms] motion-duration-500 max-w-[1800px]">
					<div className="flex flex-col w-full gap-8 xl:gap-y-16 3xl:gap-24 max-lg:mt-8 @container">
						<H1_Span text="Site Style Guide" className={`${sharedHeadingStyles} group-hover/about:border-amber-500/80`} />
						
						<div className="grid w-full @4xl:grid-cols-2 gap-8 lg:gap-16 style-guide-main">
							<div className="flex flex-col p-8 text-left border rounded-lg border-slate-200/5 style-guide-group bg-slate-200/5">
								<h2 className={`${sharedHeadingStyles} text-left mr-auto flex justify-start w-fit`}>Typography</h2>
								<div className="flex flex-col gap-4 style-guide-group-items">
									<table>
										<thead className="mb-4">
											<tr className="grid grid-cols-3 py-1 border-b-2 border-slate-200/5 bg-mag-epl-500">
												<th>Class</th>
												<th>Font Size (rem)</th>
												<th>Font Size (px)</th>
											</tr>
										</thead>
										<tbody>
											{FontSizes.map((fontSize, index) => (
												<tr key={index} className="grid grid-cols-3">
													<td className="py-1">{fontSize.class}</td>
													<td className="py-1">{fontSize.size_rem}</td>
													<td className="py-1">{fontSize.size_px}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
							<div className="p-8 text-left border rounded-lg border-slate-200/5 style-guide-group bg-slate-200/5">
								<h2 className={`${sharedHeadingStyles} text-left mr-auto flex justify-start w-fit`}>Container Queries</h2>
								<div className="flex flex-col gap-4 style-guide-group-items">
									<table>
										<thead className="mb-4">
											<tr className="grid grid-cols-3 py-1 border-b-2 border-slate-200/5">
												<th>Class</th>
												<th>Width (rem)</th>
												<th>Width (px)</th>
											</tr>
										</thead>
										<tbody>
											{CSSContainerWidths.map((containerWidth, index) => (
												<tr key={index} className="grid grid-cols-3">
													<td className="py-1">{containerWidth.class}</td>
													<td className="py-1">{containerWidth.width_rem}</td>
													<td className="py-1">{containerWidth.width_px}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
							<div className="p-8 text-left border rounded-lg border-slate-200/5 style-guide-group bg-slate-200/5 @container">
								<h2 className={`${sharedHeadingStyles} text-left mr-auto flex justify-start w-fit`}>Brand Colours</h2>
								<div className="grid grid-cols-2 @lg:grid-cols-3 @xl:grid-cols-4 gap-4 style-guide-group-items colour-swatch">
									{BrandColours.map((colour, index) => (
										<div key={index} className="flex flex-col gap-4 transition-all duration-500 opacity-80 hover:opacity-100">
											<div className={`swatch flex items-center justify-center rounded-md colour ${colour.class_background} aspect-square`}>
												<p className={`${colour.class_background_text} text-xs bg-slate`}>{colour.class}</p>
											</div>
										</div>
									))}
								</div>
							</div>
							<div className="p-8 text-left border rounded-lg border-slate-200/5 style-guide-group bg-slate-200/5 @container">
								<h2 className={`${sharedHeadingStyles} text-left mr-auto flex justify-start w-fit`}>Project Colours</h2>
								<div className="grid grid-cols-2 @lg:grid-cols-3 @xl:grid-cols-4 gap-4 style-guide-group-items colour-swatch">
									{ProjectColours.map((colour, index) => (
										<div key={index} className="flex flex-col gap-4 transition-all duration-500 opacity-80 hover:opacity-100">
											<div className={`swatch flex items-center justify-center rounded-md colour ${colour.class_background} aspect-square`}>
												<p className={`${colour.class_background_text} text-xs bg-slate`}>{colour.class}</p>
											</div>
										</div>
									))}
								</div>
							</div>
							
						</div>
							
					</div>
					

				</div>

			</main>

			<Footer />

		</div>
	);
}