import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import NewsletterSignup from "@/components/BrandsSection";
import Reviews from "@/components/Reviews";
import ShopByCategory from "@/components/ShopByCategory";
import SkincareHighlight from "@/components/SkincareHighlight";
import SpecialOffer from "@/components/SpecialOffer";
import TopItems from "@/components/TopItems";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="max-w-7xl mx-auto p-6 space-y-12">
        <HeroSection></HeroSection>
        <Features></Features>
        <TopItems></TopItems>
        <ShopByCategory></ShopByCategory>
        <SpecialOffer></SpecialOffer>
        <Reviews></Reviews>
        <SkincareHighlight></SkincareHighlight>
        <NewsletterSignup></NewsletterSignup>
      </div>
    </div>
  );
}
