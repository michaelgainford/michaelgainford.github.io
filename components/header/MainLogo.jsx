import Link from "next/link";
import IconLaptop from "@/components/icons/IconLaptop";

export default function COMPONENT_MAIN_LOGO() {
	return (
		<Link href="/" className="flex items-center gap-2 max-md:justify-center">
			<IconLaptop classes="size-5 fill-amber-500" />
			<span className="text-[13.245px] font-medium tracking-wider text-left lg:text-lg lg:font-medium xl:text-xl flex">
				<span className="uppercase">MichaelGainford</span>
				<span>.dev</span>
			</span>
		</Link>
	) 
}