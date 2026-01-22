import { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda - Hitit Piliç",
  description: "Hitit Piliç, gıda sektöründe 30 yılı aşkın tecrübesi ile Çorum'un önde gelen tavuk dağıtıcılarından İLSA GIDA bünyesinde faaliyet göstermektedir.",
};

const milestones = [
  { year: "1994", title: "Kuruluş", description: "İLSA GIDA bünyesinde Çorum'da kuruldu" },
  { year: "2000", title: "Modern Tesis", description: "Yüksek üretim kapasiteli modern tesisimiz faaliyete geçti" },
  { year: "2010", title: "Teknoloji Yatırımı", description: "İleri teknoloji ekipmanlar ve otomasyon sistemleri kuruldu" },
  { year: "2018", title: "Kalite Belgeleri", description: "ISO 22000 ve HACCP gıda güvenliği standartları uygulandı" },
  { year: "2024", title: "Büyüme Hedefi", description: "Türkiye'nin dört bir yanına ulaşan güçlü marka hedefi" },
];

const values = [
  "Gıda güvenliği önceliğimizdir",
  "Hijyen ve sağlıkta taviz vermeyiz",
  "Doğal ve dengeli beslenme ile üstün lezzet sunarız",
  "Teknoloji ve geleneği birleştiririz",
  "Sürdürülebilirlik ve çevreye saygı ilkemizdir",
  "Her lokmada güven, her üründe lezzet garantisi veririz",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-[#23632c] to-[#2d7a3a]">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Building2 className="w-12 h-12 text-white" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Hakkımızda
              </h1>
            </div>
            <p className="text-xl text-white/90 leading-relaxed">
              30 yılı aşkın tecrübemizle, Çorum'dan Türkiye'nin sofralarına
              güvenilir ve lezzetli tavuk ürünleri sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-secondary mb-6">
                <span className="text-gradient">Hikayemiz</span>
              </h2>
              <p className="text-gray-600 mb-4">
                Hitit Piliç, gıda sektöründe 30 yılı aşkın tecrübesi ile Çorum'un önde 
                gelen tavuk dağıtıcılarından İLSA GIDA bünyesinde faaliyet göstermektedir. 
                Çorum'da kurduğumuz modern tesisimiz, yüksek üretim kapasitesi ve ileri 
                teknolojiye sahip ekipmanlarıyla, her gün binlerce aileye sağlıklı, 
                güvenilir ve lezzetli tavuk ürünleri ulaştırmaktadır.
              </p>
              <p className="text-gray-600 mb-4">
                Kurulduğumuz günden bu yana, kalite, hijyen ve gıda güvenliği ilkelerinden 
                ödün vermeden çalışıyoruz. Parçalamadan paketlemeye kadar tüm süreçlerimiz, 
                uluslararası gıda güvenliği standartlarına uygun olarak, uzman kadromuzun 
                titiz denetimi altında yürütülmektedir.
              </p>
              <p className="text-gray-600 mb-4">
                Tavuklarımız, doğal beslenme yöntemleri ile yetiştirilir, kuru kesim ve 
                elle yolum teknolojisi ile sofralarınıza tazeliğini koruyarak ulaşır. 
                Bu sayede, yüksek besin değeri, üstün lezzet ve güvenilir kaliteyi bir 
                arada sunuyoruz.
              </p>
              <p className="text-gray-600">
                Bugün Hitit Piliç, yalnızca Çorum'un değil, Türkiye'nin dört bir yanında 
                tercih edilen güçlü bir marka konumuna ulaşması için çalışıyoruz.
              </p>
            </div>
            <div className="relative h-[400px] bg-gray-100 rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-500">Tesis Görseli</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-12">
            <span className="text-gradient">Tarihçemiz</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="w-1/2 px-8">
                    <div
                      className={`bg-white p-6 rounded-lg shadow-md ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      <div className="text-primary-orange font-bold text-2xl mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="font-bold text-lg mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-orange rounded-full border-4 border-white"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary text-center mb-12">
              <span className="text-gradient">Değerlerimiz</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary-green flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Section */}
      <section className="section-padding bg-gradient-to-r from-primary-orange to-primary-green text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Misyonumuz</h3>
                <p className="text-white/90">
                  Doğadan gelen en saf lezzeti, en yüksek hijyen standartları ve modern 
                  üretim teknolojileriyle buluşturarak, sofralarınıza sağlıklı, güvenilir 
                  ve lezzetli tavuk ürünleri sunmak. 30 yılı aşkın tecrübemiz ve doğal 
                  beslenme programıyla yetiştirdiğimiz tavuklarımızla, hem Türkiye'de hem 
                  de uluslararası pazarda güvenilir bir marka olmayı sürdürmek.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Vizyonumuz</h3>
                <p className="text-white/90">
                  Türkiye'nin en güvenilir ve en çok tercih edilen tavuk markalarından biri 
                  olmak, sürdürülebilir üretim modelleriyle hem doğaya hem de insan sağlığına 
                  katkı sağlamak, tüketicilerimizin güvenle tercih ettiği, her lokmada kalite 
                  ve lezzeti hissettiren öncü bir marka olmak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}