import Logo from "./logo/logo";
import Navbar from "./navbar/nav";
import Socials from "./socials/socials";

export const Header = () => {
  return (
    <>
      {/* Socials */}
      <div className="bg-zinc-50 w-screen flex justify-between items-center p-2">
        <Socials />
      </div>

      <div className="bg-slate-700 w-full flex justify-between py-2 px-8 lg:justify-around items-center sticky top-0 z-50">
        {/* Left content */}
        <Logo color="text-zinc-200"></Logo>

        {/* Navbar */}
        <Navbar />
      </div>
    </>
  );
};
