import express from "express"
import path from "path"
import multer from "multer"

const app=express()

app.use(express.static("public"))


const storage=multer.diskStorage({
    destination:"upload/",
    filename:(req,file,cb)=>{
        cb(null,
            file.originalname +
            "-" +
            Date.now() +
            path.extname(file.originalname)
        )
    }
})
const upload=multer({
    storage:storage,
    limits:{fileSize:2*1024*1024},
    fileFilter:(req,file,cb)=>{
        if(file.mimetype == "application/pdf"){
            cb(null,true)
        }
        else{
            cb(new Error("invalid file type"))
        }
    }
})
// app.use((req,res)=>{
//     res.send("hello")
// })

app.get("/uploadfile",(req,res)=>{
    res.sendFile(path.resolve("public/index.html"))
})

app.post("/uploadfile",upload.single("file"),(req,res)=>{
    res.json({
        success:true,
        message:"file upload successfullly",
        fileurl:`http://localhost:3000/uploadfile/${req.file.filename}`
    })
})



app.listen(3000,()=>{
    console.log("server start")
})