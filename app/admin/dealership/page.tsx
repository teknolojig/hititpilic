"use client"

import { useEffect, useState } from "react"
import { Building, Mail, Phone, MapPin, Calendar, Eye, CheckCircle, XCircle, Clock } from "lucide-react"

interface DealershipApplication {
  id: string
  fullName: string
  email: string
  phone: string
  companyName: string
  province: string
  district: string
  address: string
  currentBusiness?: string
  monthlyCapacity: string
  references?: string
  additionalInfo?: string
  status: string
  notes?: string
  createdAt: string
}

export default function DealershipApplicationsPage() {
  const [applications, setApplications] = useState<DealershipApplication[]>([])
  const [selectedApplication, setSelectedApplication] = useState<DealershipApplication | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchApplications()
  }, [])

  const fetchApplications = async () => {
    try {
      const response = await fetch("/api/dealership")
      const data = await response.json()
      setApplications(data)
    } catch (error) {
      console.error("Error fetching applications:", error)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id: string, status: string) => {
    try {
      const response = await fetch(`/api/dealership/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status })
      })
      
      if (response.ok) {
        fetchApplications()
        setSelectedApplication(null)
      }
    } catch (error) {
      console.error("Error updating status:", error)
    }
  }

  const getStatusBadge = (status: string) => {
    const badges = {
      pending: { color: "bg-yellow-100 text-yellow-800", icon: Clock, label: "Beklemede" },
      reviewed: { color: "bg-blue-100 text-blue-800", icon: Eye, label: "İncelendi" },
      approved: { color: "bg-green-100 text-green-800", icon: CheckCircle, label: "Onaylandı" },
      rejected: { color: "bg-red-100 text-red-800", icon: XCircle, label: "Reddedildi" }
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

  if (loading) {
    return <div className="flex justify-center items-center h-64">Yükleniyor...</div>
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Bayilik Başvuruları</h1>
        <p className="text-gray-600 mt-2">Toplam {applications.length} başvuru</p>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Başvuran
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Firma
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Konum
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
            {applications.map((app) => (
              <tr key={app.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{app.fullName}</div>
                  <div className="text-sm text-gray-500">{app.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{app.companyName}</div>
                  <div className="text-sm text-gray-500">{app.monthlyCapacity} ton/ay</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{app.province}</div>
                  <div className="text-sm text-gray-500">{app.district}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(app.createdAt).toLocaleDateString("tr-TR")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(app.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => setSelectedApplication(app)}
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
      {selectedApplication && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Başvuru Detayı</h2>
                <button
                  onClick={() => setSelectedApplication(null)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Kişisel Bilgiler</h3>
                    <div className="space-y-2">
                      <p className="text-sm"><strong>Ad Soyad:</strong> {selectedApplication.fullName}</p>
                      <p className="text-sm"><strong>Email:</strong> {selectedApplication.email}</p>
                      <p className="text-sm"><strong>Telefon:</strong> {selectedApplication.phone}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Firma Bilgileri</h3>
                    <div className="space-y-2">
                      <p className="text-sm"><strong>Firma Adı:</strong> {selectedApplication.companyName}</p>
                      <p className="text-sm"><strong>Mevcut İş:</strong> {selectedApplication.currentBusiness || "-"}</p>
                      <p className="text-sm"><strong>Aylık Kapasite:</strong> {selectedApplication.monthlyCapacity} ton</p>
                    </div>
                  </div>

                  <div className="col-span-2">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Adres</h3>
                    <p className="text-sm">{selectedApplication.address}</p>
                    <p className="text-sm">{selectedApplication.district} / {selectedApplication.province}</p>
                  </div>

                  {selectedApplication.references && (
                    <div className="col-span-2">
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Referanslar</h3>
                      <p className="text-sm">{selectedApplication.references}</p>
                    </div>
                  )}

                  {selectedApplication.additionalInfo && (
                    <div className="col-span-2">
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Ek Bilgiler</h3>
                      <p className="text-sm">{selectedApplication.additionalInfo}</p>
                    </div>
                  )}
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-4">Durum Güncelle</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => updateStatus(selectedApplication.id, "reviewed")}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      İncelendi
                    </button>
                    <button
                      onClick={() => updateStatus(selectedApplication.id, "approved")}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      Onayla
                    </button>
                    <button
                      onClick={() => updateStatus(selectedApplication.id, "rejected")}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      Reddet
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