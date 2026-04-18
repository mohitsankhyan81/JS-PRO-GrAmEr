const express=require("express")
const path=require("path")
const session=require("express-session")
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true
}));

app.use(express.static("public"));

let user = {};

app.post("/signup", (req, res) => {
    const { username, password } = req.body;

    user.username = username;
    user.password = password;

    res.send("Signup successful! Now login.");
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === user.username && password === user.password) {
        req.session.user = username;
        console.log("login successfully")
        res.redirect("/dashboard.html");
    } else {
        res.send("Invalid credentials");
    }
});

app.get("/dashboard.html", (req, res) => {
    if (req.session.user) {
        res.sendFile(path.resolve("public/dashboard.html"));
    } else {
        res.send("Please login first");
    }
});

app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.send("Logged out");
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});