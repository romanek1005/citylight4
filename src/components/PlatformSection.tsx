
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PlatformSection = () => {
  const scrollToContact = () => {
    window.location.href = '#kontakt';
  };

  return (
    <section id="plosina" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Práce s montážní plošinou Renault Maxity
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
                  alt="Montážní plošina Renault Maxity"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                  alt="Plošina při práci"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                  alt="Detail plošiny"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>

            <div>
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-emerald-600">Parametry</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span>Podvozek:</span>
                      <span className="font-medium">Renault Maxity - 3,5 t</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Výškový dosah:</span>
                      <span className="font-medium">18 m</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Stranový dosah:</span>
                      <span className="font-medium">7,5 m</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Nosnost koše:</span>
                      <span className="font-medium">200 kg</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-emerald-600">Ceník</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-700">Hodinová sazba:</span>
                      <span className="font-bold text-lg">490,- Kč</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-700">Obsluha:</span>
                      <span className="font-bold text-lg">200,- Kč</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Doprava:</span>
                      <span className="font-bold text-lg">17,- Kč / km</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button 
                size="lg" 
                className="w-full bg-red-600 hover:bg-red-700"
                onClick={scrollToContact}
              >
                Poptat pronájem plošiny
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
