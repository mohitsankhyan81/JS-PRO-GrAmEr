const express =require("express");
const multer=require("multer")
const path=require("path");

const app=express();

const upload=multer({
    dest:"uploads/"
})

app.post("/upload",upload.single('file'),(req,res)=>{
    res.send("file uploded");
})
app.listen(3000);