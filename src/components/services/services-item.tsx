import { ReactNode } from "react";

type IServicesItem = {
  img: string;
  title: string;
  sub: string;
  alt?: string;
};

const ServicesItem = (props: IServicesItem) => {
  return (
    <div
      id="main"
      className="relative flex flex-col items-center justify-center drop-shadow-lg transition-all duration-200 overflow-hidden group lg:h-96 lg:w-96 w-32 h-32 flex-grow"
    >
      <img
        src={props.img}
        alt={props.alt}
        className="absolute object-cover rounded-xl brightness-50 blur-[0.10em] h-full w-full"
      />
      <div
        id="target"
        className="absolute flex flex-col items-center justify-center drop-shadow-md w-full h-full md:translate-y-48 transition-all duration-200 group-hover:translate-y-0"
      >
        <div className="flex gap-2 items-center justify-center mb-2 py-2">
          <h1 className="text-zinc-200 font-semibold text-sm lg:text-2xl">{props.title}</h1>
        </div>
        <span className="text-zinc-300 w-2/3 text-xs lg:text-lg text-center">{props.sub}</span>
      </div>
    </div>
  );
};

export default ServicesItem;
