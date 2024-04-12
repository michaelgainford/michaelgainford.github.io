import Image from 'next/image'

export default function MainResources() {
  return (
    <div className="resources-list">
      <h2 className="h2">
        Dev Resources
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-16 lg:grid-cols-5">
        <div
          className="flex items-center text-lg transition border rounded-lg md:gap-4 md:p-8 md:flex-col resource border-slate-700 bg-slate-800 hover:bg-slate-900 text-slate-400">
          <div className="flex justify-center p-4 max-md:w-1/3 max-md:border-r border-slate-700 resource-logo">
            <Image src="/images/w3-schools-logo.svg" alt="W3 Schools Logo" width={48} height={48} />
          </div>
          <span className="px-4 text-xs text-center uppercase lg:w-2/3 md:w-full tracking">W3 Schools</span>
        </div>
        <div
          className="flex items-center text-lg transition border rounded-lg lg:gap-4 lg:p-8 lg:flex-col resource border-slate-700 bg-slate-800 hover:bg-slate-900 text-slate-400">
          <div className="flex justify-center p-4 max-md:w-1/3 max-md:border-r border-slate-700 resource-logo">
            <Image src="/images/w3-schools-logo.svg" alt="W3 Schools Logo" width={48} height={48} />
          </div>
          <span className="w-2/3 px-4 text-xs text-center uppercase lg:w-full tracking">W3 Schools</span>
        </div>
        <div
          className="flex items-center text-lg transition border rounded-lg lg:gap-4 lg:p-8 lg:flex-col resource border-slate-700 bg-slate-800 hover:bg-slate-900 text-slate-400">
          <div className="flex justify-center p-4 max-lg:w-1/3 max-lg:border-r border-slate-700 resource-logo">
            <Image src="/images/w3-schools-logo.svg" alt="W3 Schools Logo" width={48} height={48} />
          </div>
          <span className="w-2/3 px-4 text-xs text-center uppercase lg:w-full tracking">W3 Schools</span>
        </div>
        <div
          className="flex items-center text-lg transition border rounded-lg lg:gap-4 lg:p-8 lg:flex-col resource border-slate-700 bg-slate-800 hover:bg-slate-900 text-slate-400">
          <div className="flex justify-center p-4 max-lg:w-1/3 max-lg:border-r border-slate-700 resource-logo">
            <Image src="/images/w3-schools-logo.svg" alt="W3 Schools Logo" width={48} height={48} />
          </div>
          <span className="w-2/3 px-4 text-xs text-center uppercase lg:w-full tracking">W3 Schools</span>
        </div>
        <div
          className="flex items-center text-lg transition border rounded-lg lg:gap-4 lg:p-8 lg:flex-col resource border-slate-700 bg-slate-800 hover:bg-slate-900 text-slate-400">
          <div className="flex justify-center p-4 max-lg:w-1/3 max-lg:border-r border-slate-700 resource-logo">
            <Image src="/images/w3-schools-logo.svg" alt="W3 Schools Logo" width={48} height={48} />
          </div>
          <span className="w-2/3 px-4 text-xs text-center uppercase lg:w-full tracking">W3 Schools</span>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <a href="#" className="main-btn">See all</a>
      </div>
    </div>
  )
}