import FooterNav from "@/components/footer/Footer_Nav";
import FooterAbout from "@/components/footer/Footer_About";
import Copyright from "@/components/footer/Footer_Copyright";

export default function FOOTER() {
	return (
		<footer className={`w-[90%] md:w-[92%] lg:-[95%] max-w-[2000px] flex flex-col gap-1 pt-6 tracking-wider mx-auto md:mt-8 lg:pb-2 lg:gap-4 lg:justify-between lg:pt-16 2xl:pt-24`}>
			<div className={`grid justify-between w-full grid-cols-1 lg:mb-12 lg:flex-rowlg:gap-x-24 lg:grid-cols-4 max-lg:gap-y-8 `}>
				<FooterNav />
				<FooterAbout />
			</div>
			<Copyright />
		</footer>
	)
}