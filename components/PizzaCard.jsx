import Image from "next/image";
import React from "react";

const PizzaCard = () => {
  return (
    <div className="w-[22%] flex flex-col items-center justify-center py-5 px-10 space-y-3 cursor-pointer hover:bg-slate-50">
      <Image alt="" src="/img/pizza.png" width="500px" height="500px" />
      <h2 className="text-lg font-extrabold text-[#d1411e]">Campagnolia</h2>
      <span className="font-bold text-[#666]">$19.90</span>
      <p className="text-center text-[#777]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default PizzaCard;
