"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Drumstick, Heart, Award } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Bonfile",
    description: "En yumuşak ve en az yağlı bölüm",
    image: "/images/products/bonfile.jpg",
    features: ["Düşük Yağ", "Yüksek Protein", "Diyet Dostu"],
  },
  {
    id: 2,
    name: "Izgara Kanat",
    description: "Izgara ve mangal için özel",
    image: "/images/products/izgara-kanat.jpg",
    features: ["Mangal İçin İdeal", "Marine Edilebilir", "Lezzetli"],
  },
  {
    id: 3,
    name: "But Pirzola",
    description: "Izgara ve tavada pişirmeye uygun",
    image: "/images/products/but-pirzola.jpg",
    features: ["Izgara İçin İdeal", "Yumuşak Et", "Lezzetli"],
  },
  {
    id: 4,
    name: "Sarma",
    description: "Özel günler için hazırlanmış",
    image: "/images/products/sarma.jpg",
    features: ["Pratik", "Özel Kesim", "Kaliteli"],
  },
  {
    id: 5,
    name: "Uçsuz Kanat",
    description: "Pratik tüketim için ideal",
    image: "/images/products/ucsuz-kanat.jpg",
    features: ["Pratik", "Çıtır Çıtır", "Atıştırmalık"],
  },
  {
    id: 6,
    name: "Bütün Piliç",
    description: "Taze ve doğal, bütün olarak hazırlanmış",
    image: "/images/products/butun-pilic.jpg",
    features: ["Ekonomik", "Çok Amaçlı", "Aile Boyu"],
  },
  {
    id: 7,
    name: "Üst Kanat",
    description: "Kanadın en etli ve lezzetli bölümü",
    image: "/images/products/ust-kanat.jpg",
    features: ["Etli", "Besleyici", "Doyurucu"],
  },
  {
    id: 8,
    name: "Yaprak Kanat",
    description: "İnce kesim, hızlı pişirme için ideal",
    image: "/images/products/yaprak-kanat.jpg",
    features: ["Hızlı Pişirme", "Çıtır Doku", "Pratik"],
  },
];

