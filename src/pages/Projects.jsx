import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio built using React and Tailwind CSS.',
    link: '#'
  },
  {
    title: 'Delivery System',
    description: 'A delivery web app using ASP.NET Core MVC integrated with MongoDB.',
    link: '#'
  },
  {
    title: 'Cleaning Service App',
    description: 'An on-demand cleaning service booking app with eco-friendly features.',
    link: '#'
  }
];

const Projects = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="border p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <h2 className="text-2xl font-semibold text-gray-800">{project.title}</h2>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-500 hover:underline mt-4 inline-block"
              target="_blank" rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
