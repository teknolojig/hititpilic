import Image from "next/image";

export default function PlaceholderImage({ productName }: { productName: string }) {
  return (
    <div className="w-full h-full bg-white flex flex-col items-center justify-center p-8">
      <div className="mb-6">
        <Image
          src="/logo.svg"
          alt="Hitit Logo"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>
      <h3 className="text-gray-800 text-xl font-bold mb-2">{productName}</h3>
      <p className="text-yellow-600 text-sm font-medium">Görsel Hazırlanıyor</p>
    </div>
  );
}