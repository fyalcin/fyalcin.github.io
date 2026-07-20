import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div style={{ width: '100%' }}>
        <h2 className="section-title">Education & <span className="text-gradient">Experience</span></h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginTop: '3rem' }}>
          
          {/* Experience Timeline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <Briefcase className="text-accent" size={28} />
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Experience</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', borderLeft: '2px solid var(--border-color)', paddingLeft: '1.5rem', marginLeft: '0.5rem' }}>
              
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-1.9rem', top: '0.25rem', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-primary)', border: '2px solid var(--bg-main)' }}></div>
                <h4 style={{ fontSize: '1.125rem', color: 'var(--text-primary)' }}>Independent Python Developer</h4>
                <p style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem' }}>Vienna, Austria | 2024 - Present</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Building automated pipelines and full-stack applications integrating Apify, Telegram, Tailscale, and custom FastAPI backends for personal infrastructure and workflow automation.</p>
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-1.9rem', top: '0.25rem', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--bg-sidebar)', border: '2px solid var(--text-tertiary)' }}></div>
                <h4 style={{ fontSize: '1.125rem', color: 'var(--text-primary)' }}>Research Software Engineer</h4>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 500 }}>University of Vienna | 2020 - 2024</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Developed Python workflows on top of FireWorks and Slurm to manage thousands of DFT simulations on HPC clusters. Built internal Flask and Streamlit tools for workflow management.</p>
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-1.9rem', top: '0.25rem', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--bg-sidebar)', border: '2px solid var(--text-tertiary)' }}></div>
                <h4 style={{ fontSize: '1.125rem', color: 'var(--text-primary)' }}>Research & Teaching Assistant</h4>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 500 }}>METU (Ankara) | 2017 - 2020</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Developed numerical Python models to simulate magnetic properties in graphene nanostructures and mentored students on scientific computing workflows.</p>
              </div>

            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <GraduationCap className="text-accent" size={32} />
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Education</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', borderLeft: '2px solid var(--border-color)', paddingLeft: '1.5rem', marginLeft: '0.5rem' }}>
              
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-1.9rem', top: '0.25rem', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-primary)', border: '2px solid var(--bg-main)' }}></div>
                <h4 style={{ fontSize: '1.125rem', color: 'var(--text-primary)' }}>PhD in Physics</h4>
                <p style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem' }}>University of Vienna | 2021 - 2026 (expected)</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Focus on automated high-throughput workflows and polaron localization in complex materials.</p>
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-1.9rem', top: '0.25rem', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--bg-sidebar)', border: '2px solid var(--text-tertiary)' }}></div>
                <h4 style={{ fontSize: '1.125rem', color: 'var(--text-primary)' }}>MSc in Physics</h4>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 500 }}>METU (Ankara) | 2016 - 2019</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Computational modeling and numerical methods. GPA: 3.86/4.00.</p>
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-1.9rem', top: '0.25rem', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--bg-sidebar)', border: '2px solid var(--text-tertiary)' }}></div>
                <h4 style={{ fontSize: '1.125rem', color: 'var(--text-primary)' }}>BSc in Physics</h4>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 500 }}>METU (Ankara) | Graduated 2015</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>GPA: 3.90/4.00 (Ranked 2nd in class).</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
