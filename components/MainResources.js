import Image from 'next/image'
import Link from 'next/link'

export default function MainResources() {
  return (
    <div className="w-full resources-list">
      <h2 className="mb-6 text-base tracking-wide font-extralight lg:mb-8 lg:text-2xl text-slate-400">
        Dev Resources
      </h2>
      <div className="grid grid-cols-3 gap-8">
        <div
          className="flex items-center text-lg transition border rounded-lg lg:gap-4 lg:p-8 lg:flex-col resource border-slate-700 bg-slate-800 hover:bg-slate-900 text-slate-400">
          <div className="flex justify-center p-4 max-md:w-1/3 max-md:border-r border-slate-700 resource-logo">
            <Image src="/w3-schools-logo.svg" alt="W3 Schools Logo" width={48} height={48} />
          </div>
          <span className="w-2/3 px-4 text-xs text-center uppercase lg:w-full tracking">W3 Schools</span>
        </div>
        <div
          className="flex items-center text-lg transition border rounded-lg lg:gap-4 lg:p-8 lg:flex-col resource border-slate-700 bg-slate-800 hover:bg-slate-900 text-slate-400">
          <div className="flex justify-center p-4 max-md:w-1/3 max-md:border-r border-slate-700 resource-logo">
            <Image src="/w3-schools-logo.svg" alt="W3 Schools Logo" width={48} height={48} />
          </div>
          <span className="w-2/3 px-4 text-xs text-center uppercase lg:w-full tracking">W3 Schools</span>
        </div>
        <div
          className="flex items-center text-lg transition border rounded-lg lg:gap-4 lg:p-8 lg:flex-col resource border-slate-700 bg-slate-800 hover:bg-slate-900 text-slate-400">
          <div className="flex justify-center p-4 max-lg:w-1/3 max-lg:border-r border-slate-700 resource-logo">
            <Image src="/w3-schools-logo.svg" alt="W3 Schools Logo" width={48} height={48} />
          </div>
          <span className="w-2/3 px-4 text-xs text-center uppercase lg:w-full tracking">W3 Schools</span>
        </div>
        <div
          className="flex items-center text-lg transition border rounded-lg lg:gap-4 lg:p-8 lg:flex-col resource border-slate-700 bg-slate-800 hover:bg-slate-900 text-slate-400">
          <div className="flex justify-center p-4 max-lg:w-1/3 max-lg:border-r border-slate-700 resource-logo">
            <Image src="/w3-schools-logo.svg" alt="W3 Schools Logo" width={48} height={48} />
          </div>
          <span className="w-2/3 px-4 text-xs text-center uppercase lg:w-full tracking">W3 Schools</span>
        </div>
        <div
          className="flex items-center text-lg transition border rounded-lg lg:gap-4 lg:p-8 lg:flex-col resource border-slate-700 bg-slate-800 hover:bg-slate-900 text-slate-400">
          <div className="flex justify-center p-4 max-lg:w-1/3 max-lg:border-r border-slate-700 resource-logo">
            <Image src="/w3-schools-logo.svg" alt="W3 Schools Logo" width={48} height={48} />
          </div>
          <span className="w-2/3 px-4 text-xs text-center uppercase lg:w-full tracking">W3 Schools</span>
        </div>
        <div
          className="flex items-center text-lg transition border rounded-lg lg:gap-4 lg:p-8 lg:flex-col resource border-slate-700 bg-slate-800 hover:bg-slate-900 text-slate-400">
          <div className="flex justify-center p-4 max-lg:w-1/3 max-lg:border-r border-slate-700 resource-logo">
            <Image src="/w3-schools-logo.svg" alt="W3 Schools Logo" width={48} height={48} />
          </div>
          <span className="w-2/3 px-4 text-xs text-center uppercase lg:w-full tracking">W3 Schools</span>
        </div>
      </div>
      <div className="flex justify-start mt-8 lg:mt-16">
        <Link href="#" className="px-8 py-4 text-xs tracking-wider uppercase transition border rounded lg:text-sm main-btn bg-slate-800 border-slate-700 hover:bg-slate-700 mx-auto">See all</Link>
      </div>
    </div>
  )
}