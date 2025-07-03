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



module.exports = {
    InsertUser
}