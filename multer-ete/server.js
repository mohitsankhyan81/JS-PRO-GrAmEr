import express from "express"
import multer from "multer"

const app=express()

const upload=multer({dest:"uploads/"})

app.post("/upload",upload.single("file"),(req,res)=>{
    return res.send("upload succesfuly")
})

app.listen(3000)