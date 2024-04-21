import Image from 'next/image'

export default function MainFooterAbout() {
  return (
    <div className="col-span-1 footer-about">
      <h3 className="mb-6 text-lg tracking-wider text-left h2 font-extralight lg:mb-16 max-sm:underline underline-offset-8 max-sm:hidden">About</h3>
      <div className="flex flex-row border gap-4mb-8 lg:pb-8 md:gap-6 md:flex-col lg:gap-16 lg:items-center">
        <div className="text">
          <p className="pr-8 text-xs leading-relaxed text-le8">
            My name is Michael and I am Front-End Developer. I currently work as a Shopify Developer but particularly enjoy working
            with React and Next.js. More text to fill in this space as it is currently a bit light of content.
          </p>
        </div>
        <div className="!aspect-square  opacity-60 hover:opacity-100 transition col-span-1 !w-[100px] md:!w-[144px]">
          <Image className="rounded-2xl md:hidden w-[100px]  max-w-[100px] md:max-w-[144px]" src="/mg.webp" alt="Michael Gainford" width={100} height={100} />
          <Image className="rounded-2xl max-md:hidden w-[144px]  max-w-[100px] md:max-w-[144px]" src="/mg.webp" alt="Michael Gainford" width={144} height={144} />
        </div>

      </div>
      <div className="socials">
        <ul className="flex justify-center gap-8 sm:justify-end">
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
  )
}