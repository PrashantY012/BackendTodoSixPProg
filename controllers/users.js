
import  jwt from "jsonwebtoken";
import User from "../models/user.js";
import bcrypt from "bcrypt"
import { sendCookie } from "../Utilities/features.js";

export const getAllUsers=async (req,res)=>{
  
}

export const register=async (req,res)=>{
 let {name,email,password}=req.body;
 let user= await User.findOne({email:email})

 if(user)
    {
        return res.status(404).json({
            success:false,
            message:"User Already Exist"    
        })
    }
    let hashedPassword=await bcrypt.hash(password,10);
    user =await User.create({name,email,password:hashedPassword});
    sendCookie(res,user,"registered successfully",201)

};
export const getMyDetail=async (req,res)=>{
    //yaha par isAuthenticated ke baad hi pohochega
                res.json({
                    "success":true,
                    "message":req.user
                })
        
};

export const login=async (req,res)=>{
    let {email,password}=req.body;
    let user= await User.findOne({email:email}).select("+password")
    if(!user)
        {
           return res.status(404).json({
                success:false,
                message:"Invalid email or password "
            })
        }
     const isMatch=await bcrypt.compare(password,user.password);
     if(!isMatch)
        {
           return res.status(404).json({
                success:false,
                message:"Invalid email or password "
            })
        }   

    sendCookie(res,user,"Welcome "+`${user.name}`,201);
    
};


export const logout=async (req,res)=>{
        res.clearCookie("token");
        res.status(201).json({
            "Status":true,
            "Message":"Cookie Cleared"
        })

};