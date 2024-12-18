import { sharedHeadingStyles } from "@/data/Variables";
import Button from "@/components/buttons/Button_Global";

export default function COMPONENT_CARD_ABOUT_ME() {
    return (
        <div data-card="about-me" className="flex flex-col items-center col-span-12 py-12 text-xs transition-all duration-500 border rounded-sm xxs:px-6 md:col-span-8 md:p-8 border-slate-500/10 hover:bg-slate-500/10 group/about hover:border-amber-500 2xl:py-16 xl:col-span-5">
            <h1 className={`${sharedHeadingStyles} group-hover/about:border-amber-500/80`}>
                About Me
            </h1>
            <p className="text-center lg:text-left max-lg:px-4 text-sm/5 lg:text-lg/8">
                My name is Michael. I am Front-End Developer with over 15 years experience in a wide range of frontend technologies. I am passionate about creating beautiful and functional websites that are easy to use and accessible to all users. I regularly keep up to date with the latest web technologies and best practices to ensure that I am always delivering the best possible solutions to my clients. I am always looking for new opportunities to work on exciting projects and expand my skillset.
            </p>
            <div className="flex flex-col [&>a]:max-md:w-full md:flex-row max-lg:px-4 justify-start mt-8 lg:mt-12 motion motion-preset-slide-up motion-delay-[1200ms] gap-4">
                <Button 
                    href="#socials"
                    label="Connect"
                    title="Connect" 
                    ariaLabel="Connect"
                    background_colour="bg-slate-800"
                    border_colour="border-slate-700" 
                    hover_background_colour="hover:bg-amber-500"
                    text_colour="text-current"
                    hover_text_colour="hover:text-slate-900 ml-0 mx-auto"
                    other_classes="max-md:w-full"	
                />
                <Button 
                    href="https://www.credly.com/users/michael-gainford.3546f4c8"
                    label="Credly Certifications"
                    target="_blank"
                    title="Credly Certifications" 
                    ariaLabel="Credly Certifications"
                    background_colour="bg-slate-800"
                    border_colour="border-slate-700" 
                    hover_background_colour="hover:bg-amber-500"
                    text_colour="text-current"
                    hover_text_colour="hover:text-slate-900 ml-0 mx-auto"	
                    other_classes="max-md:w-full"
                />
            </div>
        </div>
    );
}
