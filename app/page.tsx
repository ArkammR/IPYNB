import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Clients from '@/components/Clients';
import PaperToCloud from '@/components/PaperToCloud';
import Industries from '@/components/Industries';
import WhyUs from '@/components/WhyUs';
import Process from '@/components/Process';
import Deployments from '@/components/Deployments';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Clients />
      <PaperToCloud />
      <Industries />
      <WhyUs />
      <Process />
      <Deployments />
      <Pricing />
      <About />
      <WhatsAppCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
