import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FaRegUser } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import BASE_URL from "../config/BaseUrl";
import axios from "axios";
import { MdLocalGroceryStore } from "react-icons/md";
import { useSelector } from 'react-redux';
const TopNav = ()=>{
  const [input, setInput] = useState("");
  const [input1, setInput1] = useState("");
  const navigate = useNavigate();
   
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);


  const Product = useSelector(state=>state.mycart.cart);
  const ProductLength = Product.length;
  console.log(Product);

const HandelInput = (e)=>{
  const name= e.target.name;
  const value = e.target.value;
  setInput(values=>({...values, [name]:value}));
  console.log(input);
}

 const HandelSubmitAdmin = async(e)=>{
    e.preventDefault();
    const api = `${BASE_URL}/air/Adminlogin`
    try {
      const response = await axios.post(api , input);
    console.log(response.data.msg);
    localStorage.setItem("name", response.data.Admin.name);
    localStorage.setItem("email", response.data.Admin.email);
     alert(response.data.msg);
    navigate("/admin");
    setShow(false);
    } catch (error) {
      alert(error.response.data.msg);
      
    }
    
 }




 
const HandelInput1 = (e)=>{
  const name= e.target.name;
  const value = e.target.value;
  setInput1(values=>({...values, [name]:value}));
  console.log(input1);
}

 const HandelSubmitCustomer = async(e)=>{
    e.preventDefault();
    const api = `${BASE_URL}/air/CustomerLogin`
    try {
      const response = await axios.post(api , input1);
    console.log(response.data);
    localStorage.setItem("token", response.data.token);
    navigate("/");
    setShow1(false);
    } catch (error) {
      alert(error.response.data.msg);
      
    }
    
 }



    return(
        <>
        <div id="nav">
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link}  to="home">Air-Pods-Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link}  to="home">Home</Nav.Link>
            <Nav.Link  as={Link}  to="about">About</Nav.Link>
            <Nav.Link  as={Link}  to="registration">Registration</Nav.Link>
          </Nav>
          <div id="icon">
          <span><MdLocalGroceryStore onClick={()=>{navigate("/cartdata")}} />{ProductLength}</span>
          <FaRegUser onClick={handleShow1} />
          <FaHeart />
          <FaUserCircle onClick={handleShow} />
          </div>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>



   {/* Admin model */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Enter Email </Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={input.email} onChange={HandelInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Enter Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' value={input.password} onChange={HandelInput} />
      </Form.Group>
      <Button variant="primary" type="submit"  onClick={HandelSubmitAdmin}>
        Submit
      </Button>
    </Form>
          </Modal.Body>
      </Modal>


 {/* Customer model */}

 <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Customer Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Enter Customer Email </Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={input1.email} onChange={HandelInput1} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Enter Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' value={input1.password} onChange={HandelInput1} />
      </Form.Group>
      <Button variant="primary" type="submit"  onClick={HandelSubmitCustomer}>
        Submit
      </Button>
    </Form>
          </Modal.Body>
      </Modal>


        </>
    )
}

export default TopNav;