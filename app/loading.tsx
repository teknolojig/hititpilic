export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-solid border-[#e74210] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        <p className="mt-4 text-lg text-gray-600">Yükleniyor...</p>
      </div>
    </div>
  );
}