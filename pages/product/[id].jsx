/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import axios from "axios";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const Product = ({ pizza }) => {
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(pizza.prices[0]);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const addProductHandler = () => {
    dispatch(addProduct({ ...pizza, price, quantity, extras }));
  };

  const changePrice = (number) => {
    setPrice(price + number);
  };
  const sizeHandler = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };
  const optionHandler = (e, option) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
      // or setExtras([...extras,option])
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };
  return (
    <div className="flex flex-col  md:flex-row h-auto ">
      <div className="flex-1 h-full flex items-center justify-center my-10">
        <div className="w-4/5 h-4/5 ">
          <img src={pizza.img} alt="pizzaImage" />
        </div>
      </div>
      <div className="flex-1 p-5 mt-10 text-center md:text-left">
        <h2 className="font-extrabold text-2xl pb-1 md:pb-5">{pizza.title}</h2>
        <span className="text-[#d1411e] text-2xl font-normal border-b border-[#d1411e]">
          ${price}
        </span>
        <p className="pt-5">{pizza.desc}</p>
        <h3 className="py-4 font-semibold text-xl">Choose the size</h3>

        <div className="flex w-full px-5 md:px-0 md:w-[60%] justify-between">
          <div
            className="w-[40px] h-[40px] cursor-pointer relative"
            onClick={() => sizeHandler(0)}
          >
            <img className="" src="/img/size.png" alt="" />
            <span className="bg-[teal] text-white text-xs px-[5px] absolute top-[-5px] right-[-20px]  rounded-md">
              Small
            </span>
          </div>
          <div
            className="w-[50px] h-[50px] cursor-pointer relative"
            onClick={() => sizeHandler(1)}
          >
            <img className="" src="/img/size.png" alt="" />
            <span className=" bg-[teal] text-white text-xs px-[5px] absolute top-[-5px] right-[-20px]  rounded-md">
              Medium
            </span>
          </div>
          <div
            className="w-[60px] h-[60px] cursor-pointer relative"
            onClick={() => sizeHandler(2)}
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
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0 text-lg md:text-sm  mb-8">
          {pizza.extraOptions.map((option) => (
            <div
              className="flex md:mr-3 items-center text-sm font-medium"
              key={option._id}
            >
              <input
                className=" w-6 h-6 md:w-5 md:h-5  mr-1"
                id={option.text}
                type="checkbox"
                name={option.text}
                onChange={(e) => optionHandler(e, option)}
              />
              <label htmlFor={option.text}>{option.text}</label>
            </div>
          ))}
        </div>
        <div>
          <input
            className="border border-slate-900 w-[50px] h-[50px] md:h-[30px] py-[10px] px-5 md:p-0  mr-2 text-center"
            type="number"
            defaultValue={1}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button
            className="h-[50px] md:h-[30px] py-[10px] px-5 md:py-0  bg-[#d1411e] font-medium text-white cursor-pointer md:px-2 "
            onClick={addProductHandler}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export async function getStaticPaths() {
  const res = await axios.get("http://localhost:3000/api/products");
  const paths = res.data.map((data) => {
    return {
      params: { id: data._id },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );

  return {
    props: {
      pizza: res.data,
    },
  };
}

export default Product;
