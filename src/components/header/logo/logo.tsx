import { HashLink } from "react-router-hash-link";
import New from "../../../assets/new.png";
import { Globals } from "../../../globals";

type ILogo = {
  color: string;
};

const Logo = (props: ILogo) => {
  return (
    <>
      <HashLink to={Globals.routes.home}>
        <div className="flex justify-center items-center gap-2">
          <img
            className="h-12 w-auto max-h-[100px] drop-shadow-lg"
            src={New}
            alt="Logo"
          />
          <div className={`flex flex-col text-sm lg:text-xl ${props.color}`}>
            <span className="font-semibold">Precisão e Inovação</span>
            <span className="text-sm">em cada detalhe</span>
          </div>
        </div>
      </HashLink>
    </>
  );
};

export default Logo;
