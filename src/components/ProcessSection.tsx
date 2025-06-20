
import { Search, Wrench, Lightbulb, CheckCircle } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Projekt & Konzultace",
      description: "Analyzujeme vaše potřeby a navrhneme optimální řešení",
      image: "/images/our-work/20230219_150700.jpg"
    },
    {
      icon: Wrench,
      title: "Zemní práce & NN sítě", 
      description: "Pomocí vlastní techniky připravíme terén a položíme kabeláž",
      image: "/images/our-work/20210630_145321.jpg"
    },
    {
      icon: Lightbulb,
      title: "Montáž osvětlení",
      description: "Nainstalujeme stožáry, výložníky a moderní úsporná svítidla",
      image: "/images/our-work/20250511_210358.jpg"
    },
    {
      icon: CheckCircle,
      title: "Revize & Předání",
      description: "Vše odborně zapojíme, provedeme revizi a předáme vám hotové dílo",
      image: "/images/our-work/20250511_213123.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Jak vypadá spolupráce od A do Z?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jako jediní na trhu zajišťujeme kompletní realizaci veřejného osvětlení. 
            Jeden partner, jedna odpovědnost, žádné komplikace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute top-4 left-4 flex items-center justify-center w-12 h-12 bg-white/90 rounded-full">
                    <step.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow connector for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-emerald-300"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-emerald-300 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-full">
            <span className="font-semibold">Výsledek: Kompletní osvětlení bez starostí</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
