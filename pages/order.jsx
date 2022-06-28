/* eslint-disable @next/next/no-img-element */
import React from "react";

const Order = () => {
  const status = 0;
  const indexClass = (index) => {
    if (index - status < 1) return "done ";
    else if (index - status === 1) return "inProgress ";
    return "undone ";
  };
  return (
    <div className="p-[50px] flex flex-col sm:flex-row">
      <div className="flex-[2_2_0%]  ">
        <div>
          <div className="mb-6">
            <table className="w-full border-separate [border-spacing:20px]  ">
              <thead className="hidden sm:flex">
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Address</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="text-center flex flex-col">
                  <td className="">
                    <span className="text-lg before:content-['OrderID:'] before:font-medium ">
                      111111111111
                    </span>
                  </td>
                  <td className="">
                    <span className="text-lg before:content-['Customer:'] before:font-medium ">
                      John Doe
                    </span>
                  </td>
                  <td>
                    <span className="text-lg before:content-['Address:'] before:font-medium ">
                      Elton st.212-33
                    </span>
                  </td>
                  <td>
                    <span className="text-lg before:content-['Total:'] before:font-medium ">
                      $102.50
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col sm:flex-row  w-full items-center justify-evenly">
            <div
              className={`flex flex-col items-center  mb-5 sm:mb-0 ${indexClass(
                0
              )}`}
            >
              <img src="/img/paid.png" alt="" width={30} height={30} />
              <span>Payment</span>
              <div>
                <img src="/img/checked.png" alt="" width={20} height={20} />
              </div>
            </div>
            <div
              className={`flex flex-col items-center mb-5 sm:mb-0 ${indexClass(
                1
              )}`}
            >
              <img src="/img/bake.png" alt="" width={30} height={30} />
              <span>Preparing</span>
              <div>
                <img src="/img/checked.png" alt="" width={20} height={20} />
              </div>
            </div>
            <div
              className={`flex flex-col items-center mb-5 sm:mb-0 ${indexClass(
                2
              )}`}
            >
              <img src="/img/bike.png" alt="" width={30} height={30} />
              <span>On the Way</span>
              <div>
                <img src="/img/checked.png" alt="" width={20} height={20} />
              </div>
            </div>
            <div
              className={`flex flex-col items-center mb-5 sm:mb-0 ${indexClass(
                3
              )}`}
            >
              <img src="/img/delivered.png" alt="" width={30} height={30} />
              <span>Delivered</span>
              <div>
                <img src="/img/checked.png" alt="" width={20} height={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-[#333] text-white rounded-lg    ">
        <div className="max-h-[300px] p-5 sm:p-[50px] pt-[10px] flex flex-col justify-between  ">
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
            className="h-[30px] font-bold cursor-not-allowed bg-white text-[#d1411e] mt-10 rounded-lg"
            type={"button"}
          >
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
{
  /* <div>
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
</div>; */
}
