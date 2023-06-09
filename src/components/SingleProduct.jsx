import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/productActions/ProductActions";
import { useDispatch } from "react-redux";

const SingleProduct = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();
  // console.log(id)

  const dispatch = useDispatch();

  const getSingleProductDetailes = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    // console.log(response)
    setProduct(response.data);
  };

  useEffect(() => {
    getSingleProductDetailes();
  }, []);
  console.log(product);

  return (
    <>
      <h2>Product Detailes</h2>
      {Object.keys(product).length > 0 ? (
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-2">
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid "
              />
            </div>
            <div className="col-md-6 mt-2 ">
              <h2>{product.title}</h2>
              <h3>{product.category}</h3>
              <p>{product.description}</p>
              <h4>Price: {product.price} $</h4>
              <div className="product_addToCart mt-3">
                <button
                  className="btn btn-info px-3 py-3"
                  onClick={() => {
                    dispatch(addToCart(product));
                  }}
                >
                  Add To Cart 
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...!</p>
      )}
    </>
  );
};

export default SingleProduct;
