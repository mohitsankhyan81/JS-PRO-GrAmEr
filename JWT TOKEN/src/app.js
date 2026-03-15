import express from "express"
import morgan from "morgan";
import dotenv from "dotenv"
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authrouter from "./routes/auth_router.js";
const app = express();
app.use(express.json())
app.use(morgan("dev"))
dotenv.config();
app.use(cookieParser())
try{
    mongoose.connect(process.env.MONGO_URI)
    console.log("Connect sucessfully")
}
catch(error){
    console.log(error);
}

app.use("/api/auth",authrouter)

export default app
