
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Veřejné osvětlení{' '}
            <span className="text-emerald-600">od A do Z</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Zajistíme vše od výkopu a položení sítí až po finální instalaci a revizi. 
            Kompletní řešení pro stavební firmy i obce.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-lg px-8 py-6"
            >
              Nezávazně poptat
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-6"
            >
              Mám zájem o konzultaci
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">150+</div>
              <div className="text-gray-600">Realizovaných projektů</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">80+</div>
              <div className="text-gray-600">Spokojených obcí</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl font-bold text-emerald-600 mb-2">15</div>
              <div className="text-gray-600">Let zkušeností</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-full bg-gradient-to-l from-emerald-100 to-transparent opacity-50 hidden lg:block"></div>
    </section>
  );
};

export default HeroSection;
