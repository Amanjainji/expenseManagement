"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { DollarSign, CreditCard, TrendingUp, Briefcase, Bell, User } from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { name: "Dashboard", href: "/", icon: DollarSign },
    { name: "Expenses", href: "/expenses", icon: CreditCard },
    { name: "Investments", href: "/investments", icon: TrendingUp },
    { name: "Loans", href: "/loans", icon: Briefcase },
    { name: "Alerts", href: "/alerts", icon: Bell },
    { name: "Profile", href: "/profile", icon: User },
  ]

  return (
    <aside className="w-64 border-r border-gray-200 min-h-screen bg-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold">ExpenseAI</h1>
      </div>
      <nav className="mt-6">
        <ul className="space-y-2 px-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.name}>
                <Link href={item.href} className={`nav-link ${isActive ? "active" : ""}`}>
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

