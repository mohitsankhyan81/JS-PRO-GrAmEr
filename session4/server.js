const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();

// ✅ Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Session setup
app.use(session({
    secret: "mysecret134",
    resave: false,
    saveUninitialized: true
}));

app.use(express.static("public"));

// ⚠️ Single user (learning purpose)
const user = {};

// SIGNUP
app.post("/signup", (req, res) => {
    const { firstname, password } = req.body;

    if (!firstname || !password) {
        return res.status(400).send("All fields are required");
    }

    user.firstname = firstname;
    user.password = password;

    res.send("User signup successfully");
});

// LOGIN
app.post("/login", (req, res) => {
    const { firstname, password } = req.body;

    if (user.firstname === firstname && user.password === password) {
        req.session.user = firstname;
        return res.redirect("/dashboard");
    }

    res.send("Invalid Credentials");
});

// DASHBOARD (protected route)
app.get("/dashboard", (req, res) => {
    if (req.session.user) {
        return res.sendFile(path.resolve("public/dashboard.html"));
    }

    res.status(401).send("Please login first");
});

// SERVER
app.listen(3000, () => {
    console.log("Server running on port 3000");
});