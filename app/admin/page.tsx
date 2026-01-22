"use client"

import { useEffect, useState } from "react"
import { 
  Users, 
  MessageSquare, 
  AlertCircle, 
  HelpCircle,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle
} from "lucide-react"

interface Stats {
  dealerships: { total: number; pending: number }
  contacts: { total: number; unread: number }
  questions: { total: number; waiting: number }
  complaints: { total: number; pending: number }
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    dealerships: { total: 0, pending: 0 },
    contacts: { total: 0, unread: 0 },
    questions: { total: 0, waiting: 0 },
    complaints: { total: 0, pending: 0 }
  })

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch("/api/admin/stats")
      const data = await response.json()
      setStats(data)
    } catch (error) {
      console.error("Error fetching stats:", error)
    }
  }

  const statCards = [
    {
      title: "Bayilik Başvuruları",
      value: stats.dealerships.total,
      subtitle: `${stats.dealerships.pending} beklemede`,
      icon: Users,
      color: "bg-blue-500",
      href: "/admin/dealership"
    },
    {
      title: "İletişim Formları",
      value: stats.contacts.total,
      subtitle: `${stats.contacts.unread} okunmamış`,
      icon: MessageSquare,
      color: "bg-green-500",
      href: "/admin/contact"
    },
    {
      title: "Sorular",
      value: stats.questions.total,
      subtitle: `${stats.questions.waiting} cevaplanmamış`,
      icon: HelpCircle,
      color: "bg-yellow-500",
      href: "/admin/questions"
    },
    {
      title: "Şikayetler",
      value: stats.complaints.total,
      subtitle: `${stats.complaints.pending} beklemede`,
      icon: AlertCircle,
      color: "bg-red-500",
      href: "/admin/complaints"
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Genel bakış ve istatistikler</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => window.location.href = stat.href}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.subtitle}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}