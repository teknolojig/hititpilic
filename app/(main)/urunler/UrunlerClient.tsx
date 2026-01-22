"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Filter, Package, Award, Leaf, Shield } from "lucide-react";
import PlaceholderImage from "@/components/PlaceholderImage";

const products = [
  {
    id: 1,
    name: "Baget",
    category: "gogus",
    description: "Çocukların ve yetişkinlerin favorisi, pratik ve lezzetli",
    features: ["Kolay Pişirme", "Yumuşak Et", "Besleyici"],
    weight: "~500g",
    image: "/images/products/baget.jpg"
  },
  {
    id: 2,
    name: "Sarma",
    category: "ozel",
    description: "Özel günler için hazırlanmış, sarma yapımına uygun",
    features: ["Pratik", "Özel Kesim", "Kaliteli"],
    weight: "~800g",
    image: "/images/products/sarma.jpg"
  },
  {
    id: 3,
    name: "But Pirzola",
    category: "but",
    description: "Izgara ve tavada pişirmeye uygun, marine edilebilir",
    features: ["Izgara İçin İdeal", "Yumuşak Et", "Lezzetli"],
    weight: "~600g",
    image: "/images/products/but-pirzola.jpg"
  },
  {
    id: 4,
    name: "Bonfile",
    category: "gogus",
    description: "En yumuşak ve en az yağlı bölüm, diyet dostu",
    features: ["Düşük Yağ", "Yüksek Protein", "Diyet Dostu"],
    weight: "~400g",
    image: "/images/products/bonfile.jpg"
  },
  {
    id: 5,
    name: "Uçsuz Kanat",
    category: "kanat",
    description: "Pratik tüketim için uç kısmı alınmış kanatlar",
    features: ["Pratik", "Çıtır Çıtır", "Atıştırmalık"],
    weight: "~500g",
    image: "/images/products/ucsuz-kanat.jpg"
  },
  {
    id: 6,
    name: "Izgara Kanat",
    category: "kanat",
    description: "Izgara ve mangal için özel hazırlanmış",
    features: ["Mangal İçin İdeal", "Marine Edilebilir", "Lezzetli"],
    weight: "~600g",
    image: "/images/products/izgara-kanat.jpg"
  },
  {
    id: 7,
    name: "Yaprak Kanat",
    category: "kanat",
    description: "İnce kesim, hızlı pişirme için ideal",
    features: ["Hızlı Pişirme", "Çıtır Doku", "Pratik"],
    weight: "~500g",
    image: "/images/products/yaprak-kanat.jpg"
  },
  {
    id: 8,
    name: "Üst Kanat",
    category: "kanat",
    description: "Kanadın en etli ve lezzetli bölümü",
    features: ["Etli", "Besleyici", "Doyurucu"],
    weight: "~700g",
    image: "/images/products/ust-kanat.jpg"
  },
  {
    id: 9,
    name: "Bütün Piliç",
    category: "ozel",
    description: "Taze ve doğal, bütün olarak hazırlanmış piliç",
    features: ["Ekonomik", "Çok Amaçlı", "Aile Boyu"],
    weight: "~1.8kg",
    image: "/images/products/butun-pilic.jpg"
  },
  {
    id: 10,
    name: "Kalçalı But",
    category: "but",
    description: "Özel baharatlarla marine edilebilir, fırın ve ızgara için ideal",
    features: ["Yüksek Protein", "Lezzetli", "Çok Yönlü"],
    weight: "~1.2kg",
    image: "/images/products/kalcali-but.jpg"
  },
  {
    id: 11,
    name: "Derili Bonfile",
    category: "gogus",
    description: "Derisi ile daha lezzetli, nem kaybını önler",
    features: ["Lezzet Bombası", "Nem Tutucu", "Özel Tat"],
    weight: "~450g",
    image: "/images/products/derili-bonfile.jpg"
  }
];

const categories = [
  { id: "all", name: "Tümü", icon: Package },
  { id: "but", name: "But Ürünleri", icon: Package },
  { id: "gogus", name: "Göğüs Ürünleri", icon: Package },
  { id: "kanat", name: "Kanat Ürünleri", icon: Package },
  { id: "ozel", name: "Özel Ürünler", icon: Package }
];

export default function UrunlerClient() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-[#23632c] to-[#2d7a3a]">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Package className="w-12 h-12 text-white" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Ürünlerimiz
              </h1>
            </div>
            <p className="text-xl text-white/90 leading-relaxed">
              Elle kesim ve kuru yolum yöntemleriyle hazırlanan, 
              taze ve kaliteli tavuk ürünlerimizi keşfedin.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Ürün ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#23632c] focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-br from-[#23632c] to-[#2d7a3a] text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Aradığınız kriterlere uygun ürün bulunamadı.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Product Image */}
                  <div className="relative h-64 bg-white overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    {product.name === "Kalçalı But" || product.name === "Derili Bonfile" ? (
                      <PlaceholderImage productName={product.name} />
                    ) : (
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={256}
                        className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, index) => (
                        <span
                          key={index}
                          className="text-xs bg-[#23632c]/10 text-[#23632c] px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Weight */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500">Ortalama Ağırlık:</span>
                      <span className="text-sm font-semibold text-[#e74210]">{product.weight}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#23632c] to-[#2d7a3a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Sipariş Vermek İster Misiniz?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              En yakın bayimizden veya doğrudan bizden sipariş verebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={(e) => e.preventDefault()}
                className="inline-block bg-white text-[#e74210] font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer"
              >
                Bayi Bul
              </button>
              <a
                href="/iletisim"
                className="inline-block bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-[#e74210] transition-all duration-300"
              >
                İletişime Geç
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}