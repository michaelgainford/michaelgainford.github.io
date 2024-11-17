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
	const concatenator = document.getElementById("custom-concatenator");
	{/* Part 3: Query String */}
	const queryString = document.getElementById("query-string");

	const createURLButton = document.querySelector("button");
	const createdUrlOutput = document.querySelector(".created-url");

	createURLButton.addEventListener("click", () => {
		let url = `${baseURL.value}${concatenator.value}${queryString.value}`;
		createdUrlOutput.textContent = url;
	});
}

function CopyURL() {
	const copyURLButton = document.querySelector(".copy-url");
	const urlOutput = document.querySelector(".created-url");

	copyURLButton.addEventListener("click", () => {
		let url = urlOutput.textContent;
		navigator.clipboard.writeText(url);
		// provide visual eenforcement that the URL has been copied
		copyURLButton.textContent = "Copied!";
		// reset the button text after 2 seconds
		setTimeout(() => {
			copyURLButton.textContent = "Copy URL";
		}
		, 2000);
		console.log('MG, URL copied to clipboard', url);
	});
}

function clearContentsOfForm() {
	const baseURL = document.getElementById("base-url");
	const concatenator = document.getElementById("custom-concatenator");
	const queryString = document.getElementById("query-string");

	baseURL.value = "";
	concatenator.value = "";
	queryString.value = "";

	const createdUrlOutput = document.querySelector(".created-url");
	createdUrlOutput.textContent = "Your URL will be displayed here.";
}

/* function toggleCustomConcatenator() {
	const checkboxArea = document.querySelector(".checkbox-area");
	if (checkboxArea) {
		console.log("MG, checkboxArea exists");
	}
	else {
		console.log("MG, checkboxArea does not exist");
	}
}
toggleCustomConcatenator(); */


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
					<div className="w-full rounded-lg url-maker [&_label]:uppercase [&_label]:text-amber-500/70 [&_label]:text-xxs [&_label]:tracking-wider [&_label]:font-medium [&_label]:text-left">
						{/* 
							I want three inputs that will create a URL for me.
							1. The base URL
							2. The concatenation character
							3. The query string
						*/}

						<div className="flex flex-col gap-8 url-maker xl:max-w-[50vw] mx-auto rounded-lg bg-slate-800/50 p-8 xl:p-16 [&>span]:px-2 [&>span]:py-1 [&>span]:text-xs [&>span]:font-light [&>span]:tracking-wider [&>span]:text-center [&>span]:border [&>span]:rounded [&>span]:border-slate-500/20 [&>span]:w-fit [&>span]:max-auto">
							<span>input</span>
							<div className="flex flex-col w-full gap-2 text-left pair">
								<label htmlFor="base-url" className="text-sm font-medium text-left">Base URL</label>
								<input type="text" id="base-url" name="base-url" className="w-full p-2 border-b-2 bg-slate-100/10 border-slate-200/50 focus-visible::outline-200/80" />
							</div>

							<div className="flex flex-col w-full gap-2 text-left pair">
								<label htmlFor="custom-concatenator" className="text-sm font-medium text-left text-amber-500">Concatention String</label>
								<input type="text" id="custom-concatenator" name="custom-concatenator" className="w-full p-2 bg-transparent border-b-2 border-slate-200/50" />
							</div>
							
							<div className="flex flex-col w-full gap-2 text-left pair">
								<label htmlFor="query-string" className="text-sm font-medium text-left0">End of URL</label>
								<input type="text" id="query-string" name="query-string" className="w-full p-2 bg-transparent border-b-2 border-slate-200/50" />
							</div>

							<h2 className="hidden pb-1 mt-6 font-bold text-left border-b-4 border-current w-fit">Options</h2>

							{/* create a checkbox below */}
							<div className="flex hidden w-full gap-2 text-left pair checkbox-area">
								<label htmlFor="use-select-checkbox" className="text-sm font-medium text-left text-amber-500">Use Custom Concatenator?</label>
								<input type="checkbox" id="use-select-checkbox" name="use-select-checkbox" title="use-select-checkbox" />
							</div>

							<div className="flex flex-col hidden w-full gap-2 text-left pair converter-concat-select">
								<label htmlFor="select" className="text-sm font-medium text-left text-amber-500">Select</label>
								<select id="select" name="select" className="w-full p-2 border rounded-lg border-slate-200">
									<option value="?">?</option>
									<option value="&">&</option>
									<option value="#">#</option>
								</select>
							</div>
							<div className="flex flex-col hidden w-full gap-2 text-left pair converter-concat-custom">
								<label htmlFor="concatenator" className="text-sm font-medium text-left text-amber-500">Concatenator</label>
								<input type="text" id="concatenator" name="concatenator" className="w-full p-2 border rounded-lg border-slate-200" />
							</div>

							<div className="flex justify-center gap-8 mt-4">
								<button onClick={CreateURL} className="px-4 py-2 text-sm transition-all duration-500 border rounded-lg border-amber-500 hover:bg-amber-500 w-fit hover:text-slate-900 bg-slate-900 text-amber-500">Create URL</button>
								<button onClick={clearContentsOfForm} className="px-4 py-2 text-sm transition-all duration-500 border rounded-lg opacity-50 border-amber-500 hover:bg-amber-500 w-fit hover:text-slate-900 bg-slate-900 text-amber-500 hover:opacity-100">Clear</button>
							</div>

							<hr className="mt-8 text-red-500 bg-opacity-50 border-slate-700/50 stroke-emerald-500" />
							
							<h3 className="px-2 py-1 text-sm font-light text-center border rounded border-slate-500/20 w-fit max-auto">
								output
							</h3>

							<div className="w-full p-4 border-2 rounded-lg border-slate-200/50">
								<p className="flex items-center text-xs space-between">
									{/* This is where the created URL will be displayed */}
									<span className="created-url">Your URL will be displayed here.</span>
									<button onClick={CopyURL} className="p-2 ml-auto text-xs transition-all duration-500 border rounded-lg cursor-pointer border-amber-500 hover:bg-amber-500 w-fit hover:text-slate-900 bg-slate-900 text-amber-500 copy-url">Copy URL</button>
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