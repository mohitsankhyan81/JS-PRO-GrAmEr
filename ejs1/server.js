const express=require("express")
const ejs=require("ejs")

const app=express();
app.set("view engine","ejs");

const data=[
    {id:45,name:"Mohit"},
    {id:25,name:"Sahil"}
]

app.get("/",(req,res)=>{
    return res.render("data",{data});
})
app.listen(3000);