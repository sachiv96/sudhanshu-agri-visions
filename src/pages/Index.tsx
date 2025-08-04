import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import QuotesAndMemes from '@/components/QuotesAndMemes';
import Contact from '@/components/Contact';
import Sidebar from '@/components/Sidebar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Skills Section */}
        <div id="skills">
          <Skills />
        </div>
        
        {/* Projects Section */}
        <div id="projects">
          <Projects />
        </div>
        
        {/* Quotes and Memes Section */}
        <div id="inspiration">
          <QuotesAndMemes />
        </div>
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Sidebar Widget */}
      <Sidebar />
    </div>
  );
};

export default Index;
