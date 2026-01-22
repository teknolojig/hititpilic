'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#e74210] mb-4">Hata!</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Bir şeyler yanlış gitti
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Üzgünüz, beklenmeyen bir hata oluştu. Lütfen sayfayı yenileyin veya ana sayfaya dönün.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-[#e74210] hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Tekrar Dene
          </button>
          <Link
            href="/"
            className="bg-[#23632c] hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
}