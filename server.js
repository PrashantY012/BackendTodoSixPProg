import { app } from "./app.js";
import {databaseDB} from "./Data/database.js"
databaseDB();
app.listen(process.env.PORT,()=>{
    console.log(`Server is workings on port no ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})
