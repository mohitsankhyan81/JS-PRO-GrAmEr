import express from "express"
import path from "path"
import session from "express-session"

const app=express()
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded())

app.use(session({
    secret:"mysecret",
    saveUninitialized:true,
    resave:false
}))

const user={}

app.post("/register",(req,res)=>{
    const {name,password}=req.body

    user.name=name
    user.password=password

    res.redirect("/login")
})

app.post("/login",(req,res)=>{
    const {name,password}=req.body

    if(name==user.name && password==user.password){
        req.session.user=name
        res.redirect("/dashboard")
    }
})
app.get("/register",(req,res)=>{
    res.sendFile(path.resolve("public/register.html"))
})

app.get("/login",(req,res)=>{
     res.sendFile(path.resolve("public/login.html"))
})
app.get("/",(req,res)=>{
    res.sendFile(path.resolve("public/home.html"))
})

app.get("/dashboard",(req,res)=>{
    if(req.session.user){
     res.sendFile(path.resolve("public/dashboard.html"))
    }
})

app.get("/logout",(req,res)=>{
    req.session.destroy(()=>{
         res.redirect("/")
    })
})

app.listen(3300,()=>{
    console.log("server started")
})