import logo from "../../assets/logo.png";
import Navbar from "./navbar/nav";
import Socials from "./socials/socials";

export const Header = () => {
  return (
    <header className="bg-zinc-700 w-full shadow-lg pb-4">
      <div className="flex justify-between items-center p-4 border-b-[1px] mb-4">
        {/* Socials */}
        <Socials/>
        </div>

      <div className="flex justify-between px-8 lg:justify-around items-center mb-2">
        {/* Título da esquerda */}
        <div className="flex justify-center items-center">
          <img className="h-12 w-auto max-h-[100px] drop-shadow-lg" src={logo} alt="Logo" />
          <div className="flex flex-col text-sm lg:text-xl text-zinc-400 font-semibold">
            <span>Precisão e inovação em</span>
            <span>cada detalhe</span>
          </div>
        </div>

        {/* Navbar */}
        <Navbar></Navbar>
      </div>
    </header>
  );
};
