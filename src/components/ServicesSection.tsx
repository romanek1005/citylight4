
import { Button } from '@/components/ui/button';
import { ArrowRight, Lightbulb, Construction, Truck, Radar } from 'lucide-react';

const ServicesSection = () => {
  const mainService = {
    icon: Lightbulb,
    title: "Veřejné osvětlení",
    description: "Kompletní realizace moderního a úsporného veřejného osvětlení. Od návrhu přes instalaci až po finální revizi.",
    benefits: ["Úspory energie", "Zvýšená bezpečnost", "Moderní design", "Dlouhá životnost"]
  };

  const additionalServices = [
    {
      icon: Construction,
      title: "Práce s montážní plošinou",
      description: "Díky vlastní plošině jsme flexibilní a efektivní při všech výškových pracích."
    },
    {
      icon: Truck,
      title: "Zemní práce minibagrem",
      description: "Disponujeme vlastní technikou pro výkopy a terénní úpravy."
    },
    {
      icon: Truck,
      title: "Autodoprava a kontejnerizace", 
      description: "Zajišťujeme dopravu materiálu i odvoz sutě."
    },
    {
      icon: Radar,
      title: "Montáž radarů",
      description: "Vedle osvětlení zvyšujeme bezpečnost i měřením rychlosti."
    }
  ];

  return (
    <section id="sluzby" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Co všechno pro vás zajistíme
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Naše hlavní specializace je doplněna dalšími službami, 
            které zajišťují komplexnost našich řešení.
          </p>
        </div>

        {/* Main Service */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                    <mainService.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{mainService.title}</h3>
                </div>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {mainService.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {mainService.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Zjistit více o veřejném osvětlení
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Foto z realizace</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-gray-600" />
              </div>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                {service.title}
              </h4>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
