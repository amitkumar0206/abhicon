import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Programs } from './components/Programs';
import { About } from './components/About';
import { Internship } from './components/Internship';
import { Placements } from './components/Placements';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Programs />
      <About />
      <Internship />
      <Placements />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
