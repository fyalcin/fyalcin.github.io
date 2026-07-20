import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "SurfFlow",
      subtitle: "High-throughput surface energy calculations",
      description: "An open-source high-throughput workflow package designed for automated first-principles calculations of surface energies in arbitrary crystals. Handles multi-element crystals, nonstoichiometric compositions, and asymmetric slabs efficiently using pre-screening methods.",
      tags: ["Python", "VASP", "pymatgen", "FireWorks", "atomate"],
      github: "https://github.com/fyalcin/surfflow",
      link: "https://www.sciencedirect.com/science/article/pii/S092702562400020X"
    },
    {
      title: "PolFlow",
      subtitle: "Automated modeling of polarons",
      description: "An automated workflow for modeling polarons within density functional theory (DFT). Integrates a machine-learning force-field localization module, an efficient workflow driver, and an active learning engine (ConfML) to explore defect-polaron configuration spaces.",
      tags: ["Python", "DFT", "Machine Learning", "JAX", "Workflow Automation"],
      github: "https://github.com/fyalcin/polflow",
      link: "https://www.nature.com/articles/s41524-026-01983-5"
    }
  ];

  return (
    <section id="projects" className="section">
      <div style={{ width: '100%' }}>
        <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
        <p className="section-subtitle">Tools developed from scratch to accelerate materials modeling.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {projects.map((project, index) => (
            <div key={index} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                  <p style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{project.subtitle}</p>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" style={{ padding: '0.5rem', borderRadius: '8px', background: 'var(--bg-sidebar)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 500, transition: 'background-color 0.2s' }} onMouseOver={(e) => Object.assign(e.currentTarget.style, { background: 'var(--bg-hover)' })} onMouseOut={(e) => Object.assign(e.currentTarget.style, { background: 'var(--bg-sidebar)' })}>
                      <Code2 size={16} className="text-accent" /> Code
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" style={{ padding: '0.5rem', borderRadius: '8px', background: 'var(--accent-primary)', color: '#ffffff', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', transition: 'background-color 0.2s' }} onMouseOver={(e) => Object.assign(e.currentTarget.style, { background: 'var(--accent-secondary)' })} onMouseOut={(e) => Object.assign(e.currentTarget.style, { background: 'var(--accent-primary)' })}>
                      <ExternalLink size={16} /> Paper
                    </a>
                  )}
                </div>
              </div>
              
              <p style={{ color: 'var(--text-secondary)' }}>{project.description}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tags.map((tag, i) => (
                  <span key={i} style={{ padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.75rem', background: 'var(--accent-light)', border: '1px solid var(--border-color)', color: 'var(--text-tertiary)', fontWeight: 500 }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
