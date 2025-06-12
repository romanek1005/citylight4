
import Header from '@/components/Header';
import ReferenceHero from '@/components/ReferenceHero';
import ReferenceGallery from '@/components/ReferenceGallery';
import ReferenceMap from '@/components/ReferenceMap';
import ReferenceClients from '@/components/ReferenceClients';
import ReferenceCTA from '@/components/ReferenceCTA';
import Footer from '@/components/Footer';

const References = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ReferenceHero />
        <ReferenceGallery />
        <ReferenceMap />
        <ReferenceClients />
        <ReferenceCTA />
      </main>
      <Footer />
    </div>
  );
};

export default References;
