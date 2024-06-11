
import mongoose from "mongoose";
export const  databaseDB=()=>{
    
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"fullStackTodo"
    }).then(()=>console.log("connection with mongo db successful")).catch((e)=>console.log(e));

}
