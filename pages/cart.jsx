/* eslint-disable @next/next/no-img-element */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import OrderDetail from "../components/OrderDetail";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);
  const amount = cart.total;
  const currency = "USD";
  const style = { layout: "vertical" };
  const dispatch = useDispatch();
  const router = useRouter();
  const cashHandler = () => {
    cash && setCash(false);
  };

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      res.status === 201 && router.push(`/orders/${res.data._id}`);
      dispatch(reset());
    } catch (error) {
      console.log(error);
    }
  };

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <div className="z-[5]">
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              // Your code here after capture the order
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </div>
    );
  };
  return (
    <div
      className="p-5 md:p-[50px] flex flex-col md:flex-row  "
      onClick={cashHandler}
    >
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
            {cart.products?.map((product) => (
              <tr
                className="md:text-center md:table-row flex flex-col items-center justify-center   "
                key={product._id}
              >
                <td className="flex items-center justify-center ">
                  <div className="md:w-[100px] md:h-[100px] w-[35vw] h-[35vw] ">
                    <img src={product.img} alt="pizza" className="" />
                  </div>
                </td>
                <td>
                  <span className="font-medium text-lg text-[#d1411e]  md:text-lg ">
                    {product.title}
                  </span>
                </td>
                <td>
                  <span className="md:text-lg ">
                    {product.extras.map((extra) => (
                      <span key={extra._id}>{extra.text},</span>
                    ))}
                  </span>
                </td>
                <td>
                  <span className=" md:text-lg before:content-['Price:'] before:font-medium before:md:hidden ">
                    ${product.price}
                  </span>
                </td>
                <td>
                  <span className=" md:text-lg before:content-['Quantity:'] before:font-medium before:md:hidden ">
                    {product.quantity}
                  </span>
                </td>
                <td>
                  <span className=" md:text-lg before:content-['Total:'] before:font-medium before:md:hidden ">
                    {product.price * product.quantity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex-1 bg-[#333] text-white rounded-lg   ">
        <div className=" max-h-[300px]  p-5 md:p-[50px] pt-[10px] flex flex-col justify-between">
          <h2 className="mb-4 font-semibold text-2xl">CART TOTAL</h2>
          <div>
            <b className="mr-[10px]">Subtotal:</b>${cart.total}
          </div>
          <div>
            <b className="mr-[10px]">Discount:</b>$0.00
          </div>
          <div>
            <b className="mr-[10px] ">Total:</b>${cart.total}
          </div>
          {open ? (
            <div className="mt-[10px] flex flex-col">
              <button
                className="cursor-pointer px-[5px] py-[10px] mb-[5px] bg-white text-[teal] font-bold rounded "
                onClick={() => setCash(true)}
              >
                CASH ON DELIVERY
              </button>
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AcRKn6fkC2FJD3mZMNyPLV1y5cVke16o5EfKY6eUt5ZoFmp4l0qBgLaLfRul8qTTppDHd7FQx-dI0jhW",
                  components: "buttons",
                  currency: "USD",
                  "disable-funding": "credit,card,p24,venmo",
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button
              className="h-[30px] font-bold cursor-pointer bg-white text-[#d1411e] mt-10 rounded-lg"
              type={"button"}
              onClick={() => setOpen(true)}
            >
              CHECKOUT NOW!
            </button>
          )}
        </div>
      </div>
      {cash && <OrderDetail total={cart.total} createOrder={createOrder} />}
    </div>
  );
};

export default Cart;
