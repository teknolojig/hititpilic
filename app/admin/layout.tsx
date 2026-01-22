"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut, useSession } from "next-auth/react"
import { 
  Home, 
  Users, 
  MessageSquare, 
  AlertCircle, 
  HelpCircle, 
  Mail,
  LogOut,
  Menu,
  X,
  Building
} from "lucide-react"

const menuItems = [
  { href: "/admin", label: "Dashboard", icon: Home },
  { href: "/admin/dealership", label: "Bayilik Başvuruları", icon: Building },
  { href: "/admin/contact", label: "İletişim Formları", icon: Mail },
  { href: "/admin/questions", label: "Sorular", icon: HelpCircle },
  { href: "/admin/complaints", label: "Şikayetler", icon: AlertCircle },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const { data: session } = useSession()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Login sayfasında layout gösterme
  if (pathname === "/admin/login") {
    return children
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 bg-white rounded-md shadow-md"
        >
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 bg-[#e74210]">
            <h1 className="text-white text-xl font-bold">Hitit Admin</h1>
          </div>
          
          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-[#e74210] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>
          
          <div className="border-t p-4">
            <div className="mb-3 text-sm text-gray-600">
              {session?.user?.email}
            </div>
            <button
              onClick={() => signOut()}
              className="flex items-center gap-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Çıkış Yap</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:ml-64">
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}