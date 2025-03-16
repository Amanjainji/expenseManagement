"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Bell, CheckCircle, TrendingUp, CreditCard } from "lucide-react"

export default function Notifications() {
  // Mock notifications data
  const notifications = [
    {
      id: 1,
      type: "fraud",
      title: "Suspicious transaction detected",
      description: "A transaction of ₹25,000 on March 15th has been flagged as potentially fraudulent.",
      date: "2 hours ago",
      icon: AlertTriangle,
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      id: 2,
      type: "budget",
      title: "Budget warning",
      description:
        "You have exceeded your travel budget by 20%. Consider adjusting your spending for the rest of the month.",
      date: "1 day ago",
      icon: Bell,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      id: 3,
      type: "stock",
      title: "Stock alert",
      description: "Tesla stock is up 5% today. This might be a good opportunity to review your investment strategy.",
      date: "2 days ago",
      icon: TrendingUp,
      color: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      id: 4,
      type: "loan",
      title: "Loan payment reminder",
      description:
        "Your EMI of ₹12,000 for Business Expansion Loan is due tomorrow. Ensure sufficient balance in your account.",
      date: "2 days ago",
      icon: CreditCard,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      id: 5,
      type: "expense",
      title: "Expense approved",
      description:
        "Your expense claim of ₹8,500 for office supplies has been approved and will be processed within 2 business days.",
      date: "3 days ago",
      icon: CheckCircle,
      color: "text-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
  ]

  // Notification preferences
  const preferences = [
    { id: 1, type: "Fraud Alerts", email: true, push: true, sms: true },
    { id: 2, type: "Budget Warnings", email: true, push: true, sms: false },
    { id: 3, type: "Stock Alerts", email: true, push: false, sms: false },
    { id: 4, type: "Loan Reminders", email: true, push: true, sms: true },
    { id: 5, type: "Expense Approvals", email: true, push: false, sms: false },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
          <CardDescription>Stay updated with important alerts and reminders</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 border rounded-md ${notification.bgColor} ${notification.borderColor}`}
              >
                <div className="flex items-start">
                  <notification.icon className={`h-5 w-5 mr-3 mt-0.5 ${notification.color}`} />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{notification.title}</h3>
                      <span className="text-xs text-muted-foreground">{notification.date}</span>
                    </div>
                    <p className="text-sm mt-1">{notification.description}</p>
                    <div className="mt-2 flex space-x-2">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                      <Button size="sm" variant="ghost">
                        Dismiss
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>Customize how you receive alerts and notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border rounded-md divide-y">
            <div className="grid grid-cols-4 p-3 font-medium bg-muted">
              <div>Notification Type</div>
              <div className="text-center">Email</div>
              <div className="text-center">Push</div>
              <div className="text-center">SMS</div>
            </div>
            {preferences.map((pref) => (
              <div key={pref.id} className="grid grid-cols-4 p-3 items-center">
                <div>{pref.type}</div>
                <div className="flex justify-center">
                  <input type="checkbox" defaultChecked={pref.email} className="h-4 w-4" />
                </div>
                <div className="flex justify-center">
                  <input type="checkbox" defaultChecked={pref.push} className="h-4 w-4" />
                </div>
                <div className="flex justify-center">
                  <input type="checkbox" defaultChecked={pref.sms} className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-end">
            <Button>Save Preferences</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

