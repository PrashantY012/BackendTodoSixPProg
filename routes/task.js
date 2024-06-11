import express from "express"
import { deleteTask, getMyTask, newTask, updateTask } from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";

const router=express.Router();

router.post("/new",isAuthenticated,newTask)
router.get("/my",isAuthenticated,getMyTask)

router.route("/:id").put(isAuthenticated,updateTask).delete(deleteTask);

export default router;