// index.js
const express = require("express");
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();

const app = express();
app.use(express.json()); // 🔥 important

// 🔐 Gemini API init
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// 🤖 AI Route
app.post("/ask-ai", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash"
});

    const result = await model.generateContent(prompt);
    const response = result.response;

    res.json({ reply: response.text() });

  } catch (error) {
    console.error("AI ERROR:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// 🚀 Server start
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});