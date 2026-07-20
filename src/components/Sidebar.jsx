import React from 'react';
import { Home, User, FolderOpen, BookOpen, Briefcase, Code2, Mail } from 'lucide-react';

const Sidebar = ({ activeSection }) => {
  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home size={18} /> },
    { name: 'About', href: '#about', icon: <User size={18} /> },
    { name: 'Projects', href: '#projects', icon: <FolderOpen size={18} /> },
    { name: 'Publications', href: '#publications', icon: <BookOpen size={18} /> },
    { name: 'Experience', href: '#experience', icon: <Briefcase size={18} /> },
  ];

  return (
    <aside className="sidebar">
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '1.75rem', marginBottom: '0.25rem', letterSpacing: '-0.02em' }}>
          Firat <span className="text-gradient">Yalcin</span>, MSc
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 500 }}>
          PhD Candidate · Computational Physics
        </p>
      </div>

      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {navLinks.map((link) => {
          const isActive = link.href === `#${activeSection}`;
          return (
            <a 
              key={link.name} 
              href={link.href}
              className={`nav-link ${isActive ? 'active' : ''}`}
            >
              {link.icon}
              {link.name}
            </a>
          );
        })}
      </nav>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <a href="https://github.com/fyalcin" target="_blank" rel="noreferrer" style={{ padding: '0.5rem 0.75rem', borderRadius: '99px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 600, background: 'var(--bg-surface)' }} onMouseOver={(e) => Object.assign(e.currentTarget.style, { background: 'var(--bg-hover)' })} onMouseOut={(e) => Object.assign(e.currentTarget.style, { background: 'var(--bg-surface)' })}>
            <Code2 size={14} /> GitHub
          </a>
          <a href="https://linkedin.com/in/firat-yalcin" target="_blank" rel="noreferrer" style={{ padding: '0.5rem 0.75rem', borderRadius: '99px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 600, background: 'var(--bg-surface)' }} onMouseOver={(e) => Object.assign(e.currentTarget.style, { background: 'var(--bg-hover)' })} onMouseOut={(e) => Object.assign(e.currentTarget.style, { background: 'var(--bg-surface)' })}>
            <Briefcase size={14} /> LinkedIn
          </a>
        </div>
        <a href="mailto:firat.yalcin@univie.ac.at" style={{ padding: '0.5rem 0.75rem', borderRadius: '99px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 600, background: 'var(--bg-surface)', width: 'fit-content' }} onMouseOver={(e) => Object.assign(e.currentTarget.style, { background: 'var(--bg-hover)' })} onMouseOut={(e) => Object.assign(e.currentTarget.style, { background: 'var(--bg-surface)' })}>
          <Mail size={14} /> firat.yalcin@univie.ac.at
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
