const express=require('express');
const session=require('express-session');
const path=require('path')

const app=express();
app.use(express.json());
app.use(express.urlencoded())
app.use(express.static("public"))
app.use(session({
    secret:"mysecret354",
    resave:false,
    saveUninitialized:true
}));

const user={};

app.post("/signup",(req,res)=>{
    const {firstname,password}=req.body;
    user.firstname=firstname;
    user.password=password;
    
    res.send("user register successfully");
})

app.post("/login",(req,res)=>{
    const {firstname,password}=req.body;
    
    if(user.firstname==firstname && user.password==password){
        req.session.user=firstname
        return res.redirect("/dashboard.html");
    }
    else{
        res.send("Invalid credentals");
    }

})

app.get("/dashboard",(req,res)=>{
    if(req.session.user){
        return res.sendFile(path.resolve("public/dashboard.html"));
    }
    return res.status(400).json("page not found");
})

app.get("/logout",(req,res)=>{
    req.session.destroy((err)=>{
        
    })
})

app.listen(3000);