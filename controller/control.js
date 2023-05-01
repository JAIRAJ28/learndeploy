const express=require("express")
const bcrypt = require('bcrypt');
const user=express.Router()
var jwt = require('jsonwebtoken');
const {userModel}=require("../model/model")


user.post('/register',async(req,res)=>{
    const {email,pass,name}=req.body
    try {
        bcrypt.hash(pass, 5, async(err, hash)=>{
            let data=new userModel({email,name,pass:hash})
            await data.save()
            res.status(200).send("msg:user has been registered")
        });
      
    } catch (error) {
        res.status(400).send("Some issue in format please check")
    }
})
user.get("/",(req,res)=>{
    res.send("HEY THERE")
})
user.post('/login',async(req,res)=>{
    let {email,pass}=req.body
    try {
        let data=await userModel.findOne({email})
        bcrypt.compare(pass, data.pass, function(err, result) {
           if(result){
            // console.log(data)
            const token = jwt.sign({authorId:data._id,author:data.name}, 'masai');
            res.status(200).send({"msg":"user has been logged In Successfully","token":token})
           }else{
            res.status(400).send("msg:user has been not logged In Successfully")
        }
    }); 
    } catch (error) {
      
        res.status(400).send("Some issue in format please check")
    }
})



module.exports=user
