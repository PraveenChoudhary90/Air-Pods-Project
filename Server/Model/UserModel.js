const mongoose = require("mongoose");
const UserModel = new mongoose.Schema({
    name:String,
    email:String,
    city:String,
    number:String,
    password:String
})


module.exports = mongoose.model("user", UserModel);