import User from "../models/user.js";
import jwt from "jsonwebtoken"
export const isAuthenticated=async (req,res,next)=>{
    let token=req.cookies.token;
    // console.log(token);
    if(!token)
        {
            res.json({
                "success":false,
                "message":"Login First"
            })
        }
    else
    {   
        token =jwt.decode(token,process.env.JWT_SECRET);//ca use jwt.verify too
        // console.log(token);
        const foundUser=await User.findOne({_id:token._id})
        if(foundUser)
            {
               req.user=foundUser;
               next();
            }
            else
            {
                res.json({
                    "success":false,
                    "message":"User doesnt exist"
                })
            }
        
    }    




}