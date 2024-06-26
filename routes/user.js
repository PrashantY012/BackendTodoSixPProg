import express from "express";
import {getAllUsers,register,login, getMyDetail, logout} from "../controllers/users.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
const router=express.Router();


router.get("/all",getAllUsers)

router.get("/me",isAuthenticated,getMyDetail)

router.post("/new",register)
router.post("/login",login)
router.get("/logout",logout)
export default router;