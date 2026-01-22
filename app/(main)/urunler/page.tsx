import { Metadata } from "next";
import UrunlerClient from "./UrunlerClient";

export const metadata: Metadata = {
  title: "Ürünlerimiz - Hitit Piliç", 
  description: "Hitit Piliç'in taze ve kaliteli tavuk ürünleri. Bütün tavuk, parça tavuk, but, göğüs, kanat ve özel kesim ürünlerimizi keşfedin.",
};

export default function UrunlerPage() {
  return <UrunlerClient />;
}