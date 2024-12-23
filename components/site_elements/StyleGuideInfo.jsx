import StyleGuideData from "@/data/data_for__styleguide.json";
const FontSizes = StyleGuideData.FontSizes;
const CSSContainerWidths = StyleGuideData.CSSContainerWidths;
const BrandColours = StyleGuideData.BrandColours;
const ProjectColours = StyleGuideData.ProjectColours;

import { sharedHeadingStyles } from "@/variables/Styles";

export default function COMPONENT_STYLE_GUIDE_INFO() {
	return (
		<div className="grid w-full @4xl:grid-cols-2 gap-8 lg:gap-16 style-guide-main">
		<div className="flex flex-col p-8 text-left border rounded-lg border-slate-200/5 style-guide-group bg-slate-200/5">
			<h2 className={`${sharedHeadingStyles} text-left mr-auto flex justify-start w-fit`}>Typography</h2>
			<div className="flex flex-col gap-4 style-guide-group-items">
				<table>
					<thead className="mb-4">
						<tr className="grid grid-cols-3 py-1 border-b-4 border-slate-200/5 bg-mag-epl-500">
							<th>Class</th>
							<th>Font Size (rem)</th>
							<th>Font Size (px)</th>
						</tr>
					</thead>
					<tbody>
						{FontSizes.map((fontSize, index) => (
							<tr key={index} className="grid grid-cols-3 border-b border-slate-200/5 last:border-transparent">
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
						<tr className="grid grid-cols-3 gap-2 py-1 border-b-4 border-slate-200/5">
							<th>Class</th>
							<th>Width (rem)</th>
							<th>Width (px)</th>
						</tr>
					</thead>
					<tbody>
						{CSSContainerWidths.map((containerWidth, index) => (
							<tr key={index} className="grid grid-cols-3 gap-2 border-b-2 border-slate-200/5 last:border-transparent">
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
	)
}