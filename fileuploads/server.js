import express from "express"
import multer from "multer"
import path from "path"

const app=express();

app.use(express.static("public"))

const storage=multer.diskStorage({
    destination:"upload/",
    filename:(req,file,cb)=>{
        cb(null,
            file.originalname+
            "-"+
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
//     res.send("Hello World")
// })

app.get("/uploadfile",(req,res)=>{
    res.sendFile(path.resolve("public/html.html"))
})

app.post("/uploadfile",upload.single("file"),(req,res)=>{
    res.json({
        success:true,
        message:"file upload successfuly",
        fileurl:`http://localhost:4000/fileupload/${req.file.filename}`
    })
})

app.listen(4500,()=>{
    console.log("server started")
})