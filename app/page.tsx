import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Clients from '@/components/Clients';
import HowItWorks from '@/components/HowItWorks';
import Products from '@/components/Products';
import Pricing from '@/components/Pricing';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Clients />
      <HowItWorks />
      <Products />
      <Pricing />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}
