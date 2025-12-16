"use client";

function CreateURL() {
	{/* 3 inputs: base URL, concatenation character, query string */}
	const baseURL = document.getElementById("base-url");
	const presetConcatenator = document.getElementById("preset-concatenator");
    const customConcatenator = document.getElementById("manual-concatenator");
    // if the checkbox is checked, use the value of the select dropdown
    const concatenator = document.getElementById("toggle-concatenator").checked ? presetConcatenator : customConcatenator;
	const queryString = document.getElementById("query-string");
	const createURLButton = document.querySelector("button");	{/* create a URL output */}
	const createdUrlOutput = document.querySelector(".created-url");

	createURLButton.addEventListener("click", () => {
		let url = `${baseURL.value}${concatenator.value}${queryString.value}`;
		createdUrlOutput.textContent = url;
	});
}

function checkBoxToggleDisplay () {
    const checkbox = document.getElementById("toggle-concatenator");
    if (checkbox) {
        // if the checkbox is checked, show the select dropdown
        checkbox.addEventListener("change", () => {
            const presetConcatenator = document.getElementById("preset-concatenator");
            const manualConcatenator = document.getElementById("manual-concatenator");
            if (checkbox.checked) {
                console.log("Checkbox is checked");
                presetConcatenator.classList.remove("hidden");
                manualConcatenator.classList.add("hidden");
            }
            else {
                console.log("Checkbox is not checked");
                presetConcatenator.classList.add("hidden");
                manualConcatenator.classList.remove("hidden");
            }
        });
    }
    else {
        console.log("Checkbox is not checked");
    }
    
}

