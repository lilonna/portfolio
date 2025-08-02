import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built using React and Bootstrap.',
    link: 'https://github.com/lilonna/portfolio'
  },
  {
    title: 'Book to Sign Language Translator',
    description: 'A translator web app using ASP.NET Core MVC integrated with MongoDB.',
    link: 'https://github.com/lilonna/signbook_translator'
  },
  {
    title: 'E-commerce for Single Shop Owner',
    description: 'An online store system for solo vendors, designed with a user-friendly interface.',
    link: 'https://github.com/lilonna/PRODGY_FS_03'
  },
  {
    title: 'On-Demand Cleaning Service',
    description: 'A booking app for eco-friendly and professional cleaning services.',
    link: 'https://github.com/lilonna/PRODGY_FS_03'
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-5 d-flex align-items-center justify-content-center text-center min-vh-100"
      style={{
        background: 'linear-gradient(135deg, #e0bbff 0%, #fcd5ce 100%)',
      }}
    >
      <div className="container px-4">
        <h2 className="display-4 fw-bold text-primary mb-5">My Projects</h2>
        <div className="row justify-content-center">
          {projects.map((project, idx) => (
            <div key={idx} className="col-md-6 col-lg-5 mb-4">
              <div className="card shadow-lg h-100" style={{ borderRadius: '15px' }}>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold">{project.title}</h5>
                  <p className="card-text text-secondary flex-grow-1">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary mt-auto align-self-start"
                    style={{ borderRadius: '25px', fontWeight: '600' }}
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
