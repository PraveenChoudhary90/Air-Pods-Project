import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function AdminDashboard() {
    const navigate = useNavigate();


     const logout = ()=>{
        {localStorage.clear()};
        navigate("/");
     }


  return (
   <>
   <div id="da"  style={{backgroundColor:"lightpink", textAlign:"center",justifyContent:"center" ,padding:"20px",fontSize:"30px", fontWeight:"bold" }}>
   <marquee behavior="scroll" direction="left">
   Welcome to Admin Dahsboard
   </marquee>
   </div>
   <h5 style={{backgroundColor:"lightgray", textAlign:"right", padding:"10px"}}>Welcome to{localStorage.getItem("name")}</h5>
   <h5 style={{backgroundColor:"lightblue", textAlign:"right", padding:"10px"}}>Gmail:{localStorage.getItem("email")}</h5>

      

   <div id="admin">
    <div id="page">
    <Button variant="primary">Admin Dashboard</Button>
    <Button variant="primary">Add to Products</Button>
    <Button variant="primary">Products Details</Button>
    <Button variant="primary">Order Details</Button>
    <Button variant="primary">Admin Inf</Button>
    <Button variant="primary" onClick={logout}>Logout</Button>
    </div>
    <div id="pagedata">
        <Outlet/>
    </div>
   </div>
   </>
  )
}

export default AdminDashboard