"use client"

import { useEffect, useState } from "react"
import { AlertCircle, Calendar, Clock, CheckCircle, XCircle, Search } from "lucide-react"

interface Complaint {
  id: string
  fullName: string
  email: string
  phone: string
  orderNumber?: string
  productName: string
  complaintType: string
  description: string
  status: string
  notes?: string
  createdAt: string
}

export default function ComplaintsPage() {
  const [complaints, setComplaints] = useState<Complaint[]>([])
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchComplaints()
  }, [])

  const fetchComplaints = async () => {
    try {
      const response = await fetch("/api/complaints")
      const data = await response.json()
      setComplaints(data)
    } catch (error) {
      console.error("Error fetching complaints:", error)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id: string, status: string) => {
    try {
      const response = await fetch(`/api/complaints/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status })
      })
      
      if (response.ok) {
        fetchComplaints()
        setSelectedComplaint(null)
      }
    } catch (error) {
      console.error("Error updating status:", error)
    }
  }

  const getStatusBadge = (status: string) => {
    const badges = {
      pending: { color: "bg-yellow-100 text-yellow-800", icon: Clock, label: "Beklemede" },
      investigating: { color: "bg-blue-100 text-blue-800", icon: Search, label: "İnceleniyor" },
      resolved: { color: "bg-green-100 text-green-800", icon: CheckCircle, label: "Çözümlendi" },
      closed: { color: "bg-gray-100 text-gray-800", icon: XCircle, label: "Kapatıldı" }
    }
    
    const badge = badges[status as keyof typeof badges] || badges.pending
    const Icon = badge.icon
    
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${badge.color}`}>
        <Icon className="w-3 h-3" />
        {badge.label}
      </span>
    )
  }

  const getTypeBadge = (type: string) => {
    const colors: { [key: string]: string } = {
      "kalite": "bg-red-100 text-red-800",
      "teslimat": "bg-orange-100 text-orange-800",
      "fiyat": "bg-yellow-100 text-yellow-800",
      "musteri-hizmetleri": "bg-blue-100 text-blue-800",
      "diger": "bg-gray-100 text-gray-800"
    }
    
    const labels: { [key: string]: string } = {
      "kalite": "Kalite",
      "teslimat": "Teslimat",
      "fiyat": "Fiyat",
      "musteri-hizmetleri": "Müşteri Hizmetleri",
      "diger": "Diğer"
    }
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[type] || colors.diger}`}>
        {labels[type] || type}
      </span>
    )
  }

  if (loading) {
    return <div className="flex justify-center items-center h-64">Yükleniyor...</div>
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Şikayetler</h1>
        <p className="text-gray-600 mt-2">Toplam {complaints.length} şikayet</p>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Şikayetçi
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ürün
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tip
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tarih
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Durum
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                İşlemler
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {complaints.map((complaint) => (
              <tr key={complaint.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{complaint.fullName}</div>
                  <div className="text-sm text-gray-500">{complaint.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{complaint.productName}</div>
                  {complaint.orderNumber && (
                    <div className="text-xs text-gray-500">#{complaint.orderNumber}</div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getTypeBadge(complaint.complaintType)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(complaint.createdAt).toLocaleDateString("tr-TR")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(complaint.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => setSelectedComplaint(complaint)}
                    className="text-[#e74210] hover:text-[#d63a0a]"
                  >
                    Detay
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail Modal */}
      {selectedComplaint && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Şikayet Detayı</h2>
                <button
                  onClick={() => setSelectedComplaint(null)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Ad Soyad</h3>
                    <p className="text-sm">{selectedComplaint.fullName}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Email</h3>
                    <p className="text-sm">{selectedComplaint.email}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Telefon</h3>
                    <p className="text-sm">{selectedComplaint.phone}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Tarih</h3>
                    <p className="text-sm">
                      {new Date(selectedComplaint.createdAt).toLocaleString("tr-TR")}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Ürün</h3>
                  <p className="text-sm">{selectedComplaint.productName}</p>
                  {selectedComplaint.orderNumber && (
                    <p className="text-xs text-gray-600">Sipariş No: {selectedComplaint.orderNumber}</p>
                  )}
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Şikayet Tipi</h3>
                  {getTypeBadge(selectedComplaint.complaintType)}
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Açıklama</h3>
                  <p className="text-sm text-gray-900 whitespace-pre-wrap">{selectedComplaint.description}</p>
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Durum Güncelle</h3>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      onClick={() => updateStatus(selectedComplaint.id, "investigating")}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      İnceleniyor
                    </button>
                    <button
                      onClick={() => updateStatus(selectedComplaint.id, "resolved")}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      Çözümlendi
                    </button>
                    <button
                      onClick={() => updateStatus(selectedComplaint.id, "closed")}
                      className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                    >
                      Kapat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}