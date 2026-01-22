"use client"

import { useEffect, useState } from "react"
import { HelpCircle, Calendar, Eye, CheckCircle, Clock, MessageSquare } from "lucide-react"

interface Question {
  id: string
  fullName: string
  email: string
  phone?: string
  category: string
  question: string
  answer?: string
  status: string
  createdAt: string
}

export default function QuestionsPage() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null)
  const [answer, setAnswer] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchQuestions()
  }, [])

  const fetchQuestions = async () => {
    try {
      const response = await fetch("/api/questions")
      const data = await response.json()
      setQuestions(data)
    } catch (error) {
      console.error("Error fetching questions:", error)
    } finally {
      setLoading(false)
    }
  }

  const submitAnswer = async (id: string) => {
    try {
      const response = await fetch(`/api/questions/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answer, status: "answered" })
      })
      
      if (response.ok) {
        fetchQuestions()
        setSelectedQuestion(null)
        setAnswer("")
      }
    } catch (error) {
      console.error("Error submitting answer:", error)
    }
  }

  const getStatusBadge = (status: string) => {
    const badges = {
      waiting: { color: "bg-yellow-100 text-yellow-800", icon: Clock, label: "Bekliyor" },
      answered: { color: "bg-green-100 text-green-800", icon: CheckCircle, label: "Cevaplandı" }
    }
    
    const badge = badges[status as keyof typeof badges] || badges.waiting
    const Icon = badge.icon
    
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${badge.color}`}>
        <Icon className="w-3 h-3" />
        {badge.label}
      </span>
    )
  }

  const getCategoryBadge = (category: string) => {
    const colors: { [key: string]: string } = {
      "genel": "bg-blue-100 text-blue-800",
      "urunler": "bg-purple-100 text-purple-800",
      "bayilik": "bg-indigo-100 text-indigo-800",
      "diger": "bg-gray-100 text-gray-800"
    }
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[category] || colors.diger}`}>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </span>
    )
  }

  if (loading) {
    return <div className="flex justify-center items-center h-64">Yükleniyor...</div>
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Sorular</h1>
        <p className="text-gray-600 mt-2">Toplam {questions.length} soru</p>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Soran
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Kategori
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Soru
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
            {questions.map((q) => (
              <tr key={q.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{q.fullName}</div>
                  <div className="text-sm text-gray-500">{q.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getCategoryBadge(q.category)}
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900 max-w-xs truncate">
                    {q.question}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(q.createdAt).toLocaleDateString("tr-TR")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(q.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => setSelectedQuestion(q)}
                    className="text-[#e74210] hover:text-[#d63a0a]"
                  >
                    {q.status === "answered" ? "Görüntüle" : "Cevapla"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail Modal */}
      {selectedQuestion && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Soru Detayı</h2>
                <button
                  onClick={() => {
                    setSelectedQuestion(null)
                    setAnswer("")
                  }}
                  className="text-gray-400 hover:text-gray-500"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Soran</h3>
                  <p className="text-sm">{selectedQuestion.fullName}</p>
                  <p className="text-sm text-gray-600">{selectedQuestion.email}</p>
                  {selectedQuestion.phone && (
                    <p className="text-sm text-gray-600">{selectedQuestion.phone}</p>
                  )}
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Kategori</h3>
                  {getCategoryBadge(selectedQuestion.category)}
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Soru</h3>
                  <p className="text-sm text-gray-900">{selectedQuestion.question}</p>
                </div>

                {selectedQuestion.answer ? (
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Cevap</h3>
                    <p className="text-sm text-gray-900">{selectedQuestion.answer}</p>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Cevabınız</h3>
                    <textarea
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e74210] focus:border-transparent"
                      placeholder="Soruya cevabınızı yazın..."
                    />
                    <button
                      onClick={() => submitAnswer(selectedQuestion.id)}
                      className="mt-3 px-4 py-2 bg-[#e74210] text-white rounded-lg hover:bg-[#d63a0a]"
                    >
                      Cevabı Gönder
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}