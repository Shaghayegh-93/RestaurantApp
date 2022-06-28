import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = ({ menuHandler, open }) => {
  return (
    <div className="flex items-center justify-between h-[100px]  bg-[#d1411e] px-[50px] sticky top-0 z-10">
      {/* leftSide */}
      <div className="flex-3 flex items-center sm:flex-1 ">
        <div className="bg-white p-[10px] w-[50px] h-[50px] rounded-full flex items-center justify-center">
          <Image alt="phone" src="/img/telephone.png" width="32" height="32" />
        </div>
        <div className="flex flex-col ml-5 text-white">
          <p className="text-xs font-medium">ORDER NOW!</p>
          <span className="text-xl font-bold">012 345 676</span>
        </div>
      </div>
      {/* center */}
      <div className="hidden sm:flex sm:flex-3">
        <ul className=" flex items-center justify-between text-white">
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
      <div>
        <div
          className="w-[25px] h-5 cursor-pointer flex flex-col justify-between sm:hidden relative "
          onClick={menuHandler}
        >
          <div className="bg-white w-full h-[3px] " />
          <div className="bg-white w-full h-[3px] " />
          <div className="bg-white w-full h-[3px] " />
        </div>
        <input
          type="checkbox"
          name="menu"
          id="menu"
          className="absolute w-[40px] h-5 right-0 peer opacity-0"
        />
        <ul
          className=" fixed h-[calc(100vh-50px)] w-[50vw] bg-[#d1411e] top-[100px] font-bold text-white flex flex-col items-center justify-around z-10 transition-all duration-1000 peer-checked:right-[-50vw] sm:hidden right-0
           "
          style={{ right: !open ? "-50vw" : "0" }}
        >
          <li className=" text-sm text-white cursor-pointer w-full text-center">
            <Link href="/">
              <a onClick={menuHandler}>Homepage</a>
            </Link>
          </li>
          <li className=" text-sm text-white cursor-pointer">
            <Link href="/">
              <a onClick={menuHandler}>Product</a>
            </Link>
          </li>
          <li className=" text-sm text-white cursor-pointer">
            <Link href="/">
              <a onClick={menuHandler}>Menu</a>
            </Link>
          </li>
          <li className=" text-sm text-white cursor-pointer">
            <Link href="/">
              <a onClick={menuHandler}>Event</a>
            </Link>
          </li>
          <li className=" text-sm text-white cursor-pointer">
            <Link href="/">
              <a onClick={menuHandler}>Blog</a>
            </Link>
          </li>
          <li className=" text-sm text-white cursor-pointer">
            <Link href="/">
              <a onClick={menuHandler}>Contact</a>
            </Link>
          </li>
        </ul>
      </div>

      {/* rightSide */}
      <div className=" hidden flex-1 justify-end sm:flex items-center ">
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
