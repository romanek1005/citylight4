
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-emerald-600">
              Citysound
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/verejne-osvetleni" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Veřejné osvětlení
            </Link>
            <Link to="/dalsi-sluzby" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Další služby
            </Link>
            <Link to="/reference" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Reference
            </Link>
            <Link to="/kontakt" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Kontakt
            </Link>
            <a href="/#o-nas" className="text-gray-700 hover:text-emerald-600 transition-colors">
              O nás
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+420722113729" className="flex items-center text-gray-600 hover:text-emerald-600">
              <Phone className="w-4 h-4 mr-2" />
              +420 722 113 729
            </a>
            <Link to="/kontakt">
              <Button className="bg-red-600 hover:bg-red-700">
                Nezávazně poptat
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
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
              <a href="/#o-nas" className="text-gray-700 hover:text-emerald-600">O nás</a>
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
