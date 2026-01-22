import { Metadata } from "next";
import BizeSorClient from "./BizeSorClient";

export const metadata: Metadata = {
  title: "Bize Sor - Hitit Piliç",
  description: "Hitit Piliç hakkında merak ettiklerinizi sorun. Ürünlerimiz, bayilik, sipariş ve diğer konularda sorularınızı yanıtlıyoruz.",
};

export default function BizeSorPage() {
  return <BizeSorClient />;
}