export default function Products() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background Pattern with Food Icons */}
      <div className="absolute inset-0">
        {/* Chicken Icon - Top Left */}
        <div className="absolute top-10 left-16 w-32 h-32 opacity-[0.08]">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-gray-800">
            <ellipse cx="50" cy="60" rx="25" ry="20" />
            <circle cx="50" cy="40" r="15" />
            <path d="M45 40 Q50 35 55 40" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="45" cy="40" r="2" />
            <circle cx="55" cy="40" r="2" />
            <path d="M50 30 Q48 25 50 25 Q52 25 50 30" />
          </svg>
        </div>
        
        {/* Carrot Icon - Top Right */}
        <div className="absolute top-8 right-24 w-28 h-28 opacity-[0.1] rotate-45">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-gray-700">
            <path d="M50 20 L40 80 Q50 90 60 80 L50 20" />
            <path d="M45 20 Q50 10 55 20" fill="none" stroke="currentColor" strokeWidth="3" />
          </svg>
        </div>
        
        {/* Drumstick Icon - Middle Left */}
        <div className="absolute top-1/3 left-8 w-36 h-36 opacity-[0.09] -rotate-12">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-gray-800">
            <circle cx="30" cy="70" r="15" />
            <circle cx="70" cy="30" r="20" />
            <rect x="35" y="35" width="30" height="30" rx="10" transform="rotate(45 50 50)" />
          </svg>
        </div>
        
        {/* Herb/Leaf Icon - Middle Right */}
        <div className="absolute top-1/4 right-16 w-24 h-24 opacity-[0.1]">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-gray-700">
            <path d="M50 80 Q30 60 30 40 Q30 20 50 10 Q70 20 70 40 Q70 60 50 80" />
            <line x1="50" y1="10" x2="50" y2="80" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        
        {/* Onion Icon - Bottom Left */}
        <div className="absolute bottom-24 left-32 w-28 h-28 opacity-[0.08]">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-gray-800">
            <circle cx="50" cy="50" r="25" />
            <path d="M50 25 Q45 15 50 10 Q55 15 50 25" />
            <line x1="40" y1="40" x2="40" y2="60" stroke="white" strokeWidth="1" opacity="0.5" />
            <line x1="50" y1="35" x2="50" y2="65" stroke="white" strokeWidth="1" opacity="0.5" />
            <line x1="60" y1="40" x2="60" y2="60" stroke="white" strokeWidth="1" opacity="0.5" />
          </svg>
        </div>
        
        {/* Tomato Icon - Bottom Right */}
        <div className="absolute bottom-16 right-28 w-32 h-32 opacity-[0.09]">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-gray-700">
            <circle cx="50" cy="55" r="25" />
            <path d="M35 35 Q50 30 65 35 L60 45 Q50 40 40 45 Z" />
          </svg>
        </div>
        
        {/* Bell Pepper Icon - Center Top */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-40 h-40 opacity-[0.07]">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-gray-800">
            <path d="M50 25 Q30 30 25 50 Q30 70 50 75 Q70 70 75 50 Q70 30 50 25" />
            <path d="M50 25 Q48 20 50 15 Q52 20 50 25" />
          </svg>
        </div>
        
        {/* Additional chicken icons scattered */}
        <div className="absolute bottom-1/3 right-12 w-24 h-24 opacity-[0.08] rotate-30">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-gray-800">
            <circle cx="50" cy="50" r="20" />
            <circle cx="50" cy="35" r="12" />
            <path d="M50 25 L48 20 L52 20 Z" />
          </svg>
        </div>
        
        {/* Extra Drumstick - Top Center */}
        <div className="absolute top-16 left-1/2 w-28 h-28 opacity-[0.09] rotate-90">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-gray-700">
            <circle cx="30" cy="70" r="12" />
            <circle cx="70" cy="30" r="18" />
            <rect x="35" y="35" width="25" height="25" rx="8" transform="rotate(45 50 50)" />
          </svg>
        </div>
        
        {/* Garlic Icon - Middle Center */}
        <div className="absolute top-1/2 left-1/3 w-20 h-20 opacity-[0.1] -rotate-15">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-gray-700">
            <circle cx="40" cy="50" r="12" />
            <circle cx="50" cy="45" r="12" />
            <circle cx="60" cy="50" r="12" />
            <circle cx="50" cy="55" r="12" />
            <path d="M50 35 Q48 25 50 20 Q52 25 50 35" />
          </svg>
        </div>
        
        {/* Lettuce Icon - Bottom Center */}
        <div className="absolute bottom-32 left-1/2 w-30 h-30 opacity-[0.08] transform -translate-x-1/2">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-gray-800">
            <path d="M50 70 Q20 60 20 40 Q20 20 50 15 Q80 20 80 40 Q80 60 50 70" />
            <path d="M35 45 Q50 40 65 45" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
            <path d="M30 35 Q50 30 70 35" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
          </svg>
        </div>
        
        {/* Extra Chicken Wing - Right Middle */}
        <div className="absolute top-1/2 right-32 w-26 h-26 opacity-[0.09] rotate-45">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-gray-700">
            <path d="M30 50 Q40 30 60 30 Q70 40 70 50 Q70 60 60 70 Q40 70 30 50" />
            <circle cx="45" cy="45" r="3" fill="white" opacity="0.3" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-[#e74210]">Ürün</span>
            <span className="text-[#23632c]"> Çeşitlerimiz</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            En taze ve kaliteli tavuk ürünleri ile sofranıza lezzet katıyoruz.
            Tüm ürünlerimiz hijyenik koşullarda üretilir ve soğuk zincir ile
            tazeliğini koruyarak size ulaşır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative h-64 bg-white">
                <div className="absolute inset-0 bg-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={256}
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500 p-4"
                />
                <div className="absolute top-4 right-4 z-20">
                  <Heart className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-[#23632c]/10 text-[#23632c] px-3 py-1 rounded-full font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    href="/urunler"
                    className="inline-flex items-center text-[#e74210] hover:text-orange-700 font-semibold transition-colors group"
                  >
                    Detaylı Bilgi
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Award className="w-5 h-5 text-[#23632c]" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/urunler"
            className="inline-flex items-center justify-center bg-[#e74210] hover:bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            Tüm Ürünlerimiz
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}