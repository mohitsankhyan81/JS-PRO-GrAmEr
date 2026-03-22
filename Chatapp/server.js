import express from "express"
import path from "path"
import http from "http"
import { Server } from "socket.io";
const app=express();
app.use(express.static(path.resolve("./public")));
const server=http.createServer(app);
const io=new Server(server);

io.on("connection",(socket)=>{
    socket.on("user-message",(mes)=>{
      io.emit("message",mes)  
    })
})
server.listen(3000,()=>{
    console.log("server run at http://localhost:3000");
})