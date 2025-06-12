
import { Button } from '@/components/ui/button';

const RadarSection = () => {
  const scrollToContact = () => {
    window.location.href = '#kontakt';
  };

  return (
    <section id="radary" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Montáž měřičů rychlosti (radarů)
          </h2>

          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
              alt="Nainstalovaný radar u silnice"
              className="w-full max-w-2xl mx-auto h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Zvyšujeme bezpečnost v obcích nejen kvalitním osvětlením, ale i dodáním 
              a odbornou montáží radarů pro měření rychlosti. Kontaktujte nás pro 
              konkrétní řešení pro vaši obec.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                alt="Montáž radaru"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                alt="Instalovaný radar"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c"
                alt="Radar při provozu"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>

            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700"
              onClick={scrollToContact}
            >
              Poptat montáž radaru
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RadarSection;
