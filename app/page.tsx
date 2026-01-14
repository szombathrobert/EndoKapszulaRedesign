import HeroCarousel from "./components/HeroCarousel";
import WelcomeSection from "./components/WelcomeSection";
import ServicesSection from "./components/ServiceSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <WelcomeSection/>
      <ServicesSection />
      <div className="h-20 bg-slate-50"></div>
    </main>
  );
}