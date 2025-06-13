
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ExcavatorSection = () => {
  const scrollToContact = () => {
    window.location.href = '#kontakt';
  };

  return (
    <section id="minibagr" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Zemní práce minibagrem Kubota KX-019
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-emerald-600">Parametry</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span>Hmotnost:</span>
                      <span className="font-medium">2 t</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Hloubkový dosah:</span>
                      <span className="font-medium">2680 mm</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Výsypná výška:</span>
                      <span className="font-medium">2560 mm</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Šířka pásů:</span>
                      <span className="font-medium">990 - 1300 mm</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-emerald-600">Vybavení</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Lžíce (25 mm, 40 mm)</li>
                    <li>• Naklápěcí svahová lžíce (1000 mm)</li>
                    <li>• Hydraulické kladivo (volitelné)</li>
                    <li>• Vrtací zařízení (volitelné)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-emerald-600">Ceník</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-700">Hodinová sazba:</span>
                      <span className="font-bold text-lg">550 - 750,- Kč</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Doprava stroje:</span>
                      <span className="font-bold text-lg">17,- Kč / km</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    *Cena dle náročnosti prováděných prací
                  </p>
                </CardContent>
              </Card>

              <Button 
                size="lg" 
                className="w-full bg-red-600 hover:bg-red-700"
                onClick={scrollToContact}
              >
                Poptat zemní práce
              </Button>
            </div>

            <div>
              <div className="mb-8">
                <img
                  src="/images/our-work/20250412_091130.jpg"
                  alt="Minibagr Kubota KX-019"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/our-work/IMG_20201109_122403.jpg"
                  alt="Detail pásů minibagru"
                  className="w-full h-32 object-cover rounded-lg"
                />
                <img
                  src="/images/our-work/20250511_213042.jpg"
                  alt="Minibagr s jinou lžící"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcavatorSection;
