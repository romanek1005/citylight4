
const ReferencesSection = () => {
  const buildingCompanies = [
    { name: "Continental Frenštát", logo: "/images/logos/companies/continental_frenstat.png" },
    { name: "TJ Jurinka", logo: "/images/logos/companies/tj_jurinka.png" },
    { name: "LARS MK", logo: "/images/logos/companies/lars_mk.jpg" },
    { name: "SIVAP", logo: "/images/logos/companies/sivap.png" },
    { name: "Zenit spol. s r.o.", logo: "/images/logos/companies/zenit_spol_s_r_o.jpg" }
  ];

  const cities = [
    { name: "Chorýně", logo: "/images/logos/municipalities/choryne.png" },
    { name: "Hrachovec", logo: "/images/logos/municipalities/hrachovec.png" },
    { name: "Kateřinice", logo: "/images/logos/municipalities/katerinice.png" },
    { name: "Morkov", logo: "/images/logos/municipalities/morkov.jpg" },
    { name: "Nový Hrozenkov", logo: "/images/logos/municipalities/novy_hrozenkov.png" },
    { name: "Valašské Meziříčí", logo: "/images/logos/municipalities/valasske_mezirici.jpg" },
    { name: "Vsetín", logo: "/images/logos/municipalities/vsetin.png" }
  ];

  const workPhotos = [
    "/images/our-work/20210107_150459.jpg",
    "/images/our-work/20210630_145321.jpg",
    "/images/our-work/20220530_143714.jpg",
    "/images/our-work/20230219_150700.jpg",
    "/images/our-work/20241115_112046.jpg",
    "/images/our-work/20241213_085617.jpg",
    "/images/our-work/20250226_091248.jpg",
    "/images/our-work/20250412_091130.jpg",
    "/images/our-work/20250511_205703.jpg",
    "/images/our-work/20250511_210358.jpg",
    "/images/our-work/20250511_211440.jpg",
    "/images/our-work/20250511_212135.jpg",
    "/images/our-work/20250511_212159.jpg",
    "/images/our-work/20250511_212939.jpg",
    "/images/our-work/20250511_213042.jpg",
    "/images/our-work/20250511_213123.jpg",
    "/images/our-work/IMG_20201109_122403.jpg"
  ];

  return (
    <section id="reference" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Spolupracujeme s lídry v oboru i veřejné správě
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Naše zkušenosti a spolehlivost oceňují jak přední stavební firmy, 
            tak desítky měst a obcí po celé České republice.
          </p>
        </div>

        {/* Building Companies */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">
            Stavební firmy
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {buildingCompanies.map((company, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center justify-center min-h-[120px]"
              >
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="max-h-16 w-auto object-contain mb-2"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'block';
                  }}
                />
                <div className="text-sm font-medium text-gray-700 hidden">{company.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Cities */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 text-center mb-6">
            Města a obce
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-7 gap-6 items-center">
            {cities.map((city, index) => (
              <div 
                key={index}
                className="bg-emerald-50 rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center justify-center min-h-[100px]"
              >
                <img 
                  src={city.logo} 
                  alt={`${city.name} logo`} 
                  className="max-h-12 w-auto object-contain mb-2"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'block';
                  }}
                />
                <div className="text-xs font-medium text-emerald-700 hidden">{city.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Naše realizace
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {workPhotos.slice(0, 12).map((photo, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              >
                <img 
                  src={photo} 
                  alt={`Reference práce ${index + 1}`}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
