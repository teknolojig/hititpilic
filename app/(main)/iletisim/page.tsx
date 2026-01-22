import { Metadata } from "next";
import { MapPin } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";

export const metadata: Metadata = {
  title: "İletişim - Hitit Piliç",
  description: "Hitit Piliç iletişim bilgileri, adres, telefon ve iletişim formu. Bizimle iletişime geçin.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-[#23632c] to-[#2d7a3a]">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="w-12 h-12 text-white" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                İletişim
              </h1>
            </div>
            <p className="text-xl text-white/90 leading-relaxed">
              Sorularınız, önerileriniz ve tüm ihtiyaçlarınız için bizimle
              iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Bize Ulaşın
              </h2>
              <p className="text-gray-600 mb-8">
                Formu doldurarak bizimle iletişime geçebilirsiniz. En kısa
                sürede size dönüş yapacağız.
              </p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <ContactMap />
    </div>
  );
}