
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isLightOn, setIsLightOn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Preload both images
    const beforeImg = new Image();
    const afterImg = new Image();
    let loadedCount = 0;

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === 2) {
        setImagesLoaded(true);
        // Start animation 2 seconds after images are loaded
        setTimeout(() => {
          setIsLightOn(true);
        }, 2000);
      }
    };

    beforeImg.onload = handleImageLoad;
    afterImg.onload = handleImageLoad;
    beforeImg.src = "/images/before.png";
    afterImg.src = "/images/after.jpg";

    return () => {
      beforeImg.onload = null;
      afterImg.onload = null;
    };
  }, []);

  return (
    <div className="bg-white p-5">
      <section className="relative h-[calc(100vh-40px)] overflow-hidden bg-gray-800 border-[5px] border-white rounded-[30px]">
        {/* Background Images with Smooth Animation */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/images/before.png"
            alt="Street before lighting"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: isLightOn ? 0 : 1,
              transition: 'opacity 3s ease-in-out'
            }}
          />
          <img 
            src="/images/after.jpg"
            alt="Street with lighting"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: isLightOn ? 1 : 0,
              transition: 'opacity 3s ease-in-out'
            }}
          />
        </div>

        {/* Transparent Header Inside Hero - Bigger */}
        <header className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-black/30 backdrop-blur-md rounded-2xl border border-white/20 px-6 py-3">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center mr-8">
                <img 
                  src="/images/citysound-white.png" 
                  alt="Citysound logo" 
                  className="h-16 w-auto"
                />
              </Link>

              {/* Desktop Navigation - Bigger */}
              <nav className="hidden md:flex items-center space-x-6">
                <Link to="/verejne-osvetleni" className="text-white/90 hover:text-white transition-colors text-sm px-3 py-2">
                  Veřejné osvětlení
                </Link>
                <Link to="/dalsi-sluzby" className="text-white/90 hover:text-white transition-colors text-sm px-3 py-2">
                  Další služby
                </Link>
                <Link to="/reference" className="text-white/90 hover:text-white transition-colors text-sm px-3 py-2">
                  Reference
                </Link>
                <Link to="/kontakt" className="text-white/90 hover:text-white transition-colors text-sm px-3 py-2">
                  Kontakt
                </Link>
              </nav>

              {/* Contact & CTA - Bigger */}
              <div className="hidden lg:flex items-center space-x-4 ml-8">
                <a href="tel:+420722113729" className="flex items-center text-white/90 hover:text-white text-sm">
                  <Phone className="w-4 h-4 mr-2" />
                  +420 722 113 729
                </a>
                <Link to="/kontakt">
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-sm px-4 py-2">
                    Nezávazně poptat
                  </Button>
                </Link>
              </div>

              {/* Mobile menu button */}
              <button 
                className="md:hidden text-white ml-4"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden mt-4 pt-4 border-t border-white/20">
                <nav className="flex flex-col space-y-3">
                  <Link to="/verejne-osvetleni" className="text-white/90 hover:text-white text-sm">Veřejné osvětlení</Link>
                  <Link to="/dalsi-sluzby" className="text-white/90 hover:text-white text-sm">Další služby</Link>
                  <Link to="/reference" className="text-white/90 hover:text-white text-sm">Reference</Link>
                  <Link to="/kontakt" className="text-white/90 hover:text-white text-sm">Kontakt</Link>
                  <a href="tel:+420722113729" className="flex items-center text-white/90 text-sm pt-2">
                    <Phone className="w-4 h-4 mr-2" />
                    +420 722 113 729
                  </a>
                </nav>
              </div>
            )}
          </div>
        </header>

        {/* Content Positioned More to the Right */}
        <div className="absolute left-16 top-1/2 transform -translate-y-1/2 z-10 max-w-3xl">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10 text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Veřejné osvětlení <span className="text-emerald-400">od A do Z</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Zajistíme vše od výkopu a položení sítí až po finální instalaci a revizi. 
              Kompletní řešení pro stavební firmy i obce.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/kontakt">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-lg px-8 py-6 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Nezávazně poptat
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 bg-transparent hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                onClick={() => {
                  const referencesSection = document.getElementById('reference');
                  referencesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Více o nás
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-1">150+</div>
                <div className="text-sm text-gray-300">Realizovaných projektů</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-1">80+</div>
                <div className="text-sm text-gray-300">Spokojených obcí</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-1">15</div>
                <div className="text-sm text-gray-300">Let zkušeností</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
