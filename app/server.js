import express from "express"
import path from "path"
import http from "http"
import { Server } from "socket.io";
const app=express();



const server=http.createServer(app);
app.use(express.static(path.resolve("./public")))
const io=new Server(server)
io.on("connection",(socket)=>{
    socket.on("user-message",(message)=>{
        io.emit("message",message);
    })
})
app.use("/",(req,res)=>{
    return res.sendFile(path.resolve("/public/index.html"))
})
server.listen(3000,()=>{
    console.log("server is running... http://localhost:3000")
})