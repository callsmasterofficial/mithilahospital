import HeroSection from "@/component/home/HeroSection";
import Counter from "@/component/home/Counter";
import FeatureSection from "@/component/home/FeatureSection";
import AboutSection from "@/component/home/AboutSection";
import MarqueeSection from "@/component/home/MarqueeSection";
import ServicesTopSection from "@/component/home/ServicesTopSection";
import ServicesSection from "@/component/home/ServicesSection";
import Script from "next/script";
import TeamSection from "@/component/home/TeamSection";
import SubscribeSection from "@/component/home/SubscribeSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Counter />
      <FeatureSection />
      <AboutSection />
      <MarqueeSection />
      <ServicesTopSection />
      <ServicesSection />
      <Script src="assets/js/swiper.min.js" />
      <TeamSection />
      <SubscribeSection />
    </div>
  );
}
