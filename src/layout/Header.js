import HeaderLogo from "../components/HeaderLogo";
import HeaderNav from "../components/HeaderNav";

const Header = () => {
  return (
    <div className="logo-nav bg-theme md:h-screen w-full md:w-1/5 md:sticky md:top-0 grid md:auto-rows-auto">
      <HeaderLogo />
      <HeaderNav />
    </div>
  );
};

export default Header;
