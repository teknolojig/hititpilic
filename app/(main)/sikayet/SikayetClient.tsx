"use client";

import { useState } from "react";
import { AlertCircle, Send, Shield, Clock, HeadphonesIcon } from "lucide-react";
import toast from "react-hot-toast";

export default function SikayetClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderNumber: "",
    complaintType: "",
    productName: "",
    purchaseDate: "",
    storeName: "",
    description: "",
    attachment: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (e.target.type === "file") {
      const fileInput = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        attachment: fileInput.files ? fileInput.files[0] : null,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const loadingToast = toast.loading("Şikayetiniz gönderiliyor...");
    
    try {
      const response = await fetch("/api/complaints", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          orderNumber: formData.orderNumber,
          productName: formData.productName,
          complaintType: formData.complaintType,
          description: formData.description,
        }),
      });

      if (response.ok) {
        toast.success("Şikayetiniz başarıyla alındı! En kısa sürede size dönüş yapacağız.", {
          id: loadingToast,
          duration: 5000,
        });
        // Formu temizle
        setFormData({
          name: "",
          email: "",
          phone: "",
          orderNumber: "",
          complaintType: "",
          productName: "",
          purchaseDate: "",
          storeName: "",
          description: "",
          attachment: null,
        });
      } else {
        toast.error("Şikayet gönderilirken bir hata oluştu. Lütfen tekrar deneyin.", {
          id: loadingToast,
        });
      }
    } catch (error) {
      console.error("Şikayet formu hatası:", error);
      toast.error("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.", {
        id: loadingToast,
      });
    }
  };

  const features = [
    {
      icon: Shield,
      title: "Güvenli İletişim",
      description: "Tüm şikayetleriniz gizlilik içinde değerlendirilir",
    },
    {
      icon: Clock,
      title: "Hızlı Dönüş",
      description: "24 saat içinde size geri dönüş sağlarız",
    },
    {
      icon: HeadphonesIcon,
      title: "Profesyonel Destek",
      description: "Uzman ekibimiz sorunlarınızı çözer",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-[#23632c] to-[#2d7a3a]">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <AlertCircle className="w-12 h-12 text-white" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Şikayet ve Önerileriniz
              </h1>
            </div>
            <p className="text-xl text-white/90 leading-relaxed">
              Müşteri memnuniyeti bizim için önceliklidir. Yaşadığınız sorunları ve önerilerinizi 
              bizimle paylaşın, en kısa sürede çözüm üretelim.
            </p>
          </div>
        </div>
      </section>

      {/* Özellikler */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-orange" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Şikayet Formu */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="heading-secondary mb-8 text-center">Şikayet Formu</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Kişisel Bilgiler */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-800 pb-2 border-b border-gray-200">
                    Kişisel Bilgiler
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Adınız Soyadınız *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Telefon Numaranız *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                        placeholder="0555 555 5555"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      E-posta Adresiniz *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>

                {/* Şikayet Detayları */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-800 pb-2 border-b border-gray-200">
                    Şikayet Detayları
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="complaintType" className="block text-sm font-semibold text-gray-700 mb-2">
                        Şikayet Türü *
                      </label>
                      <select
                        id="complaintType"
                        name="complaintType"
                        value={formData.complaintType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                      >
                        <option value="">Seçiniz</option>
                        <option value="urun-kalitesi">Ürün Kalitesi</option>
                        <option value="paketleme">Paketleme</option>
                        <option value="teslimat">Teslimat</option>
                        <option value="musteri-hizmetleri">Müşteri Hizmetleri</option>
                        <option value="fiyat">Fiyat</option>
                        <option value="diger">Diğer</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="orderNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                        Sipariş/Fatura Numarası
                      </label>
                      <input
                        type="text"
                        id="orderNumber"
                        name="orderNumber"
                        value={formData.orderNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                        placeholder="Varsa sipariş numaranız"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="productName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Ürün Adı *
                      </label>
                      <input
                        type="text"
                        id="productName"
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                        placeholder="Şikayete konu olan ürün"
                      />
                    </div>

                    <div>
                      <label htmlFor="purchaseDate" className="block text-sm font-semibold text-gray-700 mb-2">
                        Satın Alma Tarihi
                      </label>
                      <input
                        type="date"
                        id="purchaseDate"
                        name="purchaseDate"
                        value={formData.purchaseDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="storeName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Satın Alınan Mağaza/Bayi
                    </label>
                    <input
                      type="text"
                      id="storeName"
                      name="storeName"
                      value={formData.storeName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                      placeholder="Ürünü aldığınız yer"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                      Şikayet Açıklaması *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all resize-none"
                      placeholder="Lütfen şikayetinizi detaylı bir şekilde açıklayınız..."
                    />
                  </div>

                  <div>
                    <label htmlFor="attachment" className="block text-sm font-semibold text-gray-700 mb-2">
                      Ek Dosya (Fotoğraf/Video)
                    </label>
                    <input
                      type="file"
                      id="attachment"
                      name="attachment"
                      onChange={handleChange}
                      accept="image/*,video/*"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-orange/10 file:text-primary-orange hover:file:bg-primary-orange/20"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Maksimum dosya boyutu: 10MB (JPG, PNG, MP4)
                    </p>
                  </div>
                </div>

                {/* KVKK Onayı */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="kvkk"
                      required
                      className="mt-1 h-4 w-4 text-primary-orange focus:ring-primary-green border-gray-300 rounded"
                    />
                    <label htmlFor="kvkk" className="ml-2 text-sm text-gray-600">
                      KVKK kapsamında kişisel verilerimin işlenmesini ve tarafıma dönüş yapılmasını kabul ediyorum.
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Şikayeti Gönder
                </button>
              </form>
            </div>

            {/* Bilgilendirme */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-2">Önemli Bilgilendirme</h3>
              <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                <li>Şikayetiniz en geç 24 saat içinde değerlendirilmeye alınacaktır.</li>
                <li>Size e-posta veya telefon yoluyla geri dönüş yapılacaktır.</li>
                <li>Şikayetinizin takip numarası e-posta adresinize gönderilecektir.</li>
                <li>Gıda güvenliği ile ilgili acil durumlar için lütfen 0212 123 45 67 numaralı hattımızı arayınız.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}