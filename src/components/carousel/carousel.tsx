import { ChevronLeft, ChevronRight } from "lucide-react";
import CarouselArrow from "./carousel-arrow";
import Img1 from "../../assets/carousel/1.png"

const Carousel = () => {
  return (
    <>
      <section className="h-[300px] xl:h-[600px] w-screen bg-slate-400 relative drop-shadow-md">
        <img
          id="carouselBg"
          src={Img1}
          className="absolute h-full w-full bg-pink-50 object-cover duration-500 ease-in-out"
        ></img>
        <div className="flex items-center justify-between h-full px-8">
          <CarouselArrow icon={<ChevronLeft />} click="left" />
          <CarouselArrow icon={<ChevronRight />} click="right" />
        </div>
      </section>
    </>
  );
};

export default Carousel;
