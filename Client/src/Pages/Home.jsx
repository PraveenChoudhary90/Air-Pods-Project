import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { VscStarEmpty } from "react-icons/vsc";
import BASE_URL from '../config/BaseUrl';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { Addtocart } from '../CartSlice';


function Home(){

    const dispatch = useDispatch();
    
  const [mydata, setMydata] = useState([]);

  const LoadData = async ()=>{
    const api = `${BASE_URL}/air/DisplayProduct`;
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);

  }

  useEffect(()=>{
    LoadData();
  },[]);





  const ans  =mydata.map(key=>{
    return(
      <>
       
       <Card style={{ width: '24rem' }}>
      <Card.Img variant="top" src={`${BASE_URL}/${key.defaultImage}`} width="400px" height="400px"/>
      <Card.Body>
        <Card.Title>Name:{key.name}</Card.Title>
        <Card.Text>
          Brand:{key.brand}<br></br>
          Color:{key.color}<br></br>
          Des:{key.description}<br></br>
          Price:{key.price}
        </Card.Text>
        <div id="star">
            <div id="star1">
        <VscStarEmpty />
        <VscStarEmpty />
        <VscStarEmpty />
        <VscStarEmpty />
        <VscStarEmpty />
        </div>
        <Button variant="warning" onClick={()=>(dispatch(Addtocart({id:key._id,
           name:key.name, brand:key.brand, color:key.color, price:key.price, 
           description:key.description,defaultImage:key.defaultImage, image:key.image, qty:1 })))}>Add To Cart</Button>
        </div>
      </Card.Body>
    </Card>
      </>
    )
  })

     
  const customerAunthenticate=async()=>{

    const token=localStorage.getItem("token");
     if (token)
     {
         let api=`${BASE_URL}/air/userauthenticate`;

         const response =await axios.get(api, {
          headers: { Authorization: `Bearer ${token}` },
        })

        console.log(response.data);
        localStorage.setItem("username", response.data.name);
        localStorage.setItem("useremail", response.data.email);
        localStorage.setItem("userid", response.data._id);
        localStorage.setItem("number", response.data.number);
        localStorage.setItem("address", response.data.address);
     }
   }


   useEffect(()=>{
   customerAunthenticate();
   },[]);








    return(
        <>
        <h1 id='mar' style={{backgroundColor:"lightpink"}}>
        <marquee behavior="alternate" direction="left">
         Offer:All Products have 15% Discount in Diwali Festival
        </marquee>
        </h1>

      <div id="cl">
        <Carousel>
      <Carousel.Item>
       <img src="bl1.jpg"  alt="frist" width="100%" height="600px"  />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>AirPods are wireless Bluetooth earbuds developed by Apple.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="bl2.jpg" alt="second" width="100%" height="600px"   />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p> known for their 
          seamless integration with Apple devices </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="bl3.jpg" alt="third" width="100%" height="600px"   />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
          including features like active
          noise cancellation, Transparency mode, and personalized spatial audio.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

  <div id="cards" style={{fontSize:"20px"}}>
    {ans}
  </div>

    <div id="cards">
    <Card style={{ width: '25rem', height:"570px" }}>
      <Card.Img variant="top" src="pic1.png" width="300px" height="400px"/>
      <Card.Body>
        <Card.Title>Air Pods</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div id="star">
            <div id="star1">
        <VscStarEmpty />
        <VscStarEmpty />
        <VscStarEmpty />
        <VscStarEmpty />
        <VscStarEmpty />
        </div>
        <Button variant="warning">AirPods</Button>
        </div>
      </Card.Body>
    </Card>

    <Card style={{ width: '25rem', height:"570px" }}>
      <Card.Img variant="top" src="pic2.jpg" width="300px" height="400px" />
      <Card.Body>
        <Card.Title>Air Pods</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div id="star">
            <div id="star1">
        <VscStarEmpty />
        <VscStarEmpty />
        <VscStarEmpty />
        <VscStarEmpty />
        <VscStarEmpty />
        </div>
        <Button variant="warning">AppleBuds</Button>
        </div>
      </Card.Body>
    </Card>

    <Card style={{ width: '25rem', height:"570px" }}>
      <Card.Img variant="top" src="pic3.jpg" width="300px" height="400px" />
      <Card.Body>
        <Card.Title>Air Pods </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div id="star">
            <div id="star1">
        <VscStarEmpty />
        <VscStarEmpty />
        <VscStarEmpty />
        <VscStarEmpty />
        <VscStarEmpty />
        </div>
        <Button variant="warning">NetBand</Button>
        </div>
      </Card.Body>
    </Card>


    <Card style={{ width: '25rem', height:"570px"}}>
      <Card.Img variant="top" src="pic4.jpg" width="300px" height="400px" />
      <Card.Body>
        <Card.Title>Air Pods</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div id="star">
            <div id="star1">
        <VscStarEmpty />
        <VscStarEmpty />
        <VscStarEmpty />
        <VscStarEmpty />
        <VscStarEmpty />
        </div>
        <Button variant="warning">Bluetooth</Button>
        </div>
      </Card.Body>
    </Card>

    <Card style={{ width: '25rem', height:"570px"}}>
      <Card.Img variant="top" src="bl4.jpg" width="300px" height="400px" />
      <Card.Body>
        <Card.Title>Earbuds</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div id="star">
            <div id="star1">
        <VscStarEmpty />
        <VscStarEmpty />
        <VscStarEmpty />
        <VscStarEmpty />
        <VscStarEmpty />
        </div>
        <Button variant="warning">Apple</Button>
        </div>
      </Card.Body>
    </Card>


    <Card style={{ width: '25rem', height:"570px" }}>
      <Card.Img variant="top" src="bl5.jpg"  width="300px" height="400px"/>
      <Card.Body>
        <Card.Title>Air Pods</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       <div id="star">
            <div id="star1">
        <VscStarEmpty />
        <VscStarEmpty />
        <VscStarEmpty />
        <VscStarEmpty />
        <VscStarEmpty />
        </div>
        <Button variant="warning">Air-Pods</Button>
        </div>
      </Card.Body>
    </Card>
    </div>

       
        </>
    )
}

export default Home;