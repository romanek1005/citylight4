
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img 
                src="/images/citysound-white.png" 
                alt="Citysound logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Specializujeme se na kompletní realizace veřejného osvětlení. 
              Jako jediní na trhu zajišťujeme celý proces od A do Z.
            </p>
            <div className="space-y-2">
              <a href="tel:+420722113729" className="flex items-center text-gray-300 hover:text-emerald-400">
                <Phone className="w-4 h-4 mr-2" />
                +420 722 113 729
              </a>
              <a href="mailto:citysound@citysound.cz" className="flex items-center text-gray-300 hover:text-emerald-400">
                <Mail className="w-4 h-4 mr-2" />
                citysound@citysound.cz
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                Oznice 101, 756 24 Bystřička
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Služby</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-emerald-400">Veřejné osvětlení</a></li>
              <li><a href="#" className="hover:text-emerald-400">Montážní plošina</a></li>
              <li><a href="#" className="hover:text-emerald-400">Zemní práce</a></li>
              <li><a href="#" className="hover:text-emerald-400">Autodoprava</a></li>
              <li><a href="#" className="hover:text-emerald-400">Montáž radarů</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Společnost</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-emerald-400">O nás</a></li>
              <li><a href="#" className="hover:text-emerald-400">Reference</a></li>
              <li><a href="#" className="hover:text-emerald-400">Kariéra</a></li>
              <li><a href="#" className="hover:text-emerald-400">Kontakt</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Citysound s.r.o. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
