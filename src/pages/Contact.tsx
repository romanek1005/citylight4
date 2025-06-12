
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/components/ContactHero';
import ContactForm from '@/components/ContactForm';
import ContactMap from '@/components/ContactMap';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContactHero />
      <ContactForm />
      <ContactMap />
      <Footer />
    </div>
  );
};

export default Contact;
