import Header from "../components/Header";
import MyCode from "../components/MyCode";
import Footer from "../components/Footer";

const Code = () => {
  return (
    <div className="code w-full flex flex-col md:flex-row">
      <Header />
      <div className="content-and-footer px-2 md:px-16 w-full md:w-4/5">
        <div className="main-content flex justify-center pt-8 md:pt-32">
          <MyCode />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Code;
