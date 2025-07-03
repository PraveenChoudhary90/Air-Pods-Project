import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../config/BaseUrl';
import axios from "axios";

const Registration = ()=>{
    
  const [input, setInput]  =useState("");

  const HandelInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input);
}

const HandelSubmit = async(e)=>{
  e.preventDefault();
  try {
    const api = `${BASE_URL}/air/InsertUser`;
    const response = await axios.post(api, input);
    window.alert(response.data.msg);
    console.log(response.data);

  } catch (error) {
    console.log(error);
  }

}


    return(
        <>
        <h1 style={{backgroundColor:"lightpink"}}>
        <marquee behavior="alternate" direction="left">
         Offer:All Products have 15% Discount in Diwali Festival
        </marquee>
        </h1>

        <div id="from">
        <h3>Regsitration User Page</h3>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name='name' value={input.name} onChange={HandelInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPasswordd">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" name='email' value={input.email} onChange={HandelInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPasswordg">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" name='city' value={input.city} onChange={HandelInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPasswordv">
        <Form.Label>Enter Number</Form.Label>
        <Form.Control type="text"name='number' value={input.number} onChange={HandelInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPasswordc">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password" name='password' value={input.password} onChange={HandelInput}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={HandelSubmit}>
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}

export default Registration;