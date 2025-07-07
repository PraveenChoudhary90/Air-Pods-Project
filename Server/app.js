const express = require("express");
const app = express();
const cors = require("cors");
const mongoose =require("mongoose");
require("dotenv").config();
const path = require('path');
const bodyParser = require("body-parser");
const AirRoute = require("./Routes/AirRoute");

app.use(cors());
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


mongoose.connect(process.env.CONNECTION_STRING).then(()=>{
    console.log("DB IS CONNECTED");
})

app.use("/air", AirRoute);

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Server is Running on ${port} port`)
})