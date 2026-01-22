"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";

// Custom SVG Icons with soft colors
const BuildingIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
    <path d="M5 21V7L12 3L19 7V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 21V15H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
    <path d="M10 9H10.01M14 9H14.01M10 13H10.01M14 13H14.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
  </svg>
);

const FactoryIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
    <path d="M5 21V9L12 13V9L19 13V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 21V9L12 5V9L5 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
    <circle cx="12" cy="18" r="1" fill="currentColor" opacity="0.7"/>
    <circle cx="8" cy="18" r="1" fill="currentColor" opacity="0.7"/>
    <circle cx="16" cy="18" r="1" fill="currentColor" opacity="0.7"/>
  </svg>
);

const BoxIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 16V8C21 7.46957 20.7893 6.96086 20.4142 6.58579C20.0391 6.21071 19.5304 6 19 6H5C4.46957 6 3.96086 6.21071 3.58579 6.58579C3.21071 6.96086 3 7.46957 3 8V16C3 16.5304 3.21071 17.0391 3.58579 17.4142C3.96086 17.7893 4.46957 18 5 18H19C19.5304 18 20.0391 17.7893 20.4142 17.4142C20.7893 17.0391 21 16.5304 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 8L12 13L21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
    <path d="M12 13V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
  </svg>
);

const ChefIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 13V21H18V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 13C4.34315 13 3 11.6569 3 10C3 8.34315 4.34315 7 6 7C6 4.79086 7.79086 3 10 3C11.8638 3 13.4299 4.27477 13.874 6H14C16.2091 6 18 7.79086 18 10C19.6569 10 21 11.3431 21 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
    <path d="M10 17H10.01M14 17H14.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
  </svg>
);

const MessageIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 9H16M8 13H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
  </svg>
);

const SparkleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L13.835 8.165L19 10L13.835 11.835L12 17L10.165 11.835L5 10L10.165 8.165L12 3Z" fill="currentColor" opacity="0.8"/>
    <path d="M17 14L17.618 15.618L19.236 16.236L17.618 16.854L17 18.472L16.382 16.854L14.764 16.236L16.382 15.618L17 14Z" fill="currentColor" opacity="0.6"/>
    <path d="M8 18L8.309 18.809L9.118 19.118L8.309 19.427L8 20.236L7.691 19.427L6.882 19.118L7.691 18.809L8 18Z" fill="currentColor" opacity="0.5"/>
  </svg>
);

// Hover Icons
const FactoryHoverIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 20V10L10 14V10L15 14V10L20 14V20" stroke="#ff7f50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
    <circle cx="8" cy="17" r="0.5" fill="#ff7f50" opacity="0.6"/>
    <circle cx="12" cy="17" r="0.5" fill="#ff7f50" opacity="0.6"/>
    <circle cx="16" cy="17" r="0.5" fill="#ff7f50" opacity="0.6"/>
  </svg>
);

const ChickenIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="15" rx="6" ry="5" fill="#4a7c59" opacity="0.3"/>
    <circle cx="12" cy="10" r="4" fill="#4a7c59" opacity="0.5"/>
    <path d="M14 10C14 10 13.5 8 12 8C10.5 8 10 10 10 10" stroke="#4a7c59" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
    <circle cx="10.5" cy="10" r="0.5" fill="#4a7c59"/>
    <circle cx="13.5" cy="10" r="0.5" fill="#4a7c59"/>
    <path d="M12 7C12 7 11.5 5 12 5C12.5 5 12 7 12 7" fill="#ff7f50" opacity="0.8"/>
  </svg>
);

const ChefHatIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 18V20H16V18" stroke="#ff7f50" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
    <path d="M8 18C6 18 6 16 6 16V12C6 9 8 8 10 8C10 6 11 5 12 5C13 5 14 6 14 8C16 8 18 9 18 12V16C18 16 18 18 16 18" stroke="#ff7f50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
    <circle cx="10" cy="13" r="0.5" fill="#ff7f50" opacity="0.7"/>
    <circle cx="14" cy="13" r="0.5" fill="#ff7f50" opacity="0.7"/>
  </svg>
);

