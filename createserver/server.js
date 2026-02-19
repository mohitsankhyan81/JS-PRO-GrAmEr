const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==="/welcome"){
        res.end("<h1>This is the welcome page</h1>");
    }
    else{
        res.end("page not found");
    }
})

const port=3000;
server.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})