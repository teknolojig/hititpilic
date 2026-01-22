import { Metadata } from "next";
import { CheckCircle, Shield, Award, Target, Leaf, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Kalite Politikamız - Hitit Piliç",
  description: "Hitit Piliç kalite politikası. Gıda güvenliği, hijyen standartları ve sürdürülebilir üretim ilkelerimiz.",
};

const qualityPrinciples = [
  {
    icon: Shield,
    title: "Gıda Güvenliği Önceliğimizdir",
    description: "Üretim süreçlerimizin tamamı, uluslararası gıda güvenliği standartları (ISO 22000, HACCP vb.) doğrultusunda yönetilir. Hammaddeden son ürüne kadar tüm aşamalar titizlikle kontrol edilir.",
    color: "text-primary-orange"
  },
  {
    icon: Heart,
    title: "Hijyen ve Sağlıkta Taviz Yok",
    description: "Tesislerimiz, düzenli denetimlerden geçirilerek hijyen standartlarını en üst düzeyde korur. Çalışanlarımız, gıda güvenliği eğitimleriyle bilgi ve farkındalıklarını sürekli geliştirir.",
    color: "text-primary-green"
  },
  {
    icon: Award,
    title: "Doğal ve Dengeli Beslenme ile Üstün Lezzet",
    description: "Tavuklarımız, doğal yem hammaddeleri, vitaminler ve mineraller ile dengeli şekilde beslenir. Taze dağ suyu ile yetiştirilen tavuklarımız, doğal lezzetini ve besin değerini korur.",
    color: "text-primary-orange"
  },
  {
    icon: Target,
    title: "Teknoloji ve Gelenek El Ele",
    description: "Modern üretim teknolojileri ile elle kesim ve kuru yolum gibi geleneksel yöntemleri birleştiririz. ERP tabanlı üretim takibi sayesinde her ürün, çiftlikten sofraya kadar izlenebilir.",
    color: "text-primary-green"
  },
  {
    icon: Leaf,
    title: "Sürdürülebilirlik ve Çevreye Saygı",
    description: "Üretim süreçlerimizde çevreye duyarlı yöntemler uygular, kaynaklarımızı verimli kullanırız. Atık yönetimi, enerji tasarrufu ve çevre dostu uygulamalarla gelecek nesillere yaşanabilir bir dünya bırakmayı hedefleriz.",
    color: "text-primary-orange"
  }
];

const certifications = [
  "ISO 22000 Gıda Güvenliği Yönetim Sistemi",
  "HACCP Kritik Kontrol Noktaları",
  "TSE Helal Belgesi",
  "ERP Tabanlı Üretim Takip Sistemi"
];

export default function KalitePolitikasiPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-[#23632c] to-[#2d7a3a]">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-12 h-12 text-white" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Kalite Politikamız
              </h1>
            </div>
            <p className="text-xl text-white/90 leading-relaxed">
              Kaliteyi yalnızca bir hedef değil, değişmez bir üretim standardı olarak görüyoruz
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Hitit Piliç olarak, kaliteyi yalnızca bir hedef değil, değişmez bir üretim 
                standardı olarak görüyoruz. Amacımız; tüketicilerimize sağlıklı, güvenilir, 
                lezzetli tavuk ürünleri sunarken, sektörümüzde öncü ve örnek bir marka olmaktır.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                30 yılı aşkın tecrübemizle, her aşamada kalite kontrolü yaparak, doğal beslenme 
                programları ve modern teknolojilerle üretim gerçekleştiriyoruz. Müşterilerimizin 
                güvenini kazanmak ve bunu sürdürmek için sürekli kendimizi geliştiriyoruz.
              </p>
            </div>

            <h2 className="heading-secondary text-center mb-12">
              <span className="text-gradient">Kalite İlkelerimiz</span>
            </h2>

            <div className="space-y-8 mb-16">
              {qualityPrinciples.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gray-50`}>
                        <Icon className={`w-8 h-8 ${principle.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {principle.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary text-center mb-12">
              <span className="text-gradient">Sertifikalarımız</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary-green flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary-orange to-primary-green rounded-2xl p-8 text-white text-center">
              <Shield className="w-16 h-16 mx-auto mb-4 text-white/90" />
              <h3 className="text-2xl font-bold mb-4">Sözümüz Nettir</h3>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Kalite, bizim için bir tercih değil; var oluş nedenimizdir. 
                Her lokmada güven, her üründe lezzet sunmak için çalışmaya devam edeceğiz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-secondary mb-6">
              Kalite Yolculuğumuzda Bize Katılın
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Üretim süreçlerimiz ve kalite standartlarımız hakkında daha fazla bilgi almak için 
              bizimle iletişime geçebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/uretim"
                className="inline-flex items-center justify-center bg-primary-orange text-white font-bold py-4 px-8 rounded-lg hover:bg-orange-700 transition-all duration-300"
              >
                Üretim Sürecimiz
              </a>
              <a
                href="/sertifikalar"
                className="inline-flex items-center justify-center bg-primary-green text-white font-bold py-4 px-8 rounded-lg hover:bg-green-800 transition-all duration-300"
              >
                Sertifikalarımız
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}