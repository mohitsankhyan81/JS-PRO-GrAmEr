import express from "express"
import dotenv from "dotenv"
dotenv.config();
const app=express();

const port=process.env.PORT || 3445;

app.listen(3000); 