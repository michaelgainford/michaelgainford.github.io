import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const HeaderNav = () => {
    return (
        <nav className="nav-main grid grid-cols-4 md:grid-cols-1 max-h-full tracking-widest text-xs font-light lg:text-sm text-highlight md:grid-rows-4 grid-flow-row auto-rows-max">
        <Link
          to="/"
          className="lowercase md:border-t border-theme-alt hover:bg-theme-alt text-light text-center px-4 py-12 flex flex-col justify-center items-center ease-in-out duration-500 gap-y-1"
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
    );
};

export default HeaderNav;