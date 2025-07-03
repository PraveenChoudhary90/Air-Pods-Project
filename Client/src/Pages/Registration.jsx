import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="text" name='name' value={input.name} onChange={HandelInput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" name='name' value={input.name} onChange={HandelInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Number</Form.Label>
        <Form.Control type="text"name='name' value={input.name} onChange={HandelInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password" name='name' value={input.name} onChange={HandelInput}/>
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