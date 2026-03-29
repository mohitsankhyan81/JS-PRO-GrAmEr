const express=require("express");

const app=express();
app.use(express.json());
const stud=[
    {name:"kjdf"},
    {name:"dfdf"}
];

// app.use("/",(req,res)=>{
//     res.send("hello");
//     res.end();
// })

app.get("/user",(req,res)=>{
    res.status(200).json({studs:stud})
    console.log(stud)
})


app.listen(4545);