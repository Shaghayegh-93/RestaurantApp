import React, { useState } from "react";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const clickHandler = () => {
    createOrder({ customer, total, address, method: 0 });
  };
  return (
    <div className="w-full h-[100vh] flex items-center justify-center top-0 left-0 absolute bg-[#252424be] z-10  ">
      <div
        className="w-[500px] bg-white rounded-lg p-[50px] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="font-bold text-2xl mb-2">
          You will pay $12 after delivery.
        </h2>
        <div className="flex flex-col w-full mb-4">
          <label className="mb-3">Name</label>
          <input
            className="h-10 border p-2"
            placeholder="John Doe"
            type="text"
            onChange={(e) => setCustomer(e.target.value)}
            autoFocus
          />
        </div>
        <div className="flex flex-col w-full mb-4">
          <label className="mb-3">Phone Number</label>
          <input
            className="h-10 border p-2"
            placeholder="+1 234 576 89"
            type="tel"
          />
        </div>
        <div className="flex flex-col w-full mb-4">
          <label className="mb-3">Address</label>
          <textarea
            rows={5}
            className="h-10 border p-2"
            placeholder="Elton St. 505 NY"
            type="text"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button
          className="bg-[teal] text-white py-[10px] px-5 text-base font-medium rounded-lg cursor-pointer"
          onClick={clickHandler}
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
