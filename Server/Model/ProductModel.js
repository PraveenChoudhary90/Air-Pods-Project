const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    name:String,
    brand:String,
    price:String,
    color:String,
    description:String,
    defaultImage:String,
    image:String
})


module.exports = mongoose.model("product", ProductSchema);