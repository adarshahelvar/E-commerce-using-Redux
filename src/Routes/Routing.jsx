import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../components/Products";
import SingleProduct from "../components/SingleProduct";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/curElm/:id" element={<SingleProduct />} />
      </Routes>
    </>
  );
};

export default Routing;
