import express from "express"
import path from "path"
import multer from "multer"

const app=express()

app.use(express.static("public"))


const storatge=multer.diskStorage({
    destination:"upload/",
    filename:(req,file,cb)=>{
        cb(null,
            file.originalname.split(".")[0] +
            "-"+
            Date.now() +
            path.extname(file.originalname)
        )
    }
})

const upload=multer({
    storage:storatge,
    limits:{fileSize:2*1024*1024},
    fileFilter:(req,file,cb)=>{
        if(file.mimetype == "application/pdf"){
            cb(null,true)
        }
        else{
            cb(new Error("Only pdf files"))
        }
    }
})


// const upload=multer({
//     dest:"upload/"
// })
app.get("/uploadfile",(req,res)=>{
    res.sendFile(path.resolve("public/html.html"))
})


app.post("/uploadfile",upload.single("file"),(req,res)=>{
    res.json({
        success:true,
        message:"file upload successfluy",
        fileurl:`http://localhost:4000/uploadfile/${req.file.filename}`
    })
})
// app.use((req,res)=>{
//     res.send("hello")
// })



app.listen(4000,()=>{
    console.log("server started")
})