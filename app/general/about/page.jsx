"use client";
// use state
import { useState } from "react";

// i want to create a statue for the checkbox


import Link from "next/link";
import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1Span";
import PageIntro from "@/components/site_elements/Page_Intro";
import Button from "@/components/buttons/Button_Global";
import Footer from "@/components/footer/Footer";
import { globalPageStyles } from "@/data/Variables";
import { mainStyles } from "@/data/Variables";

//import DataForProjects from "@/data/Data_For_Projects";
{/* Sort the projects by name... */}
//DataForProjects.sort((a, b) => a.name.localeCompare(b.name));
{/* ...and then by archived status */}
//DataForProjects.sort((a, b) => a.archived - b.archived);

const pageStyles = `bg-slate-900 text-slate-400 bg-brand-background bg-repeat`;
const pageIntroText = `A simple tool to take a starting string, a concatenation character, and an ending string to create a URL.`;

export default function PAGE_ABOUT() {
	return (
		<div className={`${globalPageStyles} ${pageStyles}`}>

			<Header />
			
			<main className={`${mainStyles}`}>
				
				<H1 text={`General`} />
				
				<PageIntro 
				  text={pageIntroText}
				  classes_text_colour={`font-current`}
				  classes_text_alignment={`!text-center !text-balance`}
				  classes_font_sizes={`text-xs/5 md:text-sm/6 lg:text-base/6 !xl:text-base/6`}
				  classes_font_styling={`font-medium tracking-wider`}
				  classes_width={`max-[80dvw] lg:!max-w-[800px]`}
				  classes_margin={`!md:-mt-4 mb-12`}
				  classes_other={`hidden`}
				/>

				<div className="flex w-full justify-center text-center motion motion-preset-slide-up motion-delay-[1000ms] motion-duration-500 max-w-[1800px]">
					<div className="grid grid-cols-12 gap-8 xl:gap-12 3xl:gap-16 [&_h2]:uppercase max-lg:mt-8">
						{/* Card 1: About Me */}
						<div className="flex flex-col col-span-12 gap-4 p-6 text-xs transition-all duration-500 border rounded md:col-span-8 md:p-8 border-slate-500/10 hover:bg-slate-500/10 group/about hover:border-amber-500 2xl:p-16 xl:col-span-5">
							<h2 className="pb-2 mb-4 text-left transition-all duration-500 border-b-4 border-slate-500/20 md:text-xl 2xl:text-4xl w-fit group-hover/about:border-amber-500/80">
								About Me
							</h2>
							<p className="text-sm text-left lg:text-lg/8">
								My name is Michael and I am Front-End Developer. I have been working in the industry for over 10 years and have experience in a wide range of technologies. I am passionate about creating beautiful and functional websites that are easy to use and accessible to all users.
							</p>
							<div className="flex justify-start mt-8 lg:mt-12 motion motion-preset-slide-up motion-delay-[1200ms]">
								<Button 
									href="/"
									label="Connect"
									title="Connect" 
									ariaLabel="Connect"
									background_colour="bg-slate-800"
									border_colour="border-slate-700" 
									hover_background_colour="hover:bg-amber-500"
									text_colour="text-current"
									hover_text_colour="hover:text-slate-900 ml-0 mr-auto"	
								/>
							</div>
						</div>

						{/* Card 2: List of Tools */}
						<div className="col-span-12 p-6 text-xs transition-all duration-500 border rounded-lg md:col-span-4 xl:col-span-3 something-3 border-slate-500/10 group-tools hover:border-amber-500 lg:p-8">
							<h2 className="mb-8 font-bold tracking-widest text-left lg:font-extrabold lg:text-lg 2xl:mt-8">List of Tools</h2>
							<ul className="flex flex-col gap-4 lg:gap-8 [&_li]:flex [&>li]:border [&>li]:border-emerald-500 text-left [&_li]:border-slate-500/50 [&_a]:p-3 [&_li]:rounded-lg [&_a]:w-full [&_li]:w-full [&_li]:lg:py-4 [&_li]:bg-slate-600/10 lg:text-base">
								<li>
									<Link href="/tools/url-converter" className="transition-all duration-500 hover:bg-amber-500 hover:text-slate-950">
										URL Concatenator
									</Link>
								</li>
								<li className="opacity-25">
									<Link href="/">
										Tool
									</Link>
								</li>
								<li className="opacity-25">
									<Link href="/">
										Tool
									</Link>
								</li>
								<li className="opacity-25">
									<Link href="/">
										Tool
									</Link>
								</li>
							</ul>
						</div>

						{/* Card 3: My Other Sites */}
						<div className="col-span-12 md:col-span-12 p-6 md:p-8 text-xs border rounded-lg something-2 border-slate-500/10 [&_.site-image]:aspect-square flex flex-col hover:border-amber-500 duration-500 transition-all 2xl:px-12 xl:col-span-4  hover:bg-slate-500/10">
							<h2 className="mt-8 mb-8 font-bold tracking-widest lg:text-lg">Other Sites</h2>
							<div className="grid w-full h-full grid-cols-2 gap-6 md:grid-cols-4 xl:grid-cols-2 2xl:gap-12">
								{
									[...Array(4)].map((_, i) => (
										<div key={i} className="grid-item">
											<h3 className="hidden">Title</h3>
											<div className="w-full p-1 border rounded-lg site border-slate-200/20 site-image bg-slate-600/10 aspect-square">
											</div>
										</div>
									))
								}
							</div>
						</div>
						<div className="col-span-12 p-6 transition-all duration-500 border border-slate-500/10 md:p-8 2xl:p-16 hover:border-amber-500 hover:bg-slate-500/10">
							<h2 className="mb-8 text-3xl font-bold">Something 6</h2>
							<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 [&>.flex]:justify-center [&>.flex]:items-center [&>.flex]:rounded-lg">
								{
									[...Array(6)].map((_, i) => (
										<div key={i} className="flex p-4 border border-slate-500/20 aspect-square">
											Item
										</div>
									))
								}
							</div>
						</div>
						<div className="col-span-12 p-6 text-xs transition-all duration-500 border rounded-lg md:col-span-7 something-4 border-slate-500/10 hover:border-amber-500 hover:bg-slate-500/10">
							<h2 className="mb-4">Something 4</h2>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis sapiente soluta nam deleniti impedit est, veritatis harum facere quo quisquam. Dolore eius necessitatibus provident sint laborum sed eveniet alias consequatur.
							Laudantium repudiandae ut aperiam facere, vel esse blanditiis alias atque qui nihil eius repellat rerum aliquid similique iusto, accusantium quibusdam debitis! Voluptate deleniti numquam quo. Unde dolorem iste eos sit?
							Tempora quaerat molestias delectus deserunt unde. Reiciendis, totam eos ducimus vero repellat earum recusandae voluptate enim atque, ab iure! Sequi aliquam dolorum quo ullam fugiat illo repudiandae eius debitis nihil.
							Excepturi, magnam. Nulla facilis expedita distinctio, natus et, maiores saepe, labore suscipit voluptates accusantium possimus totam aut accusamus minus molestiae quia iure? Fuga, ipsa unde sequi maxime nulla repellat eligendi!</p>
						</div>
						<div className="col-span-12 p-6 text-xs transition-all duration-500 border md:col-span-5 border-slate-500/10 hover:border-amber-500 hover:bg-slate-500/10">
							<h2 className="mb-4">Something 5</h2>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nihil odio harum expedita veniam mollitia, natus temporibus magnam non unde ad laudantium illum. Deserunt amet modi, nesciunt eius dicta numquam!
							Odio corporis magni fuga adipisci maxime perferendis impedit minus ab accusamus consequatur libero iusto nihil nam soluta cum enim modi vero magnam, doloribus possimus saepe exercitationem, rem amet error! Aut.
							Eligendi, ducimus! Atque at quisquam ipsa quibusdam assumenda quis iure. Consequatur animi autem vitae dolore quam quisquam vel dolores? Vel placeat quaerat, magni odit earum autem ipsa. Accusamus, quis sequi.
							Voluptas expedita eligendi explicabo modi assumenda sed porro architecto dolores alias non veniam distinctio, esse tempora ut, rerum labore harum necessitatibus maxime officiis deserunt corporis odio ea ex. Voluptatum, officiis.</p>
						</div>
					</div>
					

				</div>

			</main>

			<Footer />

		</div>
	);
}