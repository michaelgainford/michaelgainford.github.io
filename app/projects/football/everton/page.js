import Image from "next/image";
import MainHeader from "@/components/MainHeader";
import H1 from "@/components/typography/H1Span";
import MainFooter from "@/components/footer/MainFooter";
const mainStyles = "mx-auto w-[90%] md:w-[92%] lg:-[95%]] flex flex-col items-center";


export default function Home() {
  return (
    <div className="bg-blue-900">

      <MainHeader />

      <main className={mainStyles}>

        <H1 text="Euro 2024" />

        <div className="grid hidden grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-12 first-line:gap-4 countries-grid-container">
       

        </div>


      </main>
        <MainFooter />
    </div>
  );
}