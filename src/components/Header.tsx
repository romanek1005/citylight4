
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="w-full max-w-none px-6 lg:px-12 xl:px-16 2xl:px-24">
        <div className="flex items-center justify-between min-h-20 lg:min-h-24">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 min-w-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/citysound-green.png" 
                alt="Citysound logo" 
                className="h-16 lg:h-20 object-contain"
                style={{ aspectRatio: 'auto', maxWidth: 'none' }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-8 xl:space-x-12">
              <Link to="/verejne-osvetleni" className="text-gray-700 hover:text-emerald-600 transition-colors whitespace-nowrap font-medium">
                Veřejné osvětlení
              </Link>
              <Link to="/dalsi-sluzby" className="text-gray-700 hover:text-emerald-600 transition-colors whitespace-nowrap font-medium">
                Další služby
              </Link>
              <Link to="/reference" className="text-gray-700 hover:text-emerald-600 transition-colors whitespace-nowrap font-medium">
                Reference
              </Link>
              <Link to="/kontakt" className="text-gray-700 hover:text-emerald-600 transition-colors whitespace-nowrap font-medium">
                Kontakt
              </Link>
            </div>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6 flex-shrink-0">
            <a href="tel:+420722113729" className="flex items-center text-gray-600 hover:text-emerald-600 whitespace-nowrap font-medium">
              <Phone className="w-5 h-5 mr-3" />
              +420 722 113 729
            </a>
            <Link to="/kontakt">
              <Button className="bg-red-600 hover:bg-red-700 whitespace-nowrap font-semibold px-6 py-3">
                Nezávazně poptat
              </Button>
            </Link>
          </div>

          {/* Medium screen - simplified */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <a href="tel:+420722113729" className="flex items-center text-gray-600 hover:text-emerald-600">
              <Phone className="w-5 h-5" />
            </a>
            <Link to="/kontakt">
              <Button className="bg-red-600 hover:bg-red-700 text-sm px-4 py-2">
                Poptat
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex-shrink-0 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/verejne-osvetleni" className="text-gray-700 hover:text-emerald-600">Veřejné osvětlení</Link>
              <Link to="/dalsi-sluzby" className="text-gray-700 hover:text-emerald-600">Další služby</Link>
              <Link to="/reference" className="text-gray-700 hover:text-emerald-600">Reference</Link>
              <Link to="/kontakt" className="text-gray-700 hover:text-emerald-600">Kontakt</Link>
              <div className="flex items-center space-x-2 pt-2">
                <a href="tel:+420722113729" className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  +420 722 113 729
                </a>
              </div>
              <Link to="/kontakt">
                <Button className="bg-red-600 hover:bg-red-700 w-full">
                  Nezávazně poptat
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
