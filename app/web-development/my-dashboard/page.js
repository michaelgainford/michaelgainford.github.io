import Image from "next/image";
import MainHeader from "@/components/header/MainHeader";
import H1 from "@/components/typography/H1Span";
import MainFooter from "@/components/footer/MainFooter";
import { globalPageStyles } from "@/components/data/Variables";
import { mainStyles } from "@/components/data/Variables";
import DataForMyDevDashboard from "@/components/data/DataForMyDevDashboard";
import Button from "@/components/buttons/StandardButton";

// get today's date
const today = new Date();

// format today as dd/mm/yyyy
const todayFormatted = today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear();

const pageStyles = "bg-slate-900 text-slate-400 bg-brand-background bg-repeat";


export default function MyDashboard(){
  return (
    <div className={`${globalPageStyles} ${pageStyles}`}>
      <MainHeader />
      <main className={`${mainStyles}`}>
        <H1 text="My Dev Dashboard" />
        <p>{`Today's date is ${today}`}</p>
        <p>{`The formatted date is ${todayFormatted}`}</p>

        <div className="flex flex-col w-full min-h-[300px] mb-8 lg:mb-16">
          <h2 className="mb-4 text-base underline uppercase lg:mb-8 underline-offset-8">Domains</h2>
          <div className="flex flex-wrap justify-between gap-8">
            {DataForMyDevDashboard.map((domain, index) => (
              <div key={index} className="domain min-w-[300px] w-[45%] flex-wrap flex-grow p-8 border-2 border-slate-800 rounded-lg space-y-2 bg-slate-900 text-sm flex-row gap-8 grid grid-cols-2">
                  <Image src="/grey-square.webp" alt="Grey Square" width={200} height={200} className="object-cover aspect-square @xs:aspect-[3/2]  w-full" />
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold tracking-wide uppercase">{domain.name}</h3>
                    <p>URL: {domain.url}</p>
                    <p>Last Renewed: {domain.lastRenewed}</p>
                    <p>Expires: {domain.expires}</p>
                    <p>Host: {domain.host}</p>
                    <div className="pt-8 space-x-4 domain-buttons">
                      <Button label="Site" href={`https://${domain.url}`} />
                      <Button label="Host" href="https://krystal.co.uk" />
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full">
          <h2 className="mb-4 text-base underline uppercase lg:mb-8 underline-offset-8">Admin</h2>
          <details className="border-2 border-slate-800 min-w-[600px] rounded-lg p-4 hover:bg-slate-900">
            <summary className="flex justify-between py-4 cursor-pointer after:content-['_▶']">Invoices/Payments</summary>
            <table className="w-full py-6 mt-6 text-center border table-auto border-rose-500">
              <thead className="mt-4">
                <tr className="bg-slate-950/50">
                  <th className="py-4 border border-slate-700">Invoice</th>
                  <th className="py-4 border border-slate-700">Amount</th>
                  <th className="py-4 border border-slate-700">Date</th>
                </tr>
              </thead>
              <tbody className="py-8 bg-slate-950/30">
                <tr>
                  <td className="py-4 border border-slate-700">Invoice 1</td>
                  <td className="py-4 border border-slate-700">$100</td>
                  <td className="py-4 border border-slate-700">1/1/2021</td>
                </tr>
                <tr>
                  <td className="py-4 border border-slate-700">Invoice 2</td>
                  <td className="py-4 border border-slate-700">$200</td>
                  <td className="py-4 border border-slate-700">2/1/2021</td>
                </tr>
                <tr>
                  <td className="py-4 border border-slate-700">Invoice 3</td>
                  <td className="py-4 border border-slate-700">$300</td>
                  <td className="py-4 border border-slate-700">3/1/2021</td>
                </tr>
              </tbody>
            </table>
          </details>
        </div>

      </main>
      <MainFooter />
    </div>
  );
}