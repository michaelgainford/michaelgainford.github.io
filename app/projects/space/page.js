import { globalPageStyles } from "@/components/data/Variables";
import { mainStyles } from "@/components/data/Variables";
import MainHeader from "@/components/header/MainHeader";
import H1 from "@/components/typography/H1Span";
import MainFooter from "@/components/footer/MainFooter";
import DataForSpace from "@/components/data/DataForSpace";
const pageStyles = "bg-black bg-topo-background text-sky-100";

export default function Home() {
  return (
    <div className={`${globalPageStyles} ${pageStyles}`}>
      <MainHeader />
      <main className={`${mainStyles}`}>
        <H1 text="Space" />
        <div className="flex flex-wrap justify-center w-full gap-8 max-w-[80vw]">
          <ul className="grid flex-wrap grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 xl:gap-12">
            {DataForSpace.map((planet, index) => (
              <li
                key={index}
                className="w-full p-4 lg:p-8 space-y-2 text-center border rounded-lg border-slate-600 bg-slate-800 min-w-[200px] max-sm:w-full flex flex-col items-center"
              >
                <h2 className="mb-4 text-xl tracking-wider text-center uppercase">
                  {planet.name}
                </h2>
                <span className="grid grid-cols-2 gap-4">
                  <span className="flex flex-col tracking-wider text-center">
                    <span className="">
                      {planet.distanceFromSunInMiles.toLocaleString()}
                    </span>
                    <span className="text-[10px]">miles from the Sun</span>
                  </span>
                  <span className="flex flex-col tracking-wider text-center">
                    <span>{planet.rotationPeriodInHours}</span>
                    <span className="text-[10px]">hours to rotate</span>
                  </span>
                  <span className="flex flex-col tracking-wider text-center">
                    <span>{planet.size}</span>
                    <span className="text-[10px]">Earths</span>
                  </span>
                  <span className="flex flex-col tracking-wider text-center text-">
                    <span>{planet.moons}</span>
                    <span className="text-[10px]">moons</span>
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full mt-16 solar-system">
          <h3 className="mt-8 mb-4 text-2xl text-center">The Solar System</h3>
          <ol>
            {DataForSpace.map((planet, index) => (
              <li
                key={index}
                className={planet.name.toLowerCase()}
                data-order={planet.order}
                data-handle={planet.name.toLowerCase()}
              ></li>
            ))}
          </ol>
        </div>
      </main>
      <MainFooter />
    </div>
  );
}
