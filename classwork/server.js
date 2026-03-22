import express from "express"

const app=express()

const ipCheak=(req,res,next)=>{
    if(req.query.ip==100 ||req.query.ip==100){
        next();
    }
    else{
        res.send("IP not get")
    }
}

const middleware1=(req,res,next)=>{
    console.log("midlleware 1 is called")
    next();
}

const middleware2=(req,res,next)=>{
    console.log("middleware 2 is called")
    next()
}

//global middleware
// app.use(middleware1)
// app.use(middleware2)

//not global middleware
// app.get("/",middleware1,middleware2,(req,res)=>{
//     console.log("This is the app")
//     res.end("hello")
// })

app.get("/test",ipCheak,(req,res)=>{
    console.log("test is providedd")
    res.end();
})
app.listen(3000,()=>{
    console.log(`http://localhost:3000`)
}) 