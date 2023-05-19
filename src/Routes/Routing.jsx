import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../components/Products";
import SingleProduct from "../components/SingleProduct";
import Cart from "../components/Cart";
import About from "../components/About";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/curElm/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default Routing;
