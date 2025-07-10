// const router = require("express").Router();
// const Razorpay = require("razorpay");
// const crypto = require("crypto");
// const OrderModel= require("../Model/OrderModel");
// //Creating Order

// // router.post("/orders",async(req,res) => {
// // const {amount, customername, address, contact, email, proname }=req.body;
// //  const Order= await OrderModel.create({
// //     name:proname,
// //     totalamount:amount, 
// //     customername:customername,
// //     address:address,
// //     contact:contact,
// //     email:email
// //  })
// //  console.log(Order);

// //     try {
// //         const instance = new Razorpay({
// //             key_id: process.env.KEY_ID,
// //             key_secret: process.env.KEY_SECRET,
// //         });

// //         const options = {
// //             amount: req.body.amount * 100,
// //             currency:"INR",
// //             receipt:crypto.randomBytes(10).toString("hex"),
// //         }
// //         instance.orders.create(options,(error,order) => {
// //             if(error) {
// //                 console.log(error);
// //                 return res.status(500).json({message:"Something Went Wrong!"});
// //             }
// //             res.status(200).json({data:order});
// //         });

// //     } catch(error) {
// //         console.log(error);
// //         res.status(500).json({message:"Internal Server Error!"});
// //     }

// // });

// // //Verifying the payment
// // router.post("/verify",async(req,res) => {
// //     try {
// //         const {
// //             razorpay_orderID,
// //             razorpay_paymentID,
// //             razorpay_signature } = req.body;
// //         const sign = razorpay_orderID + "|" + razorpay_paymentID;
// //         const resultSign = crypto
// //         .createHmac("sha256",process.env.KEY_SECRET)
// //         .update(sign.toString())
// //         .digest("hex");

// //         if (razorpay_signature == resultSign){
// //             return res.status(200).json({message:"Payment verified successfully"});
// //         }

// //     } catch(error) {
// //         console.log(error);
// //         res.status(500).json({message:"Internal Server Error!"});
// //     }
// // });


// router.post("/orders", async (req, res) => {
//     const { amount, customername, address, contact, email, proname } = req.body;

//     try {
//         const instance = new Razorpay({
//             key_id: process.env.KEY_ID,
//             key_secret: process.env.KEY_SECRET,
//         });

//         const options = {
//             amount: amount * 100,
//             currency: "INR",
//             receipt: crypto.randomBytes(10).toString("hex"),
//         };

//         instance.orders.create(options, async (error, order) => {
//             if (error) {
//                 console.log("Razorpay Error:", error);
//                 return res.status(500).json({ message: "Something went wrong while creating Razorpay order" });
//             }

//             // Order created in Razorpay — now save to DB
//             try {
//                 const dbOrder = await OrderModel.create({
//                     name: proname,
//                     totalamount: amount,
//                     customername: customername,
//                     address: address,
//                     contact: contact,
//                     email: email,
//                     razorpay_order_id: order.id  // Save Razorpay order ID for future verification
//                 });

//                 console.log("Order saved in DB:", dbOrder);
//                 res.status(200).json({ razorpayOrder: order, dbOrder });
//             } catch (dbError) {
//                 console.log("DB Save Error:", dbError);
//                 res.status(500).json({ message: "Failed to save order in DB" });
//             }
//         });

//     } catch (error) {
//         console.log("Internal Error:", error);
//         res.status(500).json({ message: "Internal Server Error!" });
//     }
   
// });

//  //Verifying the payment
//  router.post("/verify",async(req,res) => {
//     try {
//         const {
//             razorpay_orderID,
//             razorpay_paymentID,
//             razorpay_signature } = req.body;
//         const sign = razorpay_orderID + "|" + razorpay_paymentID;
//         const resultSign = crypto
//         .createHmac("sha256",process.env.KEY_SECRET)
//         .update(sign.toString())
//         .digest("hex");

//         if (razorpay_signature == resultSign){
//             return res.status(200).json({message:"Payment verified successfully"});
//         }

//     } catch(error) {
//         console.log(error);
//         res.status(500).json({message:"Internal Server Error!"});
//     }
// });

// module.exports = router;

const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const OrderModel = require("../model/OrderModel");

const router = express.Router();

// Create Razorpay Order and Save to DB
router.post("/orders", async (req, res) => {
    const { amount, customername, address, contact, email, proname } = req.body;

    try {
        const instance = new Razorpay({
            key_id: process.env.KEY_ID,
            key_secret: process.env.KEY_SECRET,
        });

        const options = {
            amount: amount * 100, // convert to paise
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex"),
        };

        instance.orders.create(options, async (error, order) => {
            if (error) {
                console.error("Razorpay Order Error:", error);
                return res.status(500).json({ message: "Failed to create Razorpay order" });
            }

            try {
                const dbOrder = await OrderModel.create({
                    name: proname,
                    totalamount: amount,
                    customername,
                    address,
                    contact,
                    email,
                    razorpay_order_id: order.id,
                });

                console.log("Order saved in DB:", dbOrder);
                return res.status(200).json({ razorpayOrder: order, dbOrder });
            } catch (dbError) {
                console.error("DB Save Error:", dbError.message);
                return res.status(500).json({ message: "Failed to save order in DB" });
            }
        });
    } catch (error) {
        console.error("Server Error:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Verify Payment Signature
router.post("/verify", async (req, res) => {
    try {
        const {
            razorpay_orderID,
            razorpay_paymentID,
            razorpay_signature
        } = req.body;

        const sign = razorpay_orderID + "|" + razorpay_paymentID;
        const expectedSign = crypto
            .createHmac("sha256", process.env.KEY_SECRET)
            .update(sign.toString())
            .digest("hex");

        if (expectedSign === razorpay_signature) {
            return res.status(200).json({ message: "Payment verified successfully" });
        } else {
            return res.status(400).json({ message: "Invalid signature" });
        }
    } catch (error) {
        console.error("Verification Error:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;


