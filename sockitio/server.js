import express from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";
const app = express();

app.use(express.static(path.resolve("./public")));

const server = http.createServer(app);

const io=new Server(server);

io.on("connection",(socket)=>{
    socket.on("user-message",(mes)=>{
        io.emit("message",mes)
    })
})
app.use("/", (req, res) => {
    return res.sendFile(path.join("./public/index.html"));
});

server.listen(9000, () => {
    console.log("server run at http://localhost:9000");
});