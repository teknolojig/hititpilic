"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Sparkles, Award, Shield, Clock, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[700px] md:min-h-[700px] lg:min-h-[800px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Hitit Piliç Çiftlik"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-20">
        <div className="max-w-3xl">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-[#e74210] text-white text-sm font-bold px-5 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              Elle Kesim • Kuru Yolum • Türkiye'de İlk
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">Doğal ve Sağlıklı</span>
              <span className="block text-[#FFE5B4]">Tavuk Ürünleri</span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              40 yıllık tecrübemizle, geleneksel elle kesim ve yenilikçi kuru yolum 
              tekniğini birleştirerek, sofranıza en taze ve kaliteli tavuk ürünlerini sunuyoruz.
            </p>

            {/* Features List */}
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#FFE5B4]" />
                <span className="text-gray-200">TSE Helal ve GIMDES sertifikalı üretim</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#FFE5B4]" />
                <span className="text-gray-200">Antibiyotiksiz, doğal besleme</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#FFE5B4]" />
                <span className="text-gray-200">Günlük taze üretim ve soğuk zincir</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/urunler" 
                className="group inline-flex items-center justify-center bg-[#e74210] text-white font-bold py-4 px-8 rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Ürünlerimizi Keşfedin
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/bayilik-basvuru"
                className="group inline-flex items-center justify-center bg-white text-[#e74210] font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Bayilik Başvurusu
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}