import express from "express";
import adminrouter from "./router/admin.js";
import userroter from "./router/user.js";

const app=express();

app.use(adminrouter)
app.use(userroter)

app.listen(3444,()=>{
    console.log("http://localhost:3444");
})