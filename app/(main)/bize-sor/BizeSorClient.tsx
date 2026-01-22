"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import toast from "react-hot-toast";

export default function BizeSorClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const loadingToast = toast.loading("Sorunuz gönderiliyor...");
    
    try {
      const response = await fetch("/api/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          category: formData.subject,
          question: formData.message,
        }),
      });

      if (response.ok) {
        toast.success("Sorunuz başarıyla gönderildi! En kısa sürede cevaplayacağız.", {
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
        toast.error("Soru gönderilirken bir hata oluştu. Lütfen tekrar deneyin.", {
          id: loadingToast,
        });
      }
    } catch (error) {
      console.error("Soru formu hatası:", error);
      toast.error("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.", {
        id: loadingToast,
      });
    }
  };

  const faqItems = [
    {
      question: "Ürünleriniz helal sertifikalı mı?",
      answer: "Evet, tüm ürünlerimiz TSE Helal belgeli olup, İslami usullere uygun olarak kesilmektedir.",
    },
    {
      question: "Hangi bölgelere dağıtım yapıyorsunuz?",
      answer: "Türkiye genelinde tüm illere soğuk zincir ile dağıtım yapmaktayız.",
    },
    {
      question: "Bayilik başvurusu nasıl yapabilirim?",
      answer: "Bayilik başvurusu sayfamızdan formu doldurarak veya doğrudan iletişim numaralarımızdan bize ulaşabilirsiniz.",
    },
    {
      question: "Ürünlerinizin raf ömrü ne kadar?",
      answer: "Dondurulmuş ürünlerimizin -18°C'de raf ömrü 12 aydır. Taze ürünlerimiz ise +4°C'de 5 gün muhafaza edilebilir.",
    },
    {
      question: "Toplu sipariş verilebilir mi?",
      answer: "Evet, restoran, otel ve catering firmalarına özel toplu sipariş hizmeti vermekteyiz.",
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
              <MessageCircle className="w-12 h-12 text-white" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Bize Sorun
              </h1>
            </div>
            <p className="text-xl text-white/90 leading-relaxed">
              Hitit Piliç hakkında merak ettiklerinizi sorabilir, önerilerinizi paylaşabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sol Taraf - Soru Formu */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="heading-secondary mb-6">Sorunuzu Gönderin</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Adınız Soyadınız
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      E-posta Adresiniz
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

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefon Numaranız
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                      placeholder="0555 555 5555"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Konu
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                  >
                    <option value="">Konu Seçiniz</option>
                    <option value="urun-bilgisi">Ürün Bilgisi</option>
                    <option value="bayilik">Bayilik</option>
                    <option value="siparis">Sipariş</option>
                    <option value="oneri">Öneri</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Sorunuz
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all resize-none"
                    placeholder="Sorunuzu buraya yazabilirsiniz..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Gönder
                </button>
              </form>
            </div>

            {/* Sağ Taraf - Sık Sorulan Sorular */}
            <div>
              <h2 className="heading-secondary mb-6">Sık Sorulan Sorular</h2>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <details
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
                  >
                    <summary className="font-semibold text-gray-800 select-none">
                      {item.question}
                    </summary>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>

              {/* İletişim Bilgileri */}
              <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold mb-6">Hızlı İletişim</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-orange/10 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-primary-orange" />
                    </div>
                    <div>
                      <p className="font-semibold">Telefon</p>
                      <p className="text-gray-600">0212 123 45 67</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-primary-green/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-primary-green" />
                    </div>
                    <div>
                      <p className="font-semibold">E-posta</p>
                      <p className="text-gray-600">info@hititpilic.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-primary-orange/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary-orange" />
                    </div>
                    <div>
                      <p className="font-semibold">Adres</p>
                      <p className="text-gray-600">İstanbul, Türkiye</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}