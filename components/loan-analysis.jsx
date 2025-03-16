"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle, XCircle } from "lucide-react"

export default function LoanAnalysis() {
  // Mock loan data
  const creditScore = 750
  const maxScore = 900
  const scorePercentage = (creditScore / maxScore) * 100

  const loans = [
    {
      id: 1,
      name: "Business Expansion Loan",
      amount: 500000,
      paid: 200000,
      due: 300000,
      nextPayment: "2023-04-15",
      status: "Active",
    },
    {
      id: 2,
      name: "Equipment Financing",
      amount: 300000,
      paid: 150000,
      due: 150000,
      nextPayment: "2023-04-20",
      status: "Active",
    },
    {
      id: 3,
      name: "Working Capital Loan",
      amount: 200000,
      paid: 200000,
      due: 0,
      nextPayment: null,
      status: "Completed",
    },
  ]

  const eligibleLoans = [
    { id: 1, name: "Business Growth Loan", amount: 500000, interest: "10%", term: "3 years", probability: "High" },
    { id: 2, name: "Equipment Upgrade Loan", amount: 300000, interest: "8.5%", term: "2 years", probability: "Medium" },
    { id: 3, name: "Short-term Working Capital", amount: 200000, interest: "12%", term: "1 year", probability: "High" },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Business Credit Score</CardTitle>
          <CardDescription>Your current credit score and loan eligibility</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="text-center mb-4">
                <h3 className="text-4xl font-bold">{creditScore}</h3>
                <p className="text-sm text-muted-foreground">Credit Score</p>
              </div>
              <Progress value={scorePercentage} className="h-2 mb-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Poor</span>
                <span>Fair</span>
                <span>Good</span>
                <span>Excellent</span>
              </div>

              <div className="mt-6 p-4 bg-muted rounded-md">
                <h4 className="font-medium mb-2">Score Analysis</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                    <span>Consistent payment history</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                    <span>Low credit utilization</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 mr-2 text-red-500" />
                    <span>Recent credit inquiry</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="font-medium mb-4">Loan Default Probability</h3>
              <div className="p-4 bg-green-50 border border-green-200 rounded-md mb-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold mr-3">
                    L
                  </div>
                  <div>
                    <p className="font-medium">Low Risk</p>
                    <p className="text-sm text-muted-foreground">
                      Based on your credit history and business performance
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="font-medium mb-2 mt-6">Improvement Tips</h3>
              <ul className="space-y-2">
                <li className="text-sm flex items-start">
                  <AlertCircle className="h-4 w-4 mr-2 text-yellow-500 mt-0.5" />
                  <span>Avoid multiple loan applications in a short period</span>
                </li>
                <li className="text-sm flex items-start">
                  <AlertCircle className="h-4 w-4 mr-2 text-yellow-500 mt-0.5" />
                  <span>Maintain consistent cash flow in business accounts</span>
                </li>
                <li className="text-sm flex items-start">
                  <AlertCircle className="h-4 w-4 mr-2 text-yellow-500 mt-0.5" />
                  <span>Keep business and personal expenses separate</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Current Loans</CardTitle>
          <CardDescription>Track your active loans and repayment schedule</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {loans.map((loan) => (
              <div key={loan.id} className="p-4 bg-muted rounded-md">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">{loan.name}</h3>
                    <p className="text-sm text-muted-foreground">Total: ₹{loan.amount.toLocaleString()}</p>
                  </div>
                  <Badge className={loan.status === "Active" ? "bg-blue-500" : "bg-green-500"}>{loan.status}</Badge>
                </div>

                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Repayment Progress</span>
                    <span>{Math.round((loan.paid / loan.amount) * 100)}%</span>
                  </div>
                  <Progress value={(loan.paid / loan.amount) * 100} className="h-2" />
                </div>

                <div className="flex justify-between text-sm">
                  <div>
                    <span className="text-muted-foreground">Paid: </span>
                    <span className="font-medium">₹{loan.paid.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Due: </span>
                    <span className="font-medium">₹{loan.due.toLocaleString()}</span>
                  </div>
                  {loan.nextPayment && (
                    <div>
                      <span className="text-muted-foreground">Next Payment: </span>
                      <span className="font-medium">{new Date(loan.nextPayment).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Loan Eligibility</CardTitle>
          <CardDescription>AI-based loan recommendations for your business</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {eligibleLoans.map((loan) => (
              <div key={loan.id} className="p-4 bg-muted rounded-md">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">{loan.name}</h3>
                    <p className="text-sm text-muted-foreground">Amount: ₹{loan.amount.toLocaleString()}</p>
                  </div>
                  <Badge
                    className={
                      loan.probability === "High"
                        ? "bg-green-500"
                        : loan.probability === "Medium"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                    }
                  >
                    {loan.probability} Approval
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                  <div>
                    <span className="text-muted-foreground">Interest Rate: </span>
                    <span className="font-medium">{loan.interest}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Term: </span>
                    <span className="font-medium">{loan.term}</span>
                  </div>
                </div>

                <Button size="sm">Apply Now</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

