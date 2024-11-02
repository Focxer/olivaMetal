type IServicesExplain = {
  direction: string;
  img: string;
  title: string;
  text: string;
  textDirection?: string;
  alt?: string;
  shadow?: string;
};

const ServicesExplain = (props: IServicesExplain) => {
  return (
    <section className="flex items-center justify-center px-2">
      <div
        className={`w-full lg:w-2/3 flex ${props.direction} gap-4 md:gap-8 justify-center items-center`}
      >
        <div className="flex w-1/2">
          <img
            src={props.img}
            alt={props.alt}
            className={`w-full aspect-square object-cover rounded-xl ${props.shadow} mix-blend-multiply`}
          />
        </div>
        <div
          className={`text-zinc-600 w-1/2 max-h-52 flex flex-col gap-4 drop-shadow-md ${props.textDirection}`}
        >
          <h1 className="text-xl lg:text-5xl font-semibold ">{props.title}</h1>
          <span className="text-xs sm:text-lg h-28 lg:h-auto text-ellipsis whitespace-pre-wrap">
            {props.text}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ServicesExplain;
