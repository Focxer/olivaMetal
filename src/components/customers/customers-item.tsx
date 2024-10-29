import StarRating from "./customers-stars";

type ICostumersItem = {
  img: string;
  alt?: string;
  name: string;
  description: string;
};

const CustomersItem = (props: ICostumersItem) => {
  return (
    <div className="justify-center items-center flex flex-col rounded-lg shadow-lg p-8 gap-4 text-zinc-800 max-w-96 bg-zinc-50">
      <img
        className="rounded-full max-h-40 mix-blend-multiply"
        src={props.img}
        alt={props.alt}
      />
      <h1 className="font-semibold">{props.name}</h1>
      <span>{props.description}</span>
      <StarRating></StarRating>
    </div>
  );
};

export default CustomersItem;
