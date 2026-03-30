import express from "express"
import multer from "multer"
const app=express();
app.use(express.json())
app.use(express.urlencoded());
app.use((req,res)=>{
    res.send("Hello");
})

app.post("/upload",(req,res)=>{

})

app.listen(3000,()=>{
    console.log("http://localhost:3000")
})