import { Metadata } from "next";
import DealershipForm from "@/components/dealership/DealershipForm";
import DealershipBenefits from "@/components/dealership/DealershipBenefits";

export const metadata: Metadata = {
  title: "Bayilik Başvurusu - Hitit Piliç",
  description: "Hitit Piliç bayilik başvuru formu. Türkiye'nin güvenilir tavuk üreticisi Hitit Piliç'in bayilik ağına katılın.",
};

export default function DealershipPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-[#23632c] to-[#2d7a3a]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-center">
              Bayilik Başvurusu
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto text-center">
              Hitit Piliç ailesine katılın, kazançlı iş ortaklığı
              fırsatlarından yararlanın.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <DealershipBenefits />

      {/* Application Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-[#e74210]">Başvuru</span> <span className="text-[#23632c]">Formu</span>
              </h2>
              <p className="text-lg text-gray-600">
                Aşağıdaki formu doldurarak bayilik başvurunuzu yapabilirsiniz.
                Başvurunuz en kısa sürede değerlendirilecektir.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <DealershipForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}