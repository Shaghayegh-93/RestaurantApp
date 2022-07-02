/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const PizzaCard = ({ pizza }) => {
  return (
    <div className="relative w-full md:w-[22%] flex flex-col items-center justify-center py-5 px-10 space-y-3 cursor-pointer hover:bg-slate-50">
      <Link href={`/product/${pizza._id}`} passHref>
        <img
          alt=""
          src={pizza.img}
          // width="500px"
          // height="500px"
          className="w-[200px] h-[200px]  md:w-[250px] md:h-[250px] "
        />
      </Link>

      <h2 className="text-3xl sm:text-lg font-extrabold text-[#d1411e]">
        {pizza.title}
      </h2>
      <span className="text-2xl sm:text-lg font-bold text-[#666]">
        ${pizza.prices[0]}
      </span>
      <p className="text-2xl sm:text-lg text-center text-[#777]">
        {pizza.desc}
      </p>
    </div>
  );
};

export default PizzaCard;
