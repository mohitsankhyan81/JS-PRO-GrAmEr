import express from "express"
import multer  from "multer"
import fs from "fs"
const app=express();

if(!fs.existsSync("uploads")){
    fs.mkdirSync("uploads");
}

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/");
    },
    filename:(req,file,cb)=>{
        const {userId}=req.body;
        const newName=userId+"_"+Date.now()+"_"+file.originalname;
        cb(null,newName);
    }
})

const filefilter=(req,file,cb)=>{
    if(file.mimetype=="application/pdf"){
        cb(null,true);
    }
    else{
        cb(new Error("Invalid file"));
    }
}

const upload=multer({
    storage:storage,
    limits:{fileSize:2*1024*1024},
    fileFilter:filefilter
}).array("files",3)

app.post("/upload",(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            return res.status(400).json({error:"Error in post"});
        }

        const files=req.files.map((file)=>({
            filename:file.filename,
            url:`http://localhost:3000/docs/${file.filename}`
        }))

        return res.status(200).json({message:"File Upload Successfully",files:files})
    })
})

app.use("/docs",express.static("uploads"))

app.get("/files",(req,res)=>{
    fs.readdir("uploads",(err,files)=>{
        if(err){
            res.status(200).json({error:"not valid"});
        }
        res.json({files})
    })
})

app.listen(3000);