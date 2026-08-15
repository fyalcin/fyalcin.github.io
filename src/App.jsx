import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Experience from './components/Experience';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app-layout">
      <Sidebar activeSection={activeSection} />
      
      <main className="main-content">
        <Hero />
        <About />
        <Projects />
        <Publications />
        <Experience />
        
        <footer className="site-footer">
          <p><span>FY / {new Date().getFullYear()}</span> Designed in Vienna, Austria.</p>
        </footer>
      </main>

      <button
        type="button"
        className="back-to-top"
        aria-label="Navigate to top"
        title="Navigate to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp size={20} aria-hidden="true" />
      </button>
    </div>
  );
}

export default App;
