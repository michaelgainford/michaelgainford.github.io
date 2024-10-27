import Image from 'next/image';
import Arsenal_Logo_Image from "@/public/images/football/club-logos/arsenal/arsenal.svg";

export default function ICON_ARSENAL () {
    return (
        <Image 
            src={Arsenal_Logo_Image} 
            alt={`Arsenal`} 
            width={300} 
            height={300} 
            //layout={`responsive`} 
        />
    )
  }