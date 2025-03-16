"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, CreditCard, DollarSign, Users, Briefcase, TrendingUp } from "lucide-react"
import Dashboard from "@/components/dashboard"
import ExpenseManagement from "@/components/expense-management"
import StockInvestment from "@/components/stock-investment"
import LoanAnalysis from "@/components/loan-analysis"
import Notifications from "@/components/notifications"
import UserProfile from "@/components/user-profile"
import ChatbotComponent from "@/components/chatbot"

export default function Home() {
  const [showChatbot, setShowChatbot] = useState(false)

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col fixed inset-y-0 z-50 border-r bg-card">
        <div className="p-6">
          <h2 className="text-2xl font-bold">ExpenseAI</h2>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <a href="#dashboard" className="flex items-center p-3 text-primary rounded-md hover:bg-accent">
            <DollarSign className="mr-2 h-5 w-5" />
            Dashboard
          </a>
          <a href="#expenses" className="flex items-center p-3 text-muted-foreground rounded-md hover:bg-accent">
            <CreditCard className="mr-2 h-5 w-5" />
            Expenses
          </a>
          <a href="#investments" className="flex items-center p-3 text-muted-foreground rounded-md hover:bg-accent">
            <TrendingUp className="mr-2 h-5 w-5" />
            Investments
          </a>
          <a href="#loans" className="flex items-center p-3 text-muted-foreground rounded-md hover:bg-accent">
            <Briefcase className="mr-2 h-5 w-5" />
            Loans
          </a>
          <a href="#alerts" className="flex items-center p-3 text-muted-foreground rounded-md hover:bg-accent">
            <Bell className="mr-2 h-5 w-5" />
            Alerts
          </a>
          <a href="#profile" className="flex items-center p-3 text-muted-foreground rounded-md hover:bg-accent">
            <Users className="mr-2 h-5 w-5" />
            Profile
          </a>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 md:ml-64 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Business Expense Management</h1>
          <button
            onClick={() => setShowChatbot(!showChatbot)}
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
          >
            {showChatbot ? "Close Assistant" : "AI Assistant"}
          </button>
        </div>

        <Tabs defaultValue="dashboard">
          <TabsList className="mb-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="expenses">Expense Management</TabsTrigger>
            <TabsTrigger value="investments">Stock Investment</TabsTrigger>
            <TabsTrigger value="loans">Loan Analysis</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <Dashboard />
          </TabsContent>

          <TabsContent value="expenses">
            <ExpenseManagement />
          </TabsContent>

          <TabsContent value="investments">
            <StockInvestment />
          </TabsContent>

          <TabsContent value="loans">
            <LoanAnalysis />
          </TabsContent>

          <TabsContent value="alerts">
            <Notifications />
          </TabsContent>

          <TabsContent value="profile">
            <UserProfile />
          </TabsContent>
        </Tabs>
      </div>

      {/* Chatbot */}
      {showChatbot && (
        <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-card border rounded-lg shadow-lg z-50">
          <ChatbotComponent />
        </div>
      )}
    </div>
  )
}

