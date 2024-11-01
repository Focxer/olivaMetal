import { ReactNode } from "react";
import { HashLink } from "react-router-hash-link";

type INavItem = {
  value: string;
  link: string;
  icon?: ReactNode;
  target?: string;
};

const NavItem = (props: INavItem) => {
  return (
    <>
      <li className="text-zinc-200 flex items-center justify-center border-t-2 lg:border-0 border-zinc-400">
        <HashLink
          to={`${props.link}`}
          target={props.target}
          className="flex items-center justify-center hover:text-zinc-500 transition-all hover:cursor-pointer gap-1 align-middle mt-4"
        >
          <span className="w-4 h-4 flex items-center justify-center">
            {props.icon}
          </span>
          <span>{props.value}</span>
        </HashLink>
      </li>
    </>
  );
};

export default NavItem;
