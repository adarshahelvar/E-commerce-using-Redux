import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

  // UseSelector hook is used to access the data from redux store

  const reduxStoreData = useSelector((state)=>state.productData.cartData)
  // console.log(reduxStoreData)

  return (
    <>
    <h2>Cart</h2>
      <div className="container">
        {
          reduxStoreData && reduxStoreData.length ? (
            reduxStoreData.map((curElm)=>(
              <div className='row'>
                <div className='col-md-4'>
                  <img src={curElm.image} alt={curElm.title} className='img-fluid'/>
                </div>
                <div className='col-md-6'>
                  <h2>{curElm.title}</h2>
                  <p>{curElm.description.split(' ').slice(0, 15).join(' ')}...</p>
                  <h4>Price: {curElm.price} $</h4>
                </div>
                <div className='col-md-2'>
                  <button className='btn btn-danger'>Remove</button>
                </div>
              </div>
            ))
          ):<p>Loading...</p>
        }
      </div>
    </>
  )
}

export default Cart