import "./index.css";
import Header from "../src/layout/Header";
import Home from "../src/pages/Home";
import Footer from "../src/layout/Footer";

function App() {
  return (
    <div className="w-screen min-h-screen mx-auto flex flex-col lg:flex-row min-w-[300px]">
      <div className="home w-full flex flex-col md:flex-row md:px-0">
        <Header />
        <div className="content-and-footer md:px-16 w-full md:w-4/5 px-4 lg:px-8">
          <Home />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
