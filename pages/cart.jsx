/* eslint-disable @next/next/no-img-element */

import React from "react";

const Cart = () => {
  return (
    <div className="p-5 sm:p-[50px] flex flex-col sm:flex-row ">
      <div className="flex-[2_2_0%]  ">
        <table className="w-full border-separate [border-spacing:20px] felx flex-col items-center justify-center  ">
          <thead className="hidden sm:flex">
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="text-center flex flex-col sm:flex-row justify-center items-center mb-5 sm:mb-0">
              <td className="flex items-center justify-center">
                <div className="w-[35vw] h-[35vw] sm:w-[100px] sm:h-[100px]  ">
                  <img src="/img/pizza.png" alt="pizza" className="" />
                </div>
              </td>
              <td>
                <span className="font-medium text-2xl sm:text-lg text-[#d1411e]">
                  CAMPAGNOLA
                </span>
              </td>
              <td>
                <span className="text-md">Double ingredient,Spicy Souce</span>
              </td>
              <td>
                <span className="text-lg before:content-['Price:'] before:font-medium ">
                  $19.90
                </span>
              </td>
              <td>
                <span className="text-lg before:content-['Quantity:'] before:font-medium ">
                  2
                </span>
              </td>
              <td>
                <span className="font-medium text-2xl sm:text-lg before:content-['Total:'] before:font-medium ">
                  39.80
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex-1 bg-[#333] text-white rounded-lg   ">
        <div className=" max-h-[300px]  p-[50px] pt-[10px] flex flex-col justify-between">
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
