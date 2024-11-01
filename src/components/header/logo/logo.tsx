import { HashLink } from "react-router-hash-link";
import { Globals } from "../../../globals";

type ILogo = {
  color: string;
};

const Logo = (props: ILogo) => {
  return (
    <>
      <HashLink to={Globals.routes.home}>
        <div className="flex items-center justify-center gap-2 w-auto">
          <img
            className="h-12 w-auto max-h-[100px] drop-shadow-lg"
            src={Globals.img.new}
            alt="Logo"
          />
          <div
            className={`flex flex-col text-sm lg:text-xl ${props.color} text-left`}
          >
            <span className="font-semibold">Precisão e Inovação</span>
            <span className="text-sm">em cada detalhe</span>
          </div>
        </div>
      </HashLink>
    </>
  );
};

export default Logo;
