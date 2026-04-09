import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const studdata = [
  { name: "mohit", age: 45 },
  { name: "rohit", age: 43 }
];

app.set("view engine", "ejs");

// app.set("views", "./"); 

app.get("/students", (req, res) => {
  res.render("home", { studdata });
});

app.listen(2000, () => {
  console.log("Server running on port 2000");
});