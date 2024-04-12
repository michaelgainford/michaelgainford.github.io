export default function mainFooter() {
  return (
    <footer className="max-lg:mt-8">
    <div className="flex flex-col justify-between mb-12 lg:flex-row max-lg:gap-y-8">
      <div className="footer-information">
        <h3 className="mb-16 h3">Information</h3>
        <div className="flex flex-col gap-16 lg:flex-row footer-navs">
          <div className="lg:pr-8 footer-nav-group">
            <h4 className="pb-4 mb-4 text-sm text-center uppercase border-b-2 lg:text-left border-slate-700 text-slate-400">Fun Stuff
            </h4>
            <ul className="lg:w-[200px] text-center lg:text-left text-sm">
              <li className="py-4">Dev Resources</li>
              <li className="py-4">Euro 2024</li>
              <li className="py-4">Movies Database</li>
              <li className="py-4">Jokes</li>
              <li className="py-4">Link</li>
            </ul>
          </div>
          <div className="pr-8 footer-nav-group">
            <h4 className="pb-4 mb-4 text-sm text-center uppercase border-b-2 lg:text-left border-slate-700 text-slate-400">Boring
              Stuff</h4>
            <ul className="lg:w-[200px] text-center lg:text-left text-sm">
              <li className="py-4">Link</li>
              <li className="py-4">Link</li>
              <li className="py-4">Link</li>
              <li className="py-4">Link</li>
              <li className="py-4">Link</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-about max-w-[500px]">
        <h3 className="mb-6 h2">About</h3>
        <div className="opening-paragraph flex flex-col lg:flex-row gap-6 lg:w-[calc(100-144px-10px)] mb-8">
          <div className="lg:w-2/3 text">
            <p className="text-xs text-left text-slate-400">Test, test, test, test, test, test, test, test, test, test,
              test, test,
              test,
              test, test, test, test,
              test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test,
              test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test,
              test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test,
              test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test,
              test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test,
              test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test,
              test, test, test,.
            </p>
          </div>
          <div
            className="grey-image justify-center items-center aspect-square border border-slate-700 bg-slate-800 hover:bg-slate-900 transition text-slate-400 rounded-lg flex w-[144px] h-[144px]">
            Image</div>

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
    <div className="pt-4 text-xs text-left border-t-2 copyright border-slate-700">
      <p>&copy; copyright 2023</p>
    </div>

  </footer>
  )
}