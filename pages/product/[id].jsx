import React, { useState } from "react";

const Product = () => {
  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate enim quidem sit harum, tempora aliquid ducimus iure cum labore modi magni quis. Rerum, mollitia tempore vel repellendus quo deserunt eveniet?",
  };
  const [size, setSize] = useState(0);
  return (
    <div className="flex  h-[calc(100vh-100px)]">
      <div className="flex-1 h-full flex items-center justify-center">
        <div className="w-4/5 h-4/5">
          <img src={pizza.img} alt="pizzaImage" />
        </div>
      </div>
      <div className="flex-1 p-5 mt-10 ">
        <h2 className="font-extrabold text-2xl pb-5">{pizza.name}</h2>
        <span className="text-[#d1411e] text-2xl font-normal border-b border-[#d1411e]">
          ${pizza.price[size]}
        </span>
        <p className="pt-5">{pizza.desc}</p>
        <h3 className="py-4 font-semibold text-xl">Choose the size</h3>

        <div className="flex w-[40%] justify-between">
          <div
            className="w-[40px] h-[40px] cursor-pointer relative"
            onClick={() => setSize(0)}
          >
            <img className="" src="/img/size.png" alt="" />
            <span className="bg-[teal] text-white text-xs px-[5px] absolute top-[-5px] right-[-20px]  rounded-md">
              Small
            </span>
          </div>
          <div
            className="w-[50px] h-[50px] cursor-pointer relative"
            onClick={() => setSize(1)}
          >
            <img className="" src="/img/size.png" alt="" />
            <span className=" bg-[teal] text-white text-xs px-[5px] absolute top-[-5px] right-[-20px]  rounded-md">
              Medium
            </span>
          </div>
          <div
            className="w-[60px] h-[60px] cursor-pointer relative"
            onClick={() => setSize(2)}
          >
            <img className="" src="/img/size.png" alt="" />
            <span className="bg-[teal] text-white text-xs px-[5px] absolute top-[-5px] right-[-20px]  rounded-md">
              Large
            </span>
          </div>
        </div>

        <h3 className="py-4 font-semibold text-xl">
          Choose aditional ingredient
        </h3>
        <div className="flex mb-8">
          <div className="flex mr-3 items-center text-sm font-medium">
            <input
              className="w-5 h-5 mr-1"
              id="double"
              type={"checkbox"}
              name="double"
            />
            <label htmlFor="double">Double ingredient</label>
          </div>
          <div className="flex mr-3 items-center text-sm font-medium">
            <input
              className="w-5 h-5 mr-1"
              id="cheese"
              type={"checkbox"}
              name="cheese"
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className="flex mr-3 items-center text-sm font-medium">
            <input className="w-5 h-5 mr-1" id="double" type={"checkbox"} />
            <label htmlFor="double">Spicy Souce</label>
          </div>

          <div>
            <input id="garlic" type={"checkbox"} name="garlic" />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>

        <div>
          <input
            className="border border-slate-900 w-[50px] h-[30px] mr-2"
            type="number"
            defaultValue={1}
          />
          <button className="h-[30px] bg-[#d1411e] font-medium text-white cursor-pointer px-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
