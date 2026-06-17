import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { BrandsSection } from "@/components/BrandsSection";
import { FoundersSection } from "@/components/FoundersSection";
import { GlobalOps } from "@/components/GlobalOps";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/Interactions";

function App() {
  return (
    <LanguageProvider>
      <div className="App grain min-h-screen bg-[#050505] relative">
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <Ticker />
          <BrandsSection />
          <FoundersSection />
          <GlobalOps />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
