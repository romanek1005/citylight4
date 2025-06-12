
const ContactMap = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Kde nás najdete
          </h2>
          <p className="text-gray-600">
            Naše sídlo v Oznici, okres Vsetín
          </p>
        </div>

        {/* Placeholder for interactive map */}
        <div className="bg-gray-100 rounded-lg p-8 text-center min-h-[400px] flex items-center justify-center">
          <div className="text-gray-500">
            <div className="text-lg font-semibold mb-2">Interaktivní mapa</div>
            <div className="text-sm">
              Zde bude implementována mapa s označením naší polohy<br />
              <strong>Oznice 101, 756 24 Bystřička</strong>
            </div>
            <div className="mt-4 p-4 bg-white rounded-lg shadow-sm inline-block">
              <div className="font-medium text-gray-900">CitySound s.r.o.</div>
              <div className="text-gray-600">Oznice 101, 756 24 Bystřička</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
