"use client"
import PageHeader from "@/components/PageHeader"
import TabNavigation from "@/components/TabNavigation"
import { Clock } from "lucide-react"

export default function LoansPage() {
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
      <PageHeader title="Business Credit Score" subtitle="Your currentrrent credit score and loan eligibility" />

      <TabNavigation tabs={tabs} defaultTab="loan" />

      <div className="card mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-5xl font-bold mb-2">750</h2>
            <p className="text-gray-600">Credit Score</p>
          </div>

          <div className="w-full md:w-2/3">
            <div className="h-4 bg-gray-200 rounded-full mb-2">
              <div className="h-4 bg-black rounded-full" style={{ width: "75%" }}></div>
            </div>
            <div className="flex justify-between text-sm">
              <span>Poor</span>
              <span>Fair</span>
              <span>Good</span>
              <span>Excellent</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <h2 className="text-xl font-bold mb-4">Loan Default Probability</h2>
          <div className="bg-green-50 p-4 rounded-md flex items-start">
            <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">L</div>
            <div>
              <h3 className="font-medium">Low Risk</h3>
              <p className="text-sm text-gray-600">Based on your credit history and business performance</p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold mb-4">Score Analysis</h2>
          <ul className="space-y-3">
            <li className="flex items-center text-green-600">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Consistent payment history
            </li>
            <li className="flex items-center text-green-600">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Low credit utilization
            </li>
            <li className="flex items-center text-red-600">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9h2v2H9V9zm0-4h2v2H9V5z"
                  clipRule="evenodd"
                />
              </svg>
              Recent credit inquiry
            </li>
          </ul>
        </div>
      </div>

      <div className="card mb-8">
        <h2 className="text-xl font-bold mb-4">Improvement Tips</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <Clock className="w-5 h-5 mr-2 text-yellow-500 mt-0.5" />
            <span>Avoid multiple loan applications in a short period</span>
          </li>
          <li className="flex items-start">
            <Clock className="w-5 h-5 mr-2 text-yellow-500 mt-0.5" />
            <span>Maintain consistent cash flow in business accounts</span>
          </li>
          <li className="flex items-start">
            <Clock className="w-5 h-5 mr-2 text-yellow-500 mt-0.5" />
            <span>Keep business and personal expenses separate</span>
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 className="text-xl font-bold mb-4">Current Loans</h2>
        <p className="text-gray-600 mb-6">Track your active loans and repayment schedule</p>

        <div className="border rounded-md p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Business Expansion Loan</h3>
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">Active</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">Total: ₹500,000</p>

          <h4 className="text-sm font-medium mb-2">Repayment Progress</h4>
          <div className="h-2 bg-gray-200 rounded-full mb-2">
            <div className="h-2 bg-blue-500 rounded-full" style={{ width: "40%" }}></div>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Paid: ₹200,000</span>
            <span>Due: ₹300,000</span>
          </div>

          <div className="mt-4 text-sm text-gray-600 text-right">Next Payment: 4/15/2023</div>
        </div>
      </div>
    </div>
  )
}

