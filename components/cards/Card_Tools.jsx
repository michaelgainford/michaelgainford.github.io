import { sharedHeadingStyles } from "@/data/Variables";
import Link from "next/link";

export default function COMPONENT_CARD_TOOLS() {
    return (
        <div data-card="tools" className="col-span-12 px-6 py-12 text-xs transition-all duration-500 border rounded-lg md:col-span-4 xl:col-span-3 something-3 border-slate-500/10 group/tools hover:border-amber-500 lg:p-8 2xl:py-16">
        <h2 className={`${sharedHeadingStyles} group-hover/tools:border-amber-500/80`}>Tools I Made</h2>
        <ul className="flex flex-col gap-4 lg:gap-8 [&_li]:flex [&_a]:border  text-left [&_a]:border-slate-500/50 [&_a]:p-3 [&_a]:rounded-lg [&_a]:w-full [&_li]:w-full lg:[&_a]:py-4 [&_li]:bg-slate-600/10 lg:text-base">
            <li>
                <Link href="/tools/url-converter" className="flex h-full transition-all duration-500 hover:bg-amber-500 hover:text-slate-950">
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
    );
}
