const express=require('express');

const app=express();
app.use(express.json());
const user=[
    {id:45,name:"Mohit"},
    {id:33,name:"Sahil"}
]


app.get("/user",(req,res)=>{
    return res.status(200).json({message:"Get User Data: ",user:user});
})

app.get("/user/:id",(req,res)=>{
    const {id}=req.params;

    for(let i=0;i<user.length;i++){
        if(user[i].id==id){
            return res.status(200).json({message:"User geted: ",user:user[i]});
        }
    }
    return res.status(400).json({user:"user not foudn"});
})

app.post("/user",(req,res)=>{
    const {name}=req.body;
    if(!name){
        return res.status(400).json({message:"fill all fields"});
    }
    const newUser={
        id:user.length+1,
        name:name
    }

    user.push(newUser);
    res.status(200).json({message:"user data send successfully",newUser:newUser});
})

app.put("/user/:id",(req,res)=>{
    const {id}=req.params;
    const {name}=req.body;
    for(let i=0;i<user.length;i++){
        if(user[i].id==id){
            if(name){
                user[i].name=name;
            }
            return res.status(200).json({message:"user data updated",user:user[i]})
        }
    }
        return res.status(400).json({message:"user not found"});
})

app.delete("/user/:id",(req,res)=>{
    const {id}=req.params;
    for(let i=0;i<user.length;i++){
        if(user[i].id==id){
            user.slice(i,1);
            return res.status(200).json("User delete successfully");
        }
    }

    return res.status(400).json({message:"User delete successfully"});
})

app.listen(3000);