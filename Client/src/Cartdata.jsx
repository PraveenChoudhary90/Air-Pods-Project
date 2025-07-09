import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BASE_URL from './config/BaseUrl';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { DecrementPro, IncrementPro, RemoveProduct } from './CartSlice';
import Button from 'react-bootstrap/Button';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { HiDocumentCurrencyRupee } from "react-icons/hi2";


function Cartdata() {
    const dispatch = useDispatch();
 const Product = useSelector(state=>state.mycart.cart);
    const navigate = useNavigate();

let count = 0;
var totalamount = 0;
 const ans = Product.map(key=>{
    count++;
    totalamount+=key.price*key.qty;
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
            {key.description}
            </td>
            <td>
            <FaMinus style={{marginRight:"20px", fontSize:"20px"}} onClick={()=>{dispatch(DecrementPro({id:key.id}))}} />
              {key.qty}
            <FaPlus style={{marginLeft:"20px", fontSize:"20px"}} onClick={()=>{dispatch(IncrementPro({id:key.id}))}} />
              </td>
            <td>{key.price}</td>
            <td>{key.price*key.qty}</td>
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
    <h4 align="center" style={{color:"green", fontWeight:"bold"}}>
   TotalPaybleAmount:< HiDocumentCurrencyRupee /> : {totalamount}</h4> 
    <Button style={{float:"right", margin:"20px"}} variant='warning' onClick={()=>{navigate("/checkout")}}> Check Out To Payment</Button>
    <div id="table1">
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
          <th>TotalAmount</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
        </Table>
        </div>
    </>
  )
}

export default Cartdata