import Header from "../components/Header";
import MyCode from "../components/MyCode";
import Footer from "../components/Footer";

const Code = () => {
  return (
    <div className="code w-full flex flex-col md:flex-row">
      <Header />
      <div className="content-and-footer px-8 w-4/5">
        <div className="main-content border border-yellow-500 flex pt-32">
          <MyCode />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Code;
