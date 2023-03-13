//import Image from "next/image";
import Header from "./components/resources-header";
import Content from "./components/resources-content";
import Sidebar from "./components/resources-sidebar";
import Footer from "./components/resources-footer";
//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="grid auto-rows-auto grid-cols-1 lg:grid-cols-12 gap-y-8">
      <Sidebar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
