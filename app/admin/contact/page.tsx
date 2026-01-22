"use client"

import { useEffect, useState } from "react"
import { Mail, Phone, Calendar, Eye, CheckCircle, Clock, MessageSquare } from "lucide-react"

interface ContactForm {
  id: string
  fullName: string
  email: string
  phone: string
  subject: string
  message: string
  status: string
  notes?: string
  createdAt: string
}

export default function ContactFormsPage() {
  const [contacts, setContacts] = useState<ContactForm[]>([])
  const [selectedContact, setSelectedContact] = useState<ContactForm | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    try {
      const response = await fetch("/api/contact")
      const data = await response.json()
      setContacts(data)
    } catch (error) {
      console.error("Error fetching contacts:", error)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id: string, status: string) => {
    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status })
      })
      
      if (response.ok) {
        fetchContacts()
        if (selectedContact?.id === id) {
          setSelectedContact({ ...selectedContact, status })
        }
      }
    } catch (error) {
      console.error("Error updating status:", error)
    }
  }

  const getStatusBadge = (status: string) => {
    const badges = {
      unread: { color: "bg-yellow-100 text-yellow-800", icon: Clock, label: "Okunmamış" },
      read: { color: "bg-blue-100 text-blue-800", icon: Eye, label: "Okundu" },
      responded: { color: "bg-green-100 text-green-800", icon: CheckCircle, label: "Cevaplandı" }
    }
    
    const badge = badges[status as keyof typeof badges] || badges.unread
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
        <h1 className="text-3xl font-bold text-gray-900">İletişim Formları</h1>
        <p className="text-gray-600 mt-2">Toplam {contacts.length} mesaj</p>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Gönderen
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Konu
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mesaj
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
            {contacts.map((contact) => (
              <tr key={contact.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{contact.fullName}</div>
                  <div className="text-sm text-gray-500">{contact.email}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{contact.subject}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900 max-w-xs truncate">
                    {contact.message}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(contact.createdAt).toLocaleDateString("tr-TR")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(contact.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => {
                      setSelectedContact(contact)
                      if (contact.status === "unread") {
                        updateStatus(contact.id, "read")
                      }
                    }}
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
      {selectedContact && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Mesaj Detayı</h2>
                <button
                  onClick={() => setSelectedContact(null)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Ad Soyad</h3>
                    <p className="text-sm">{selectedContact.fullName}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Email</h3>
                    <p className="text-sm">{selectedContact.email}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Telefon</h3>
                    <p className="text-sm">{selectedContact.phone}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Tarih</h3>
                    <p className="text-sm">
                      {new Date(selectedContact.createdAt).toLocaleString("tr-TR")}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Konu</h3>
                  <p className="text-sm font-medium">{selectedContact.subject}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Mesaj</h3>
                  <p className="text-sm text-gray-900 whitespace-pre-wrap">{selectedContact.message}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Durum</h3>
                  <div className="mb-3">{getStatusBadge(selectedContact.status)}</div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Durum Güncelle</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => updateStatus(selectedContact.id, "read")}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Okundu
                    </button>
                    <button
                      onClick={() => updateStatus(selectedContact.id, "responded")}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      Cevaplandı
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