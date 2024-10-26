import { ReactNode } from "react";

type ISocialsItem = {
  value: string;
  link: string;
  icon?: ReactNode;
  target?: string;
};

const SocialsItem = (props: ISocialsItem) => {
  return (
    <>
      <div>
        <a
          className="flex gap-1 items-center justify-center text-zinc-600 text-sm align-middle"
          href={props.link}
          target={props.target}
        >
          <span className="h-4 w-4 flex justify-center items-center">
            {props.icon}
          </span>
          <span>{props.value}</span>
        </a>
      </div>
    </>
  );
};

export default SocialsItem;
