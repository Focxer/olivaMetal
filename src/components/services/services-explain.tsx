type IServicesExplain = {
  direction: string;
  img: string;
  title: string;
  text: string;
  textDirection?: string;
  alt?: string;
};

const ServicesExplain = (props: IServicesExplain) => {
  return (
    <section className="w-full flex items-center justify-center">
      <div
        className={`w-full lg:w-2/3 flex ${props.direction} gap-4 md:gap-8 justify-center items-center`}
      >
        <div className="w-1/2">
          <img
            src={props.img}
            alt={props.alt}
            className="w-full aspect-square object-cover rounded-xl drop-shadow-md"
          />
        </div>
        <div
          className={`w-1/2 max-h-52 flex flex-col gap-4 justify-center drop-shadow-md ${props.textDirection}`}
        >
          <h1 className="text-xl lg:text-5xl font-semibold text-zinc-800">
            {props.title}
          </h1>
          <span className="text-xs sm:text-lg h-28 lg:h-auto overflow-hidden text-ellipsis whitespace-normal">
            {props.text}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ServicesExplain;
