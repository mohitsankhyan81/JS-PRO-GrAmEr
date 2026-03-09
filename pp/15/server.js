const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url=="/welcome"){
        res.end("My name is mohit");
    }
    if(req.url=="/test"){
        res.end("This is the research page");
    }
})

server.listen(3003,()=>{
    console.log("http://localhost:3003");
})