import express from "express";

const app = express();
app.use(express.json());

let employees = [];

app.get("/api/employees", (req, res) => {
  if (employees.length === 0) {
    return res.status(200).send({
      message: "No employees found",
      data: []
    });
  }

  res.status(200).send(employees);
});


app.get("/api/employees/:id", (req, res) => {
  const emp = employees.find(e => e.id == req.params.id);

  if (!emp) {
    return res.status(404).send({
      error: "Employee not found"
    });
  }

  res.status(200).send(emp);
});


app.post("/api/employees", (req, res) => {
  const { name, department, salary } = req.body;
  if (!name || !department || !salary) {
    return res.status(400).send({
      error: "All fields (name, department, salary) are required"
    });
  }

  const newEmployee = {
    id: employees.length + 1,
    name,
    department,
    salary
  };
  employees.push(newEmployee);
  res.status(201).send(newEmployee);
});

app.put("/api/employees/:id", (req, res) => {
  const emp = employees.find(e => e.id == req.params.id);

  if (!emp) {
    return res.status(404).send({
      error: "Employee not found"
    });
  }
  const { name, department, salary } = req.body;

  if (name) emp.name = name;
  if (department) emp.department = department;
  if (salary) emp.salary = salary;

  res.status(200).send(emp);
});


app.delete("/api/employees/:id", (req, res) => {
  const index = employees.findIndex(e => e.id == req.params.id);
  if (index === -1) {
    return res.status(404).send({
      error: "Employee not found"
    });
  }
  employees.splice(index, 1);
  res.status(200).send({
    message: "Employee deleted successfully"
  });
});


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});