"use client";

import { useState } from "react";
import { Send, Building2, User, Phone, Mail, MapPin, FileText, Briefcase } from "lucide-react";
import toast from "react-hot-toast";

export default function DealershipForm() {
  const [formData, setFormData] = useState({
    // Kişisel Bilgiler
    fullName: "",
    email: "",
    phone: "",
    
    // Firma Bilgileri
    companyName: "",
    
    // Adres Bilgileri
    province: "",
    district: "",
    address: "",
    
    // İş Deneyimi
    currentBusiness: "",
    monthlyCapacity: "",
    
    // Referanslar
    references: "",
    additionalInfo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const loadingToast = toast.loading("Başvurunuz gönderiliyor...");
    
    try {
      const response = await fetch("/api/dealership", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Bayilik başvurunuz başarıyla alındı! En kısa sürede size dönüş yapacağız.", {
          id: loadingToast,
          duration: 5000,
        });
        // Form sıfırlama
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          companyName: "",
          province: "",
          district: "",
          address: "",
          currentBusiness: "",
          monthlyCapacity: "",
          references: "",
          additionalInfo: "",
        });
      } else {
        toast.error("Başvuru gönderilirken bir hata oluştu. Lütfen tekrar deneyin.", {
          id: loadingToast,
        });
      }
    } catch (error) {
      console.error("Bayilik başvurusu hatası:", error);
      toast.error("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.", {
        id: loadingToast,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Kişisel Bilgiler */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-6">
          <User className="w-5 h-5 text-[#e74210]" />
          Kişisel Bilgiler
        </h3>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
              Ad Soyad *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e74210] focus:border-transparent transition-all"
              placeholder="Adınız Soyadınız"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                E-posta *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e74210] focus:border-transparent transition-all"
                placeholder="ornek@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Telefon *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e74210] focus:border-transparent transition-all"
                placeholder="0555 555 5555"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Firma Bilgileri */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-6">
          <Building2 className="w-5 h-5 text-[#23632c]" />
          Firma Bilgileri
        </h3>
        
        <div>
          <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
            Firma Adı *
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e74210] focus:border-transparent transition-all"
            placeholder="Firma Adınız"
          />
        </div>
      </div>

      {/* Adres Bilgileri */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-6">
          <MapPin className="w-5 h-5 text-[#e74210]" />
          Adres Bilgileri
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="province" className="block text-sm font-semibold text-gray-700 mb-2">
              İl *
            </label>
            <input
              type="text"
              id="province"
              name="province"
              value={formData.province}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e74210] focus:border-transparent transition-all"
              placeholder="İl"
            />
          </div>

          <div>
            <label htmlFor="district" className="block text-sm font-semibold text-gray-700 mb-2">
              İlçe *
            </label>
            <input
              type="text"
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e74210] focus:border-transparent transition-all"
              placeholder="İlçe"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
              Açık Adres *
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all resize-none"
              placeholder="Açık adresinizi yazınız..."
            />
          </div>
        </div>
      </div>

      {/* İş Deneyimi */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-6">
          <Briefcase className="w-5 h-5 text-[#23632c]" />
          İş Deneyimi ve Kapasitesi
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="currentBusiness" className="block text-sm font-semibold text-gray-700 mb-2">
              Mevcut İş Alanı
            </label>
            <input
              type="text"
              id="currentBusiness"
              name="currentBusiness"
              value={formData.currentBusiness}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e74210] focus:border-transparent transition-all"
              placeholder="Market, Restaurant, vb."
            />
          </div>

          <div>
            <label htmlFor="monthlyCapacity" className="block text-sm font-semibold text-gray-700 mb-2">
              Aylık Satış Kapasitesi (Ton) *
            </label>
            <input
              type="number"
              id="monthlyCapacity"
              name="monthlyCapacity"
              value={formData.monthlyCapacity}
              onChange={handleChange}
              required
              min="0"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e74210] focus:border-transparent transition-all"
              placeholder="Tahmini aylık satış kapasitesi"
            />
          </div>
        </div>
      </div>

      {/* Referanslar ve Ek Bilgiler */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-6">
          <FileText className="w-5 h-5 text-[#e74210]" />
          Referanslar ve Ek Bilgiler
        </h3>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="references" className="block text-sm font-semibold text-gray-700 mb-2">
              Referanslar
            </label>
            <textarea
              id="references"
              name="references"
              value={formData.references}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all resize-none"
              placeholder="Çalıştığınız firmalar veya referanslarınız..."
            />
          </div>

          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-semibold text-gray-700 mb-2">
              Ek Bilgiler
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-all resize-none"
              placeholder="Eklemek istediğiniz diğer bilgiler..."
            />
          </div>
        </div>
      </div>

      {/* KVKK Onayı */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex items-start">
          <input
            type="checkbox"
            id="kvkk"
            required
            className="mt-1 h-4 w-4 text-[#e74210] focus:ring-[#e74210] border-gray-300 rounded"
          />
          <label htmlFor="kvkk" className="ml-2 text-sm text-gray-600">
            KVKK kapsamında kişisel verilerimin işlenmesini ve bayilik başvurum için kullanılmasını kabul ediyorum.
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-[#e74210] hover:bg-[#d63a0a] text-white font-bold py-4 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        <Send className="w-5 h-5" />
        Başvuruyu Gönder
      </button>
    </form>
  );
}