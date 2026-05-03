import { GoogleGenAI } from "@google/genai";

async function run() {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || process.env.API_KEY });
    const response = await fetch("https://i.imgur.com/Vuwsp1O.png");
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          inlineData: {
            data: buffer.toString("base64"),
            mimeType: "image/png"
          }
        },
        "Describe this image in extreme detail, focusing on the shapes, colors, lines, gradients, and overall style of the sidebar/graphic. What exactly does it look like? Be very specific about the layout of the curves and lines."
      ]
    });
    
    console.log(result.text);
  } catch (e) {
    console.error(e);
  }
}

run();
