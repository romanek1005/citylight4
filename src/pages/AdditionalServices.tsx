
import Header from '@/components/Header';
import AdditionalServicesHero from '@/components/AdditionalServicesHero';
import PlatformSection from '@/components/PlatformSection';
import ExcavatorSection from '@/components/ExcavatorSection';
import TransportSection from '@/components/TransportSection';
import RadarSection from '@/components/RadarSection';
import Footer from '@/components/Footer';

const AdditionalServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AdditionalServicesHero />
        <PlatformSection />
        <ExcavatorSection />
        <TransportSection />
        <RadarSection />
      </main>
      <Footer />
    </div>
  );
};

export default AdditionalServices;
