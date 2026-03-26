import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getChatResponse(message: string, history: { role: "user" | "model"; parts: { text: string }[] }[]) {
  const model = ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [
      ...history.map(h => ({ role: h.role === "user" ? "user" : "model", parts: h.parts })),
      { role: "user", parts: [{ text: message }] }
    ],
    config: {
      systemInstruction: "You are an expert consultant for Google Workspace, Google Cloud, and Google Play. Your goal is to help businesses grow by recommending the right Google services. Be professional, concise, and helpful. If asked about pricing or specific affiliate links, guide them to the relevant sections of the website.",
    }
  });

  const response = await model;
  return response.text;
}
