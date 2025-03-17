"use client"
import PageHeader from "@/components/PageHeader"
import TabNavigation from "@/components/TabNavigation"
import AlertCard from "@/components/AlertCard"

export default function AlertsPage() {
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
      <PageHeader title="Recent Notifications" subtitle="Stay updated with important alerts and reminders" />

      <TabNavigation tabs={tabs} defaultTab="alerts" />

      <div className="space-y-4">
        <AlertCard
          type="danger"
          title="Suspicious transaction detected"
          message="A transaction of ₹25,000 on March 15th has been flagged as potentially fraudulent."
          time="2 hours ago"
          actions={
            <>
              <button className="btn btn-secondary">View Details</button>
              <button className="btn btn-secondary">Dismiss</button>
            </>
          }
        />

        <AlertCard
          type="warning"
          title="Budget warning"
          message="You have exceeded your travel budget by 20%. Consider adjusting your spending for the rest of the month."
          time="1 day ago"
          actions={
            <>
              <button className="btn btn-secondary">View Details</button>
              <button className="btn btn-secondary">Dismiss</button>
            </>
          }
        />

        <AlertCard
          type="success"
          title="Stock alert"
          message="Tesla stock is up 5% today. This might be a good opportunity to review your investment strategy."
          time="2 days ago"
          actions={
            <>
              <button className="btn btn-secondary">View Details</button>
              <button className="btn btn-secondary">Dismiss</button>
            </>
          }
        />

        <AlertCard
          type="info"
          title="Loan payment reminder"
          message="Your EMI of ₹12,000 for Business Expansion Loan is due tomorrow. Ensure sufficient balance in your account."
          time="2 days ago"
          actions={
            <>
              <button className="btn btn-secondary">View Details</button>
              <button className="btn btn-secondary">Dismiss</button>
            </>
          }
        />
      </div>
    </div>
  )
}

