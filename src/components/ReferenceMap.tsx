
const ReferenceMap = () => {
  const locations = [
    { name: "Oznice", coords: "49.3419, 18.0181" },
    { name: "Rožnov pod Radhoštěm", coords: "49.4583, 18.1433" },
    { name: "Brno", coords: "49.1951, 16.6068" },
    { name: "Praha", coords: "50.0755, 14.4378" },
    { name: "Ostrava", coords: "49.8209, 18.2625" },
    { name: "Plzeň", coords: "49.7384, 13.3736" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Působíme po celém regionu
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Naše realizace najdete v desítkách měst a obcí po celé České republice. 
            Podívejte se, kde všude jsme již úspěšně dokončili projekty.
          </p>
        </div>

        {/* Místo pro interaktivní mapu - pro demonstraci použiji seznam lokací */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {locations.map((location, index) => (
              <div 
                key={index}
                className="bg-emerald-50 rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="text-sm font-medium text-emerald-700">
                  {location.name}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg p-8 text-white">
              <h3 className="text-xl font-semibold mb-2">
                Máte projekt v jiném regionu?
              </h3>
              <p className="text-emerald-100">
                Jsme flexibilní a rádi se podíváme i na vzdálenější projekty. 
                Kontaktujte nás a domluvíme se!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferenceMap;
