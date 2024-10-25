import logo from "../../assets/logo.png";
import Navbar from "./navbar/nav";
import Socials from "./socials/socials";

export const Header = () => {
  return (
    <>
      {/* Socials */}
      <div className="bg-zinc-800 w-screen flex justify-between items-center p-2 sticky top-0">
        <Socials />
      </div>

      <div className="bg-zinc-700 w-screen flex justify-between py-2 px-8 lg:justify-around items-center sticky top-0">
        {/* Left content */}
        <div className="flex justify-center items-center">
          <img
            className="h-12 w-auto max-h-[100px] drop-shadow-lg"
            src={logo}
            alt="Logo"
          />
          <div className="flex flex-col text-sm lg:text-xl text-zinc-400 font-semibold">
            <span>Precisão e inovação em</span>
            <span>cada detalhe</span>
          </div>
        </div>

        {/* Navbar */}
        <Navbar />
      </div>
    </>
  );
};
