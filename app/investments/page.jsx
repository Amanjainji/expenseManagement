"use client"
import PageHeader from "@/components/PageHeader"
import TabNavigation from "@/components/TabNavigation"
import StatCard from "@/components/StatCard"
import StockPortfolioChart from "@/components/charts/StockPortfolioChart"

// Mock data for charts
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

export default function InvestmentsPage() {
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
      <PageHeader title="Portfolio Overview" subtitle="Track your investment performance over time" />

      <TabNavigation tabs={tabs} defaultTab="stock" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Total Investment" value="₹600,000" />
        <StatCard title="Overall Return" value="+20%" trend="+20%" />
        <StatCard title="Projected Growth" value="₹720,000" />
      </div>

      <div className="card mb-8">
        <h2 className="text-xl font-bold mb-4">Stock Portfolio Trends</h2>
        <StockPortfolioChart data={stockData} />
      </div>

      <div className="card">
        <h2 className="text-xl font-bold mb-4">Stock Price Prediction</h2>
        <p className="text-gray-600 mb-6">AI-powered predictions and recommendations</p>

        <div className="space-y-6">
          <div className="border-b pb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">XYZ Ltd.</h3>
              <div className="text-green-600">+12%</div>
            </div>
            <p className="text-sm text-gray-600">
              Our AI predicts a 12% growth in the next quarter based on market trends and company performance.
            </p>
          </div>

          <div className="border-b pb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">ABC Corp</h3>
              <div className="text-red-600">-5%</div>
            </div>
            <p className="text-sm text-gray-600">
              Consider reducing your position. Recent market volatility suggests a potential decline.
            </p>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">Tech Innovations Inc.</h3>
              <div className="text-green-600">+8%</div>
            </div>
            <p className="text-sm text-gray-600">
              Emerging technology sector shows promise. Consider increasing your position for long-term growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

