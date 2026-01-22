import { Metadata } from "next";
import Image from "next/image";
import { Factory, Shield, Droplets, Award, CheckCircle, Clock, Users, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Üretim Sürecimiz - Hitit Piliç",
  description: "Hitit Piliç'te doğal besleme, dağ suyu, elle kesim ve kuru yolum yöntemiyle hijyenik ve kaliteli tavuk üretimi yapıyoruz. TSE Helal sertifikalı üretim sürecimizi keşfedin.",
};

const productionSteps = [
  {
    id: 1,
    title: "Doğal ve Dengeli Beslenme",
    description: "Özenle formüle edilmiş tam dengeli beslenme programı",
    icon: "🌾",
    details: [
      "GDO'suz mısır ve buğday",
      "Soya ve ayçiçek küspesi",
      "Doğal mineral ve vitaminler",
      "Sofralık ayçiçek yağı"
    ]
  },
  {
    id: 2,
    title: "Taze Dağ Suyu",
    description: "Bolu Göynük'ten gelen taze dağ suyu ile yetiştirme",
    icon: "💧",
    details: [
      "Temiz doğa kaynakları",
      "Sindirim sağlığını destekler",
      "Lezzet profilini iyileştirir",
      "Doğal mineral içeriği"
    ]
  },
  {
    id: 3,
    title: "Elle Kesim & Kuru Yolum",
    description: "Geleneksel elle kesim ve kuru yolum teknolojisi",
    icon: "✋",
    details: [
      "Tavuk eti suya temas etmez",
      "Doğal renk ve doku korunur",
      "Besin değerleri kaybolmaz",
      "Hijyen garantisi"
    ]
  },
  {
    id: 4,
    title: "Tam Otomasyon Takip",
    description: "ERP tabanlı üretim takibi ve kalite kontrol",
    icon: "📊",
    details: [
      "Kesimden paketlemeye takip",
      "Tam izlenebilirlik",
      "Laboratuvar testleri",
      "Kalite güvencesi"
    ]
  },
  {
    id: 5,
    title: "Soğuk Zincir",
    description: "Kırılmayan soğuk zincir ile tazelik garantisi",
    icon: "❄️",
    details: [
      "Sürekli sıcaklık kontrolü",
      "Hijyenik araçlar",
      "Hızlı dağıtım",
      "Tazelik garantisi"
    ]
  },
  {
    id: 6,
    title: "Türkiye'ye Ulaşım",
    description: "Türkiye'nin dört bir yanına güvenli teslimat",
    icon: "🚚",
    details: [
      "Geniş dağıtım ağı",
      "Zamanında teslimat",
      "Müşteri memnuniyeti",
      "Güven garantisi"
    ]
  }
];

const certificates = [
  { name: "ISO 22000", icon: Shield, color: "text-[#e74210]" },
  { name: "HACCP", icon: Award, color: "text-[#23632c]" },
  { name: "TSE Helal", icon: CheckCircle, color: "text-[#e74210]" },
  { name: "ERP Takip", icon: Shield, color: "text-[#23632c]" }
];

export default function UretimPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-[#23632c] to-[#2d7a3a]">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Factory className="w-12 h-12 text-white" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Üretim Sürecimiz
              </h1>
            </div>
            <p className="text-xl text-white/90 leading-relaxed">
              Doğadan gelen en iyi malzemeleri, yüksek üretim standartlarıyla buluşturarak 
              sofralarınıza ulaştırıyoruz. Tecrübemiz, teknolojimiz ve doğaya olan bağlılığımızla, 
              her lokmada güven veriyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Production Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Üretim Sürecimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Özenle formüle edilmiş beslenme programımız ve elle kesim & kuru yolum teknolojimizle,
              doğal lezzeti ve besin değerlerini koruyarak üretim yapıyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productionSteps.map((step) => (
              <div
                key={step.id}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 bg-gradient-to-br from-[#23632c] to-[#2d7a3a] text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.id}
                  </span>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#23632c] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kuru Yolum Special Section */}
      <section className="py-20 bg-[#23632c]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center gap-3 mb-6">
                <Droplets className="w-10 h-10" />
                <h2 className="text-3xl md:text-4xl font-bold">Kuru Yolum Tekniği</h2>
              </div>
              <p className="text-xl mb-6 text-white/90">
                Elle kesim ve kuru yolum sistemimiz sayesinde tavuk eti suya temas etmez, 
                doğal rengi, dokusu ve besin değerleri korunur.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FFE5B4] rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold mb-1">Elle Kesim Sistemi</h4>
                    <p className="text-white/80">
                      Geleneksel elle kesim yöntemi ile hijyenik ve helal standartlarda üretim yapıyoruz.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FFE5B4] rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold mb-1">Doğal Lezzet Korunumu</h4>
                    <p className="text-white/80">
                      Kuru yolum sistemi ile tavuğun doğal lezzeti, rengi ve dokusu korunur.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FFE5B4] rounded-full mt-2" />
                  <div>
                    <h4 className="font-semibold mb-1">Maksimum Hijyen</h4>
                    <p className="text-white/80">
                      Su kullanmadan yapılan işleme ile bakteri üreme riski minimize edilir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <div className="absolute inset-0 bg-[#FFE5B4] flex items-center justify-center">
                <Sparkles className="w-32 h-32 text-white/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kalite Belgelerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ulusal ve uluslararası standartlarda üretim yapıyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300"
                >
                  <Icon className={`w-16 h-16 ${cert.color} mx-auto mb-4`} />
                  <h3 className="text-lg font-bold">{cert.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Kalite ve Hijyen İlkelerimiz
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              30 yılı aşkın tecrübemizle, doğal beslenme programı ve elle kesim & kuru yolum 
              teknolojisiyle, güvenilir ve lezzetli ürünler üretiyoruz. Her aşamada tam izlenebilirlik 
              ve kalite kontrolü sağlıyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/sertifikalar"
                className="inline-flex items-center justify-center bg-gradient-to-br from-[#23632c] to-[#2d7a3a] text-white font-bold py-4 px-8 rounded-lg hover:bg-orange-700 transition-all duration-300"
              >
                Sertifikalarımız
              </a>
              <a
                href="/iletisim"
                className="inline-flex items-center justify-center bg-[#23632c] text-white font-bold py-4 px-8 rounded-lg hover:bg-green-800 transition-all duration-300"
              >
                Bize Ulaşın
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}