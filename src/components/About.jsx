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
    <section id="about" className="section content-section">
      <div className="section-header">
        <p className="section-kicker">01 / Profile</p>
        <h2 className="section-title">Scientific depth.<br /><em>Practical systems.</em></h2>
        <p className="section-subtitle">From computational physics to infrastructure and backend engineering.</p>
      </div>
      <div className="about-layout">
        <div className="about-copy">
          <p>
            I am a Python-focused backend and automation developer currently finishing my PhD in Computational Materials Physics at the University of Vienna. Over the past seven years, I have built workflow scripts, data-processing pipelines, and tools around large-scale simulations on Linux and HPC systems.
          </p>
          <p>
            My academic journey began with Bachelor and Master degrees in Physics from Middle East Technical University in Ankara. Now, as my PhD concludes, I am transitioning fully into the tech sector in Vienna.
          </p>
          <p className="coordinates">48.2082° N&nbsp;&nbsp; 16.3738° E&nbsp;&nbsp; /&nbsp;&nbsp; UTC+1</p>
        </div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <div><h3>{skill.title}</h3><p>{skill.desc}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
