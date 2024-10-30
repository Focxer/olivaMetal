type IGalleryItem = {
  img: string;
  name: string;
  description: string;
  alt?: string;
};

const GalleryItem = (props: IGalleryItem) => {
  return (
    <div className="h-full max-h-[480px] w-full md:max-w-[300px] lg:max-w-[500px] rounded-xl bg-slate-600 bg-opacity-80 flex flex-col gap-4 drop-shadow-md">
      <img
        src={props.img}
        alt={props.alt}
        className="max-h-60 w-full object-cover aspect-square rounded"
      />
      <div className="flex flex-col gap-4 px-4 mb-4">
        <h1 className="text-blue-300 font-semibold">{props.name}</h1>
        <span className="text-xs xl:text-sm text-zinc-200">{props.description}</span>
      </div>
    </div>
  );
};

export default GalleryItem;
