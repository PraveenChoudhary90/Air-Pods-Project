import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../config/BaseUrl';
import axios from 'axios';

function AddtoProduct() {
    const [input, setInput] = useState("");
    const [image, setImage] = useState("");

 const HandelInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input);
 }

 const HandelImage = (e)=>{
    setImage(e.target.files);
    console.log(image);
 }

 const HandelSubmit = async(e)=>{
    e.preventDefault();
    const formData = new FormData();
     
    for(let key in input){
        formData.append(key, input[key]);
    }

    for(var i = 0;i<image.length;i++){
        formData.append("image", image[i]);
    }
    const api = `${BASE_URL}/air/InsertProduct`;
    try {
        const response = await axios.post(api, formData);
        console.log(response.data);
        alert("insert Product");
        
    } catch (error) {
        console.log(error);
    }
 }





  return (
    <>
    <div id="AddProduct">
    <h1>Add to Product Page</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Product Name</Form.Label>
        <Form.Control type="text" name='name' value={input.name} onChange={HandelInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Product Brand</Form.Label>
        <Form.Control type="text" name='brand' value={input.brand} onChange={HandelInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPasswordd">
        <Form.Label>Enter Product Price</Form.Label>
        <Form.Control type="text" name='price' value={input.price} onChange={HandelInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPasswordh">
        <Form.Label>Enter Product Color</Form.Label>
        <Form.Control type="text" name='color' value={input.color} onChange={HandelInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPasswordn">
        <Form.Label>Enter Product Description</Form.Label>
        <Form.Control type="text" name='description' value={input.description} onChange={HandelInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPasswordk">
        <Form.Label>Uplodas Product Images</Form.Label>
        <Form.Control type="file" multiple onChange={HandelImage}  />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={HandelSubmit}>
        Submit
      </Button>
    </Form>

    </div>

    </>
  )
}

export default AddtoProduct