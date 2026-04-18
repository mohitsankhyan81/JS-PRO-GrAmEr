const express=require("express")
const session=require("express-session");
const path=require("path");
const app=express();
app.use(session({
    secret:"myscret",
    resave:false,
    saveUninitialized:true
}))

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static("public"));
const user={};

app.post("/signup",(req,res)=>{
    const {firstname,password}=req.body;

    user.firstname=firstname;
    user.password=password;

    return res.status(200).send("user signup successfull");
})

app.post("/login",(req,res)=>{
    const {firstname,password}=req.body;

    if(user.firstname==firstname && user.password==password){
        req.session.user=firstname;
        res.redirect("/");
    }
    else{
        return res.send("invalid creadentials")
    }
})

app.get("/login",(req,res)=>{
    res.sendFile(path.resolve("public/login.html"))
})
app.get("/signup",(req,res)=>{
    res.sendFile(path.resolve("public/signup.html"))
})

app.get("/",(req,res)=>{
    res.sendFile(path.resolve("public/home.html"));
})

app.get("/logout",(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            return res.send("error in logout");
        }
        return res.redirect("/login");
    })
})

app.listen(3000);