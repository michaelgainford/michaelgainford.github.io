import Image from "next/image";
//import { Inter } from '@next/font/google'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="grid grid-cols-12">
      <div className="sidebar h-screen col-span-1">
        <ul className="grid dvh-full">
          <li className="flex justify-center items-center">
            <Image
              src="/m-grey-placeholder.png"
              alt="Vercel Logo"
              className="logo h-12 w-12 fill-red-500"
              width={48}
              height={48}
              priority
            />
          </li>
          <li className="flex justify-center items-center">
            <Image
              src="/m-grey-placeholder.png"
              alt="Vercel Logo"
              className="logo h-12 w-12 fill-red-500"
              width={48}
              height={48}
              priority
            />
          </li>
          <li className="flex justify-center items-center">
            <Image
              src="/m-grey-placeholder.png"
              alt="Vercel Logo"
              className="logo h-12 w-12 fill-red-500"
              width={48}
              height={48}
              priority
            />
          </li>
          <li className="flex justify-center items-center">
            <Image
              src="/m-grey-placeholder.png"
              alt="Vercel Logo"
              className="logo h-12 w-12 fill-red-500"
              width={48}
              height={48}
              priority
            />
          </li>
          <li className="flex justify-center items-center">
            <Image
              src="/m-grey-placeholder.png"
              alt="Vercel Logo"
              className="logo h-12 w-12 fill-red-500"
              width={48}
              height={48}
              priority
            />
          </li>
          <li className="flex justify-center items-center">
            <Image
              src="/m-grey-placeholder.png"
              alt="Vercel Logo"
              className="logo h-12 w-12 fill-red-500"
              width={48}
              height={48}
              priority
            />
          </li>
        </ul>
      </div>
      <div className="content min-h-screen border border-green-500 col-span-11">
        <div className="header-bar w-full p-8 border border-red-500">
          <h1 class="text-2xl text-slate-400 font-medium text-center">
            Useful Code
          </h1>
        </div>
        <div className="actual-content p-8">
          <div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <li className="bg-slate-800 rounded-lg p-4 min-h-[120px] text-white flex items-center justify-center">
                List Item
              </li>
              <li className="bg-slate-800 rounded-lg p-4 min-h-[120px] text-white flex items-center justify-center">
                List Item
              </li>
              <li className="bg-slate-800 rounded-lg p-4 min-h-[120px] text-white flex items-center justify-center">
                List Item
              </li>
              <li className="bg-slate-800 rounded-lg p-4 min-h-[120px] text-white flex items-center justify-center">
                List Item
              </li>
              <li className="bg-slate-800 rounded-lg p-4 min-h-[120px] text-white flex items-center justify-center">
                List Item
              </li>
              <li className="bg-slate-800 rounded-lg p-4 min-h-[120px] text-white flex items-center justify-center">
                List Item
              </li>
              <li className="bg-slate-800 rounded-lg p-4 min-h-[120px] text-white flex items-center justify-center">
                List Item
              </li>
              <li className="bg-slate-800 rounded-lg p-4 min-h-[120px] text-white flex items-center justify-center">
                List Item
              </li>
              <li className="bg-slate-800 rounded-lg p-4 min-h-[120px] text-white flex items-center justify-center">
                List Item
              </li>
              <li className="bg-slate-800 rounded-lg p-4 min-h-[120px] text-white flex items-center justify-center">
                List Item
              </li>
              <li className="bg-slate-800 rounded-lg p-4 min-h-[120px] text-white flex items-center justify-center">
                List Item
              </li>
              <li className="bg-slate-800 rounded-lg p-4 min-h-[120px] text-white flex items-center justify-center">
                List Item
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
