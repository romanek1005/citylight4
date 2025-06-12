
import { useState } from 'react';
import { X, MapPin, Calendar, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  title: string;
  client: string;
  location: string;  
  year: string;
  category: string;
  clientType: string;
  image: string;
  images: string[];
  description: string;
  services: string;
}

const ReferenceGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedClientType, setSelectedClientType] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "Rekonstrukce veřejného osvětlení",
      client: "Obec Oznice",
      location: "Oznice, okr. Vsetín",
      year: "2024",
      category: "Veřejné osvětlení",
      clientType: "obce",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
      images: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000"
      ],
      description: "Pro obec Oznice jsme zajistili kompletní rekonstrukci veřejného osvětlení a související výkopové práce pro nové chodníky. Projekt zahrnoval instalaci 45 úsporných LED svítidel a pokládku 800 metrů kabeláže.",
      services: "Veřejné osvětlení, zemní práce"
    },
    {
      id: 2,
      title: "Osvětlení průmyslového areálu",
      client: "STRABAG a.s.",
      location: "Brno",
      year: "2024",
      category: "Veřejné osvětlení",
      clientType: "firmy",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0",
      images: [
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0",
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
      ],
      description: "Komplexní realizace osvětlení průmyslového areálu včetně vysokostožárového osvětlení parkovišť a komunikací. Celkem bylo instalováno 120 svítidel různých typů.",
      services: "Veřejné osvětlení, vysokostožárové osvětlení"
    },
    {
      id: 3,
      title: "Zemní práce a infrastruktura",
      client: "Město Rožnov pod Radhoštěm",
      location: "Rožnov pod Radhoštěm",
      year: "2023",
      category: "Zemní práce",
      clientType: "obce",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12",
      images: [
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0"
      ],
      description: "Rozsáhlé zemní práce pro novou infrastrukturu města včetně pokládky kabeláže a přípravy základů pro nové osvětlení. Práce proběhly na ploše 5000 m².",
      services: "Zemní práce, pokládka kabelů"
    },
    {
      id: 4,
      title: "Práce s montážní plošinou",
      client: "PORR a.s.",
      location: "Praha",
      year: "2023",
      category: "Práce s plošinou",
      clientType: "firmy",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
      images: [
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
      ],
      description: "Montáž osvětlení ve výškách s využitím naší montážní plošiny Renault Maxity. Celkem 80 hodin práce ve výškách až 18 metrů.",
      services: "Práce s montážní plošinou, montáž svítidel"
    }
  ];

  const categories = [
    { id: 'all', label: 'Všechny' },
    { id: 'Veřejné osvětlení', label: 'Veřejné osvětlení' },
    { id: 'Zemní práce', label: 'Zemní práce' },
    { id: 'Práce s plošinou', label: 'Práce s plošinou' }
  ];

  const clientTypes = [
    { id: 'all', label: 'Všichni klienti' },
    { id: 'obce', label: 'Města a Obce' },
    { id: 'firmy', label: 'Stavební Firmy' }
  ];

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
    const clientTypeMatch = selectedClientType === 'all' || project.clientType === selectedClientType;
    return categoryMatch && clientTypeMatch;
  });

  const openProjectDetail = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Naše realizované projekty
          </h2>
        </div>

        {/* Filtry */}
        <div className="mb-8 space-y-4">
          {/* Kategorie služeb */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="mb-2"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Typ klienta */}
          <div className="flex flex-wrap justify-center gap-2">
            {clientTypes.map((type) => (
              <Button
                key={type.id}
                variant={selectedClientType === type.id ? "default" : "outline"}
                onClick={() => setSelectedClientType(type.id)}
                size="sm"
              >
                {type.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Galerie projektů */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
              onClick={() => openProjectDetail(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-center">
                      <div className="text-sm font-medium">Zobrazit detail</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <div className="text-sm text-gray-600 mb-1">
                  <strong>{project.client}</strong>
                </div>
                <div className="text-sm text-gray-500 mb-2">
                  {project.location} • {project.year}
                </div>
                <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modální okno s detailem projektu */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={closeProjectDetail}
                  className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Fotogalerie */}
                <div className="relative h-64 md:h-80">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100"
                      >
                        ←
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100"
                      >
                        →
                      </button>
                    </>
                  )}

                  {/* Indikátory */}
                  {selectedProject.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Obsah */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {selectedProject.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <div className="font-semibold mr-2">Klient:</div>
                      <div>{selectedProject.client}</div>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <div>{selectedProject.location}</div>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <div>{selectedProject.year}</div>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Wrench className="w-4 h-4 mr-2" />
                      <div>{selectedProject.services}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReferenceGallery;
