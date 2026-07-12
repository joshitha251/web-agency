import { GoogleGenAI } from "@google/genai";
import { companyInfo } from "../data/companyInfo";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function askGemini(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `
${companyInfo}

Customer Question:
${prompt}
`,
  });

  return response.text;
}