/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex  justify-between bg-[#2b2929] text-white w-full h-auto text-center sm:text-left sm:h-[calc(100vh-100px)]">
      <div className="hidden sm:flex  flex-1 relative h-full ">
        <img src="/img/footer.png" alt="" className="h-full" />
      </div>
      <div className="flex-[2-2-0] flex-col sm:flex-row flex p-[50px] justify-between  mt-10">
        <div className=" sm:px-5 font-bold text-lg flex-1 mb-5 sm:mb-0">
          <p className="sm:w-[42%]">
            OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
          </p>
        </div>
        <div className="flex-1 sm:px-5 space-y-3 mb-5 sm:mb-0">
          <h3 className="text-yellow-600 font-bold sm:text-lg mb-3 text-3xl ">
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
        <div className="flex-1  sm:px-5 mb-5 sm:mb-0">
          <h3 className="text-yellow-600 font-bold text-3xl sm:text-lg mb-3">
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
