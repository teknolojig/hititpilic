"use client";

import Image from "next/image";
import { Shield, Award, CheckCircle, Sparkles } from "lucide-react";

export default function KuruYolumSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e74210' fill-opacity='0.5'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-[#e74210]">Kuru Yolum</span>{" "}
                <span className="text-[#23632c]">Tekniği</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Türkiye'de ilk! Hitit Piliç olarak geliştirdiğimiz <strong>"Kuru Yolum"</strong> tekniği ile 
                tavuklarımız hiçbir zaman suya değmeden, tamamen kuru olarak işleniyor. 
                Bu özel yöntem sayesinde etin doğal lezzeti ve besin değerleri korunuyor.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#23632c] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Hijyenik ve Güvenilir</h4>
                    <p className="text-gray-600">Su ile temas olmadığı için bakteriyel kontaminasyon riski minimize edilir</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#23632c] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Doğal Lezzet</h4>
                    <p className="text-gray-600">Tavuğun doğal aroması ve besin değerleri maksimum düzeyde korunur</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#23632c] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Elle Kesim</h4>
                    <p className="text-gray-600">İslami usullere uygun, elle kesim yapılarak helal standartları sağlanır</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#e74210]">%100</div>
                  <div className="text-sm text-gray-600">Kuru İşleme</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#23632c]">0</div>
                  <div className="text-sm text-gray-600">Su Teması</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#e74210]">%100</div>
                  <div className="text-sm text-gray-600">Helal</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Badges */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Badge Container */}
              <div className="bg-gradient-to-br from-[#e74210]/5 to-[#23632c]/5 rounded-3xl p-8 lg:p-12">
                {/* Kuru Yolum Badge */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#e74210] blur-3xl opacity-20 rounded-full"></div>
                    <Image
                      src="/images/kuru-yolum-badge.svg"
                      alt="Kuru Yolum Türkiye'de İlk"
                      width={280}
                      height={280}
                      className="relative z-10 drop-shadow-2xl animate-pulse"
                    />
                  </div>
                </div>

                {/* Certification Badges */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/images/helal-badge.png"
                        alt="TSE Helal Sertifikası"
                        width={120}
                        height={120}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-center font-semibold text-gray-900">TSE Helal</h4>
                    <p className="text-center text-sm text-gray-600 mt-1">Güvenilir Üretim</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                    <div className="flex justify-center mb-4">
                      <Image
                        src="/images/gimdes-badge.png"
                        alt="GIMDES Helal Sertifikası"
                        width={120}
                        height={120}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-center font-semibold text-gray-900">GIMDES</h4>
                    <p className="text-center text-sm text-gray-600 mt-1">Helal Gıda</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}