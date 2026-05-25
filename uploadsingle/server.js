const express=require("express");
const multer = require("multer");
const path=require("path")
const app=express();

// app.get("/data",(req,res)=>{
//     res.send("hello")
// })

app.use(express.static("public"))

const upload=multer({
    dest:"upload/"
})

app.get("/filedata",(req,res)=>{
    res.sendFile(path.resolve("public/html.html"));
})

app.post("/filedata",upload.single("file"),(req,res)=>{
    res.send("File Upload successfully");
})


app.listen(4000,()=>{
    console.log("hello")
});