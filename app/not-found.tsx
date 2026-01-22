import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-[#e74210] mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Sayfa Bulunamadı
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#23632c] hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}