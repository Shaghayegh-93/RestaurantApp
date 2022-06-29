/* eslint-disable @next/next/no-img-element */

import React from "react";

const Cart = () => {
  return (
    <div className="p-5 md:p-[50px] flex flex-col md:flex-row">
      <div className="flex-[2_2_0%]  ">
        <table className=" w-full border-separate [border-spacing:20px]  ">
          <thead className=" ">
            <tr className="hidden md:table-row ">
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="md:text-center md:table-row flex flex-col items-center justify-center   ">
              <td className="flex items-center justify-center ">
                <div className="md:w-[100px] md:h-[100px] w-[35vw] h-[35vw] ">
                  <img src="/img/pizza.png" alt="pizza" className="" />
                </div>
              </td>
              <td>
                <span className="font-medium text-lg text-[#d1411e]  md:text-lg ">
                  CAMPAGNOLA
                </span>
              </td>
              <td>
                <span className="md:text-lg ">
                  Double ingredient,Spicy Souce
                </span>
              </td>
              <td>
                <span className=" md:text-lg before:content-['Price:'] before:font-medium before:md:hidden ">
                  $19.90
                </span>
              </td>
              <td>
                <span className=" md:text-lg before:content-['Quantity:'] before:font-medium before:md:hidden ">
                  2
                </span>
              </td>
              <td>
                <span className=" md:text-lg before:content-['Total:'] before:font-medium before:md:hidden ">
                  39.80
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex-1 bg-[#333] text-white rounded-lg   ">
        <div className=" max-h-[300px]  p-5 md:p-[50px] pt-[10px] flex flex-col justify-between">
          <h2 className="mb-4 font-semibold text-2xl">CART TOTAL</h2>
          <div>
            <b className="mr-[10px]">Subtotal:</b>$102.50
          </div>
          <div>
            <b className="mr-[10px]">Discount:</b>$0.00
          </div>
          <div>
            <b className="mr-[10px]">Total:</b>$102.50
          </div>
          <button
            className="h-[30px] font-bold cursor-pointer bg-white text-[#d1411e] mt-10 rounded-lg"
            type={"button"}
          >
            CHECKOUT NOW!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
