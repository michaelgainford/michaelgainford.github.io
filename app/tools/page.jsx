"use client";
// use state
import { useState } from "react";

// i want to create a statue for the checkbox


import Link from "next/link";
import Header from "@/components/header/Header";
import H1 from "@/components/typography/H1Span";
import PageIntro from "@/components/site_elements/Page_Intro";
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

function CreateURL() {
	
	{/* Part 1: Base URL */}
	const baseURL = document.getElementById("base-url");
	{/* Part 2: Concatenator */}
	const concatenator = document.getElementById("concatenator");
	{/* Part 3: Query String */}
	const queryString = document.getElementById("query-string");

	const createURLButton = document.querySelector("button");
	const createdUrlOutput = document.querySelector(".created-url");

	createURLButton.addEventListener("click", () => {
		let url = `${baseURL.value}${concatenator.value}${queryString.value}`;
		createdUrlOutput.textContent = url;
	});

	console.log('MG, baseURL:', createImageBitmap);
}

function copyURL() {
	const copyURLButton = document.querySelector(".copy-url");
	const urlOutput = document.querySelector(".created-url");

	copyURLButton.addEventListener("click", () => {
		let url = urlOutput.textContent;
		navigator.clipboard.writeText(url);
	});
}


export default function TOOL_URL_CONCATENATOR() {
	return (
		<div className={`${globalPageStyles} ${pageStyles}`}>

			<Header />
			
			<main className={`${mainStyles}`}>
				
				<H1 text={`URL Converter`} />
				
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

				<div className="flex w-full justify-center text-center motion motion-preset-slide-up motion-delay-[1000ms] motion-duration-50">
					<div className="w-full rounded-lg url-maker [&_label]:uppercase [&_label]:text-amber-500 [&_label]:text-xs [&_label]:font-medium [&_label]:text-left">
						{/* 
							I want three inputs that will create a URL for me.
							1. The base URL
							2. The concatenation character
							3. The query string
						*/}

						<div className="flex flex-col gap-8 p-4 url-maker max-w-[50vw] mx-auto rounded-lg bg-slate-900">
							<h2>Input</h2>
							<div className="flex flex-col w-full gap-2 text-left pair">
								<label htmlFor="base-url" className="text-sm font-medium text-left">Base URL</label>
								<input type="text" id="base-url" name="base-url" className="w-full p-2 border rounded-lg border-slate-200" />
							</div>

							<div className="flex flex-col w-full gap-2 text-left pair">
								<label htmlFor="custom-concatenator" className="text-sm font-medium text-left text-amber-500">Concatention String</label>
								<input type="text" id="custom-concatenator" name="custom-concatenator" className="w-full p-2 border rounded-lg border-slate-200" />
							</div>
							
							<div className="flex flex-col w-full gap-2 text-left pair">
								<label htmlFor="query-string" className="text-sm font-medium text-left0">End of URL</label>
								<input type="text" id="query-string" name="query-string" className="w-full p-2 border rounded-lg border-slate-200" />
							</div>

							{/* create a checkbox below */}
							<div className="flex w-full gap-2 text-left pair">
								<label htmlFor="use-select" className="text-sm font-medium text-left text-amber-500">Use Select</label>
								<input type="checkbox" id="use-select" name="use-select" />
							</div>

							<hr />

							<div className="pair">
								<label htmlFor="select" className="text-sm font-medium text-left text-amber-500">Select</label>
								<select id="select" name="select" className="w-full p-2 border rounded-lg border-slate-200">
									<option value="1">Option 1</option>
									<option value="2">Option 2</option>
									<option value="3">Option 3</option>
								</select>
							</div>
							<div className="pair">
								<label htmlFor="concatenator" className="text-sm font-medium text-left text-amber-500">Concatenator</label>
								<input type="text" id="concatenator" name="concatenator" className="w-full p-2 border rounded-lg border-slate-200" />
							</div>

							<button onClick={CreateURL} className="p-4 mx-auto text-white border rounded-lg border-amber-500 bg-amber-500 w-fit">Create URL</button>

							<div className="w-full p-4 border rounded-lg border-slate-200">
								<p className="flex items-center text-sm space-between">
									{/* This is where the created URL will be displayed */}
									<span className="created-url">Your URL will be displayed here.</span>
									<button onClick={copyURL} className="p-2 ml-auto text-xs border rounded-lg cursor-pointer border-amber-500 text-amber-500 text-slate-900 copy-url">Copy URL</button>
								</p>
							</div>
						</div>

					</div>

				</div>

			</main>

			<Footer />

		</div>
	);
}