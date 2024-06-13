import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import {config} from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors"
export const app=express();
config({
    path:"./Data/config.env"
})
// usign middleware
app.use(express.json());
app.use(cookieParser());
//using routes
app.use("/api/v1/users",userRouter)
app.use("/api/v1/tasks",taskRouter)
app.use(
    cors(
        {
            origin:[process.env.FRONTEND_URL],
            methods:["GET","POST","PUT","DELETE"],
            credentials:true,  
            CORS_ORIGIN_ALLOW_ALL:true
        }
    )
)


app.get("/",(req,res)=>{
    res.send("apple")
})



