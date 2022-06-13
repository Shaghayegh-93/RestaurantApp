/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-between bg-[#2b2929] text-white ">
      <div className=" flex-1 relative ">
        <img src="/img/footer.png" alt="" className="object-fill " />
      </div>
      <div className="flex-1">
        <div className="w-[17%] px-8 font-bold text-lg py-16">
          <p> OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.</p>
        </div>
        <div className="flex-1 py-16 px-5 space-y-3">
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
        <div className="flex-1 py-16 px-5">
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
