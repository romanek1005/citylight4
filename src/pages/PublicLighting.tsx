
import Header from '@/components/Header';
import PublicLightingHero from '@/components/PublicLightingHero';
import PublicLightingProcess from '@/components/PublicLightingProcess';
import PublicLightingServices from '@/components/PublicLightingServices';
import PublicLightingGallery from '@/components/PublicLightingGallery';
import PublicLightingContact from '@/components/PublicLightingContact';
import Footer from '@/components/Footer';

const PublicLighting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PublicLightingHero />
        <PublicLightingProcess />
        <PublicLightingServices />
        <PublicLightingGallery />
        <PublicLightingContact />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLighting;
