import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../components/Products";
import SingleProduct from "../components/SingleProduct";
import Cart from "../components/Cart";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/curElm/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default Routing;
