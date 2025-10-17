import Nav from '../components/Nav';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Mission from '../components/Mission';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />      
      <About />
      <Mission />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}