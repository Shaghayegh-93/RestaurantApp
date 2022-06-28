import React from "react";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  return (
    <div className="py-5 px-[10px] flex flex-col items-center ">
      <h1 className="text-center font-bold text-3xl mb-8">
        THE BEST PIZZA IN TOWN
      </h1>
      <p className="text-2xl text-[#444] text-center w-[90%] sm:w-[65%] ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque omnis
        laborum odio aliquam ea harum. Itaque harum sint non quo a enim error
        molestiae natus, asperiores alias. Modi, impedit cumque!
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-around w-full flex-wrap mt-8">
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;
