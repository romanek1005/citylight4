
import { ArrowDown, Truck, Construction } from 'lucide-react';

const AdditionalServicesHero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 'plosina',
      title: 'Práce s montážní plošinou',
      image: '/images/our-work/20210107_150459.jpg',
      description: 'Renault Maxity - dosah 18m'
    },
    {
      id: 'minibagr',
      title: 'Zemní práce minibagrem',
      image: '/images/our-work/20210630_145321.jpg',
      description: 'Kubota KX-019 - 2t'
    },
    {
      id: 'doprava',
      title: 'Autodoprava a kontejnery',
      image: '/images/our-work/20220530_143714.jpg',
      description: 'Iveco Eurocargo - 8t'
    },
    {
      id: 'radary',
      title: 'Montáž měřičů rychlosti',
      image: '/images/our-work/20230219_150700.jpg',
      description: 'Profesionální instalace'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Naše další služby a technika
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Kromě naší hlavní specializace na veřejné osvětlení vám nabízíme k pronájmu 
            i naši techniku nebo dílčí služby. Všechny stroje jsou v perfektním technickém 
            stavu a s možností obsluhy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => scrollToSection(service.id)}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <div className="h-48 bg-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-emerald-600 font-medium">
                  Více informací
                  <ArrowDown className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServicesHero;
