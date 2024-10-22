import { Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const menuToggle = () => {
  const menu = document.getElementById("navBurger");
  if (menu?.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu?.classList.add("hidden");
  }
};

export const Navbar = () => {
  return (
    <>
      <nav className="hidden md:flex gap-6 text-zinc-500 font-semibold">
        <HashLink
          smooth
          to="#__sobremim"
          className="hover:text-violet-400 duration-500"
        >
          Sobre mim
        </HashLink>
        <HashLink
          smooth
          to="#__linguagens"
          className="hover:text-violet-400 duration-500"
        >
          Linguagens
        </HashLink>
        <HashLink
          smooth
          to="#__projetos"
          className="hover:text-violet-400 duration-500"
        >
          Projetos
        </HashLink>
        <HashLink
          smooth
          to="#__contato"
          className="hover:text-violet-400 duration-500"
        >
          Fale comigo
        </HashLink>
      </nav>

      <nav className="md:hidden">
        <div>
          <Menu onClick={menuToggle} />
        </div>
      </nav>

      <div
        id="navBurger"
        className="hidden left-0 top-0 absolute h-72 w-screen bg-violet-500"
      >
        <div className="bg-white flex justify-between px-6 py-2 items-center">
          <X onClick={menuToggle} />
        </div>

        <nav
          className="flex flex-col text-zinc-50 font-semibold divide-y-2 divide-violet-300 shadow-xl"
          onClick={menuToggle}
        >
          <HashLink
            smooth
            to="#__sobremim"
            className="bg-violet-400 w-full text-center py-4"
          >
            Sobre mim
          </HashLink>
          <HashLink
            smooth
            to="#__linguagens"
            className="bg-violet-400 w-full text-center py-4"
          >
            Linguagens
          </HashLink>
          <HashLink
            smooth
            to="#__projetos"
            className="bg-violet-400 w-full text-center py-4"
          >
            Projetos
          </HashLink>
          <HashLink
            smooth
            to="#__contato"
            className="bg-violet-400 w-full text-center py-4"
          >
            Fale comigo
          </HashLink>
        </nav>
      </div>
    </>
  );
};