function CopyURL() {
	const copyURLButton = document.querySelector(".copy-url");
	const urlOutput = document.querySelector(".created-url");

	copyURLButton.addEventListener("click", () => {
		let url = urlOutput.textContent;
		navigator.clipboard.writeText(url);
		copyURLButton.textContent = "Copied!";
		setTimeout(() => {
			copyURLButton.textContent = "Copy URL";
		}
		, 2000);
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

function testInputs() {
    const baseURL = document.getElementById("base-url");
    const concatenator = document.getElementById("custom-concatenator");
    const queryString = document.getElementById("query-string");

    console.log(baseURL.value);
    console.log(concatenator.value);
    console.log(queryString.value);
}

setTimeout(CreateURL, CopyURL, clearContentsOfForm, checkBoxToggleDisplay, testInputs, 4000);

export default function TOOL_URL_CONCATENATOR() {
    return (
        <div className="flex flex-col gap-8 url-maker xl:max-w-[50vw] mx-auto rounded-lg bg-slate-800/50 p-8 xl:p-16 [&>span]:px-2 [&>span]:py-1 [&>span]:text-xs [&>span]:font-light [&>span]:tracking-wider [&>span]:text-center [&>span]:border [&>span]:rounded-sm [&>span]:border-slate-500/20 [&>span]:w-fit [&>span]:max-auto">

            {/* INPUT LABEL | START */}
            <span>input</span>
            {/* INPUT LABEL | END */}

            {/* INPUT FIELD FOR START OF URL | START */}
            <div className="flex flex-col w-full gap-2 text-left pair">
                <label htmlFor="base-url" className="text-sm font-medium text-left">Start of URL</label>
                <input type="text" id="base-url" name="base-url" className="w-full p-2 border-b-2 bg-slate-100/10 border-slate-200/50 focus-visible::outline-200/80" />
            </div>
            {/* INPUT FIELD FOR START OF URL | END */}  

            {/* INPUT FIELD FOR CUSTOM CONCATENATOR | START */}
            <div className="flex flex-col w-full gap-2 text-left pair" id="custom-concatenator">
                <label htmlFor="custom-concatenator" className="text-sm font-medium text-left text-amber-500">Concatenation Value</label>
                <input type="text" id="custom-concatenator" name="custom-concatenator" className="w-full p-2 border-b-2 bg-slate-100/10 border-slate-200/50 focus-visible::outline-200/80" />
            </div>
            {/* INPUT FIELD FOR CUSTOM CONCATENATOR | END */}

            {/* SELECT DROPDOWN FOR CONCATENATOR | START */}
            <div className="flex flex-col w-full gap-2 text-left pair converter-concat-select" id="preset-concatenator">
                <label htmlFor="select" className="text-sm font-medium text-left text-amber-500">Select</label>
                <select id="select" name="select" className="w-full px-2 py-3 border-b-2 bg-slate-100/10 border-slate-200/50 focus-visible::outline-200/80">
                    {/* Add option for &_preview_theme_id= */}
                    <option value="shopify-dev">?preview_theme_id=</option>
                    <option value="?">?</option>
                    <option value="&">&</option>
                    <option value="#">#</option>
                </select>
            </div>
            {/* SELECT DROPDOWN FOR CONCATENATOR | END */}

            {/* CHECKBOX FOR TOGGLING CONCATENATOR METHOD | START */}
            <div className="flex flex-col w-full gap-2 text-left pair checkbox-area">
                <div className="flex items-center gap-2">
                    <label htmlFor="toggle-concatenator" className="text-sm font-medium text-left text-amber-500">Use Custom Concatenator?</label>
                    <input type="checkbox" id="toggle-concatenator" name="toggle-concatenator" title="toggle-concatenator" className="" />
                </div>
            </div>
            {/* CHECKBOX FOR TOGGLING CONCATENATOR METHOD | END */}
            
            {/* INPUT FIELD FOR END OF URL | START */}
            <div className="flex flex-col w-full gap-2 text-left pair">
                <label htmlFor="query-string" className="text-sm font-medium text-left0">End of URL</label>
                <input type="text" id="query-string" name="query-string" className="w-full p-2 border-b-2 bg-slate-100/10 border-slate-200/50 focus-visible::outline-200/80" />
            </div>
            {/* INPUT FIELD FOR END OF URL | END */}

            <h2 className="hidden pb-1 mt-6 font-bold text-left border-b-4 border-current w-fit">Options</h2>

            {/* create a checkbox below */}
            <div className="flex w-full gap-2 text-left pair checkbox-area">
                <label htmlFor="use-select-checkbox" className="text-sm font-medium text-left text-amber-500">Use Custom Concatenator?</label>
                <input type="checkbox" id="use-select-checkbox" name="use-select-checkbox" title="use-select-checkbox" />
            </div>

            <div className="flex flex-col w-full gap-2 text-left pair converter-concat-select">
                <label htmlFor="select" className="text-sm font-medium text-left text-amber-500">Select</label>
                <select id="select" name="select" className="w-full p-2 border rounded-lg border-slate-200">
                    <option value="?">?</option>
                    <option value="&">&</option>
                    <option value="#">#</option>
                </select>
            </div>
            <div className="flex flex-col w-full gap-2 text-left pair converter-concat-custom">
                <label htmlFor="concatenator" className="text-sm font-medium text-left text-amber-500">Concatenator</label>
                <input type="text" id="concatenator" name="concatenator" className="w-full p-2 border rounded-lg border-slate-200" />
            </div>

            {/* BUTTONS | START */}
            <div className="flex justify-center gap-8 mt-4">
                <button onClick={CreateURL} className="px-4 py-2 text-sm transition-all duration-500 border rounded-lg border-amber-500 hover:bg-amber-500 w-fit hover:text-slate-900 bg-slate-900 text-amber-500 hover:cursor-pointer">Create URL</button>
                <button onClick={clearContentsOfForm} className="px-4 py-2 text-sm transition-all duration-500 border rounded-lg opacity-50 border-amber-500 hover:bg-amber-500 w-fit hover:text-slate-900 bg-slate-900 text-amber-500 hover:opacity-100 hover:cursor-pointer">Clear</button>
            </div>
            {/* BUTTONS | END */}

            <hr className="mt-8 text-red-500 bg-opacity-50 border-slate-700/50 stroke-emerald-500" />
            
            {/* OUTPUT LABEL | START */}
            <h3 className="px-2 py-1 text-sm font-light text-center border rounded-sm border-slate-500/20 w-fit max-auto">
                output
            </h3>
            {/* OUTPUT LABEL | END */}

            {/* OUTPUT FIELD | START */}
            <div className="w-full p-4 border-2 rounded-lg border-slate-200/20">
                <p className="flex items-center text-xs space-between">
                    {/* This is where the created URL will be displayed */}
                    <span className="created-url">Your URL will be displayed here.</span>
                    <button onClick={CopyURL} className="p-2 ml-auto text-xs transition-all duration-500 border rounded-lg cursor-pointer border-amber-500 hover:bg-amber-500 w-fit hover:text-slate-900 bg-slate-900 text-amber-500 copy-url">Copy URL</button>
                </p>
            </div>
            {/* OUTPUT FIELD | END */}
        </div>
    )
}