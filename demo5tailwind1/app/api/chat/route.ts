
import { ChatGroq } from "@langchain/groq";
import { NextResponse } from "next/server";



export const runtime = 'edge'

export async function POST(req: Request) {

const gg = 'hello'

return new NextResponse(`hello ${gg}`, { status: 200 })




}