
import { GoogleGenAI } from "@google/genai";

// Always use process.env.API_KEY directly for initialization with the named parameter apiKey
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getChatResponse = async (message: string, history: { role: string, parts: any[] }[]) => {
  try {
    // The Gemini API requires the first turn in a multi-turn conversation to be 'user'.
    // If our history starts with a hardcoded 'model' message, we remove it to ensure the API call is valid.
    const validHistory = history.filter((h, index) => {
      if (index === 0 && h.role === 'model') return false;
      return true;
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...validHistory,
        {
          role: 'user',
          parts: [{ text: message }]
        }
      ],
      config: {
        // Correct use of systemInstruction within the config object
        systemInstruction: "Vous êtes l'assistant IA de MKM Rénov, une entreprise de charpente et gros œuvre à Valras-Plage, Hérault. Votre but est d'aider les clients avec leurs questions sur la charpente, la couverture, et de les encourager à demander un devis gratuit. Soyez professionnel, accueillant et expert. Répondez en français.",
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      }
    });

    // Access the generated text using the .text property directly
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Désolé, je rencontre une petite difficulté technique. N'hésitez pas à nous appeler directement au 04 67 XX XX XX.";
  }
};
