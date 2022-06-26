import Image from "next/image";
import React, { useState } from "react";

const Featured = () => {
  const images = [
    { id: "1", images: "/img/Featured.png" },
    { id: "2", images: "/img/Featured2.png" },
    { id: "3", images: "/img/Featured3.png" },
  ];
  const [slideIndex, setSlideIndex] = useState(0);
  const arrowHandler = (direction) => {
    if (direction === "l") {
      setSlideIndex(slideIndex !== 0 ? slideIndex - 1 : 2);
    }
    if (direction === "r") {
      setSlideIndex(slideIndex !== 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="h-[calc(100vh-100px)] bg-[#d1411e] overflow-hidden">
      <div
        className=" w-[5%] h-[10%] absolute top-0 bottom-0 m-auto left-0 cursor-pointer z-10 "
        onClick={() => arrowHandler("l")}
      >
        <Image alt="arrow" src="/img/arrowl.png" layout="fill" />
      </div>
      <div
        className="w-[300vw] h-full flex transition-all duration-[1.5s] ease-in-out  "
        style={{ transform: `translateX(${-100 * slideIndex}vw)` }}
      >
        {images.map((img) => (
          <div className="h-full w-[100vw] relative" key={img.id}>
            <Image
              alt=""
              src={img.images}
              // src={img.images}
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        ))}
      </div>

      <div
        className=" w-[5%] h-[10%] absolute top-0 bottom-0 m-auto right-0  cursor-pointer"
        onClick={() => arrowHandler("r")}
      >
        <Image alt="arrow" src="/img/arrowr.png" layout="fill" />
      </div>
    </div>
  );
};

export default Featured;
