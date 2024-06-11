import Task from "../models/task.js";

export const newTask=async (req,res,next)=>{
    //yaha tak tabhi pohochenge jab logged in hoga
    let {title,description}=req.body;
    // console.log(req.user);
    let task=await Task.create({title,description,user:req.user._id}); 
    res.status(201).json(
        {
            "status":true,
            "message":"task added successfully",
            "task":task
        }
    )
    
    //

}
export const getMyTask=async(req,res,next)=>{
    const userId=req.user._id;
    let tasks=await Task.find({user:userId});
    res.status(200).json({
        "success":true,
        tasks
    })
  
}

export const updateTask=async(req,res,next)=>{
   const id=req.params.id;
   let task=await Task.findOne({_id:id});
//    console.log(req.params);
   if(!task)
    {
        res.json({
            "success":false,
            "message":"task doesn't exist"
        })
    }
   task.isCompleted= !task.isCompleted;
   await task.save();
   res.json({
    "success":true,
    "message":"updated sucessfully"
})


  
}
export const deleteTask=async(req,res,next)=>{
    let id=req.params.id;
    let task=await Task.deleteOne({_id:id});
    console.log(task)
    if(task.deletedCount===0)
        {
            return res.status(404).json({
                "success":false,
                "message":"task doesn't exist"
            })
        }
       
    res.status(200).json({
        "success":true,
        "message":"task deleted successfully"
    })
  
}