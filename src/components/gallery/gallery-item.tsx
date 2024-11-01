type IGalleryItem = {
  img: string;
  name: string;
  description: string;
  alt?: string;
};

const GalleryItem = (props: IGalleryItem) => {
  return (
    <div className="h-full w-full md:w-[300px] xl:w-[500px] rounded-xl bg-slate-100 bg-opacity-80 flex flex-col gap-4 drop-shadow-md">
      <img
        src={props.img}
        alt={props.alt}
        className="max-h-60 w-full object-cover aspect-square rounded"
      />
      <div className="h-full flex flex-col gap-4 px-4 mb-4">
        <h1 className="text-zinc-800 font-semibold truncate">{props.name}</h1>
        <span className="text-xs xl:text-sm text-zinc-600">{props.description}</span>
      </div>
    </div>
  );
};

export default GalleryItem;
