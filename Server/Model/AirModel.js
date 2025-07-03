const mongoose = require("mongoose");
const AirModel = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})


module.exports = mongoose.model("admin", AirModel);