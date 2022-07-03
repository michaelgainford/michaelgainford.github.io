import { Link } from "react-router-dom";
import MainLogo from "./Logo";
import { FaHome } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
//import { FaTwitter } from "react-icons/fa";
//import { FaEnvelope } from "react-icons/fa";

const Header = () => {
  return (
    <div className="logo-nav bg-theme md:h-screen w-full md:w-1/5 md:sticky md:top-0 grid auto-rows-auto">
      <MainLogo />
      <nav className="nav-main grid grid-cols-4 md:grid-cols-1 max-h-full tracking-widest text-xs md:text-sm text-highlight grid-flow-row auto-rows-max">
        <Link
          to="/"
          className="lowercase md:border-t border-theme-alt hover:bg-theme-alt text-light text-center px-4 py-12 flex flex-col justify-center items-center ease-in-out duration-500"
        >
          <span className="text-highlight">
            <FaHome />
          </span>
          Home
        </Link>
        <Link
          to="/code"
          className="lowercase md:border-t border-theme-alt hover:bg-theme-alt text-light text-center px-4 py-12 flex flex-col justify-center items-center ease-in-out duration-500"
        >
          <span className="text-highlight">
            <FaCode />
          </span>
          Code
        </Link>
        <Link
          to="/resources"
          className="lowercase md:border-t border-theme-alt hover:bg-theme-alt text-light text-center px-4 py-12 flex flex-col justify-center items-center ease-in-out duration-500"
        >
          <span className="text-highlight">
            <FaTools />
          </span>
          Resources
        </Link>
        <Link
          to="/"
          className="lowercase md:border-t border-theme-alt hover:bg-theme-alt text-light text-center px-4 py-12 flex flex-col justify-center items-center ease-in-out duration-500"
        >
          <span className="text-highlight">
            <FaTwitter />
          </span>
          Twitter
        </Link>
      </nav>
    </div>
  );
};

export default Header;
