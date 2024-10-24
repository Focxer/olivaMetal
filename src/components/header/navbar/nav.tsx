import { Cog, Factory, Handshake, Home, Menu, X } from "lucide-react";
import NavItem from "./nav-item";
import Logo from "../../../assets/logo.png";

const menuToggle = () => {
  const menu = document.getElementById("navBurger");
  menu?.classList.contains("hidden")
    ? menu.classList.remove("hidden")
    : menu?.classList.add("hidden");
};

const NavBar = () => {
  return (
    <>
      {/* Switch */}
      <nav className="lg:hidden">
        <div className="text-zinc-200 font-bold">
          <Menu onClick={menuToggle} />
        </div>
      </nav>

      {/* Navbar desktop */}
      <ul className="hidden lg:flex gap-8">
        <NavItem value="Início" icon={<Home />} link=""></NavItem>
        <NavItem value="Serviços" icon={<Cog />} link=""></NavItem>
        <NavItem value="Sobre nós" icon={<Factory />} link=""></NavItem>
        <NavItem value="Contato" icon={<Handshake />} link=""></NavItem>
      </ul>

      {/* Navbar mobile */}
      <ul
        id="navBurger"
        className="lg:hidden w-screen bg-zinc-900 bg-opacity-30 backdrop-blur-md absolute top-0 right-0 p-4 shadow-lg"
      >
        <div className="flex justify-between mb-8">
          <div className="flex justify-center items-center">
            <img src={Logo} alt="Oliva Metal" className="h-12 w-auto" />
            <div className="flex flex-col text-zinc-400 font-semibold mr-8 text-sm">
              <span>Precisão e inovação em</span>
              <span>cada detalhe</span>
            </div>
          </div>
          <button onClick={menuToggle}>
            <X className="text-zinc-200 font-bold" />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <NavItem value="Início" icon={<Home />} link=""></NavItem>
          <NavItem value="Serviços" icon={<Cog />} link=""></NavItem>
          <NavItem value="Sobre nós" icon={<Factory />} link=""></NavItem>
          <NavItem value="Contato" icon={<Handshake />} link=""></NavItem>
        </div>
      </ul>
    </>
  );
};

export default NavBar;
