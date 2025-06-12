
const ReferenceClients = () => {
  const cities = [
    "Praha", "Brno", "Ostrava", "Plzeň", "České Budějovice", 
    "Hradec Králové", "Ústí nad Labem", "Pardubice", "Zlín", 
    "Havířov", "Kladno", "Most", "Opava", "Frýdek-Místek",
    "Rožnov pod Radhoštěm", "Oznice"
  ];

  const companies = [
    "PORR", "STRABAG", "METROSTAV", "SKANSKA", "HOCHTIEF",
    "Eurovia CS", "SMP CZ", "SWIETELSKY", "Subterra"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Spolupracují s námi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Naše zkušenosti a spolehlivost oceňují jak přední stavební firmy, 
            tak desítky měst a obcí po celé České republice.
          </p>
        </div>

        {/* Města a obce */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-800 text-center mb-8">
            Města a obce
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {cities.map((city, index) => (
              <div 
                key={index}
                className="bg-emerald-50 rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="text-sm font-medium text-emerald-700">{city}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stavební firmy */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 text-center mb-8">
            Stavební a průmyslové firmy
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {companies.map((company, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="text-lg font-semibold text-gray-700">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferenceClients;
