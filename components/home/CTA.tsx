"use client";

import Link from "next/link";
import { ArrowRight, Phone, Mail, Sparkles, TrendingUp, Users, Shield } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[#e74210]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-8 h-8 text-white/80 animate-pulse" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Hitit Piliç Bayilik Ağına Katılın
            </h2>
            <Sparkles className="w-8 h-8 text-white/80 animate-pulse" />
          </div>
          
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Türkiye'nin güvenilir tavuk üreticisi Hitit Piliç'in büyüyen ailesine
            siz de katılın. Kazançlı iş ortaklığı fırsatlarını değerlendirin.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <TrendingUp className="w-8 h-8 text-white mb-2 mx-auto" />
              <p className="text-white font-medium">Yüksek Kazanç</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <Users className="w-8 h-8 text-white mb-2 mx-auto" />
              <p className="text-white font-medium">Güçlü Destek</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <Shield className="w-8 h-8 text-white mb-2 mx-auto" />
              <p className="text-white font-medium">Güvenilir Marka</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/bayilik-basvuru"
              className="group relative bg-white text-[#e74210] hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center gap-3"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10">Bayilik Başvuru Formu</span>
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
              <div className="absolute inset-0 bg-gradient-to-r from-[#e74210] to-[#23632c] rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </Link>
            <Link
              href="/iletisim"
              className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#e74210] font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl"
            >
              İletişime Geçin
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}