/* eslint-disable @next/next/no-img-element */
import React from "react";

const Order = () => {
  return (
    <div className="p-[50px] flex">
      <div className=" ">
        <div className="flex-[2_2_0%]  ">
          <table className="w-full border-separate [border-spacing:20px]  ">
            <thead className="">
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="text-center">
                <td className="">
                  <span className=" ">111111111111</span>
                </td>
                <td className="">
                  <span>John Doe</span>
                </td>
                <td>
                  <span>Elton st.212-33</span>
                </td>
                <td>
                  <span>$102.50</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex-1 bg-[#333] text-white rounded-lg   ">
          <div className="w-[90%] max-h-[300px]  p-[50px] pt-[10px] flex flex-col justify-between">
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
              PAID
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[100px]">
          <img src="/img/paid.png" alt="" />
        </div>
        <div className="w-[100px]">
          <img src="/img/bake.png" alt="" />
        </div>
        <div className="w-[100px]">
          <img src="/img/paid.png" alt="" />
        </div>
        <div className="w-[100px]">
          <img src="/img/paid.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Order;
