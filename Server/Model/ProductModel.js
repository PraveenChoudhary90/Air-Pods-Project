const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    name:String,
    brand:String,
    price:String,
    color:String,
    description:String,
    defaultImage:String,
    images:String
})


module.exports = mongoose.model("product", ProductSchema);