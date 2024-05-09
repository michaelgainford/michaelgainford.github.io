import Image from 'next/image'
import Link from 'next/link'

import DataForSocials from '/components/data/DataForSocials'

export default function MainFooterAbout() {
  return (
    <div className="flex flex-col col-span-1 gap-2 lg:col-span-2 footer-about">
      <h3 className="mb-6 text-lg tracking-wider text-left h2 font-extralight lg:mb-16 max-sm:underline underline-offset-8 max-sm:hidden">About</h3>
      <div className="flex flex-col gap-4 mb-8 sm:flex-row lg:pb-8 lg:gap-16">
        <div className="text">
          <p className="sm:pr-8 text-[10px] text-center sm:text-left leading-loose md:text-sm/loose">
            My name is Michael and I am Front-End Developer. I currently work as a Shopify Developer but particularly enjoy working
            with React and Next.js. More text to fill in this space as it is currently a bit light of content.
          </p>
        </div>
        <div className="!aspect-square opacity-60 hover:opacity-100 transition col-span-1 !w-[100px] md:!w-[144px] hidden">
          <Image className="rounded-2xl md:hidden w-[100px]  max-w-[100px] md:max-w-[144px]" src="/mg.webp" alt="Michael Gainford" width={100} height={100} />
          <Image className="rounded-2xl max-md:hidden w-[144px]  max-w-[100px] md:max-w-[144px]" src="/mg.webp" alt="Michael Gainford" width={144} height={144} />
        </div>

      <div className="socials max-lg:mt-2">
        <ul className="flex justify-center gap-8 lg:flex-col sm:justify-end">
        {DataForSocials.map((social, index) => (
          <li key={index}>
            <Link href={social.href} title={social.name} className="group">
              <social.icon classes="size-4 lg:size-6 xl:size-8 fill-slate-300 group-hover:fill-amber-500 duration-300" />
            </Link>
          </li>
        ))}
        </ul>
      </div>
      </div>
      <div className="hidden socials max-lg:mt-2">
        <ul className="flex justify-center gap-8 sm:justify-end">
        {DataForSocials.map((social, index) => (
          <li key={index}>
            <Link href={social.href} title={social.name} className="group">
              <social.icon classes="size-4 lg:size-5 fill-slate-300 group-hover:fill-amber-500 duration-300" />
            </Link>
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}