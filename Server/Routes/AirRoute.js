const express  =require("express");
const route = express.Router();
const AirController= require("../Controller/AirController");



route.post("/InsertUser", AirController.InsertUser);
route.post("/Adminlogin", AirController.Adminlogin);





module.exports = route;