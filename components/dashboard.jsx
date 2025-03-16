"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, LineChart, PieChart } from "recharts"
import { AlertTriangle, ArrowUpRight, DollarSign, TrendingUp } from "lucide-react"

export default function Dashboard() {
  // Sample data for charts
  const expenseData = {
    labels: ["Food", "Travel", "Office", "Rent", "Misc"],
    datasets: [
      {
        label: "Expenses",
        data: [25000, 18000, 12000, 35000, 10000],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  const stockData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Portfolio Growth",
        data: [10, 15, 13, 18, 21, 25],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        fill: false,
      },
    ],
  }

  const loanData = {
    labels: ["Loan 1", "Loan 2", "Loan 3"],
    datasets: [
      {
        label: "Paid",
        data: [65, 40, 25],
        backgroundColor: "rgba(75, 192, 192, 0.7)",
      },
      {
        label: "Due",
        data: [35, 60, 75],
        backgroundColor: "rgba(255, 99, 132, 0.7)",
      },
    ],
  }

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹500,000</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Investment Growth</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+8%</div>
            <p className="text-xs text-muted-foreground">This quarter</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Loan Risk Score</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">750</div>
            <p className="text-xs text-muted-foreground">Good Credit</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Requires attention</p>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights */}
      <Card>
        <CardHeader>
          <CardTitle>AI Insights</CardTitle>
          <CardDescription>Smart recommendations based on your data</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="p-3 bg-muted rounded-md flex items-start">
            <AlertTriangle className="h-5 w-5 mr-2 text-yellow-500 mt-0.5" />
            <div>
              <p className="font-medium">Your expenses increased by 15% this month.</p>
              <p className="text-sm text-muted-foreground">Consider reviewing your spending in the Food category.</p>
            </div>
          </div>
          <div className="p-3 bg-muted rounded-md flex items-start">
            <TrendingUp className="h-5 w-5 mr-2 text-green-500 mt-0.5" />
            <div>
              <p className="font-medium">Stock AI suggests investing in XYZ Ltd.</p>
              <p className="text-sm text-muted-foreground">
                Our analysis shows a potential 12% growth in the next quarter.
              </p>
            </div>
          </div>
          <div className="p-3 bg-muted rounded-md flex items-start">
            <AlertTriangle className="h-5 w-5 mr-2 text-red-500 mt-0.5" />
            <div>
              <p className="font-medium">You may exceed your budget in Travel category.</p>
              <p className="text-sm text-muted-foreground">
                Currently at 85% of monthly allocation with 10 days remaining.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Expense Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <PieChart
              data={expenseData}
              options={{
                plugins: {
                  legend: {
                    position: "bottom",
                  },
                },
              }}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Stock Portfolio Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart
              data={stockData}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Loan Repayment Tracker</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart
              data={loanData}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                    stacked: true,
                  },
                  x: {
                    stacked: true,
                  },
                },
              }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

