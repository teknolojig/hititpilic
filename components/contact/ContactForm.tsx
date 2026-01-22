"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const loadingToast = toast.loading("Mesajınız gönderiliyor...");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast.success("Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.", {
          id: loadingToast,
          duration: 5000,
        });
        // Formu temizle
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.", {
          id: loadingToast,
        });
      }
    } catch (error) {
      console.error("İletişim formu hatası:", error);
      toast.error("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.", {
        id: loadingToast,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Ad Soyad *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-primary-orange transition-colors"
            placeholder="Adınız Soyadınız"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            E-posta *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-primary-orange transition-colors"
            placeholder="ornek@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-primary-orange transition-colors"
            placeholder="0 (5XX) XXX XX XX"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Konu *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-primary-orange transition-colors"
          >
            <option value="">Konu Seçiniz</option>
            <option value="genel">Genel Bilgi</option>
            <option value="bayilik">Bayilik Başvurusu</option>
            <option value="urun">Ürün Bilgisi</option>
            <option value="oneri">Öneri</option>
            <option value="diger">Diğer</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Mesajınız *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-primary-orange transition-colors resize-none"
          placeholder="Mesajınızı buraya yazabilirsiniz..."
        />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">* Zorunlu alanlar</p>
        <button
          type="submit"
          className="btn-primary inline-flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          Gönder
        </button>
      </div>
    </form>
  );
}