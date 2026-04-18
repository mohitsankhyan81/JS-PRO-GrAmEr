const express=require("express");

const app=express();
app.use(express.json());

const user=[
    {id:43,name:"mohit"},
    {id:34,name:"sahil"}
]

app.get("/users",(req,res)=>{
    return res.status(200).json({user:user});
})

app.listen(3000)