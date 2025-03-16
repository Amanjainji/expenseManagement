"use client"

import { Progress } from "@/components/ui/progress"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { CreditCard, Lock, Moon, Sun } from "lucide-react"

export default function UserProfile() {
  const [darkMode, setDarkMode] = useState(false)

  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    company: "Acme Inc.",
    role: "Finance Manager",
  }

  // Mock bank accounts
  const bankAccounts = [
    { id: 1, name: "HDFC Bank", accountNumber: "XXXX-XXXX-1234", type: "Primary" },
    { id: 2, name: "ICICI Bank", accountNumber: "XXXX-XXXX-5678", type: "Secondary" },
  ]

  // Mock budget goals
  const budgetGoals = [
    { id: 1, category: "Office Supplies", limit: 15000, current: 8000 },
    { id: 2, category: "Travel", limit: 25000, current: 22000 },
    { id: 3, category: "Marketing", limit: 50000, current: 30000 },
  ]

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    // In a real app, you would toggle the dark class on the document element
    if (!darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
          <CardDescription>Manage your account information and preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="profile">
            <TabsList className="mb-4">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="accounts">Bank Accounts</TabsTrigger>
              <TabsTrigger value="budget">Budget Goals</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">{user.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {user.role} at {user.company}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue={user.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" defaultValue={user.email} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" defaultValue={user.company} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input id="role" defaultValue={user.role} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="flex space-x-2">
                    <Input id="password" type="password" value="********" readOnly />
                    <Button variant="outline">
                      <Lock className="h-4 w-4 mr-2" />
                      Change
                    </Button>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button>Save Changes</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="accounts">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Connect your bank accounts to automatically track expenses and manage your finances.
                </p>

                {bankAccounts.map((account) => (
                  <div key={account.id} className="flex justify-between items-center p-4 bg-muted rounded-md">
                    <div className="flex items-center">
                      <CreditCard className="h-5 w-5 mr-3 text-primary" />
                      <div>
                        <h3 className="font-medium">{account.name}</h3>
                        <p className="text-sm text-muted-foreground">{account.accountNumber}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{account.type}</Badge>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500">
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}

                <Button className="w-full mt-4">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Add New Bank Account
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="budget">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Set budget goals for different expense categories to better manage your spending.
                </p>

                {budgetGoals.map((goal) => (
                  <div key={goal.id} className="p-4 bg-muted rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">{goal.category}</h3>
                      <div className="text-sm">
                        <span className="font-medium">₹{goal.current.toLocaleString()}</span>
                        <span className="text-muted-foreground"> / ₹{goal.limit.toLocaleString()}</span>
                      </div>
                    </div>
                    <Progress value={(goal.current / goal.limit) * 100} className="h-2" />
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      <span>₹0</span>
                      <span>₹{goal.limit.toLocaleString()}</span>
                    </div>
                  </div>
                ))}

                <Button className="w-full mt-4">Add New Budget Goal</Button>
              </div>
            </TabsContent>

            <TabsContent value="settings">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h3 className="font-medium">Dark Mode</h3>
                    <p className="text-sm text-muted-foreground">Toggle between light and dark themes</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sun className="h-4 w-4" />
                    <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
                    <Moon className="h-4 w-4" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h3 className="font-medium">Email Notifications</h3>
                    <p className="text-sm text-muted-foreground">Receive email updates about your account</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h3 className="font-medium">Two-Factor Authentication</h3>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h3 className="font-medium">Currency</h3>
                    <p className="text-sm text-muted-foreground">Select your preferred currency</p>
                  </div>
                  <select className="p-2 rounded-md border border-input bg-background">
                    <option value="INR">Indian Rupee (₹)</option>
                    <option value="USD">US Dollar ($)</option>
                    <option value="EUR">Euro (€)</option>
                    <option value="GBP">British Pound (£)</option>
                  </select>
                </div>

                <div className="flex justify-end">
                  <Button>Save Settings</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

