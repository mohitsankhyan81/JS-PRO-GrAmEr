import express from "express"
import path from "path"
import multer from "multer"

const app=express();
app.use(express.static("public"))

// app.get("/data",(req,res)=>{
//     res.send("hello")
// })

const storage=multer.diskStorage({
    destination:"upload/",
    filename:(req,file,cb)=>{
        cb(null,
            file.originalname.split(".")[0]+
            "-"+
            Date.now()+
            path.extname(file.originalname)
        )
    }
})

const upload=multer({
    storage:storage,
    limits:{fileSize:2*1024*1024},
    fileFilter:(req,file,cb)=>{
        if(file.mimetype=="application/pdf"){
            cb(null,true)
        }
        else{
            cb(new Error("only pdf files"))
        }
    }
})

app.get("/uploaddata",(req,res)=>{
    res.sendFile(path.resolve("public/html.html"))
})

app.post("/uploaddata",upload.single("file"),(req,res)=>{
    res.json({
        success:true,
        message:"ducument upload succesfully",
        fileurl:`http://localhost:4500/formdata/${req.file.filename}`
    })
})

app.use((err,req,res,next)=>{
    res.status(400).json({
        success: false,
        error: "Only PDF files under 2MB are allowed",
    })
})

app.listen(4500,()=>{
    console.log("hello")
})