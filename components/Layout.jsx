import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useState } from "react";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const menuHandler = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Navbar open={open} menuHandler={menuHandler} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
