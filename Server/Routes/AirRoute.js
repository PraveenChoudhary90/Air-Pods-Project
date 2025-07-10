const express  =require("express");
const route = express.Router();
const multer = require('multer');
const path = require('path');
const AirController= require("../Controller/AirController");


// Configure storage engine and filename
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  
  // Initialize upload middleware and add file size limit
  const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 } // 1MB file size limit
  }); // 'myFile' is the name attribute of the file input field
  


route.post("/InsertUser", AirController.InsertUser);
route.post("/Adminlogin", AirController.Adminlogin);
route.post("/CustomerLogin", AirController.CustomerLogin);
route.get("/userauthenticate", AirController.userauthenticate);


route.post("/InsertProduct",upload.array("image", 10),AirController.InsertProduct);
route.get("/DisplayProduct", AirController.DisplayProduct);
// route.get("/getdata", AirController.CustomerData)

route.get("/Orderdetail", AirController.Orderdetail);


module.exports = route;