import mongoose from "mongoose";



const schema=new mongoose.Schema({
   name:String,
   email:{
    type:String,
    required:true,
    unique:true
   },
   password:{
    type:String,
    required:true,
    unique:true
   },
   createdAt:{
    type:Date,
    required:true,
    default:Date.now,
   }
})

const User=mongoose.model("User",schema);
export default User