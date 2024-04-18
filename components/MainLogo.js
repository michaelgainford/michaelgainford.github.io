import Link from "next/link";

export default function MainLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 max-md:justify-center logo">
      <span className="w-4 lg:w-6 h-4 lg:h-6 title-icon !fill-yellow-600">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="mt-[2px]">
          <path d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"/>
        </svg>
      </span>
      <span className="text-sm font-light tracking-wider text-left uppercase lg:text-base lg:font-medium">Michael&apos;s Dev Site</span>
    </Link>
  ) 
}