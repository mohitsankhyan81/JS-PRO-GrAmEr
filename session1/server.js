const express=require("express")
const session=require("express-session")
const path=require("path")

const app=express()
app.use(express.json());
app.use(express.urlencoded());
app.use(session({
    secret:"mysecret234",
    resave:false,
    saveUninitialized:true
}))

app.use(express.static("public"))
const user={};

app.post("/signup",(req,res)=>{
    const {firstname,password}=req.body;

    user.firstname=firstname;
    user.password=password;

    res.send("User Sign up successfully");
})

app.post("/login",(req,res)=>{
    const {firstname,password}=req.body;

    if(user.firstname===firstname && user.password===password){
        req.session.user=firstname
        res.redirect("/index.html")
    }
    else{
        res.send("invalid credentials");
    }
})


app.get("/dashboard",(req,res)=>{
    if(req.session.user){
        return res.sendFile(path.resolve("public/index.html"));
    }
    else{
        return res.send("Please login first");
    }
})
app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.send("Error logging out");
        }
        res.send("Logout successfully");
    });
}); 


app.listen(3000);