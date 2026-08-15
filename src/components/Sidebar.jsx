import { Code2, Mail } from 'lucide-react';

const Sidebar = ({ activeSection }) => {
  const navLinks = [
    { index: '00', name: 'Home', href: '#home' },
    { index: '01', name: 'About', href: '#about' },
    { index: '02', name: 'Work', href: '#projects' },
    { index: '03', name: 'Papers', href: '#publications' },
    { index: '04', name: 'Experience', href: '#experience' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-intro">
        <a className="monogram" href="#home" aria-label="Firat Yalcin home">FY</a>
        <p className="eyebrow">Computational physicist<br />& software engineer</p>
      </div>

      <nav className="site-nav" aria-label="Main navigation">
        {navLinks.map((link) => {
          const isActive = link.href === `#${activeSection}`;
          return (
            <a 
              key={link.name} 
              href={link.href}
              className={`nav-link ${isActive ? 'active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className="nav-index">{link.index}</span>
              <span>{link.name}</span>
            </a>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <p className="status"><span className="status-dot" /> Open to software roles</p>
        <div className="social-links">
          <a href="https://github.com/fyalcin" target="_blank" rel="noreferrer"><Code2 size={14} /> GitHub</a>
          <a href="https://linkedin.com/in/firat-yalcin" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
        <a className="email-link" href="mailto:firat.yalcin@univie.ac.at"><Mail size={14} /> Email me</a>
      </div>
    </aside>
  );
};

export default Sidebar;
