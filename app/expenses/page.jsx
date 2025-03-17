"use client"
import { useState } from "react"
import PageHeader from "@/components/PageHeader"
import TabNavigation from "@/components/TabNavigation"
import { Upload } from "lucide-react"

export default function ExpensesPage() {
  const [date, setDate] = useState("")
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")

  const tabs = [
    { id: "dashboard", label: "Dashboard" },
    { id: "expense", label: "Expense Management" },
    { id: "stock", label: "Stock Investment" },
    { id: "loan", label: "Loan Analysis" },
    { id: "alerts", label: "Alerts" },
    { id: "profile", label: "Profile" },
  ]

  const recentExpenses = [
    { id: 1, title: "Team lunch", date: "2023-03-15", category: "Food", amount: 2500 },
    { id: 2, title: "Business trip", date: "2023-03-16", category: "Travel", amount: 5000 },
    { id: 3, title: "Office supplies", date: "2023-03-18", category: "Office", amount: 3500 },
    { id: 4, title: "Miscellaneous", date: "2023-03-20", category: "Misc", amount: 1500 },
    { id: 5, title: "Client dinner", date: "2023-03-22", category: "Food", amount: 3000 },
  ]

  return (
    <div className="p-6">
      <PageHeader
        title="Automated Expense Tracking"
        subtitle="Upload receipts to automatically extract and categorize expenses"
      />

      <TabNavigation tabs={tabs} defaultTab="expense" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="card mb-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <Upload size={48} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">Upload Receipt</h3>
              <p className="text-gray-500 mb-4">Drag and drop your receipt or click to browse</p>
              <button className="btn btn-primary">Select File</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="₹0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select category</option>
              <option value="food">Food</option>
              <option value="travel">Travel</option>
              <option value="office">Office</option>
              <option value="misc">Miscellaneous</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="3"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Recent Expenses</h2>
          <div className="space-y-4">
            {recentExpenses.map((expense) => (
              <div key={expense.id} className="bg-gray-50 p-4 rounded-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{expense.title}</h3>
                    <div className="text-sm text-gray-500">
                      {expense.date} • {expense.category}
                    </div>
                  </div>
                  <div className="font-medium">₹{expense.amount.toLocaleString()}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between">
            <button className="btn btn-secondary">View All</button>
            <button className="btn btn-secondary">Export CSV</button>
          </div>
        </div>
      </div>
    </div>
  )
}

