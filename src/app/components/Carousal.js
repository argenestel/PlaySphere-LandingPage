"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 770, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Carousal = () => {
  return (
    <>
      <Carousel
        responsive={responsive}
        className="w-full h-full"
        swipeable={false}
        draggable={false}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        deviceType={"desktop"}
      >
        <div className="responsive h-full w-full">
          <img className="w-full h-full object-cover" src={"/image.png"} />
        </div>
        <div className="responsive h-full w-full">
          <img className="w-full h-full object-cover" src={"/aboutbg.webp"} />
        </div>
        <div className="responsive h-full w-full">
          <img className="w-full h-full object-cover" src={"/image.png"} />
        </div>
        <div className="responsive h-full w-full">
          <img className="w-full h-full object-cover" src={"/aboutbg.webp"} />
        </div>
      </Carousel>
    </>
  );
};
export default Carousal;
