import Link from "next/link";
import IconLaptop from "@/components/icons/IconLaptop";

export default function MainLogo() {
  return (
    <Link href="/" className={`flex items-center gap-2 max-md:justify-center`}>
      <IconLaptop classes={`size-[14px] lg:size-6 fill-amber-500`} />
      <span className={`text-[11px] font-medium lg:font-light tracking-wider text-left uppercase lg:text-base lg:font-medium`}>
        MichaelGainford.dev
      </span>
    </Link>
  ) 
}