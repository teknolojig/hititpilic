import Hero from "@/components/home/Hero";
import KuruYolumSection from "@/components/home/KuruYolumSection";
import Products from "@/components/home/Products";
import WhyChooseUs, { StatsSection } from "@/components/home/WhyChooseUs";
import Recipes from "@/components/home/Recipes";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <KuruYolumSection />
      <Products />
      <WhyChooseUs />
      <StatsSection />
      <Recipes />
      <CTA />
    </>
  );
}