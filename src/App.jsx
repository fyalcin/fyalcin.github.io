import { useEffect, useState } from 'react';
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
        
        <footer style={{ padding: '2rem 0', textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>
          <p>© {new Date().getFullYear()} Firat Yalcin. Designed in Vienna, Austria.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
