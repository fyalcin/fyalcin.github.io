import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'flex-start', paddingTop: '15vh' }}>
      <div className="animate-fade-in" style={{ width: '100%' }}>
        <div style={{ maxWidth: '800px' }}>
          
          <h1 style={{ fontSize: '4rem', marginBottom: '1rem', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
            Hi, I'm <span className="text-gradient">Firat Yalcin</span>, MSc
          </h1>
          
          <h2 style={{ fontSize: '2rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>
            PhD Candidate in Computational Physics <br/> & Backend Developer
          </h2>
          
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px' }}>
            I build robust Python tools, automate complex workflows, and engineer intelligent systems. Bridging the gap between scientific rigor and practical software engineering.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--accent-primary)', color: '#ffffff', padding: '0.875rem 1.5rem', borderRadius: '8px', fontWeight: 600, transition: 'all 0.2s', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} onMouseOver={(e) => Object.assign(e.currentTarget.style, { background: 'var(--accent-secondary)' })} onMouseOut={(e) => Object.assign(e.currentTarget.style, { background: 'var(--accent-primary)' })}>
              View Projects <ArrowRight size={18} />
            </a>
            <a href="mailto:firat.yalcin@univie.ac.at" className="button button-secondary">
              Get in Touch <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
