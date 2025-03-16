"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart } from "recharts"
import { Upload, FileText, Download } from "lucide-react"

export default function ExpenseManagement() {
  const [file, setFile] = useState(null)

  // Sample data for charts
  const budgetVsActual = {
    labels: ["Food", "Travel", "Office", "Rent", "Utilities", "Misc"],
    datasets: [
      {
        label: "Budget",
        data: [30000, 20000, 15000, 40000, 10000, 15000],
        backgroundColor: "rgba(75, 192, 192, 0.7)",
      },
      {
        label: "Actual",
        data: [25000, 18000, 12000, 40000, 8000, 17000],
        backgroundColor: "rgba(255, 99, 132, 0.7)",
      },
    ],
  }

  const monthlyTrends = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Expenses",
        data: [120000, 110000, 130000, 125000, 140000, 135000],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        fill: false,
      },
    ],
  }

  // Mock expenses data
  const expenses = [
    { id: 1, date: "2023-03-15", category: "Food", amount: 2500, description: "Team lunch" },
    { id: 2, date: "2023-03-16", category: "Travel", amount: 5000, description: "Business trip" },
    { id: 3, date: "2023-03-18", category: "Office", amount: 3500, description: "Office supplies" },
    { id: 4, date: "2023-03-20", category: "Misc", amount: 1500, description: "Miscellaneous" },
    { id: 5, date: "2023-03-22", category: "Food", amount: 3000, description: "Client dinner" },
  ]

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      // In a real app, you would process the file here
      // For example, send it to an OCR service to extract expense details
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Automated Expense Tracking</CardTitle>
          <CardDescription>Upload receipts to automatically extract and categorize expenses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-medium mb-2">Upload Receipt</h3>
                <p className="text-sm text-muted-foreground mb-4">Drag and drop your receipt or click to browse</p>
                <Input
                  type="file"
                  className="hidden"
                  id="receipt-upload"
                  onChange={handleFileUpload}
                  accept="image/*,.pdf"
                />
                <Button asChild>
                  <Label htmlFor="receipt-upload">Select File</Label>
                </Button>
                {file && <p className="mt-2 text-sm text-muted-foreground">Selected: {file.name}</p>}
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount</Label>
                    <Input id="amount" type="number" placeholder="₹0.00" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <select className="w-full p-2 rounded-md border border-input bg-background">
                    <option value="">Select category</option>
                    <option value="food">Food</option>
                    <option value="travel">Travel</option>
                    <option value="office">Office</option>
                    <option value="rent">Rent</option>
                    <option value="utilities">Utilities</option>
                    <option value="misc">Miscellaneous</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Input id="description" placeholder="Enter description" />
                </div>
                <Button className="w-full">Add Expense</Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Recent Expenses</h3>
              <div className="space-y-2">
                {expenses.map((expense) => (
                  <div key={expense.id} className="flex justify-between items-center p-3 bg-muted rounded-md">
                    <div>
                      <p className="font-medium">{expense.description}</p>
                      <p className="text-sm text-muted-foreground">
                        {expense.date} • {expense.category}
                      </p>
                    </div>
                    <p className="font-medium">₹{expense.amount.toLocaleString()}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-between">
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  View All
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export CSV
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Expense Visualization</CardTitle>
          <CardDescription>Visual representation of your spending patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="budget">
            <TabsList className="mb-4">
              <TabsTrigger value="budget">Budget vs Actual</TabsTrigger>
              <TabsTrigger value="trends">Monthly Trends</TabsTrigger>
            </TabsList>
            <TabsContent value="budget">
              <div className="h-80">
                <BarChart
                  data={budgetVsActual}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </div>
            </TabsContent>
            <TabsContent value="trends">
              <div className="h-80">
                <LineChart
                  data={monthlyTrends}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

