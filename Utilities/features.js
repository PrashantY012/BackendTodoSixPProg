import jwt from "jsonwebtoken"
export const sendCookie=async (res,user,message,statusCode=200)=>{
    let token=jwt.sign({_id:user._id},process.env.JWT_SECRET )
    res.status(statusCode).cookie("token",token,{
        maxAge:15*60*1000,
        httpOnly:true,
        sameSite:process.env.NODE_ENV==="Development"?"lax":"none",
        secure:process.env.NODE_ENV==="Development"?false:true,
        
    }).json({
        success:true,
        message:message 
    })
    // console.log(process.env.NODE_ENV==="Development")
}
/*
        httpOnly:true,
sameSite:process.env.NODE_ENV==="Development"?"lax":"none",
        secure:process.env.NODE_ENV==="Development"?false:true,
*/