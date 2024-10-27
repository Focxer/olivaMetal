import { HashLink } from "react-router-hash-link";
import New from "../../../assets/new.png";
import { domain } from "../../../main";

type ILogo = {
  color: string;
};

const Logo = (props: ILogo) => {
  return (
    <>
      <HashLink to="/">
        <div className="flex justify-center items-center gap-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
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
