import Link from "next/link"
import Image from "next/image"

export default function mainFooter() {
  return (
    <footer className="w-full mt-32 tracking-wider text-slate-400">
      <div className="flex flex-col justify-between mb-12 lg:flex-row max-lg:gap-y-8">
        <div className="footer-information">
          <h3 className="mb-16 text-lg tracking-wider font-extralight">Information</h3>
          <div className="flex flex-col gap-16 lg:flex-row footer-navs">
            <div className="rounded lg:pr-8 footer-nav-group border-slate-700">
              <h4 className="pb-4 mb-4 text-sm tracking-widest text-center uppercase border-b lg:text-left border-slate-700 text-slate-400 font-extralight">Fun Stuff
              </h4>
              <ul className="lg:w-[200px] text-center lg:text-left text-sm">
                <li><Link className="flex py-2" href="/">Home</Link></li>
                <li><Link className="flex py-2" href="/dev-resources-">Dev Resources</Link></li>
                <li><Link className="flex py-2" href="/euro-2024">Euro 2024</Link></li>
                <li><Link className="flex py-2" href="/movies-database">Movies Database</Link></li>
                <li><Link className="flex py-2" href="/jokes">Jokes</Link></li>
              </ul>
            </div>
            <div className="rounded lg:pr-8 footer-nav-group border-slate-700">
              <h4 className="pb-4 mb-4 text-sm tracking-widest text-center uppercase border-b lg:text-left border-slate-700 text-slate-400 font-extralight">Boring
                Stuff</h4>
              <ul className="lg:w-[200px] text-center lg:text-left text-sm">
                <li><Link className="flex py-2" href="/">Link</Link></li>
                <li><Link className="flex py-2" href="/">Link</Link></li>
                <li><Link className="flex py-2" href="/">Link</Link></li>
                <li><Link className="flex py-2" href="/">Link</Link></li>
                <li><Link className="flex py-2" href="/">Link</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-about max-w-[500px]">
          <h3 className="mb-6 text-lg tracking-wider h2 font-extralight lg:mb-16">About</h3>
          <div className="opening-paragraph flex flex-col lg:flex-col-reverse gap-6 lg:w-[calc(100-144px-10px)] mb-8">
            <div className="lg:w-2/3 text">
              <p className="text-sm leading-loose text-left text-slate-400">
                My name is Michael and I am Front-End Developer. I currently work as a Shopify Developer but particularly enjoy working
                with React and Next.js.
              </p>
            </div>
            <div
              className="grey-image justify-center items-center aspect-square flex w-[144px] h-[144px]">
                <Image className="rounded-2xl" src="/mg.webp" alt="Michael Gainford" width={144} height={144} />
            </div>

          </div>
          <div className="mt-8 socials">
            <ul className="flex gap-8">
              <li>
                <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.5 1.5H1.49531C0.670312 1.5 0 2.17969 0 3.01406V20.9859C0 21.8203 0.670312 22.5 1.49531 22.5H19.5C20.325 22.5 21 21.8203 21 20.9859V3.01406C21 2.17969 20.325 1.5 19.5 1.5ZM6.34687 19.5H3.23438V9.47812H6.35156V19.5H6.34687ZM4.79062 8.10938C3.79219 8.10938 2.98594 7.29844 2.98594 6.30469C2.98594 5.31094 3.79219 4.5 4.79062 4.5C5.78437 4.5 6.59531 5.31094 6.59531 6.30469C6.59531 7.30312 5.78906 8.10938 4.79062 8.10938ZM18.0141 19.5H14.9016V14.625C14.9016 13.4625 14.8781 11.9672 13.2844 11.9672C11.6625 11.9672 11.4141 13.2328 11.4141 14.5406V19.5H8.30156V9.47812H11.2875V10.8469H11.3297C11.7469 10.0594 12.7641 9.22969 14.2781 9.22969C17.4281 9.22969 18.0141 11.3062 18.0141 14.0062V19.5Z"
                    fill="#BCBCBC" />
                </svg>

              </li>
              <li>
                <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.5 1.5H1.49531C0.670312 1.5 0 2.17969 0 3.01406V20.9859C0 21.8203 0.670312 22.5 1.49531 22.5H19.5C20.325 22.5 21 21.8203 21 20.9859V3.01406C21 2.17969 20.325 1.5 19.5 1.5ZM6.34687 19.5H3.23438V9.47812H6.35156V19.5H6.34687ZM4.79062 8.10938C3.79219 8.10938 2.98594 7.29844 2.98594 6.30469C2.98594 5.31094 3.79219 4.5 4.79062 4.5C5.78437 4.5 6.59531 5.31094 6.59531 6.30469C6.59531 7.30312 5.78906 8.10938 4.79062 8.10938ZM18.0141 19.5H14.9016V14.625C14.9016 13.4625 14.8781 11.9672 13.2844 11.9672C11.6625 11.9672 11.4141 13.2328 11.4141 14.5406V19.5H8.30156V9.47812H11.2875V10.8469H11.3297C11.7469 10.0594 12.7641 9.22969 14.2781 9.22969C17.4281 9.22969 18.0141 11.3062 18.0141 14.0062V19.5Z"
                    fill="#BCBCBC" />
                </svg>

              </li>
              <li>
                <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.5 1.5H1.49531C0.670312 1.5 0 2.17969 0 3.01406V20.9859C0 21.8203 0.670312 22.5 1.49531 22.5H19.5C20.325 22.5 21 21.8203 21 20.9859V3.01406C21 2.17969 20.325 1.5 19.5 1.5ZM6.34687 19.5H3.23438V9.47812H6.35156V19.5H6.34687ZM4.79062 8.10938C3.79219 8.10938 2.98594 7.29844 2.98594 6.30469C2.98594 5.31094 3.79219 4.5 4.79062 4.5C5.78437 4.5 6.59531 5.31094 6.59531 6.30469C6.59531 7.30312 5.78906 8.10938 4.79062 8.10938ZM18.0141 19.5H14.9016V14.625C14.9016 13.4625 14.8781 11.9672 13.2844 11.9672C11.6625 11.9672 11.4141 13.2328 11.4141 14.5406V19.5H8.30156V9.47812H11.2875V10.8469H11.3297C11.7469 10.0594 12.7641 9.22969 14.2781 9.22969C17.4281 9.22969 18.0141 11.3062 18.0141 14.0062V19.5Z"
                    fill="#BCBCBC" />
                </svg>

              </li>
              <li>
                <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.5 1.5H1.49531C0.670312 1.5 0 2.17969 0 3.01406V20.9859C0 21.8203 0.670312 22.5 1.49531 22.5H19.5C20.325 22.5 21 21.8203 21 20.9859V3.01406C21 2.17969 20.325 1.5 19.5 1.5ZM6.34687 19.5H3.23438V9.47812H6.35156V19.5H6.34687ZM4.79062 8.10938C3.79219 8.10938 2.98594 7.29844 2.98594 6.30469C2.98594 5.31094 3.79219 4.5 4.79062 4.5C5.78437 4.5 6.59531 5.31094 6.59531 6.30469C6.59531 7.30312 5.78906 8.10938 4.79062 8.10938ZM18.0141 19.5H14.9016V14.625C14.9016 13.4625 14.8781 11.9672 13.2844 11.9672C11.6625 11.9672 11.4141 13.2328 11.4141 14.5406V19.5H8.30156V9.47812H11.2875V10.8469H11.3297C11.7469 10.0594 12.7641 9.22969 14.2781 9.22969C17.4281 9.22969 18.0141 11.3062 18.0141 14.0062V19.5Z"
                    fill="#BCBCBC" />
                </svg>

              </li>
            </ul>
          </div>
        </div>

      </div>
      <div className="pt-4 text-xs text-left copyright border-slate-700">
        <p>&copy; copyright 2024</p>
      </div>
  </footer>
  )
}