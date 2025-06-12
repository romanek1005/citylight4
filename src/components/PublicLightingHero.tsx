
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const PublicLightingHero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('kontakt-verejne-osvetleni');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Komplexní realizace{' '}
            <span className="text-emerald-600">veřejného osvětlení</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl">
            Pro stavební firmy a obce zajišťujeme kompletní dodávku veřejného osvětlení – 
            od prvního výkopu až po finální revizi. S námi získáte jediného spolehlivého 
            partnera pro celý projekt a ušetříte čas i náklady.
          </p>

          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-lg px-8 py-6"
            onClick={scrollToContact}
          >
            Chci nezávaznou konzultaci
            <ArrowDown className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-full bg-gradient-to-l from-emerald-100 to-transparent opacity-50 hidden lg:block"></div>
    </section>
  );
};

export default PublicLightingHero;
