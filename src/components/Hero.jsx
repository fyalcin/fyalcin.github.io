import { ArrowDown, ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="section hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-content animate-fade-in">
        <p className="section-kicker">00 / Introduction</p>
        <h1>I build<br /><em>software</em> for<br />complex systems.</h1>
        <p className="hero-lede">
          Computational physicist and backend developer turning rigorous research workflows into reliable, useful software.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">Explore selected work <ArrowRight size={18} /></a>
          <a href="mailto:firat.yalcin@univie.ac.at" className="button button-secondary">Get in touch <Mail size={18} /></a>
        </div>
        <div className="hero-meta">
          <span>Vienna, Austria</span>
          <span>Python / DFT / HPC / APIs</span>
          <a href="#about">Scroll to explore <ArrowDown size={14} /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
