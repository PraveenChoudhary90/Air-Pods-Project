const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    name: String,
    totalamount: Number,
    customername: String,
    address: String,
    contact: String,
    email: String,
    razorpay_order_id: String, // For linking with Razorpay
}, { timestamps: true });

module.exports = mongoose.model("Order", OrderSchema);
