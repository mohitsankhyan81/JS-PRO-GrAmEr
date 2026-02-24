const http=require("http")

const server=http.createServer((req,res)=>{
    if(req.url=="/" && req.method=="GET"){
        res.end("Home Page");
    }
    else if(req.url=="/welcome" && req.method=="GET"){
        res.end("This is the welcome page");
    }
    else{
        res.end("This is the 404 page");
    }
})

const port=3445;
server.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})