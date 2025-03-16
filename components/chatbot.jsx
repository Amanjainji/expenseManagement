"use client"

import { useRef, useEffect } from "react"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, Bot, User, X } from "lucide-react"

export default function ChatbotComponent() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()
  const messagesEndRef = useRef(null)

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="flex flex-col h-full">
      <CardHeader className="px-4 py-3 border-b flex justify-between items-center">
        <CardTitle className="text-lg flex items-center">
          <Bot className="h-5 w-5 mr-2" />
          Financial Assistant
        </CardTitle>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Welcome message */}
        {messages.length === 0 && (
          <div className="bg-muted p-4 rounded-lg">
            <p className="font-medium">Hello! 👋</p>
            <p className="text-sm mt-1">I'm your AI financial assistant. I can help you with:</p>
            <ul className="text-sm mt-2 space-y-1 list-disc list-inside">
              <li>Expense tracking and categorization</li>
              <li>Budget recommendations</li>
              <li>Investment insights</li>
              <li>Loan eligibility analysis</li>
              <li>Financial report explanations</li>
            </ul>
            <p className="text-sm mt-2">How can I assist you today?</p>
          </div>
        )}

        {/* Chat messages */}
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
              }`}
            >
              <div className="flex items-center mb-1">
                {message.role === "user" ? (
                  <>
                    <span className="font-medium">You</span>
                    <User className="h-4 w-4 ml-1" />
                  </>
                ) : (
                  <>
                    <Bot className="h-4 w-4 mr-1" />
                    <span className="font-medium">AI Assistant</span>
                  </>
                )}
              </div>
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}

        {/* Loading indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] p-3 rounded-lg bg-muted">
              <div className="flex items-center mb-1">
                <Bot className="h-4 w-4 mr-1" />
                <span className="font-medium">AI Assistant</span>
              </div>
              <div className="flex space-x-1 mt-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }}></div>
                <div
                  className="h-2 w-2 rounded-full bg-primary animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
                <div
                  className="h-2 w-2 rounded-full bg-primary animate-bounce"
                  style={{ animationDelay: "600ms" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </CardContent>

      <div className="p-4 border-t">
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask me anything about your finances..."
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  )
}

