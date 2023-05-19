import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/productActions/ProductActions";

const Cart = () => {
  // UseSelector hook is used to access the data from redux store

  const reduxStoreData = useSelector((state) => state.productData.cartData);
  console.log(reduxStoreData)

  const dispatch = useDispatch((state) => state);

  return (
    <>
      <h2>Cart</h2>
      <div className="container">
        {reduxStoreData && reduxStoreData.length ? (
          reduxStoreData.map((curElm) => (
            <div className="row" key={curElm.id}>
              <div className="col-md-4">
                <img
                  src={curElm.image}
                  alt={curElm.title}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6">
                <h2>{curElm.title}</h2>
                <p>{curElm.description.split(" ").slice(0, 15).join(" ")}...</p>
                <h4>Price: {curElm.price} $</h4>
              </div>
              <div className="col-md-2">
                <button
                  className="btn btn-danger"
                  onClick={(id) => dispatch(removeFromCart(curElm.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Cart Is Empty...</p>
        )}
      </div>
    </>
  );
};

export default Cart;
