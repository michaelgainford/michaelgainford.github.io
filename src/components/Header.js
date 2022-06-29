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
    <div className="logo-nav bg-theme h-screen w-1/5 sticky top-0">
      <MainLogo />
      <nav className="nav-main max-h-full tracking-widest text-sm text-highlight">
        <Link
          to="/"
          className="lowercase border-t border-theme-alt hover:bg-theme-alt text-light text-center h-1/4 px-4 py-12 flex flex-col justify-center items-center ease-in-out duration-500"
        >
          <span className="text-highlight">
            <FaHome />
          </span>
          Home
        </Link>
        <Link
          to="/code"
          className="lowercase border-t border-theme-alt hover:bg-theme-alt text-light text-center h-1/4 px-4 py-12 flex flex-col justify-center items-center ease-in-out duration-500"
        >
          <span className="text-highlight">
            <FaCode />
          </span>
          Code
        </Link>
        <Link
          to="/resources"
          className="lowercase border-t border-theme-alt hover:bg-theme-alt text-light text-center h-1/4 px-4 py-12 flex flex-col justify-center items-center ease-in-out duration-500"
        >
          <span className="text-highlight">
            <FaTools />
          </span>
          Resources
        </Link>
        <Link
          to="/"
          className="lowercase border-t border-theme-alt hover:bg-theme-alt text-light text-center h-1/4 px-4 py-12 flex flex-col justify-center items-center ease-in-out duration-500"
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
