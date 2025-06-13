
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const PublicLightingGallery = () => {
  const projects = [
    { id: 1, title: "Rekonstrukce VO, Rožnov pod Radhoštěm, 2024", image: "/images/our-work/20250511_205703.jpg" },
    { id: 2, title: "Nové osvětlení, Brno - Líšeň, 2024", image: "/images/our-work/20250511_210358.jpg" },
    { id: 3, title: "LED modernizace, Ostrava centrum, 2023", image: "/images/our-work/20250511_211440.jpg" },
    { id: 4, title: "Veřejné osvětlení, Praha - Vinohrady, 2023", image: "/images/our-work/20250511_212135.jpg" },
    { id: 5, title: "Parkové osvětlení, Pardubice, 2023", image: "/images/our-work/20250511_212159.jpg" },
    { id: 6, title: "Přechody pro chodce, Plzeň, 2024", image: "/images/our-work/20250511_212939.jpg" },
    { id: 7, title: "Rekonstrukce náměstí, Hradec Králové, 2022", image: "/images/our-work/20250511_213042.jpg" },
    { id: 8, title: "Nová výstavba, České Budějovice, 2024", image: "/images/our-work/20250511_213123.jpg" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Podívejte se na naši práci
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Každý projekt je pro nás příležitostí ukázat naši odbornost a pečlivost. 
            Podívejte se na výběr z našich nedávných realizací.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-700 group-hover:text-emerald-600 transition-colors">
                    {project.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
          >
            Zobrazit všechny reference
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PublicLightingGallery;
