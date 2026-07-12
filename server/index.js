import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.options("/chat", cors());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const companyInfo = `
You are the official AI assistant for Business WebWorks.

Business WebWorks builds:
- Business Websites
- Portfolio Websites
- Landing Pages
- Website Redesign
- SEO Friendly Websites

Always answer professionally.
Never make up prices.
If asked about pricing, say it depends on project requirements, but minimum price is 5000 rupees.
`;

app.get("/", (req, res) => {
  res.send("Business WebWorks AI Server is running 🚀");
});

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body || {};

    if (!message || typeof message !== "string" || !message.trim()) {
      return res.status(400).json({ error: "Please enter a message." });
    }

    const prompt = `${companyInfo}\n\nCustomer Question:\n${message}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const reply =
      response?.text ||
      response?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I couldn't generate a reply right now.";

    res.json({ reply });
  } catch (error) {
    console.error("Chat error:", error);

    res.status(500).json({
      error: "Something went wrong while contacting the AI service.",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});