import React from 'react';
import { BookOpen, ExternalLink, FileText } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "Automated modeling of polarons: defects and reactivity on TiO2(110) surfaces",
      authors: "Firat Yalcin, Carla Verdi, Viktor C. Birschitzky, Matthias Meier, Michael Wolloch & Michele Reticcioli",
      journal: "npj Computational Materials",
      year: "2026",
      doi: "10.1038/s41524-026-01983-5",
      link: "https://www.nature.com/articles/s41524-026-01983-5",
      pdf: "/s41524-026-01983-5_reference (1).pdf"
    },
    {
      title: "SurfFlow: High-throughput surface energy calculations for arbitrary crystals",
      authors: "Firat Yalcin, Michael Wolloch",
      journal: "Computational Materials Science",
      year: "2024",
      doi: "10.1016/j.commatsci.2024.112799",
      link: "https://www.sciencedirect.com/science/article/pii/S092702562400020X",
      pdf: "/1-s2.0-S092702562400020X-main.pdf"
    },
    {
      title: "High-throughput generation of potential energy surfaces for solid interfaces",
      authors: "Michael Wolloch, Gabriele Losi, Omar Chehaimi, Firat Yalcin, Mauro Ferrario, Maria Clelia Righi",
      journal: "Computational Materials Science",
      year: "2022",
      doi: "10.1016/j.commatsci.2022.111302",
      link: "https://www.sciencedirect.com/science/article/pii/S0927025622000969",
      pdf: "/1-s2.0-S0927025622000969-main.pdf"
    }
  ];

  return (
    <section id="publications" className="section">
      <div style={{ width: '100%' }}>
        <h2 className="section-title">Research & <span className="text-gradient">Publications</span></h2>
        <p className="section-subtitle">Academic contributions to computational materials physics.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {publications.map((pub, index) => (
            <div key={index} className="glass-panel" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--accent-light)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <BookOpen size={24} className="text-accent" />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', lineHeight: 1.4, color: 'var(--text-primary)' }}>{pub.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.95rem' }}>{pub.authors}</p>
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
                  <span style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.875rem' }}>
                    {pub.journal} ({pub.year})
                  </span>
                  
                  <div style={{ display: 'flex', gap: '0.75rem', marginLeft: 'auto' }}>
                    <a href={pub.link} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                      <ExternalLink size={14} /> DOI
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
