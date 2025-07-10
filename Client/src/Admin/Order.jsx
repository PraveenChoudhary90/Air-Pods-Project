import axios from "axios";
import BASE_URL from "../config/BaseUrl";
import { useState } from "react";
import { useEffect } from "react";
import Table from 'react-bootstrap/Table';


const Order = ()=>{
  const [mydata, setMydata] = useState([]);


  const LoadData = async()=>{
    const api = `${BASE_URL}/air/Orderdetail`;
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  }


  useEffect(()=>{
    LoadData();
  },[])


  const ans = mydata.map(key=>{
    return(
        <>
        <tr>
            <td>{key.customername}</td>
            <td>{key.email}</td>
            <td>{key.contact}</td>
            <td>{key.address}</td>
            <td>{key.name}</td>
            <td>{key. totalamount}</td>
            <td>{key.createdAt}</td>
        </tr>
        </>
    )
  })


    return(
        <>
        <div id="order">
        <h1>Order Page</h1>
          <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Address</th>
                  <th>ProductName</th>
                  <th>TotalAmount</th>
                  <th>OrderDate</th>
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


export default Order;