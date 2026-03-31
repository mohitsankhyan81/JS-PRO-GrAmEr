import express from "express"
import multer from "multer";
import path from "path"
const app=express();

// const upload=multer({
//     dest:"uploads/",
// })

// multer.diskStorage=file upload to handdisk
// multer.memoryStorage=file upload to ram
// Storage where name
// filefilter which type 
// limit file size

app.use(express.static(path.resolve('public')))

app.get("/",(req,res)=>{
    return res.sendFile(path.resolve("public/index.html"))
})

app.post("/upload",upload.single("profile"),(req,res)=>{
    console.log(req.file);
    if(!req.file){
        return res.status(400).json({message:"file not found"});
    }
    return res.status(200).json({message:"file upload successully"})
})
app.listen(3000)