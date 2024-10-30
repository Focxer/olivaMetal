import StarRating from "./customers-stars";

type ICostumersItem = {
  img: string;
  alt?: string;
  name: string;
  description: string;
  initialRating:number;
};

const CustomersItem = (props: ICostumersItem) => {
  return (
    <div className="init-bottom justify-center items-center flex flex-col rounded-lg shadow-lg p-8 gap-4 text-zinc-800 max-w-md bg-zinc-50 min-h-[400px] h-52">
      <img
        className="rounded-full h-24 lg:h-40 mix-blend-multiply"
        src={props.img}
        alt={props.alt}
      />
      <h1 className="font-semibold">{props.name}</h1>
      <span className="text-sm">{props.description}</span>
      <StarRating initialRating={props.initialRating}></StarRating>
    </div>
  );
};

export default CustomersItem;
