import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BASE_URL from './config/BaseUrl';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { RemoveProduct } from './CartSlice';
import Button from 'react-bootstrap/Button';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


function Cartdata() {
    const dispatch = useDispatch();
 const Product = useSelector(state=>state.mycart.cart);
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
            <td>
            <FaMinus />
            {key.description}
            <FaPlus />
            </td>
            <td>{key.qty}</td>
            <td>{key.price}</td>
            <td>
                <Button  variant="primary" onClick={()=>{dispatch(RemoveProduct({id:key.id}))}} >Delete</Button>
             </td>
        </tr>
        </>
    )
 })


  return (
    <>
    <h1>Cart Data Page</h1>
    <Button style={{float:"right", margin:"20px"}} variant='warning'> Check Out To Payment</Button>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Index</th>
          <th>Product Image</th>
          <th>Name</th>
          <th>Brand</th>
          <th>Color</th>
          <th>
            Description  
            </th>
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