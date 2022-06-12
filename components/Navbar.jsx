import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[100px]  bg-[#d1411e] px-[50px] sticky top-0 z-10">
      {/* leftSide */}
      <div className="flex items-center flex-1">
        <div className="bg-white p-[10px] w-[50px] h-[50px] rounded-full flex items-center justify-center">
          <Image alt="phone" src="/img/telephone.png" width="32" height="32" />
        </div>
        <div className="flex flex-col ml-5 text-white">
          <p className="text-xs font-medium">ORDER NOW!</p>
          <span className="text-xl font-bold">012 345 676</span>
        </div>
      </div>
      {/* center */}
      <div className=" flex-3">
        <ul className="flex items-center justify-between text-white">
          <li className="m-5 font-medium">
            <Link href="/">
              <a>Homepage</a>
            </Link>
          </li>
          <li className="m-5 font-medium">
            <Link href="/">
              <a>Product</a>
            </Link>
          </li>
          <li className="m-5 font-medium">
            <Link href="/">
              <a>Menu</a>
            </Link>
          </li>

          <Image alt="logo" src="/img/logo.png" width="160px" height="69px" />

          <li className="m-5 font-medium">
            <Link href="/">
              <a>Event</a>
            </Link>
          </li>
          <li className="m-5 font-medium">
            <Link href="/">
              <a>Blog</a>
            </Link>
          </li>
          <li className="m-5 font-medium">
            <Link href="/">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      {/* rightSide */}
      <div className=" flex-1 justify-end flex items-center ">
        <div className="relative">
          <Image alt="cart" src="/img/cart.png" width="30" height="30" />
          <div className=" absolute -top-[10px] -right-[10px] text-[#d1411e] bg-white w-5 h-5 rounded-full items-center justify-center flex font-bold">
            2
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
