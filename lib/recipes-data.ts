export interface Recipe {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  time: string;
  cookTime: string;
  prepTime: string;
  servings: string;
  calories: string;
  protein: string;
  fat: string;
  carbs: string;
  mainImage: string;
  galleryImages: string[];
  ingredients: { amount: string; name: string }[];
  instructions: {
    step: number;
    title: string;
    description: string;
    tip?: string;
  }[];
  tips: string[];
  tags: string[];
}

export const recipes: Recipe[] = [
  {
    id: 1,
    slug: "firinda-nar-eksili-kalcali-but",
    title: "Fırında Nar Ekşili Kalçalı But",
    description: "Nar ekşisi, zeytinyağı ve aromatik baharatlarla marine edilmiş, fırında mükemmel pişirilmiş kalçalı but. Özel günleriniz için ideal.",
    category: "Ana Yemek",
    difficulty: "Kolay",
    time: "45-50 dk",
    cookTime: "45 dk",
    prepTime: "15 dk",
    servings: "4 Kişilik",
    calories: "555.9 kcal",
    protein: "36.0 g",
    fat: "40.0 g",
    carbs: "9.3 g",
    mainImage: "/images/recipes/firinda-nar-eksili-kalcali-but.jpg",
    galleryImages: [],
    ingredients: [
      { amount: "4 adet", name: "Hitit Piliç Kalçalı But" },
      { amount: "3 yemek kaşığı", name: "Nar ekşisi" },
      { amount: "2 yemek kaşığı", name: "Zeytinyağı" },
      { amount: "2 diş", name: "Sarımsak (ezilmiş)" },
      { amount: "1 tatlı kaşığı", name: "Tuz" },
      { amount: "1 çay kaşığı", name: "Karabiber" },
      { amount: "1 çay kaşığı", name: "Kekik" },
    ],
    instructions: [
      {
        step: 1,
        title: "Hazırlık",
        description: "Kalçalı butları yıkayıp kurulayın.",
        tip: "Butları marine etmeden önce oda sıcaklığına gelmesini bekleyin."
      },
      {
        step: 2,
        title: "Marine Sosu",
        description: "Bir kasede nar ekşisi, zeytinyağı, sarımsak, tuz, karabiber ve kekiği karıştırın.",
        tip: "Nar ekşisinin kalitesi lezzeti doğrudan etkiler, mümkünse ev yapımı kullanın."
      },
      {
        step: 3,
        title: "Marine Etme",
        description: "Tavukları bu karışıma bulayın ve buzdolabında en az 1 saat marine edin.",
        tip: "Bir gece önceden marine ederseniz lezzet daha da artar."
      },
      {
        step: 4,
        title: "Pişirme",
        description: "Fırın tepsisine tavukları yerleştirin, 200°C önceden ısıtılmış fırında 45-50 dakika pişirin.",
        tip: "İlk 30 dakika folyo ile kapatarak pişirin, son 15-20 dakika folyoyu açın."
      },
      {
        step: 5,
        title: "Servis",
        description: "Üzeri hafif kızarınca sıcak servis edin. Yanına fırın patates çok yakışır.",
        tip: "Servis yaparken üzerine taze nar taneleri serpebilirsiniz."
      }
    ],
    tips: [
      "Marine işlemi ne kadar uzun olursa, et o kadar lezzetli olur.",
      "Fırın tepsisine az miktarda su eklerseniz et kurumaz.",
      "Kalan sosları pilavın üzerine gezdirebilirsiniz."
    ],
    tags: ["Fırın Yemekleri", "Tavuk But", "Ana Yemek", "Özel Günler", "Nar Ekşili"]
  },
  {
    id: 2,
    slug: "balli-hardalli-baget-izgara",
    title: "Ballı Hardallı Baget Izgara",
    description: "Bal ve hardal sosuyla marine edilmiş, ızgarada veya tavada pişirilmiş nefis bagetler. Çocukların ve büyüklerin favorisi.",
    category: "Izgara",
    difficulty: "Kolay",
    time: "20-25 dk",
    cookTime: "20 dk",
    prepTime: "10 dk",
    servings: "4 Kişilik",
    calories: "561.9 kcal",
    protein: "36.6 g",
    fat: "38.5 g",
    carbs: "13.1 g",
    mainImage: "/images/recipes/balli-hardalli-baget-izgara.jpg",
    galleryImages: [],
    ingredients: [
      { amount: "8 adet", name: "Hitit Piliç Baget" },
      { amount: "2 yemek kaşığı", name: "Bal" },
      { amount: "2 yemek kaşığı", name: "Hardal" },
      { amount: "2 yemek kaşığı", name: "Zeytinyağı" },
      { amount: "1 tatlı kaşığı", name: "Tuz" },
      { amount: "1 çay kaşığı", name: "Karabiber" },
    ],
    instructions: [
      {
        step: 1,
        title: "Sos Hazırlama",
        description: "Bal, hardal, zeytinyağı, tuz ve karabiberi bir kasede karıştırın.",
        tip: "Dijon hardal kullanırsanız daha aromatik olur."
      },
      {
        step: 2,
        title: "Marine Etme",
        description: "Bagetleri bu karışıma bulayın ve en az 30 dakika marine edin.",
        tip: "Bagetlerin her tarafının sosla kaplanmasına özen gösterin."
      },
      {
        step: 3,
        title: "Pişirme Hazırlığı",
        description: "Izgara tavasını veya normal tavanızı orta ateşte ısıtın.",
        tip: "Tavaya az miktarda yağ sürün."
      },
      {
        step: 4,
        title: "Pişirme",
        description: "Bagetleri her tarafı kızarana kadar, ara ara çevirerek 20-25 dakika pişirin.",
        tip: "Çok yüksek ateşte pişirmeyin, içi pişmeden dışı yanabilir."
      },
      {
        step: 5,
        title: "Servis",
        description: "Üzerine kalan marinattan hafifçe sürerek sıcak servis edin.",
        tip: "Yanına patates kızartması ve salata ile servis edebilirsiniz."
      }
    ],
    tips: [
      "Bagetleri buzdolabından çıkarıp 10 dakika dinlendirin.",
      "Pişirme sırasında sık çevirin ki her tarafı eşit pişsin.",
      "Servis sırasında üzerine taze kekik serpebilirsiniz."
    ],
    tags: ["Izgara", "Tavuk Baget", "Ballı Hardallı", "Kolay Tarifler", "Çocuk Menüsü"]
  },
  {
    id: 3,
    slug: "sarimsakli-yogurtlu-sarma",
    title: "Sarımsaklı Yoğurtlu Sarma (Fırında)",
    description: "Baharatlı sarma tavuklar üzerine sarımsaklı yoğurt sosuyla servis edilen nefis bir ana yemek.",
    category: "Ana Yemek",
    difficulty: "Kolay",
    time: "35-40 dk",
    cookTime: "35 dk",
    prepTime: "10 dk",
    servings: "4 Kişilik",
    calories: "538.9 kcal",
    protein: "37.8 g",
    fat: "39.6 g",
    carbs: "2.4 g",
    mainImage: "/images/recipes/sarimsakli-yogurtlu-sarma.webp",
    galleryImages: [],
    ingredients: [
      { amount: "8 adet", name: "Hitit Piliç Sarma" },
      { amount: "3 yemek kaşığı", name: "Zeytinyağı" },
      { amount: "1 tatlı kaşığı", name: "Toz kırmızı biber" },
      { amount: "1 tatlı kaşığı", name: "Tuz" },
      { amount: "1 çay kaşığı", name: "Karabiber" },
      { amount: "1 su bardağı", name: "Yoğurt" },
      { amount: "2 diş", name: "Sarımsak (ezilmiş)" },
    ],
    instructions: [
      {
        step: 1,
        title: "Baharatlama",
        description: "Sarma tavukları zeytinyağı, kırmızı biber, tuz ve karabiberle harmanlayın.",
        tip: "Baharatları elinizle iyice yedirin."
      },
      {
        step: 2,
        title: "Fırınlama",
        description: "200°C önceden ısıtılmış fırında 35-40 dakika pişirin.",
        tip: "İlk 20 dakika folyo ile kapatarak pişirin."
      },
      {
        step: 3,
        title: "Yoğurt Sosu",
        description: "Yoğurdu ezilmiş sarımsakla karıştırın.",
        tip: "Yoğurt sosu için biraz tuz ve zeytinyağı ekleyebilirsiniz."
      },
      {
        step: 4,
        title: "Servis",
        description: "Pişen tavukların üzerine yoğurt sosunu gezdirin.",
        tip: "Üzerine pul biber ve kuru nane serpebilirsiniz."
      },
      {
        step: 5,
        title: "Garnitür",
        description: "Yanına pilav veya közlenmiş sebze ile servis edin.",
        tip: "Bulgur pilavı çok yakışır."
      }
    ],
    tips: [
      "Sarmaları fırından çıkarmadan önce çatalla kontrol edin.",
      "Yoğurt sosunu servis anında ekleyin.",
      "Kalan fırın suyunu pilavın üzerine dökebilirsiniz."
    ],
    tags: ["Fırın Yemekleri", "Tavuk Sarma", "Yoğurtlu", "Ana Yemek", "Pratik"]
  },
  {
    id: 4,
    slug: "limonlu-kekikli-derili-bonfile",
    title: "Limonlu Kekikli Derili Bonfile Tava",
    description: "Limon ve kekikle marine edilmiş, derisi çıtır, içi yumuşacık tavada pişirilmiş bonfile.",
    category: "Ana Yemek",
    difficulty: "Kolay",
    time: "20-25 dk",
    cookTime: "15 dk",
    prepTime: "35 dk",
    servings: "4 Kişilik",
    calories: "420.6 kcal",
    protein: "40.0 g",
    fat: "26.0 g",
    carbs: "0.7 g",
    mainImage: "/images/recipes/limonlu-kekikli-derili-bonfile-tava.webp",
    galleryImages: [],
    ingredients: [
      { amount: "4 adet", name: "Hitit Piliç Derili Bonfile" },
      { amount: "2 yemek kaşığı", name: "Zeytinyağı" },
      { amount: "1 adet", name: "Limon suyu" },
      { amount: "1 tatlı kaşığı", name: "Kekik" },
      { amount: "1 tatlı kaşığı", name: "Tuz" },
      { amount: "1 çay kaşığı", name: "Karabiber" },
    ],
    instructions: [
      {
        step: 1,
        title: "Hazırlık",
        description: "Derili bonfileleri yıkayıp kurulayın.",
        tip: "Kağıt havlu ile iyice kurulayın ki deri çıtır olsun."
      },
      {
        step: 2,
        title: "Marine Sosu",
        description: "Bir kasede zeytinyağı, limon suyu, kekik, tuz ve karabiberi karıştırın.",
        tip: "Taze kekik kullanırsanız daha aromatik olur."
      },
      {
        step: 3,
        title: "Marine Etme",
        description: "Tavukları bu karışıma bulayın ve 30 dakika dinlendirin.",
        tip: "Oda sıcaklığında marine edin."
      },
      {
        step: 4,
        title: "Pişirme",
        description: "Tavayı orta ateşte ısıtın, derili tarafı alta gelecek şekilde tavukları yerleştirin.",
        tip: "Tavaya çok az yağ ekleyin."
      },
      {
        step: 5,
        title: "Çevirme ve Servis",
        description: "Derisi çıtır olana kadar pişirin, sonra çevirip içi tamamen pişene kadar devam edin.",
        tip: "Derili tarafı 7-8 dakika, diğer tarafı 5-6 dakika pişirin."
      }
    ],
    tips: [
      "Deriyi çıtır yapmak için tavayı kapamayın.",
      "Pişirme sırasında spatula ile bastırın.",
      "Servis öncesi 5 dakika dinlendirin."
    ],
    tags: ["Tava Yemekleri", "Bonfile", "Limonlu", "Diyet Dostu", "Protein"]
  },
  {
    id: 5,
    slug: "acili-barbeku-soslu-izgara-kanat",
    title: "Acılı Barbekü Soslu Izgara Kanat",
    description: "Barbekü ve acı sosla marine edilmiş, ızgarada kızartılmış nefis kanatlar. Maç gecelerine ideal.",
    category: "Izgara",
    difficulty: "Kolay",
    time: "25-30 dk",
    cookTime: "25 dk",
    prepTime: "1 saat",
    servings: "4 Kişilik",
    calories: "529.7 kcal",
    protein: "38.2 g",
    fat: "38.2 g",
    carbs: "8.1 g",
    mainImage: "/images/recipes/acili-barbeku-soslu-izgara-kanat.webp",
    galleryImages: [],
    ingredients: [
      { amount: "1 kg", name: "Hitit Piliç Izgara Kanat" },
      { amount: "3 yemek kaşığı", name: "Barbekü sos" },
      { amount: "1 yemek kaşığı", name: "Acı sos (isteğe göre)" },
      { amount: "2 yemek kaşığı", name: "Zeytinyağı" },
      { amount: "1 tatlı kaşığı", name: "Tuz" },
    ],
    instructions: [
      {
        step: 1,
        title: "Sos Hazırlama",
        description: "Barbekü sos, acı sos, zeytinyağı ve tuzu karıştırın.",
        tip: "Acı seviyesini damak tadınıza göre ayarlayın."
      },
      {
        step: 2,
        title: "Marine Etme",
        description: "Kanatları bu karışıma bulayın, en az 1 saat buzdolabında bekletin.",
        tip: "Bir gece önceden marine ederseniz daha lezzetli olur."
      },
      {
        step: 3,
        title: "Pişirme Hazırlığı",
        description: "Izgara tavasında veya fırında yüksek ısıda pişirmeye hazırlanın.",
        tip: "Fırında pişirecekseniz 220°C'ye ısıtın."
      },
      {
        step: 4,
        title: "Pişirme",
        description: "Kanatları ara ara çevirerek kızartana kadar pişirin.",
        tip: "Her 5-7 dakikada bir çevirin."
      },
      {
        step: 5,
        title: "Servis",
        description: "Yanına soğuk ayran ve taze salata ile servis edin.",
        tip: "Üzerine taze maydanoz serpebilirsiniz."
      }
    ],
    tips: [
      "Kanatları pişirmeden önce oda sıcaklığına getirin.",
      "Fazla acı sevmeyenler acı sosu azaltabilir.",
      "Ranch sos ile servis edebilirsiniz."
    ],
    tags: ["Izgara", "Tavuk Kanat", "Acılı", "Barbekü", "Parti Yemeği"]
  }
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find(recipe => recipe.slug === slug);
}

export function getRelatedRecipes(currentSlug: string, limit: number = 3): Recipe[] {
  return recipes
    .filter(recipe => recipe.slug !== currentSlug)
    .slice(0, limit);
}