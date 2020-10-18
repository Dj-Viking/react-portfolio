import React from 'react';
import badgeColors from '../lib/badgeColors.js';

function Projects() {

  const projects = [
    {
      name: 'Cube Wave',
      description: 'p5.js sketch of an animated 3D cube',
      imageSrc: 'cube-wave.gif',
      technologyBadges: [
        `https://img.shields.io/badge/p5.JS-${badgeColors.blue}.svg`,
        `https://img.shields.io/badge/HTML_Canvas-${badgeColors.orange}.svg`,
        `https://img.shields.io/badge/JavaScript-${badgeColors.yellow}.svg`
      ],
      githubLink: 'https://github.com/dj-viking/cube-wave',
      deployLink: 'https://dj-viking.github.io/cube-wave/',
    },
    {
      name: 'Nomadica',
      description: 'Front-End Application to Search for Job Salaries by Country Name.',
      imageSrc: 'nomadica-img.png',
      technologyBadges: [
        'https://img.shields.io/badge/Teleport_API-00872b.svg',
        'https://img.shields.io/badge/Rates_API-00872b.svg',
        'https://img.shields.io/badge/Country_Flags_API-00872b.svg'
      ],
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
              <p className="project-description">
                {project.description}
              </p>
              <div className="border-bottom2"></div>
              <div className="tech-used">
                Technologies used:  
              </div>
              {
                project.technologyBadges && 
                project.technologyBadges.map(badge => (
                  <img
                    alt="project badge"
                    src={badge}
                    className="project-badge"
                  >
                  </img>
                ))
              }
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