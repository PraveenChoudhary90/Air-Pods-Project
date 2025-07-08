import React from 'react'
import { useSelector } from 'react-redux'

function Checkout() {
   
  const Product = useSelector(state=>state.mycart.cart);
  console.log(Product);

  return (
    <>
    <h1>Checkout Page</h1>
    </>
  )
}

export default Checkout