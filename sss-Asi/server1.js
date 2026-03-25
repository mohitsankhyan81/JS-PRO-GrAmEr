import path from "path";
import express from "express"

const app=express();
app.get("/send", (req, res) => {
  res.send("Simple text response");
});


app.get("/status", (req, res) => {
  res.status(201).send("Created using res.send()");
});

app.get("/redirect", (req, res) => {
  res.redirect("/send");
});

app.get("/file", (req, res) => {
  res.sendFile(path.join("./public/index.html"));
});

app.listen(3434,()=>{
    console.log("http://localhost:3434")
})