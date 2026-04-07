const express = require("express");
const dotenv = require("dotenv");
const Groq = require("groq-sdk");

dotenv.config();

const app = express();
app.use(express.json());

const groq=new Groq({
    apiKey:process.env.groq_api
})

app.post("/ask-ai", async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ message: "Prompt required" });
        }

        const response=await groq.chat.completions.create({
            messages:[{role:"user",content:prompt}],
            model:"llama-3.1-8b-instant"
        })
        return res.status(200).json({reply:response.choices[0].message.content})
    } catch (error) {
        console.log("Error 👉", error.message);
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});