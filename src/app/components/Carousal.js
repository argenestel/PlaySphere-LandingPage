"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaChevronRight,FaChevronLeft } from "react-icons/fa6";


const Carousal = ({images}) => {
  return (
    <>
      <Carousel
      className="h-full"
        swipeable={false}
        showStatus={false}
        showArrows={true}
        draggable={false}
        infiniteLoop={true}
        autoPlay={true}
        showIndicators={true}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`${
                hasPrev ? "absolute" : "hidden"
              } top-0 bottom-0 left-0 flex justify-center items-center p-3 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <FaChevronLeft className="w-8 h-8 bg-black rounded-full p-2 text-white" />
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className={`${
                hasNext ? "absolute" : "hidden"
              } top-0 bottom-0 right-0 flex justify-center items-center p-3 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <FaChevronRight className="w-8 h-8 bg-black rounded-full p-2 text-white" />
            </div>
          );
        }}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          return (
            <button
            className={`bg-black py-[7px] px-[5px] text-white ${index===0?'rounded-l-full':''} ${(index===images.length-1)?'rounded-r-full':''}`}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            >
              <div className={`rounded-full ${isSelected?'bg-[#c1ffb3]':'bg-[#c1ffb370]'} w-[8px] h-[8px]`}>
              </div>
            </button>
          );
        }}
      >
        {images.map((src,ind)=>{
          return <div className="w-full h-full">
          <img className="w-full md:h-[80vh] h-[400px] object-cover" alt="car-img" src={src} />
        </div>
        })}
      </Carousel>
    </>
  );
};
export default Carousal;
