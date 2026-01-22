import { Metadata } from "next";
import { Award, CheckCircle, Shield, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Sertifikalar - Hitit Piliç",
  description: "Hitit Piliç kalite belgeleri ve sertifikaları. TSE Helal, ISO 9001, HACCP ve diğer kalite sertifikalarımız.",
};

const certificates = [
  {
    id: 1,
    name: "TSE Helal Belgesi",
    description: "Türk Standardları Enstitüsü tarafından verilen Helal Gıda Sertifikası",
    icon: Shield,
    issuer: "Türk Standardları Enstitüsü",
    validUntil: "2025",
    features: [
      "İslami usullere uygun kesim",
      "Helal gıda üretim standartları",
      "Düzenli denetim ve kontrol",
    ],
  },
  {
    id: 2,
    name: "ISO 9001:2015",
    description: "Kalite Yönetim Sistemi Sertifikası",
    icon: Award,
    issuer: "Bureau Veritas",
    validUntil: "2025",
    features: [
      "Uluslararası kalite standartları",
      "Sürekli iyileştirme",
      "Müşteri memnuniyeti odaklı",
    ],
  },
  {
    id: 3,
    name: "HACCP",
    description: "Tehlike Analizi ve Kritik Kontrol Noktaları",
    icon: FileCheck,
    issuer: "SGS",
    validUntil: "2025",
    features: [
      "Gıda güvenliği yönetimi",
      "Risk analizi ve kontrolü",
      "Hijyenik üretim güvencesi",
    ],
  },
  {
    id: 4,
    name: "ISO 22000:2018",
    description: "Gıda Güvenliği Yönetim Sistemi",
    icon: Shield,
    issuer: "TÜV Rheinland",
    validUntil: "2025",
    features: [
      "Gıda güvenliği standartları",
      "Tedarik zinciri kontrolü",
      "Uluslararası geçerlilik",
    ],
  },
];

export default function CertificatesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-[#23632c] to-[#2d7a3a]">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Award className="w-12 h-12 text-white" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Sertifikalarımız
              </h1>
            </div>
            <p className="text-xl text-white/90 leading-relaxed">
              Uluslararası kalite standartları ve güvenilir üretim
              belgelerimizle hizmetinizdeyiz.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-secondary mb-6">
              <span className="text-gradient">Kalite ve Güvenin Adresi</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hitit Piliç olarak, ulusal ve uluslararası kalite standartlarına
              uygun üretim yapmaktayız. Tüm üretim süreçlerimiz, bağımsız
              denetim kuruluşları tarafından düzenli olarak denetlenmekte ve
              sertifikalandırılmaktadır.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-primary-orange mb-2">
                  10+
                </div>
                <div className="text-sm text-gray-600">Kalite Belgesi</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-primary-green mb-2">
                  100%
                </div>
                <div className="text-sm text-gray-600">Helal Üretim</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-primary-orange mb-2">
                  24/7
                </div>
                <div className="text-sm text-gray-600">Kalite Kontrolü</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-3xl font-bold text-primary-green mb-2">
                  365
                </div>
                <div className="text-sm text-gray-600">Gün Denetim</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.id}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-primary-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-10 h-10 text-primary-orange" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {cert.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{cert.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span>Veren Kurum: <strong>{cert.issuer}</strong></span>
                        <span>Geçerlilik: <strong>{cert.validUntil}</strong></span>
                      </div>
                      <div className="space-y-2">
                        {cert.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary-green" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary text-center mb-8">
              <span className="text-gradient">Kalite Politikamız</span>
            </h2>
            <div className="bg-gradient-to-r from-primary-orange/10 to-primary-green/10 rounded-2xl p-8 md:p-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Hitit Piliç olarak, müşterilerimize en yüksek kalitede, güvenilir
                ve sağlıklı tavuk ürünleri sunmayı ilke edindik. Bu doğrultuda:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Tüm üretim süreçlerimizde uluslararası kalite standartlarına
                    uygun hareket ederiz.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Helal kesim ve üretim prensiplerine titizlikle uyarız.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Çalışanlarımızı sürekli eğitim programları ile geliştiririz.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Çevre dostu üretim teknikleri kullanırız.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Müşteri memnuniyetini en üst düzeyde tutmayı hedefleriz.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}