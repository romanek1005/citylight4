
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Building } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    gdprConsent: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.gdprConsent) {
      toast({
        title: "Chyba",
        description: "Musíte souhlasit se zpracováním osobních údajů.",
        variant: "destructive"
      });
      return;
    }
    
    console.log('Form submitted:', formData);
    toast({
      title: "Zpráva odeslána",
      description: "Děkujeme za vaši poptávku. Brzy se vám ozveme.",
    });
    setIsSubmitted(true);
    setFormData({ name: '', company: '', email: '', phone: '', subject: '', message: '', gdprConsent: false });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  if (isSubmitted) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                Děkujeme za vaši poptávku!
              </h3>
              <p className="text-green-700">
                Brzy se vám ozveme. Obvykle odpovídáme do 24 hodin.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="mt-4 bg-emerald-600 hover:bg-emerald-700"
              >
                Odeslat další zprávu
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Napište nám
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vaše jméno a příjmení *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Jan Novák"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Firma / Obec
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
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
                    placeholder="jan@email.cz"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+420 123 456 789"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Předmět dotazu
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Vyberte předmět dotazu</option>
                  <option value="verejne-osvetleni">Nezávazná poptávka - Veřejné osvětlení</option>
                  <option value="plosina">Pronájem montážní plošiny</option>
                  <option value="minibagr">Zemní práce minibagrem</option>
                  <option value="doprava">Autodoprava a kontejnery</option>
                  <option value="radary">Montáž radarů</option>
                  <option value="obecny">Obecný dotaz</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vaše zpráva *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Popište nám váš dotaz nebo projekt..."
                />
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="gdprConsent"
                  name="gdprConsent"
                  checked={formData.gdprConsent}
                  onChange={handleInputChange}
                  required
                  className="mt-1"
                />
                <label htmlFor="gdprConsent" className="text-sm text-gray-600">
                  Souhlasím se zpracováním osobních údajů v souladu se zásadami ochrany osobních údajů *
                </label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-lg py-6"
              >
                Odeslat zprávu
              </Button>
            </form>
          </div>

          {/* Direct Contacts */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Přímé spojení
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Phone className="w-5 h-5 text-emerald-600 mr-2" />
                  Telefonní kontakty
                </h3>
                <div className="space-y-2">
                  <a 
                    href="tel:+420722113729"
                    className="block text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    +420 722 113 729
                  </a>
                  <a 
                    href="tel:+420774456960"
                    className="block text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    +420 774 456 960
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Mail className="w-5 h-5 text-emerald-600 mr-2" />
                  E-mail
                </h3>
                <a 
                  href="mailto:citysound@citysound.cz"
                  className="text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  citysound@citysound.cz
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 text-emerald-600 mr-2" />
                  Adresa sídla
                </h3>
                <div className="text-gray-700">
                  <div className="font-medium">CitySound s.r.o.</div>
                  <div>Oznice 101</div>
                  <div>756 24 Bystřička</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Building className="w-5 h-5 text-emerald-600 mr-2" />
                  Fakturační údaje
                </h3>
                <div className="text-gray-700 space-y-1">
                  <div>IČO: [Doplní klient]</div>
                  <div>DIČ: [Doplní klient]</div>
                  <div className="text-sm pt-2">
                    Společnost je zapsána v obchodním rejstříku vedeném u Krajského soudu v Ostravě, 
                    oddíl C, vložka [Doplní klient].
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
