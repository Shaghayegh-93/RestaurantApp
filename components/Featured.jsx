import Image from "next/image";
import React from "react";

const Featured = () => {
  const images = [{ id: "1", images: "/img/download.jfif" }];
  return (
    <div>
      <div>
        <Image alt="arrow" src="/img/arrowr.png" layout="fill" />
      </div>
      <div className="bg-red-600">
        <Image
          alt=""
          src="/img/download-removebg-preview"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div>
        <Image alt="arrow" src="/img/arrowl.png" layout="fill" />
      </div>
    </div>
  );
};

export default Featured;
