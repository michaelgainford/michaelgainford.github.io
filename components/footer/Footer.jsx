import FooterNav from "@/components/footer/Footer_Nav";
import FooterAbout from "@/components/footer/Footer_About";
import Copyright from "@/components/footer/Footer_Copyright";

export default function COMPONENT_FOOTER(customTextColour) {
	return (
		<footer className={`w-full`}>
			<div className="w-[90%] max-w-[2000px] flex flex-col gap-1 pt-6 tracking-wider mx-auto motion motion-preset-fade motion-delay-[1000ms] motion-ease-spring-bouncier max-md:mt-16 md:w-[92%] md:mt-8 lg:pb-2 lg:gap-4 lg:justify-between lg:pt-16 2xl:pt-24">
				<div 
				  className="grid justify-between w-full grid-cols-1 max-lg:gap-y-8 lg:mb-12 lg:flex-row lg:gap-x-24 lg:grid-cols-4">
					<FooterNav className={customTextColour}/>
					<FooterAbout className={customTextColour} />
				</div>
				<Copyright />
			</div>
		</footer>
	)
}