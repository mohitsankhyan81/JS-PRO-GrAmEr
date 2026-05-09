import express from "express"
import multer from "multer"
import path from "path"

const app=express()
app.use(express.static("public"))

const upload=multer({dest:"uploads/"})
app.get("/",(req,res)=>{
    res.sendFile(path.resolve("public/index.html"))
})

app.post("/upload",upload.single("file"), (req,res)=>{
    res.send("File upload successfully")
})

app.listen(3000);