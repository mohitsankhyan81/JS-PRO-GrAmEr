import express from "express"
import multer from "multer"

const app=express()
app.use(express.json())

const fileList=[]

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"docs/")
    },
    filename:(req,file,cb)=>{
        const newName= req.body.userId +"_"+ Date.now() +"_" + file.originalname
        cb(null,newName)
    }
})

const filefilter=(req,file,cb)=>{
    if(file.mimetype =="application/pdf"){
        cb(null,true)
    }
    else{
        cb(new Error("Invalid file format"),false)
    }
}

const upload=multer({
    storage:storage,
    limits:{
        fileSize:2*1024*1024
    },
    fileFilter:filefilter
})

app.listen(3000)