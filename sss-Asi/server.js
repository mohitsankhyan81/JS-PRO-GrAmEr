import express from "express";
const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "Mohit" },
  { id: 2, name: "Rahul" }
];

app.get("/users", (req, res) => {
  res.status(200).send({
    success: true,
    message: "All users fetched",
    data: users
  });
});

app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);

  if (!user) {
    return res.status(404).send({
      success: false,
      message: "User not found"
    });
  }

  res.status(200).send({
    success: true,
    data: user
  });
});

app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };

  users.push(newUser);

  res.status(201).send({
    success: true,
    message: "User created",
    data: newUser
  });
});

app.put("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) {
    return res.status(404).send({
      success: false,
      message: "User not found"
    });
  }

  user.name = req.body.name;

  res.status(200).send({
    success: true,
    message: "User updated",
    data: user
  });
});

app.delete("/users/:id", (req, res) => {
  const index = users.findIndex(u => u.id == req.params.id);

  if (index === -1) {
    return res.status(404).send({
      success: false,
      message: "User not found"
    });
  }

  const deletedUser = users.splice(index, 1);

  res.status(200).send({
    success: true,
    message: "User deleted",
    data: deletedUser
  });
});

app.listen(4000,()=>{
    console.log("http://localhost:4000")
})