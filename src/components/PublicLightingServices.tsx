
import { HardHat, Building } from 'lucide-react';

const PublicLightingServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Řešení, které se přizpůsobí vašim potřebám
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rozumíme specifickým požadavkům stavebních firem i obcí. 
            Naše služby přizpůsobujeme tak, abyste dosáhli svých cílů.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Pro Stavební Firmy */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <HardHat className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Pro Stavební Firmy</h3>
            </div>
            
            <h4 className="text-lg font-semibold text-blue-800 mb-4">
              Spolehlivý subdodavatel pro vaše projekty
            </h4>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700">Dodržujeme harmonogramy a rozpočty</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700">Jsme plně soběstační – vlastní technika i lidé</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700">Bezproblémová komunikace a koordinace na stavbě</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700">Přebíráme plnou zodpovědnost za svěřenou část díla</span>
              </li>
            </ul>
          </div>

          {/* Pro Města a Obce */}
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Pro Města a Obce</h3>
            </div>
            
            <h4 className="text-lg font-semibold text-emerald-800 mb-4">
              Moderní a bezpečné osvětlení pro vaše občany
            </h4>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700">Navrhneme řešení s důrazem na úsporu energie (LED)</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700">Zvýšíme bezpečnost v ulicích a na přechodech</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700">Jediný partner pro celý projekt – od žádosti o dotaci po údržbu</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700">Zajistíme dlouhou životnost a minimální náklady na provoz</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicLightingServices;
