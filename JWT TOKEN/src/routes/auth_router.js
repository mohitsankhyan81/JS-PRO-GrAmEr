import express from "express"
import { getme, register } from "../controller/auth_controller.js"

const authrouter=express.Router()

authrouter.post("/register",register)
authrouter.get("/get-me",getme)
export default authrouter