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
    <section id="projects" className="section content-section">
      <div className="section-header section-header-row">
        <div><p className="section-kicker">02 / Selected work</p><h2 className="section-title">Systems built<br /><em>from first principles.</em></h2></div>
        <p className="section-subtitle">Open-source tools developed to accelerate materials modeling and make complex workflows repeatable.</p>
      </div>
        
        <div className="project-list">
          {projects.map((project, index) => (
            <article key={index} className="project-item">
              <div className="project-number">0{index + 1}</div>
              <div className="project-body">
                <div className="project-heading">
                  <div><h3>{project.title}</h3><p>{project.subtitle}</p></div>
                  <span className="project-year">{index === 0 ? '2024' : '2026'}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-footer">
                  <div className="tag-list">
                    {project.tags.map((tag, i) => <span key={i}>{tag}</span>)}
                  </div>
                  <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer"><Code2 size={16} /> Code</a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer">Paper <ExternalLink size={16} /></a>
                  )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
    </section>
  );
};

export default Projects;
