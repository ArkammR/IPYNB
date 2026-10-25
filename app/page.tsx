import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ClientsAndStack from '@/components/ClientsAndStack';
import Problem from '@/components/Problem';
import Industries from '@/components/Industries';
import Comparison from '@/components/Comparison';
import Process from '@/components/Process';
import Deployments from '@/components/Deployments';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ClientsAndStack />
      <Problem />
      <Industries />
      <Comparison />
      <Process />
      <Deployments />
      <Pricing />
      <About />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
