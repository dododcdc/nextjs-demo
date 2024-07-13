
import { ChatGroq } from "@langchain/groq";

const model = new ChatGroq({
    model: "mixtral-8x7b-32768",
    temperature: 0,
    apiKey: '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'
});

export const runtime = 'edge'

export async function POST(req: Request) {




    const data = await req.json()

    
    console.log(data.message)

    return await model.stream(
        data.message
    )



}