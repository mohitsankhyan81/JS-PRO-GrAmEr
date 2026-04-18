const express=require("express");
const ejs=require("ejs");

const app=express();

app.set("view engine","ejs");

const stud=[
    {id:3,name:"Mohit"},
    {id:4,name:"Krish"}
];
app.get("/user",(req,res)=>{
    res.render("home",{stud})
})

app.listen(4000)