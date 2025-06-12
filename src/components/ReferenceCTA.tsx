
import { Button } from '@/components/ui/button';

const ReferenceCTA = () => {
  const scrollToContact = () => {
    window.location.href = '/#kontakt';
  };

  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Přesvědčila vás naše práce?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Staňte se naším dalším spokojeným zákazníkem.
          </p>
          
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg"
            onClick={scrollToContact}
          >
            Nezávazně poptat projekt
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReferenceCTA;
