import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section content-section">
      <div className="section-header">
        <p className="section-kicker">04 / Trajectory</p>
        <h2 className="section-title">The long way<br /><em>to better tools.</em></h2>
      </div>
        
        <div className="experience-layout">
          
          {/* Experience Timeline */}
          <div className="timeline-column">
            <div className="timeline-heading"><Briefcase size={20} /><h3>Experience</h3></div>
            
            <div className="timeline">
              
                <div className="timeline-item current">
                <h4>Independent Python Developer</h4>
                <p className="timeline-date">Vienna, Austria / 2024 — Present</p>
                <p>Building automated pipelines and full-stack applications integrating Apify, Telegram, Tailscale, and custom FastAPI backends for personal infrastructure and workflow automation.</p>
              </div>

              <div className="timeline-item">
                <h4>Research Software Engineer</h4>
                <p className="timeline-date">University of Vienna / 2020 — 2024</p>
                <p>Developed Python workflows on top of FireWorks and Slurm to manage thousands of DFT simulations on HPC clusters. Built internal Flask and Streamlit tools for workflow management.</p>
              </div>

              <div className="timeline-item">
                <h4>Research & Teaching Assistant</h4>
                <p className="timeline-date">METU, Ankara / 2017 — 2020</p>
                <p>Developed numerical Python models to simulate magnetic properties in graphene nanostructures and mentored students on scientific computing workflows.</p>
              </div>

            </div>
          </div>

          {/* Education Timeline */}
          <div className="timeline-column">
            <div className="timeline-heading"><GraduationCap size={20} /><h3>Education</h3></div>
            
            <div className="timeline">
              
              <div className="timeline-item current">
                <h4>PhD in Physics</h4>
                <p className="timeline-date">University of Vienna / 2021 — 2026 (expected)</p>
                <p>Focus on automated high-throughput workflows and polaron localization in complex materials.</p>
              </div>

              <div className="timeline-item">
                <h4>MSc in Physics</h4>
                <p className="timeline-date">METU, Ankara / 2016 — 2019</p>
                <p>Computational modeling and numerical methods. GPA: 3.86/4.00.</p>
              </div>

              <div className="timeline-item">
                <h4>BSc in Physics</h4>
                <p className="timeline-date">METU, Ankara / Graduated 2015</p>
                <p>GPA: 3.90/4.00 (Ranked 2nd in class).</p>
              </div>

            </div>
          </div>

        </div>
    </section>
  );
};

export default Experience;
