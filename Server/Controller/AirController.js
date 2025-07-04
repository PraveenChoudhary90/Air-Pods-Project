const AirModel = require("../Model/AirModel");
const UserModel = require("../Model/UserModel");


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



module.exports = {
    InsertUser,
    Adminlogin
}