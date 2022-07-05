/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import React, { useState } from "react";

const Index = ({ productList, orderList }) => {
  const [pizzaList, setPizzaList] = useState(productList);
  const [orders, setOrders] = useState(orderList);

  const deleteHandler = async (id) => {
    try {
      const res = await axios.delete(
        "http://localhost:3000/api/products/" + id
      );
      setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-[50px] flex">
      <div className="flex-1">
        <h2>Products</h2>
        <table className="w-full border-separate [border-spacing:20px] text-left ">
          <thead>
            <tr>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          {pizzaList.map((product) => (
            <tbody key={product._id}>
              <tr>
                <td>
                  <img src={product.img} width={50} height={50} alt=""></img>
                </td>
                <td>{product._id.slice(0, 5)}...</td>
                <td>{product.title}</td>
                <td>${product.prices[0]}</td>
                <td>
                  <button className="text-white p-[5px] cursor-pointer bg-[teal] mr-[10px]  rounded-lg">
                    Edit
                  </button>
                  <button
                    className="text-white p-[5px] cursor-pointer bg-rose-600  rounded-lg"
                    onClick={() => deleteHandler(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>

      <div className="flex-1">
        <h2>Orders</h2>

        <table className="w-full border-separate [border-spacing:20px] text-left">
          <thead>
            <tr>
              <th>Id</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>status</th>
              <th>Action</th>
            </tr>
          </thead>
          {orders.map((order) => (
            <tbody key={order._id}>
              <tr>
                <td>{order._id.slice(0, 5)}...</td>
                <td>{order.customer}</td>
                <td>${order.total}</td>
                <td>paid</td>
                <td>{order.status}</td>
                <td>
                  <button className="text-white p-[5px] cursor-pointer bg-gray-400 rounded-lg">
                    Next Stage
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};
export async function getStaticProps(context) {
  // console.log(context.req);
  // const myCookie = new universalCookie().get("token");
  // console.log("mycookie", myCookie);

  // if (myCookie !== process.env.TOKEN) {
  //   return {
  //     redirect: {
  //       destination: "/admin/login",
  //       permanent: false,
  //     },
  //   };
  // }

  const productRes = await axios.get("http://localhost:3000/api/products");
  const orderRes = await axios.get("http://localhost:3000/api/orders");
  return {
    props: {
      productList: productRes.data,
      orderList: orderRes.data,
    },
  };
}

export default Index;
