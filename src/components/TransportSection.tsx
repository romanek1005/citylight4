
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Truck } from 'lucide-react';

const TransportSection = () => {
  const scrollToContact = () => {
    window.location.href = '#kontakt';
  };

  return (
    <section id="doprava" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Autodoprava a kontejnery
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1493962853295-0fd70327578a"
                  alt="Kontejnerový sklápěč IVECO"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-emerald-600 flex items-center">
                    <Truck className="w-5 h-5 mr-2" />
                    Vozový park
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Přeprava materiálu od 3,5 t do 8 t</li>
                    <li>• Dodávkové vozy: Renault Trafic, Ford Tranzit Custom</li>
                    <li>• Kontejnerový sklápěč: IVECO Eurocargo 8 t</li>
                    <li>• Možnost různých typů nástaveb</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-emerald-600">Ceník</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-700">Dodávka do 3,5 t:</span>
                      <span className="font-bold text-lg">9,50 Kč / km</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-700">Iveco kontejner:</span>
                      <span className="font-bold text-lg">18,- Kč / km</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-700">Manipulace s kontejnerem:</span>
                      <span className="font-bold text-lg">100,- Kč / 15 min</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Zapůjčení kontejneru:</span>
                      <span className="font-bold text-lg">50,- Kč / den</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button 
                size="lg" 
                className="w-full bg-red-600 hover:bg-red-700"
                onClick={scrollToContact}
              >
                Poptat dopravu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportSection;
