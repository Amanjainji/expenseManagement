"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart } from "@/components/ui/chart"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, AlertCircle } from "lucide-react"

export default function StockInvestment() {
  // Sample data for stock trends
  const stockTrends = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Portfolio Value",
        data: [500000, 520000, 510000, 540000, 580000, 600000],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.1)",
        tension: 0.1,
        fill: true,
      },
    ],
  }

  // Mock stock data
  const stocks = [
    { id: 1, name: "XYZ Ltd.", current: 1250, change: "+2.5%", prediction: "+10%", recommendation: "Buy" },
    { id: 2, name: "ABC Corp", current: 850, change: "-1.2%", prediction: "-3%", recommendation: "Hold" },
    { id: 3, name: "PQR Inc.", current: 3200, change: "+4.8%", prediction: "+8%", recommendation: "Buy" },
    { id: 4, name: "LMN Tech", current: 950, change: "+0.5%", prediction: "+2%", recommendation: "Hold" },
    { id: 5, name: "EFG Bank", current: 1800, change: "-0.8%", prediction: "+5%", recommendation: "Buy" },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Portfolio Overview</CardTitle>
          <CardDescription>Track your investment performance over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <LineChart
              data={stockTrends}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: false,
                  },
                },
              }}
            />
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-muted p-4 rounded-md">
              <p className="text-sm text-muted-foreground">Total Investment</p>
              <p className="text-2xl font-bold">₹600,000</p>
            </div>
            <div className="bg-muted p-4 rounded-md">
              <p className="text-sm text-muted-foreground">Overall Return</p>
              <p className="text-2xl font-bold text-green-500">+20%</p>
            </div>
            <div className="bg-muted p-4 rounded-md">
              <p className="text-sm text-muted-foreground">Projected Growth</p>
              <p className="text-2xl font-bold">₹720,000</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Stock Price Prediction</CardTitle>
          <CardDescription>AI-powered predictions and recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {stocks.map((stock) => (
              <div key={stock.id} className="flex items-center justify-between p-4 bg-muted rounded-md">
                <div>
                  <div className="flex items-center">
                    <h3 className="font-medium">{stock.name}</h3>
                    <Badge className={`ml-2 ${stock.change.startsWith("+") ? "bg-green-500" : "bg-red-500"}`}>
                      {stock.change}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Current: ₹{stock.current}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end">
                    <p className="font-medium mr-1">Prediction:</p>
                    {stock.prediction.startsWith("+") ? (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    )}
                    <span className={`ml-1 ${stock.prediction.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                      {stock.prediction}
                    </span>
                  </div>
                  <Badge
                    className={`mt-1 ${stock.recommendation === "Buy" ? "bg-green-500" : stock.recommendation === "Sell" ? "bg-red-500" : "bg-yellow-500"}`}
                  >
                    {stock.recommendation}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 border border-yellow-200 bg-yellow-50 rounded-md flex items-start">
            <AlertCircle className="h-5 w-5 mr-2 text-yellow-500 mt-0.5" />
            <div>
              <p className="font-medium">AI Investment Insight</p>
              <p className="text-sm">
                XYZ Ltd. is expected to grow by 10% in the next quarter based on market trends and company performance.
                Consider investing if it aligns with your risk profile.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

