import React from 'react';
import { Terminal, Database, Server, Cpu } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Terminal className="text-accent" size={24} />,
      title: "Python & Backend",
      desc: "Advanced automation scripts, data processing, batch pipelines, and REST APIs with FastAPI & Flask."
    },
    {
      icon: <Cpu className="text-accent" size={24} />,
      title: "Simulation Workflows",
      desc: "Orchestrating large-scale simulations using FireWorks and Slurm on HPC clusters."
    },
    {
      icon: <Server className="text-accent" size={24} />,
      title: "Infrastructure",
      desc: "Linux power user, Docker, self-hosted services, and reproducible environments."
    },
    {
      icon: <Database className="text-accent" size={24} />,
      title: "Data & ML",
      desc: "Pandas, NumPy, SciPy, and integrating agentic workflows for automated research."
    }
  ];

  return (
    <section id="about" className="section">
      <div style={{ width: '100%' }}>
        <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
        <p className="section-subtitle">From Computational Physics to IT Engineering.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <div className="glass-panel" style={{ gridColumn: '1 / -1' }}>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)' }}>
              I am a Python-focused backend and automation developer currently finishing up my PhD in Computational Materials Physics at the University of Vienna. Over the past 7 years, I have specialized in building workflow scripts, data-processing pipelines, and tools around large-scale simulations on Linux and HPC systems.
              <br/><br/>
              My academic journey began with Bachelor and Master degrees in Physics from Middle East Technical University (METU) in Ankara, Turkey, before I moved to Austria. Now, as my PhD concludes, I am embracing my true passion for coding, AI, and IT, and transitioning fully into the tech sector in Vienna.
            </p>
          </div>
          
          {skills.map((skill, index) => (
            <div key={index} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: 'var(--accent-light)', padding: '0.75rem', borderRadius: '12px', width: 'fit-content' }}>
                {skill.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>{skill.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
