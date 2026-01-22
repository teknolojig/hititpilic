"use client";

import { Shield, Award, Leaf, Heart, Clock, Truck, CheckCircle, Hand, Droplets, Sparkles, Zap, Users, Package } from "lucide-react";
import { useState } from "react";

interface Feature {
  icon: any;
  title: string;
  description: string;
  color: string;
  highlight?: boolean;
  badge?: string;
}

const features: Feature[] = [
  {
    icon: Hand,
    title: "Elle Kesim",
    description: "Geleneksel elle kesim yöntemi ile hijyenik ve özenli işleme",
    color: "bg-[#e74210]",
    highlight: true,
    badge: "Özel Yöntem"
  },
  {
    icon: Droplets,
    title: "Kuru Yolum",
    description: "Su kullanmadan özel kuru yolum tekniği ile maksimum hijyen ve lezzet",
    color: "bg-[#23632c]",
    highlight: true,
    badge: "Benzersiz"
  },
  {
    icon: Shield,
    title: "TSE Helal Sertifikası",
    description: "İslami usullere uygun kesim ve üretim standartları",
    color: "bg-orange-600",
    badge: "Sertifikalı"
  },
  {
    icon: Sparkles,
    title: "Antibiyotiksiz Üretim",
    description: "Doğal besleme ve antibiyotiksiz yetiştirme ile sağlıklı ürünler",
    color: "bg-green-700",
    badge: "Doğal"
  },
  {
    icon: Clock,
    title: "Günlük Taze Üretim",
    description: "Her sabah taze kesim ile aynı gün sofranıza ulaşan ürünler",
    color: "bg-orange-600",
  },
  {
    icon: Package,
    title: "Hijyenik Paketleme",
    description: "Modern tesislerde vakumlu ve güvenli paketleme",
    color: "bg-green-800",
  },
];

export default function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Neden <span className="text-[#e74210]">Hitit</span> <span className="text-[#23632c]">Piliç?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Geleneksel kesim yöntemlerimiz ve modern üretim tesislerimizle,
            en kaliteli tavuk ürünlerini sofranıza getiriyoruz.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-[#e74210]/10 text-[#e74210] px-4 py-2 rounded-full font-semibold">
              <Hand className="w-4 h-4" />
              Elle Kesim Yöntemi
            </div>
            <div className="flex items-center gap-2 bg-[#23632c]/10 text-[#23632c] px-4 py-2 rounded-full font-semibold">
              <Droplets className="w-4 h-4" />
              Kuru Yolum Tekniği
            </div>
            <div className="flex items-center gap-2 bg-[#e74210]/10 text-[#e74210] px-4 py-2 rounded-full font-semibold">
              <Shield className="w-4 h-4" />
              TSE Helal Sertifikalı
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`absolute inset-0 ${feature.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300 blur-xl`} />
                <div className={`relative p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border h-full ${
                  feature.highlight ? 'border-2 border-[#e74210]' : 'border-gray-100'
                }`}>
                  {feature.badge && (
                    <div className="absolute -top-3 right-6 bg-[#e74210] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {feature.badge}
                    </div>
                  )}
                  <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  {feature.highlight && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="text-xs font-semibold text-[#e74210] uppercase tracking-wider">
                        Hitit Piliç Farkı
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

const StatsSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#e74210]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#23632c]/5 rounded-full blur-3xl" />
      </div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M0 20L20 0L40 20L20 40z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Rakamlarla <span className="text-[#e74210]">Hitit Piliç</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            30 yılı aşkın tecrübemizle, güvenilir üretim standartlarımız ve 
            müşteri memnuniyetimizle sektörde öncü konumdayız.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              value: "30+",
              label: "Yıllık Tecrübe",
              icon: Award,
              gradient: "from-[#e74210] to-[#ff7f50]",
              description: "Köklü aile şirketi"
            },
            {
              value: "100%",
              label: "Elle Kesim",
              icon: Hand,
              gradient: "from-[#23632c] to-[#4a7c59]",
              description: "Geleneksel yöntem"
            },
            {
              value: "500+",
              label: "Satış Noktası",
              icon: Users,
              gradient: "from-[#ff7f50] to-[#FFE5B4]",
              description: "Türkiye genelinde"
            },
            {
              value: "24/7",
              label: "Kalite Kontrol",
              icon: Shield,
              gradient: "from-[#4a7c59] to-[#23632c]",
              description: "Kesintisiz denetim"
            }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="group">
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center border border-gray-100 hover:border-transparent">
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Number */}
                  <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-gray-900 font-semibold mb-1">
                    {stat.label}
                  </div>
                  
                  {/* Description */}
                  <div className="text-sm text-gray-500">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { StatsSection };