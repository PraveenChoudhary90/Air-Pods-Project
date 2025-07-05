const AirModel = require("../Model/AirModel");
const UserModel = require("../Model/UserModel");
const jwt =require("jsonwebtoken");


const InsertUser = async(req,res)=>{
    const {name,email,city,number,password} = req.body;
    try {
        const User = await UserModel.create({
            name:name,
            email:email,
            city:city,
            number:number,
            password:password
        })
        console.log(User);
        res.status(200).send({msg:"User Save Successfully"})
    } catch (error) {
        console.log(error)
        
    }
}

const Adminlogin = async(req,res)=>{
    const { email, password}=req.body;
    try {
     const Admin = await AirModel.findOne({email:email});
     if (!Admin)
        {
            res.status(404).send({msg:"Invalid Admin EmailID!"});
        }
        if (Admin.password!=password)
        {
            res.status(404).send({msg:"Invalid Password!"});
        }
        res.status(200).send({msg:"You are Login Succesfully ", Admin:Admin});
    } catch (error) {
        console.log(error);
    }
}


  const CustomerLogin = async (req,res)=>{
    const {email, password} = req.body;
    try {
        const Customer= await UserModel.findOne({email:email});
         
        if(!Customer)
        {
            res.status(400).send({msg:"Invalid Email ID!"});
        }     
        if(Customer.password!=password)
        {
            res.status(400).send({msg:"Invalid Password!"});
        }
    
   const token=jwt.sign({id:Customer._id }, process.env.JWT_SECRET, { expiresIn: "9d" });
   res.status(200).send({token:token});
    }
    catch (error) {
        console.log(error);
    }
}


const userauthenticate = async(req,res)=>{
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
     try {
        const decodedToken = jwt.verify(token,  process.env.JWT_SECRET);
        console.log(decodedToken.id);
      const Customer = await UserModel.findById(decodedToken.id).select("-password");

      console.log(Customer);

      res.status(200).send(Customer);
     
    } catch (error) {
         console.log(error);
     }

}

module.exports = {
    InsertUser,
    Adminlogin,
    CustomerLogin,
    userauthenticate
}