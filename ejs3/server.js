const express =require("express")
const ejs =require("ejs");

const app=express();

app.set("view engine","ejs");

const userdata=[
    {id:34,name:"mohit"},
    {id:45,name:"Sahil"}
]

app.get("/user",(req,res)=>{
    res.render("user",{userdata});
})

app.listen(3000);