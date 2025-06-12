
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const PublicLightingContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    project: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Poptávka odeslána",
      description: "Děkujeme za váš zájem. Ozveme se vám do 24 hodin.",
    });
    setFormData({ name: '', company: '', email: '', phone: '', project: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="kontakt-verejne-osvetleni" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Máte projekt? Pojďme se o něm pobavit.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Napište nám nebo zavolejte. První konzultace a návrh řešení jsou zdarma.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Popište nám váš projekt
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jméno a příjmení *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Vaše jméno"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Firma/Obec *
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    placeholder="Název firmy nebo obce"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="vas@email.cz"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+420 123 456 789"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stručný popis projektu/dotazu
                </label>
                <Textarea
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Popište nám váš projekt veřejného osvětlení..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-lg py-6"
              >
                Odeslat nezávaznou poptávku
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Kontaktujte nás přímo
              </h3>
              <p className="text-gray-600 mb-8">
                <strong>Jednatel firmy</strong><br />
                Preferujete telefonní rozhovor? Zavolejte přímo nebo napište e-mail. 
                Rádi s vámi probereme detaily vašeho projektu osvětlení.
              </p>
            </div>

            <div className="space-y-6">
              <a 
                href="tel:+420722113729"
                className="flex items-center p-6 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors"
              >
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Telefon</div>
                  <div className="text-emerald-600 text-lg">+420 722 113 729</div>
                </div>
              </a>

              <a 
                href="mailto:poptavky@citysound.cz"
                className="flex items-center p-6 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors"
              >
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">E-mail</div>
                  <div className="text-emerald-600 text-lg">poptavky@citysound.cz</div>
                </div>
              </a>
            </div>

            <div className="bg-red-50 rounded-xl p-6">
              <h4 className="font-semibold text-red-800 mb-2">
                Rychlé vyřízení
              </h4>
              <p className="text-red-700 text-sm">
                Na vaše dotazy k veřejnému osvětlení odpovídáme obvykle do 24 hodin. 
                V naléhavých případech volejte přímo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicLightingContact;
