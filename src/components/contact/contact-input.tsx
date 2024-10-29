type IContactInput = {
  type: string;
  placeholder: string;
  required: boolean;
  id?: string;
};

const ContactInput = (props: IContactInput) => {
  return (
    <>
      <input
        className="p-2 bg-zinc-50 border-none rounded-lg"
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        required={props.required}
      />
    </>
  );
};

export default ContactInput
