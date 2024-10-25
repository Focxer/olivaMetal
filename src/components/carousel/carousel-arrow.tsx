import { useState } from "react";
import { ReactNode } from "react";

type ICarouselArrow = {
  icon: ReactNode;
  click: string;
};

const CarouselArrow = (props: ICarouselArrow) => {
  const [index, setIndex] = useState(1);

  const direction = (direction: string = "right") => {
    if (direction === "left")
      index > 1
        ? setIndex((prevIndex) => prevIndex - 1)
        : setIndex((prevIndex) => (prevIndex = 3));
    if (direction === "right")
      index < 3
        ? setIndex((prevIndex) => prevIndex + 1)
        : setIndex((prevIndex) => (prevIndex = 1));
    return changeBackground(index);
  };

  const changeBackground = (index: number) => {
    const carousel = document.getElementById("carouselBg");
    if (carousel)
      (carousel as any).src = `/olivaMetal/src/assets/carousel/${index}.png`;
  };

  return (
    <span
      className="bg-slate-100 hover:bg-slate-200 hover:bg-opacity-10 bg-opacity-5 p-4 rounded-full text-lg duration-500 drop-shadow-md"
      onClick={() => direction(props.click)}
    >
      {props.icon}
    </span>
  );
};

export default CarouselArrow;