// Submenu Icons
const AboutIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="8" width="12" height="12" rx="2" stroke="#4a7c59" strokeWidth="1.5" opacity="0.6"/>
    <path d="M9 5V8M15 5V8" stroke="#4a7c59" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
    <path d="M10 12H14M10 16H14" stroke="#4a7c59" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

const CertificateIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 15L10 20L12 19L14 20L12 15Z" fill="#ff7f50" opacity="0.6"/>
    <circle cx="12" cy="11" r="6" stroke="#ff7f50" strokeWidth="1.5" opacity="0.8"/>
    <path d="M12 8L13 10L15 10L13.5 11.5L14 13L12 12L10 13L10.5 11.5L9 10L11 10L12 8Z" fill="#ff7f50" opacity="0.7"/>
  </svg>
);

const ContactIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L8.96701 10.0161C9.67644 11.8562 11.1438 13.3236 12.9839 14.033L13.6121 12.7757C13.8347 12.3306 14.3507 12.1169 14.8228 12.2743L19.3162 13.7721C19.7246 13.9082 20 14.2903 20 14.7208V18C20 19.1046 19.1046 20 18 20H16C7.71573 20 1 13.2843 1 5V5C1 3.89543 1.89543 3 3 3Z" stroke="#4a7c59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
  </svg>
);

const QuestionIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#ff7f50" strokeWidth="1.5" opacity="0.6"/>
    <path d="M12 7C10.3431 7 9 8.34315 9 10C9 10.8885 9.38625 11.6868 10 12.2361C10 12.2361 12 13 12 15" stroke="#ff7f50" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
    <circle cx="12" cy="17" r="0.5" fill="#ff7f50"/>
  </svg>
);

const ComplaintIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H20V16H7L3 20V4Z" stroke="#4a7c59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
    <path d="M8 8H16M8 12H13" stroke="#4a7c59" strokeWidth="1.5" strokeLinecap="round" opacity="0.8"/>
  </svg>
);

