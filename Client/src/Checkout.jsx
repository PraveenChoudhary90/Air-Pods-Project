import { useEffect, useContext, useState } from "react";
import Table from 'react-bootstrap/Table';
import { HiDocumentCurrencyRupee } from "react-icons/hi2";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import BASE_URL from "./config/BaseUrl";
import { cartEmpty } from "./CartSlice";

const CheckOut=()=>{
// const [cusData, setCusData] = useState({});
const navigate= useNavigate();
    const Product= useSelector(state=>state.mycart.cart);
    console.log(Product);
    const dispatch= useDispatch();
    let totalAmount=0;
    let productsName="";
    let imgURL="";



    const ans=Product.map((key)=>{
        totalAmount+=key.price * key.qty;
         productsName+=key.name + ", ";
        imgURL=`${BASE_URL}/${key.defaultImage}`;
        return(
            <>
               <tr>
               <td>
                <img src={`${BASE_URL}/${key.defaultImage}`} width="80" height="60" /> 
                </td>
                <td>{key.name}</td>
                <td>{key.brand}</td>
                <td>{key.color}</td>
                <td>{key.price}</td>
                <td>
                    {key.qty}
                </td>
                <td>{key.price * key.qty}</td>
               </tr>
            </>
        )
    })



    useEffect(()=>{
      if (!localStorage.getItem("userid"))
      {
        alert("Please Login Frist")
         navigate("/");
      }
      // loadData();
    }, []);
    
// const loadData=async()=>{
//   let api=`${BASE_URL}/air/getdata?userid=${localStorage.getItem("id")}`;

//   try {
//        const response = await axios.get(api);
//        console.log(response.data);
//        setCusData(response.data);
//   } catch (error) {
//      console.log(error);
//   }

// }




const [shoe,setShoe] = useState({
  name: "Training Shoes",
  creator: "Nike",
  img: "https://images.pexels.com/photos/3490360/pexels-photo-3490360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  price: 500,
});












 const initPay = (data) => {
      const options = {
        key : "rzp_test_oWLUkrVaoJLWU0",
//         KEY_ID=rzp_test_oWLUkrVaoJLWU0
// KEY_SECRET=IS47GEvXCWrpf7RMY02kIlXK
        amount: data.amount,
        currency: data.currency,
        name: productsName,
        description: "Test",
        image:imgURL,
        order_id: data.id,
        handler: async (response) => {
          try {
            const verifyURL = "https://air-pods-project.onrender.com/api/payment/verify";
            const {data} = await axios.post(verifyURL,response);
          } catch(error) {
            console.log(error);
          }
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    };
    



    const handlePay = async () => {
      try {
        const orderURL = "https://air-pods-project.onrender.com/api/payment/orders";
        const {data} = await axios.post(orderURL,{amount: totalAmount, customername:localStorage.getItem("username"), 
          contact:localStorage.getItem("number"), email:localStorage.getItem("useremail"),address:localStorage.getItem("address"), proname:productsName});
        console.log(data);
        initPay(data.data);

        dispatch(cartEmpty());
        navigate("/");


      } catch (error) {
        console.log(error);
      }
    };
    
    


    return(
        <>
          <h1 align="center"> Your Checkout Page </h1>
           <div id="cartone">
        
          <Table striped bordered hover id="table">
      <thead>
        <tr>
          <th>Cart Pic</th>
          <th>Product Name</th>
          <th>Brand</th>
          <th>Color</th>
          <th>Price</th>
          <th>Quantity</th>
          <th> Total </th>
        </tr>
      </thead>
        <tbody>
         {ans}
        </tbody>
        </Table>
        </div>

         <h4 align="center" style={{color:"green", fontWeight:"bold"}}>
          Your Total  Paybale Amount 
        < HiDocumentCurrencyRupee /> : {totalAmount}</h4>

         <div id="cusdata">
          <h4>::Your All Information::</h4>
          Customer Name : {localStorage.getItem("username")}
          <br/>
          Contact no :  {localStorage.getItem("number")}
          <br />
          Email : {localStorage.getItem("useremail")}
          <br />
          Address : {localStorage.getItem("address")}
          <br/>
          <br/>
           <Button onClick={handlePay} > Pay Now!</Button>
           </div>

          
        </>
    )
}

export default CheckOut;