import express from "express"
import { userdata } from "../controller/user.js";

const userroter=express.Router();

userroter.get("/user",userdata);

export default userroter;