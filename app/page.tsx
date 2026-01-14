import HeroCarousel from "./components/HeroCarousel";
import QuickInfo from "./components/QuickInfo"; // A 3 kártya
import WelcomeSection from "./components/WelcomeSection"; // Bemutatkozás + Miért mi
import ServicesSection from "./components/ServiceSection";
import StatsSection from "./components/StatsSection"; // Eredményeink
import TeamSection from "./components/TeamSection";
import ReviewsSection from "./components/ReviewsSection"; // Vélemények
import PartnersSection from "./components/PartnersSection"; // Kötelező elemek

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. Látvány és Gyors elérés */}
      <HeroCarousel />
      <QuickInfo /> 

      {/* 2. Bizalomépítés és Bemutatkozás */}
      <WelcomeSection />

      {/* 3. Számok (Social Proof) - Megtöri a fehér hátteret */}
      <StatsSection />

      {/* 4. Konkrét Szolgáltatások */}
      <ServicesSection />

      {/* 5. Csapat (Emberi tényező) */}
      <TeamSection />

      {/* 6. Vélemények */}
      <ReviewsSection />

      {/* 7. Kötelező Jogi/Partner elemek + Foglalási infó */}
      <PartnersSection />

      {/* A Footer a layout.tsx-ben van, így itt nem kell */}
    </main>
  );
}