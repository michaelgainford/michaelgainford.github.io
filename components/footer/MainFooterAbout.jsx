import Link from 'next/link'
import FooterSectionHeader from './FooterSectionHeader'

import DataForSocials from '/components/data/Data_For_Socials'

export default function MAIN_FOOTER_ABOUT() {
  return (
    <div className={`flex flex-col col-span-1 gap-2 lg:col-span-2 footer-about`}>
      <FooterSectionHeader text={`About`} />
      <div className={`flex flex-col gap-4 mb-8 sm:gap-8 md:gap-12 sm:flex-row lg:pb-8 lg:gap-16`}>
        <p className={`sm:pr-8 text-[10px] text-center sm:text-left leading-loose md:text-xs/relaxed lg:text-sm/loose`}>
          My name is Michael. I am Front-End Developer. I live in the North West of England. I currently work as a Shopify Developer 
          working on e-commerce websites and in my spare time I enjoy working on personal projects, lately using the NextJS 
          framework.
        </p>
      <div className={`socials max-lg:mt-2`}>
        <ul className={`flex justify-center gap-8 lg:flex-col sm:justify-end`}>
        {DataForSocials.map((social, index) => (
          <li key={index}>
            <Link href={social.href} title={social.name} className="group">
              <social.icon classes={`size-4 lg:size-6 xl:size-8 fill-slate-300 group-hover:fill-amber-500 duration-300`} />
            </Link>
          </li>
        ))}
        </ul>
      </div>
      </div>
      <div className={`hidden socials max-lg:mt-2`}>
        <ul className={`flex justify-center gap-8 sm:justify-end`}>
        {DataForSocials.map((social, index) => (
          <li key={index}>
            <Link href={social.href} title={social.name} className={`group`}>
              <social.icon classes={`size-4 lg:size-5 fill-slate-300 group-hover:fill-amber-500 duration-300`} />
            </Link>
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}