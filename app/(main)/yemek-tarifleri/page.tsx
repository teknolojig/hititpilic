import { Metadata } from "next";
import YemekTarifleriClient from "./YemekTarifleriClient";

export const metadata: Metadata = {
  title: "Yemek Tarifleri - Hitit Piliç",
  description: "Hitit Piliç ürünleri ile hazırlayabileceğiniz lezzetli yemek tarifleri. Fırın, ızgara ve tava yemekleri için pratik tarifler.",
};

export default function YemekTarifleriPage() {
  return <YemekTarifleriClient />;
}