const navigation = [
  { 
    name: "Kurumsal", 
    href: "#",
    Icon: BuildingIcon,
    color: "text-[#4a7c59]",
    hoverColor: "hover:text-[#23632c]",
    submenu: [
      { name: "Hakkımızda", href: "/hakkimizda", Icon: AboutIcon },
      { name: "Kalite Politikamız", href: "/kalite-politikamiz", Icon: CertificateIcon },
      { name: "Sertifikalar", href: "/sertifikalar", Icon: CertificateIcon },
    ]
  },
  { 
    name: "Üretim", 
    href: "/uretim-surecimiz", 
    Icon: FactoryIcon,
    color: "text-[#ff7f50]",
    hoverColor: "hover:text-[#e74210]",
  },
  { 
    name: "Ürünler", 
    href: "/urunler", 
    Icon: BoxIcon,
    color: "text-[#4a7c59]",
    hoverColor: "hover:text-[#23632c]",
  },
  { 
    name: "Yemek Tarifleri", 
    href: "/yemek-tarifleri", 
    Icon: ChefIcon,
    color: "text-[#ff7f50]",
    hoverColor: "hover:text-[#e74210]",
  },
  { 
    name: "İletişim", 
    href: "#",
    Icon: MessageIcon,
    color: "text-[#4a7c59]",
    hoverColor: "hover:text-[#23632c]",
    submenu: [
      { name: "İletişim", href: "/iletisim", Icon: ContactIcon },
      { name: "Bize Sor", href: "/bize-sor", Icon: QuestionIcon },
      { name: "Şikayet", href: "/sikayet", Icon: ComplaintIcon },
    ]
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className={`bg-[#e74210] text-white py-2 text-sm transition-all duration-300 ${scrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <a href="tel:+905462251176" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">0546 225 11 76</span>
              </a>
              <a href="mailto:info@hititpilic.com" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">info@hititpilic.com</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs hidden md:inline">TSE Helal | ISO 9001 | HACCP Sertifikalı</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md top-0' : 'bg-transparent top-10'
      }`}>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo - Left */}
            <div className={`flex items-center gap-4 transition-all duration-300 ${
              scrolled ? 'py-1 lg:py-2' : 'py-2 lg:py-4'
            }`}>
              <Link href="/" className="block">
                <Image
                  src="/logo.svg"
                  alt="Hitit Piliç"
                  width={scrolled ? 100 : 120}
                  height={scrolled ? 40 : 48}
                  className="h-auto transition-all duration-300 max-w-[100px] lg:max-w-[150px]"
                  priority
                />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                type="button"
                className={`p-2.5 rounded-lg transition-colors ${
                  scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Ana menüyü aç</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Navigation - Right */}
            <div className="hidden lg:flex lg:items-center lg:gap-x-6">
              {navigation.map((item) => {
                const { Icon } = item;
                return (
                  <div key={item.name} className="relative">
                    {item.submenu ? (
                      <div 
                        className="relative group"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <button className={`flex items-center gap-2 text-base font-bold leading-6 transition-all duration-300 px-3 rounded-lg group-hover:scale-105 ${
                          scrolled 
                            ? 'text-gray-900 hover:text-[#23632c] hover:bg-gray-50 py-4' 
                            : 'text-white hover:text-white hover:bg-white/10 py-6'
                        }`}>
                          <Icon className={`w-5 h-5 ${scrolled ? item.color : 'text-white'}`} />
                          <span className="relative">
                            {item.name}
                          </span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        {activeDropdown === item.name && (
                          <div className="absolute left-0 top-full -mt-1 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fadeIn">
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.name}
                                href={subitem.href}
                                className="flex items-center gap-3 px-5 py-4 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200 group"
                              >
                                {subitem.Icon && <subitem.Icon />}
                                <span className="group-hover:translate-x-1 transition-transform">{subitem.name}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`group flex items-center gap-2 text-base font-bold leading-6 transition-all duration-300 px-3 rounded-lg hover:scale-105 ${
                          scrolled 
                            ? `text-gray-900 ${item.hoverColor} hover:bg-gray-50 py-4` 
                            : 'text-white hover:text-white hover:bg-white/10 py-6'
                        }`}
                      >
                        <Icon className={`w-5 h-5 group-hover:rotate-12 transition-transform duration-300 ${
                          scrolled ? item.color : 'text-white'
                        }`} />
                        <span className="relative">
                          {item.name}
                        </span>
                      </Link>
                    )}
                  </div>
                );
              })}
              <Link
                href="/bayilik-basvuru"
                className="ml-6 bg-[#e74210] hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-110 hover:rotate-1 shadow-lg hover:shadow-xl flex items-center gap-2 group"
              >
                <SparkleIcon className="w-5 h-5 group-hover:animate-pulse" />
                Bayilik Başvurusu
              </Link>
            </div>
          </div>
        </nav>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            <div className="fixed inset-0 bg-black/30" onClick={() => setMobileMenuOpen(false)} />
            <div className="fixed right-0 top-0 bottom-0 w-full max-w-xs bg-white shadow-xl">
              <div className="flex items-center justify-between p-6 border-b">
                <Image
                  src="/logo.svg"
                  alt="Hitit Piliç"
                  width={100}
                  height={40}
                  className="h-auto"
                />
                <button
                  type="button"
                  className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Menüyü kapat</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="px-6 py-4 overflow-y-auto max-h-[calc(100vh-100px)]">
                {navigation.map((item) => (
                  <div key={item.name} className="border-b border-gray-100 last:border-0">
                    {item.submenu ? (
                      <div>
                        <div className="py-3 font-semibold text-gray-900">
                          {item.name}
                        </div>
                        <div className="pl-4 pb-2">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="block py-2 text-gray-600 hover:text-[#e74210] transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-3 font-semibold text-gray-900 hover:text-[#e74210] transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="mt-6 mb-4">
                  <Link
                    href="/bayilik-basvuru"
                    className="block text-center bg-[#e74210] hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Bayilik Başvurusu
                  </Link>
                </div>
                <div className="py-4 border-t border-gray-100 text-sm text-gray-600">
                  <a href="tel:+905462251176" className="flex items-center gap-2 py-2">
                    <Phone className="w-4 h-4" />
                    0546 225 11 76
                  </a>
                  <a href="mailto:info@hititpilic.com" className="flex items-center gap-2 py-2">
                    <Mail className="w-4 h-4" />
                    info@hititpilic.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}