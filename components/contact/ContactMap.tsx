export default function ContactMap() {
  return (
    <section className="h-[400px] bg-gray-100">
      <div className="w-full h-full relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.7284717294024!2d34.95472231541651!3d40.54871657935094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDMyJzU1LjQiTiAzNMKwNTcnMjMuMSJF!5e0!3m2!1str!2str!4v1635959126543!5m2!1str!2str"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hitit Piliç Konum"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 mb-2">Harita Yükleniyor...</p>
            <p className="text-sm text-gray-500">
              Akkent Mah. Gıda Toptancılar Sitesi 2. Blok No:26 Çorum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}