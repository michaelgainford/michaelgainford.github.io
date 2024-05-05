import Image from 'next/image'
import Link from 'next/link'
import TwitterIcon from '/components/icons/IconTwitter'
import CodepenIcon from '/components/icons/IconCodepen'
import GitHubIcon from '/components/icons/IconGitHub'
import LinkedInIcon from '/components/icons/IconLinkedIn'

const socials = [
  {
    name: "Codepen",
    href: "https://codepen.io/michaelgainford",
    icon: CodepenIcon
  },
  {
    name: "GitHub",
    href: "https://github.com/michaelgainford",
    icon: GitHubIcon
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/michaelgainford/",
    icon: LinkedInIcon
  },
  {
    name: "Twitter",
    href: "https://twitter.com/m1cha3lgainford",
    icon: TwitterIcon
  }
]

export default function MainFooterAbout() {
  return (
    <div className="flex flex-col col-span-1 gap-2 lg:col-span-2 footer-about">
      <h3 className="mb-6 text-lg tracking-wider text-left h2 font-extralight lg:mb-16 max-sm:underline underline-offset-8 max-sm:hidden">About</h3>
      <div className="flex flex-row gap-4 mb-8 lg:pb-8 lg:gap-16">
        <div className="text">
          <p className="pr-8 text-[10px] leading-loose text-left leading-re laxed md:text-sm">
            My name is Michael and I am Front-End Developer. I currently work as a Shopify Developer but particularly enjoy working
            with React and Next.js. More text to fill in this space as it is currently a bit light of content.
          </p>
        </div>
        <div className="!aspect-square opacity-60 hover:opacity-100 transition col-span-1 !w-[100px] md:!w-[144px]">
          <Image className="rounded-2xl md:hidden w-[100px]  max-w-[100px] md:max-w-[144px]" src="/mg.webp" alt="Michael Gainford" width={100} height={100} />
          <Image className="rounded-2xl max-md:hidden w-[144px]  max-w-[100px] md:max-w-[144px]" src="/mg.webp" alt="Michael Gainford" width={144} height={144} />
        </div>
      </div>
      <div className="socials max-lg:mt-2">
        <ul className="flex justify-center gap-8 sm:justify-end">
        {socials.map((social, index) => (
          <li key={index}>
            <Link href={social.href} title={social.name} className="group">
              <social.icon  classes="size-4 lg:size-5 fill-slate-300 group-hover:fill-amber-500" />
            </Link>
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}