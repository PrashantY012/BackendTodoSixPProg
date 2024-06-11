import mongoose from "mongoose";

const schema=new mongoose.Schema({
   title:{
    type:String,
    required:true,
   },
   description:{
    type:String,
    required:true
   },
   isCompleted:{
    type:Boolean,
    default:false,
   },
   user:{
    type:mongoose.Schema.Types.ObjectId,
   //  type:String,
    ref:"Task",
    required:true
   },
   createdAt:{
    type:Date,
    default:Date
   }
})

const Task=mongoose.model("Task",schema);
export default Task