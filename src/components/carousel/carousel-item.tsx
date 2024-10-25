type ICarouselItem = {
  img: string;
  alt?: string;
  title?: string;
  text?: string;
};

const CarouselItem = (props: ICarouselItem) => {
  return (
    <>
      <div className="carousel-item active">
        <img src={props.img} className="d-block w-screen h-[500px] object-cover" alt={props.alt} />
        <div className="carousel-caption d-none d-md-block">
          <h5>{props.title}</h5>
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );
};

export default CarouselItem;
