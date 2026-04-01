const express=require("express");

const app=express();
app.use(express.json());
const stud=[
    {id:1,name:"krish"},
    {id:2,name:"mohit"}
];

app.get("/home/:id",(req,res)=>{
    const {id}=req.params;
    console.log(id)
    console.log(stud[0].id);
    if(id==stud[0].id){
        console.log(stud[0].name);
    }
    else{
        return res.status(400).json({error:"student not found"})
    }
})

app.get("/user",(req,res)=>{
    res.status(200).json({studs:stud})
    console.log(stud)
})

const middleware=(req,res,next)=>{
    console.log("hello");
    next();
}

app.post("/test",middleware,(req,res)=>{
    // const newmember={
    //     id:stud.length+1,
    //     name:"robin"
    // }

    // stud.push(newmember);
    // console.log(stud);
    // return res.status(200).json({newmember:newmember})
    const data=[];
    const {name,age}=req.body;
    if(!name || !age){
        res.status(400).json({message:"all fields required"});
    }
    const newdata={
        name:name,
        age:age
    }
    data.push(newdata);
    console.log(data);
    res.status(200).json({message:"create succesfully",newdata:newdata});
})

app.put("/user/:id",(req,res)=>{
    const {id}=req.params;
    console.log(id);
    const {name}=req.body;
    for(let i=0;i<stud.length;i++){
        if(id==stud[i].id){
            if(name){stud[i].name=name;}
        }
    }
    res.status(200).json({message:"update successfully",stud:stud});
})

app.listen(4545);