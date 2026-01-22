"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Clock,
  Shield,
  Truck,
  Heart
} from "lucide-react";

const footerLinks = {
  kurumsal: [
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Üretim Sürecimiz", href: "/uretim" },
    { name: "Ürünler", href: "/urunler" },
    { name: "Kalite Politikamız", href: "/kalite-politikamiz" },
    { name: "Sertifikalar", href: "/sertifikalar" },
  ],
  hizmetler: [
    { name: "Yemek Tarifleri", href: "/yemek-tarifleri" },
    { name: "Bayilik Başvurusu", href: "/bayilik-basvuru" },
    { name: "Bize Sor", href: "/bize-sor" },
    { name: "Şikayet", href: "/sikayet" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/hititpilic" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/hititpilic" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/hititpilic" },
  { name: "Youtube", icon: Youtube, href: "https://youtube.com/hititpilic" },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#23632c] via-[#1a4220] to-[#23632c] text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dots' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23ffffff' opacity='0.3'/%3E%3Ccircle cx='10' cy='10' r='1.5' fill='%23ffffff' opacity='0.2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23dots)'/%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#FFE5B4]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl from-[#e74210]/10 to-transparent rounded-full blur-3xl" />


      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="bg-white p-4 rounded-lg inline-block mb-6">
              <Image
                src="/logo.svg"
                alt="Hitit Piliç"
                width={120}
                height={48}
                className="h-auto"
              />
            </div>
            <p className="text-white/80 leading-relaxed">
              30 yılı aşkın tecrübemizle, geleneksel elle kesim ve yenilikçi kuru yolum 
              tekniğimizle, sofralarınıza güvenle ulaşan, lezzetli ve sağlıklı 
              tavuk ürünleri sunuyoruz.
            </p>
          </div>

          {/* Kurumsal */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Kurumsal</h4>
            <ul className="space-y-3">
              {footerLinks.kurumsal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#FFE5B4] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Hizmetler</h4>
            <ul className="space-y-3">
              {footerLinks.hizmetler.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#FFE5B4] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">İletişim</h4>
            <div className="space-y-4">
              <a href="tel:+905462251176" className="flex items-center gap-3 text-white/80 hover:text-[#FFE5B4] transition-colors">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-medium">0546 225 11 76</p>
                  <p className="text-sm text-white/60">Pazartesi - Cuma: 08:00 - 18:00</p>
                </div>
              </a>
              <a href="mailto:info@hititpilic.com" className="flex items-center gap-3 text-white/80 hover:text-[#FFE5B4] transition-colors">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@hititpilic.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Akkent Mah. Gıda Toptancılar Sitesi</p>
                  <p className="text-sm text-white/60">2. Blok No:26, Çorum</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-12 border-t border-white/10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">Bültenimize Abone Olun</h4>
              <p className="text-white/70">Yeni ürünler ve kampanyalardan haberdar olun</p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#FFE5B4] transition-colors"
              />
              <button className="px-6 py-3 bg-[#e74210] hover:bg-[#ff7f50] text-white font-semibold rounded-lg transition-colors duration-200">
                Abone Ol
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2025 Hitit Piliç. Tüm hakları saklıdır.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FFE5B4]/20 transition-all duration-200 group"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-white/70 group-hover:text-[#FFE5B4]" />
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-4 text-sm text-white/60">
              <Link href="/gizlilik-politikasi" className="hover:text-[#FFE5B4] transition-colors">
                Gizlilik Politikası
              </Link>
              <span>|</span>
              <Link href="/kullanim-kosullari" className="hover:text-[#FFE5B4] transition-colors">
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}