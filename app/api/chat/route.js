import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req) {
  const { messages } = await req.json()

  // System prompt to guide the AI assistant
  const systemPrompt = `
    You are an AI financial assistant for a Business Expense Management System.
    
    You can help with:
    1. Expense tracking and categorization
    2. Budget recommendations based on spending patterns
    3. Investment insights and stock predictions
    4. Loan eligibility analysis and recommendations
    5. Explaining financial reports and metrics
    
    Provide concise, helpful responses focused on business finance.
    If asked about specific data, reference the user's dashboard metrics.
    Always maintain a professional, supportive tone.
  `

  const result = streamText({
    model: openai("gpt-4-turbo"),
    messages,
    system: systemPrompt,
  })

  return result.toDataStreamResponse()
}

