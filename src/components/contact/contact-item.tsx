import { ReactNode } from "react";

type IContactItem = {
  icon: ReactNode;
  text: string;
};

const ContactItem = (props: IContactItem) => {
  return (
    <>
      <li className="flex gap-2 text-zinc-800 mb-2 md:justify-end text-sm sm:text-base">
        <div>{props.icon}</div>
        <span className="whitespace-pre-wrap md:text-end">{props.text}</span>
      </li>
    </>
  );
};

export default ContactItem;
