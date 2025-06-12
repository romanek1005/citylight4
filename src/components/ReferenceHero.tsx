
import { useEffect, useState } from 'react';

const ReferenceHero = () => {
  const [projectsCount, setProjectsCount] = useState(0);
  const [citiesCount, setCitiesCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);

  useEffect(() => {
    // Animace počítadel
    const animateCounter = (setter: (value: number) => void, targetValue: number) => {
      let current = 0;
      const increment = targetValue / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          setter(targetValue);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 50);
    };

    const timer = setTimeout(() => {
      animateCounter(setProjectsCount, 150);
      animateCounter(setCitiesCount, 80);
      animateCounter(setYearsCount, 20);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Naše práce mluví za nás
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Za více než dekádu v oboru jsme úspěšně realizovali stovky projektů 
            pro desítky spokojených zákazníků z řad stavebních firem, měst a obcí. 
            Podívejte se na výběr z naší práce.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
                {projectsCount}+
              </div>
              <div className="text-gray-600 font-medium">
                realizovaných projektů
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {citiesCount}+
              </div>
              <div className="text-gray-600 font-medium">
                spokojených obcí a měst
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                {yearsCount}+
              </div>
              <div className="text-gray-600 font-medium">
                let zkušeností v oboru
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferenceHero;
