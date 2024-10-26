import { Cog, Factory, Handshake, Home, Menu, X } from "lucide-react";
import NavItem from "./nav-item";
import Logo from "../logo/logo";
import { domain } from "../../../main";

const menuToggle = () => {
  const menu = document.getElementById("navBurger");
  if (menu?.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    setTimeout(() => menu.classList.remove("-translate-y-full"), 10);
  } else {
    menu?.classList.add("-translate-y-full");
    setTimeout(() => menu?.classList.add("hidden"), 200);
  }
};

const NavBar = () => {
  return (
    <>
      {/* Switch */}
      <nav className="lg:hidden">
        <div className="text-zinc-800 font-bold hover:cursor-pointer">
          <Menu onClick={menuToggle} />
        </div>
      </nav>

      {/* Navbar desktop */}
      <ul className="hidden lg:flex gap-8">
        <NavItem value="Início" icon={<Home />} link={`${domain}/`}></NavItem>
        <NavItem
          value="Serviços"
          icon={<Cog />}
          link={`${domain}/services`}
        ></NavItem>
        <NavItem
          value="Sobre nós"
          icon={<Factory />}
          link={`${domain}/about-us`}
        ></NavItem>
        <NavItem
          value="Contato"
          icon={<Handshake />}
          link={`${domain}/contact`}
        ></NavItem>
      </ul>

      {/* Navbar mobile */}
      <ul
        id="navBurger"
        className="ease-in-out hidden lg:hidden transform -translate-y-full w-screen bg-zinc-900 bg-opacity-50 backdrop-blur-md fixed top-0 right-0 p-4 pt-12 sm:pt-10 shadow-lg transition-transform duration-200"
      >
        <div className="flex justify-between mb-8">
          <div className="flex justify-center items-center gap-2">
            <Logo color="text-zinc-200"></Logo>
          </div>
          <button onClick={menuToggle}>
            <X className="text-zinc-200 font-bold hover:cursor-pointer hover:text-zinc-300 mr-4 mt-4 sm:mt-2" />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <NavItem value="Início" icon={<Home />} link={`${domain}/`}></NavItem>
          <NavItem
            value="Serviços"
            icon={<Cog />}
            link={`${domain}/services`}
          ></NavItem>
          <NavItem
            value="Sobre nós"
            icon={<Factory />}
            link={`${domain}/about-us`}
          ></NavItem>
          <NavItem
            value="Contato"
            icon={<Handshake />}
            link={`${domain}/contact`}
          ></NavItem>
        </div>
      </ul>
    </>
  );
};

export default NavBar;
