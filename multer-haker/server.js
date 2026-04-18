const express=require("express")
const multer=require("multer");
const fs=require("fs");

const app=express();
if(!fs.existsSync("uploads")){
    fs.mkdirSync("uploads");
}

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,uploads);
    },
    filename:(req,file,)
})

