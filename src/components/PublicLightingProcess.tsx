
import { Search, Construction, Lightbulb, CheckCircle } from 'lucide-react';

const PublicLightingProcess = () => {
  const steps = [
    {
      icon: Search,
      title: "Projekt & Konzultace",
      description: "Na začátku si vyslechneme vaše potřeby a analyzujeme stávající stav. Navrhneme technicky i ekonomicky optimální řešení, včetně světelně-technického výpočtu a projektové dokumentace."
    },
    {
      icon: Construction,
      title: "Zemní Práce & NN Sítě", 
      description: "Disponujeme vlastní technikou pro výkopy a pokládku kabelových sítí nízkého napětí. Nemusíte tak čekat na dalšího dodavatele, vše probíhá plynule."
    },
    {
      icon: Lightbulb,
      title: "Montáž Stožárů a Svítidel",
      description: "Pomocí naší montážní plošiny profesionálně instalujeme stožáry, výložníky a osazujeme moderní a úsporná LED svítidla od prověřených výrobců."
    },
    {
      icon: CheckCircle,
      title: "Revize & Předání",
      description: "Celé dílo odborně zapojíme, provedeme výchozí revizi a předáme vám plně funkční a bezpečné osvětlení s veškerou potřebnou dokumentací."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Jak probíhá realizace od A do Z?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Každý projekt veřejného osvětlení realizujeme systematicky a profesionálně. 
            Díky vlastní technice a zkušenému týmu máme nad celým procesem plnou kontrolu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="flex items-start mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mr-6 flex-shrink-0">
                    <step.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-emerald-600 mb-2">
                      Krok {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-emerald-600 text-white px-8 py-4 rounded-full">
            <span className="font-semibold text-lg">Výsledek: Kompletní osvětlení bez starostí pro vás</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicLightingProcess;
