import StarRating from "./customers-stars";

type ICostumersItem = {
  img: string;
  alt?: string;
  name: string;
  description: string;
};

const CustomersItem = (props: ICostumersItem) => {
  return (
    <div className="justify-center items-center flex flex-col rounded-lg shadow-lg p-8 gap-4 text-zinc-800 max-w-md bg-zinc-50">
      <img
        className="rounded-full h-24 lg:h-40 mix-blend-multiply"
        src={props.img}
        alt={props.alt}
      />
      <h1 className="font-semibold">{props.name}</h1>
      <span className="text-xs lg:text-sm">{props.description}</span>
      <div className="self-center">
        <StarRating></StarRating>
      </div>
    </div>
  );
};

export default CustomersItem;
