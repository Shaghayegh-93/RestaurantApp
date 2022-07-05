/* eslint-disable @next/next/no-img-element */
import React from "react";
import axios from "axios";

const Order = ({ order }) => {
  const status = order.status;
  const indexClass = (index) => {
    if (index - status < 1) return "done ";
    else if (index - status === 1) return "inProgress ";
    return "undone ";
  };
  return (
    <div className="p-5 md:p-[50px] flex flex-col md:flex-row">
      <div className="flex-[2_2_0%]  ">
        <div>
          <div className="mb-6">
            <table className="w-full border-separate [border-spacing:20px]  ">
              <thead className="">
                <tr className="hidden md:table-row">
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Address</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="md:text-center flex flex-col md:table-row items-center justify-center">
                  <td className="">
                    <span className="text-lg before:content-['OrderID:'] before:font-medium before:md:hidden lg:max-w-[75px] ">
                      {order._id}
                    </span>
                  </td>
                  <td className="">
                    <span className="text-lg before:content-['Customer:'] before:font-medium before:md:hidden">
                      {order.customer}
                    </span>
                  </td>
                  <td>
                    <span className="text-lg before:content-['Address:'] before:font-medium before:md:hidden ">
                      {order.address}
                    </span>
                  </td>
                  <td>
                    <span className="text-lg before:content-['Total:'] before:font-medium before:md:hidden  ">
                      ${order.total}
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
              className={`flex flex-col items-center mb-5  sm:mb-0 ${indexClass(
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
              className={`flex flex-col items-center mb-5  sm:mb-0 ${indexClass(
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
              className={`flex flex-col items-center mb-5  sm:mb-0 ${indexClass(
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
        <div className="max-h-[300px] p-5  md:p-[50px] pt-[10px] flex flex-col justify-between  ">
          <h2 className="mb-4 font-semibold text-2xl">CART TOTAL</h2>
          <div>
            <b className="mr-[10px]">Subtotal:</b>${order.total}
          </div>
          <div>
            <b className="mr-[10px]">Discount:</b>$0.00
          </div>
          <div>
            <b className="mr-[10px]">Total:</b>${order.total}
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

export async function getStaticPaths() {
  const res = await axios.get("http://localhost:3000/api/orders");
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
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);

  return {
    props: {
      order: res.data,
    },
  };
}

export default Order;
