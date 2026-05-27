import path from "path";
import express from "express"
import session from "express-session"


const app=express();
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded())
app.use(session({
    secret:"myname",
    saveUninitialized:true,
    resave:false
}))

const user={}

app.post("/register",(req,res)=>{
    const {name}=req.body
    const {password}=req.body

    user.name=name
    user.password=password

    res.send("user register successfully")
})

app.post("/login",(req,res)=>{
    const {name}=req.body
    const {password}=req.body

    if(user.name==name && user.password==password){
        req.session.user=name
        res.redirect("/dashboard")
    }
})

app.get("/",(req,res)=>{
    res.sendFile(path.resolve("public/home.html"))
})
app.get("/login",(req,res)=>{
    res.sendFile(path.resolve("public/login.html"))
})
app.get("/register",(req,res)=>{
    res.sendFile(path.resolve("public/register.html"))
})

app.get("/dashboard",(req,res)=>{
    if(req.session.user){
        res.sendFile(path.resolve("public/dashboard.html"))
    }
    else{
        res.send("please login first")
    }
})

app.listen(4500,()=>{
    console.log("server started")
})