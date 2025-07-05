import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddtoProduct() {
  return (
    <>
    <div id="AddProduct">
    <h1>Add to Product Page</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Product Name</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Product Brand</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Product Price</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Product Color</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Product Description</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Uplodas Product Images</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </div>

    </>
  )
}

export default AddtoProduct