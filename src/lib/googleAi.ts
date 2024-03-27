import { GoogleGenerativeAI } from "@google/generative-ai";

type AIPromptType = {
    category: string
}

export async function generateAiContent ({category}: AIPromptType) {

    try {
        let genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY as string);

        // different models for different generated content
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        
        let prompt = `Provide 10 quiz questions on ${category} for a beginner.`
        
        let result = await model.generateContent([prompt]);
        let data = result.response.candidates?.[0].content.parts[0].text;
        let questions = data?.split('\n')
        return questions
    } catch (err) {
        console.log(err)
    }
    
}
