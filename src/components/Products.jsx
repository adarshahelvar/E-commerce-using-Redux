import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Products.css';
import ControlledCarousel from "./ControlledCarousel";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getdata = async () => {
    let prod = await fetch("https://fakestoreapi.com/products");
    let data = await prod.json();
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
    <ControlledCarousel />
      <div className="container mt-2">
        <h2>New Arrivals</h2>
        <div className="row">
          {products.length > 0 ? (
            products.map((curElm) => (
              <div className="col-md-3" key={curElm.id}>
                <Link to={`/curElm/${curElm.id}`}>
                  <div className="card my-2">
                    <img src={curElm.image} alt={curElm.title} />
                    <div className="card-body">
                      <h5 className="card-title">{curElm.category}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>Loading...!</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
