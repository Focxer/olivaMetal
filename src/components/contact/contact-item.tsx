import { ReactNode } from "react";

type IContactItem = {
  icon: ReactNode;
  text: string;
};

const ContactItem = (props: IContactItem) => {
  return (
    <>
      <li>
        <div>{props.icon}</div>
        <span>{props.text}</span>
      </li>
    </>
  );
};

export default ContactItem;
