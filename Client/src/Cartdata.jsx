import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BASE_URL from './config/BaseUrl';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { DeleteProduct } from './CartSlice';

function Cartdata() {
 const Product = useSelector(state=>state.mycart.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

let count = 0;
 const ans = Product.map(key=>{
    count++;
    return(
        <>
        <tr>
            <td>{count}</td>
            <td>
                <img src={`${BASE_URL}/${key.defaultImage}`} alt="" width="100" height="100" />
              </td>
            <td>{key.name}</td>
            <td>{key.brand}</td>
            <td>{key.color}</td>
            <td>{key.description}</td>
            <td>{key.qty}</td>
            <td>{key.price}</td>
            <td>
                <a href="#" onClick={()=>{dispatch(DeleteProduct({id:key.id}))}} >Delete</a>
             </td>
        </tr>
        </>
    )
 })


  return (
    <>
    <h1>Cart Data Page</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Index</th>
          <th>Product Image</th>
          <th>Name</th>
          <th>Brand</th>
          <th>Color</th>
          <th>Description</th>
          <th>Qunatity</th>
          <th>Price</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
        </Table>
    </>
  )
}

export default Cartdata