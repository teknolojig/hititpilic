import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="bg-gray-50 rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        İletişim Bilgileri
      </h2>
      
      <div className="space-y-6">
        {/* Adres */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-primary-orange" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Adres</h3>
            <p className="text-gray-600">
              Akkent Mah. Gıda Toptancılar Sitesi
              <br />
              2. Blok No:26 / Çorum, Türkiye
            </p>
          </div>
        </div>

        {/* Telefon */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-primary-orange" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
            <div className="space-y-1">
              <a
                href="tel:+905462251176"
                className="text-gray-600 hover:text-primary-orange transition-colors block"
              >
                0546 225 11 76
              </a>
            </div>
          </div>
        </div>

        {/* E-posta */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-primary-orange" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">E-posta</h3>
            <div className="space-y-1">
              <a
                href="mailto:info@hititpilic.com"
                className="text-gray-600 hover:text-primary-orange transition-colors block"
              >
                info@hititpilic.com
              </a>
              <a
                href="mailto:bayilik@hititpilic.com"
                className="text-gray-600 hover:text-primary-orange transition-colors block"
              >
                bayilik@hititpilic.com
              </a>
            </div>
          </div>
        </div>

        {/* Çalışma Saatleri */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Clock className="w-6 h-6 text-primary-orange" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Çalışma Saatleri
            </h3>
            <div className="space-y-1 text-gray-600">
              <p>Pazartesi - Cuma: 08:00 - 18:00</p>
              <p>Cumartesi: 08:00 - 16:00</p>
              <p>Pazar: Kapalı</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hızlı İletişim Kartları */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">Departmanlar</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h4 className="font-medium text-gray-900 mb-1">Satış</h4>
            <a
              href="tel:+905462251176"
              className="text-sm text-gray-600 hover:text-primary-orange"
            >
              0546 225 11 76
            </a>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h4 className="font-medium text-gray-900 mb-1">Bayilik</h4>
            <a
              href="tel:+905462251176"
              className="text-sm text-gray-600 hover:text-primary-orange"
            >
              0546 225 11 76
            </a>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h4 className="font-medium text-gray-900 mb-1">Muhasebe</h4>
            <a
              href="tel:+905462251176"
              className="text-sm text-gray-600 hover:text-primary-orange"
            >
              0546 225 11 76
            </a>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h4 className="font-medium text-gray-900 mb-1">İnsan Kaynakları</h4>
            <a
              href="tel:+905462251176"
              className="text-sm text-gray-600 hover:text-primary-orange"
            >
              0546 225 11 76
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}