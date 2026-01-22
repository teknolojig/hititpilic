import { Metadata } from "next";
import SikayetClient from "./SikayetClient";

export const metadata: Metadata = {
  title: "Şikayet ve Öneriler - Hitit Piliç",
  description: "Hitit Piliç şikayet ve öneri formu. Ürün kalitesi, teslimat ve müşteri hizmetleri konularında geri bildirimlerinizi paylaşın.",
};

export default function SikayetPage() {
  return <SikayetClient />;
}