import { TrendingUp, Shield, Users, Truck, HeadphonesIcon, Award } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Güvenilir Marka",
    description: "50 yıllık köklü geçmişi ve kalite standartları ile Türkiye'nin güvenilir markası",
  },
  {
    icon: TrendingUp,
    title: "Yüksek Kazanç",
    description: "Rekabetçi fiyatlar ve cazip kar marjları ile yüksek kazanç potansiyeli",
  },
  {
    icon: Users,
    title: "Geniş Müşteri Ağı",
    description: "Yerleşik müşteri portföyü ve sürekli artan talep",
  },
  {
    icon: Truck,
    title: "Lojistik Destek",
    description: "Soğuk zincir ile zamanında ve güvenli teslimat garantisi",
  },
  {
    icon: HeadphonesIcon,
    title: "7/24 Destek",
    description: "Bayi destek hattı ve satış sonrası hizmetler",
  },
  {
    icon: Award,
    title: "Eğitim & Sertifika",
    description: "Ürün eğitimleri ve satış teknikleri desteği",
  },
];

export default function DealershipBenefits() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Neden <span className="text-[#e74210]">Hitit</span> <span className="text-[#23632c]">Piliç?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hitit Piliç bayisi olmanın ayrıcalıklarını keşfedin. Güçlü markamızın 
            arkasında durun, işinizi büyütün.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group hover:shadow-xl transition-all duration-300 bg-white rounded-xl p-8 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#e74210]/10 p-3 rounded-lg group-hover:bg-[#e74210]/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-[#e74210]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}