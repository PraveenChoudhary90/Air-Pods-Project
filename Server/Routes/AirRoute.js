const express  =require("express");
const route = express.Router();
const AirController= require("../Controller/AirController");



route.post("/InsertUser", AirController.InsertUser);






module.exports = route;