/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex  justify-between bg-[#2b2929] text-white w-full h-[calc(100vh-100px)]">
      <div className="  flex-1 relative h-full ">
        <img src="/img/footer.png" alt="" className="h-full" />
      </div>
      <div className="flex-[2-2-0] flex p-[50px] justify-between  mt-10">
        <div className=" px-5 font-bold text-lg flex-1 ">
          <p className="">
            OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
          </p>
        </div>
        <div className="flex-1 px-5 space-y-3 ">
          <h3 className="text-yellow-600 font-bold text-lg mb-3">
            FIND OUR RESTAURANTS
          </h3>
          <p>
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p>
            2356 K. Laquie Rd #235.
            <br /> NewYork, 85022
            <br /> (602) 867-1011
          </p>
          <p>
            1614 E. Erwin St #104.
            <br /> NewYork, 85022
            <br /> (602) 867-1012
          </p>
          <p>
            1614 W. Caroll St #125.
            <br /> NewYork, 85022
            <br /> (602) 867-1013
          </p>
        </div>
        {/* last col */}
        <div className="flex-1  px-5">
          <h3 className="text-yellow-600 font-bold text-lg mb-3">
            WORKING HOURS
          </h3>
          <p>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
