"use client"
import { useState } from "react"
import PageHeader from "@/components/PageHeader"
import TabNavigation from "@/components/TabNavigation"
import StatCard from "@/components/StatCard"
import InsightCard from "@/components/InsightCard"
import ExpenseBreakdownChart from "@/components/charts/ExpenseBreakdownChart"
import StockPortfolioChart from "@/components/charts/StockPortfolioChart"
import LoanRepaymentChart from "@/components/charts/LoanRepaymentChart"
import { AlertTriangle, TrendingUp, AlertCircle } from "lucide-react"

// Mock data for charts
const expenseData = [
  { name: "Food", value: 150000 },
  { name: "Travel", value: 100000 },
  { name: "Office", value: 200000 },
  { name: "Misc", value: 50000 },
]

const stockData = [
  { name: "Jan", value: 500000, projected: 520000 },
  { name: "Feb", value: 520000, projected: 540000 },
  { name: "Mar", value: 540000, projected: 560000 },
  { name: "Apr", value: 560000, projected: 580000 },
  { name: "May", value: 580000, projected: 600000 },
  { name: "Jun", value: 600000, projected: 620000 },
  { name: "Jul", value: 620000, projected: 640000 },
  { name: "Aug", value: 640000, projected: 660000 },
  { name: "Sep", value: 660000, projected: 680000 },
  { name: "Oct", value: 680000, projected: 700000 },
  { name: "Nov", value: 700000, projected: 720000 },
  { name: "Dec", value: 720000, projected: 740000 },
]

const loanData = [
  { name: "Business Expansion", paid: 200000, remaining: 300000 },
  { name: "Equipment Purchase", paid: 150000, remaining: 50000 },
  { name: "Working Capital", paid: 100000, remaining: 100000 },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const tabs = [
    { id: "dashboard", label: "Dashboard" },
    { id: "expense", label: "Expense Management" },
    { id: "stock", label: "Stock Investment" },
    { id: "loan", label: "Loan Analysis" },
    { id: "alerts", label: "Alerts" },
    { id: "profile", label: "Profile" },
  ]

  return (
    <div className="p-6">
      <PageHeader title="Business Expense Management" />

      <TabNavigation tabs={tabs} defaultTab="dashboard" onChange={setActiveTab} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Expenses" value="₹500,000" subtitle="+15% from last month" />
        <StatCard title="Investment Growth" value="+8%" subtitle="This quarter" />
        <StatCard title="Loan Risk Score" value="750" subtitle="Good Credit" />
        <StatCard title="Alerts" value="3" subtitle="Requires attention" />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">AI Insights</h2>
        <p className="text-gray-600 mb-4">Smart recommendations based on your data</p>

        <InsightCard
          type="warning"
          icon={<AlertTriangle size={20} />}
          title="Your expenses increased by 15% this month."
          description="Consider reviewing your spending in the Food category."
        />

        <InsightCard
          type="success"
          icon={<TrendingUp size={20} />}
          title="Stock AI suggests investing in XYZ Ltd."
          description="Our analysis shows a potential 12% growth in the next quarter."
        />

        <InsightCard
          type="danger"
          icon={<AlertCircle size={20} />}
          title="You may exceed your budget in Travel category."
          description="Currently at 85% of monthly allocation with 10 days remaining."
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card">
          <h2 className="text-xl font-bold mb-4">Expense Breakdown</h2>
          <ExpenseBreakdownChart data={expenseData} />
        </div>

        <div className="card">
          <h2 className="text-xl font-bold mb-4">Stock Portfolio Trends</h2>
          <StockPortfolioChart data={stockData} />
        </div>

        <div className="card">
          <h2 className="text-xl font-bold mb-4">Loan Repayment Tracker</h2>
          <LoanRepaymentChart data={loanData} />
        </div>
      </div>
    </div>
  )
}

