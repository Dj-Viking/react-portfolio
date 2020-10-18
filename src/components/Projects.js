import React from 'react';

function Projects() {
  const projects = [
    {
      name: 'Cube Wave',
      description: 'p5.js sketch of an animated 3D cube',
      imageSrc: 'cube-wave.gif',
      technologies: 'test technologies',
      githubLink: 'https://github.com/dj-viking/cube-wave',
      deployLink: 'https://dj-viking.github.io/cube-wave/',
    },
    {
      name: 'Nomadica',
      description: 'Front-End Application to Search for Job Salaries by Country Name.',
      imageSrc: 'nomadica-img.png',
      technologies: 'test technologies',
      githubLink: 'https://github.com/Dj-Viking/Nomadica',
      deployLink: 'https://dj-viking.github.io/Nomadica/',
    },
  ]

  // const testHref = '/'
  return (
    <div className="project-flex-column">
      {
        projects.map(project => (
          <section 
            className="project-section"
            key={project.name}
          > <div className="card-title">
              <h2 className="card-header">
                {project.name}
              </h2>
              <img 
                className="work-img"
                src={require(`../images/${project.imageSrc}`)} 
                alt="project snapshot" 
              />
            </div>
            <div className="card-description">
              <p>
                {project.description}
              </p>
              <p>
                {project.technologies}
              </p>
            <div className="project-button-container">
              <a 
                target="_blank" 
                href={project.githubLink} 
                rel="noopener noreferrer"
              > <button 
                  className="project-btn"
                > GitHub Repository
                </button>
              </a>
              <a 
                target="_blank" 
                href={project.deployLink} 
                rel="noopener noreferrer"
              > <button 
                  className="project-btn"
                > Deployed App Page
                </button>
              </a>
            </div>
            </div>
          </section>
        ))
      }
    </div>
  )
}

export default Projects;