import { ExternalLink } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "Automated modeling of polarons: defects and reactivity on TiO2(110) surfaces",
      authors: "Firat Yalcin, Carla Verdi, Viktor C. Birschitzky, Matthias Meier, Michael Wolloch & Michele Reticcioli",
      journal: "npj Computational Materials",
      year: "2026",
      doi: "10.1038/s41524-026-01983-5",
      link: "https://www.nature.com/articles/s41524-026-01983-5",
    },
    {
      title: "SurfFlow: High-throughput surface energy calculations for arbitrary crystals",
      authors: "Firat Yalcin, Michael Wolloch",
      journal: "Computational Materials Science",
      year: "2024",
      doi: "10.1016/j.commatsci.2024.112799",
      link: "https://www.sciencedirect.com/science/article/pii/S092702562400020X",
    },
    {
      title: "High-throughput generation of potential energy surfaces for solid interfaces",
      authors: "Michael Wolloch, Gabriele Losi, Omar Chehaimi, Firat Yalcin, Mauro Ferrario, Maria Clelia Righi",
      journal: "Computational Materials Science",
      year: "2022",
      doi: "10.1016/j.commatsci.2022.111302",
      link: "https://www.sciencedirect.com/science/article/pii/S0927025622000969",
    }
  ];

  return (
    <section id="publications" className="section content-section">
      <div className="section-header section-header-row">
        <div><p className="section-kicker">03 / Research</p><h2 className="section-title">A bibliography<br /><em>in progress.</em></h2></div>
        <p className="section-subtitle">Academic contributions to computational materials physics. Each DOI links directly to the publisher.</p>
      </div>
        
        <div className="publication-list">
          {publications.map((pub, index) => (
            <article key={index} className="publication-item">
              <span className="publication-number">0{index + 1}</span>
              <div className="publication-body">
                <h3>{pub.title}</h3>
                <p>{pub.authors}</p>
                <span className="publication-journal">{pub.journal} · {pub.year}</span>
              </div>
              <a className="publication-link" href={pub.link} target="_blank" rel="noreferrer">DOI <ExternalLink size={14} /></a>
            </article>
          ))}
        </div>
    </section>
  );
};

export default Publications;
