import Image from "next/image"

export default function Sidebar () {
  return (
    <div className="sidebar">
      <ul className="grid dvh-full w-full ">
        <li className="flex justify-center items-center">
          <Image
            src="/spanner.svg"
            alt="Vercel Logo"
            className="logo h-12 w-12 fill-red-500"
            width={48}
            height={48}
            priority
          />
        </li>
        <li className="flex justify-center items-center">
          <Image
            src="/spanner.svg"
            alt="Vercel Logo"
            className="logo h-12 w-12 fill-red-500"
            width={48}
            height={48}
            priority
          />
        </li>
        <li className="flex justify-center items-center">
          <Image
            src="/spanner.svg"
            alt="Vercel Logo"
            className="logo h-12 w-12 fill-red-500"
            width={48}
            height={48}
            priority
          />
        </li>
        <li className="flex justify-center items-center">
          <Image
            src="/spanner.svg"
            alt="Vercel Logo"
            className="logo h-12 w-12 fill-red-500"
            width={48}
            height={48}
            priority
          />
        </li>
        <li className="flex justify-center items-center">
          <Image
            src="/spanner.svg"
            alt="Vercel Logo"
            className="logo h-12 w-12 fill-red-500"
            width={48}
            height={48}
            priority
          />
        </li>
      </ul>
    </div>
  );
}