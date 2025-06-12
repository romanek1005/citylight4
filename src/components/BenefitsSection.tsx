
import { Settings, Users, Package, Clock } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Settings,
      title: "Vlastní technika",
      description: "Žádné prostoje kvůli čekání na subdodavatele. Vše máme pod kontrolou."
    },
    {
      icon: Users,
      title: "Zkušený tým",
      description: "Desítky let praxe v oboru elektroinstalací a osvětlení."
    },
    {
      icon: Package,
      title: "Komplexní řešení",
      description: "Jeden partner pro celý projekt od návrhu až po předání."
    },
    {
      icon: Clock,
      title: "Spolehlivost a termíny",
      description: "Zakládáme si na dodržování dohod a stanovených termínů."
    }
  ];

  return (
    <section className="py-16 bg-emerald-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proč svěřit projekt právě nám?
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Kombinujeme technické know-how s praktickými zkušenostmi 
            a moderním přístupem k projektovému řízení.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-emerald-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-emerald-100 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto">
            <blockquote className="text-xl text-white italic mb-4">
              "S Citysound spolupracujeme již 5 let a vždy jsme byli spokojeni s kvalitou 
              a dodržováním termínů. Doporučujeme všem stavebním firmám."
            </blockquote>
            <cite className="text-emerald-200">— Projektový manažer, STRABAG a.s.</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
