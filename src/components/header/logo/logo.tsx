import New from "../../../assets/new.png";
import { domain } from "../../../main";

type ILogo = {
  color: string;
};

const Logo = (props: ILogo) => {
  return (
    <>
      <a href={`${domain}/`}>
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
      </a>
    </>
  );
};

export default Logo;
