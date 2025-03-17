"use client"
import { useState } from "react"
import PageHeader from "@/components/PageHeader"
import TabNavigation from "@/components/TabNavigation"
import { Lock } from "lucide-react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile")

  const mainTabs = [
    { id: "dashboard", label: "Dashboard" },
    { id: "expense", label: "Expense Management" },
    { id: "stock", label: "Stock Investment" },
    { id: "loan", label: "Loan Analysis" },
    { id: "alerts", label: "Alerts" },
    { id: "profile", label: "Profile" },
  ]

  const profileTabs = [
    { id: "profile", label: "Profile" },
    { id: "bank", label: "Bank Accounts" },
    { id: "budget", label: "Budget Goals" },
    { id: "settings", label: "Settings" },
  ]

  return (
    <div className="p-6">
      <PageHeader title="User Profile" subtitle="Manage your account information and preferences" />

      <TabNavigation tabs={mainTabs} defaultTab="profile" />

      <div className="mb-6">
        <TabNavigation tabs={profileTabs} defaultTab="profile" onChange={setActiveTab} />
      </div>

      <div className="card mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
          <div className="w-24 h-24 bg-black text-white rounded-full flex items-center justify-center text-3xl font-bold">
            JD
          </div>
          <div>
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-gray-600">Finance Manager at Acme Inc.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" defaultValue="John Doe" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              defaultValue="john.doe@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md" defaultValue="Acme Inc." />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              defaultValue="Finance Manager"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input type="password" className="w-full p-2 border border-gray-300 rounded-md" defaultValue="••••••" />
              <button className="absolute right-2 top-2 text-gray-500">
                <Lock size={16} />
              </button>
            </div>
            <button className="text-sm text-blue-600 mt-1">Change</button>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  )
}

