import { ReactNode } from "react";
import { HashLink } from "react-router-hash-link";

type IFooterItem = {
  text: string;
  icon?: ReactNode;
  link?: string;
  target?: string;
};

const FooterItem = (props: IFooterItem) => {
  return (
    <>
      <li>
        <HashLink
          className="flex gap-2"
          to={props.link ?? ""}
          target={props.target ?? "_self"}
        >
          <span>{props.icon}</span>
          <span className="text-zinc-200">{props.text}</span>
        </HashLink>
      </li>
    </>
  );
};

export default FooterItem;
