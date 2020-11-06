import React from 'react';
import badgeColors from '../lib/badgeColors.js';

//IMAGE IMPORTS
import CubeWave from '../assets/images/cube-wave.gif';
import FFT from '../assets/images/fft-audio-gif.gif';
import Nomadica from '../assets/images/nomadica-img.png';
import MeetTheReplacements from '../assets/images/meet-the-replacements.jpg';

function Projects() {

  const projects = [
    {
      name: 'Cube Wave',
      description: 'p5.js sketch of an animated 3D cube.',
      imageSrc: CubeWave,
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
      imageSrc: Nomadica,
      technologyBadges: [
        `https://img.shields.io/badge/Teleport_API-${badgeColors.orange}.svg`,
        `https://img.shields.io/badge/Rates_API-${badgeColors.orange}.svg`,
        `https://img.shields.io/badge/Country_Flags_API-${badgeColors.orange}.svg`,
        `https://img.shields.io/badge/Tailwind_CSS-${badgeColors.purple}.svg`,
      ],
      githubLink: 'https://github.com/Dj-Viking/Nomadica',
      deployLink: 'https://dj-viking.github.io/Nomadica/',
    },
    {
      name: 'FFT Audio Visualizer',
      description: 'p5.js sketch also using p5.sound.js library to create a JavaScript based audio visualizer that runs in the browser from a node instance localhost.',
      imageSrc: FFT,
      technologyBadges: [
        `https://img.shields.io/badge/Node_JS-${badgeColors.green}.svg`,
        `https://img.shields.io/badge/Express_JS-${badgeColors.blue}.svg`,
        `https://img.shields.io/badge/p5_JS-${badgeColors.purple}.svg`,
        `https://img.shields.io/badge/p5.sound_JS-${badgeColors.deepPurple}.svg`,
      ],
      githubLink: 'https://github.com/Dj-Viking/fft-audio-visualizer',
      // deployLink: 'https://dj-viking.github.io/Nomadica/',
    },
    {
      name: 'Meet The Replacements',
      description: 'Meet The Replacements Orlando Fringe 2018 theatre show LED set piece.',
      imageSrc: MeetTheReplacements,
      technologyBadges: [
        `https://img.shields.io/badge/Arduino-${badgeColors.teal}.svg`,
        `https://img.shields.io/badge/C-${badgeColors.purple}.svg`,
        `https://img.shields.io/badge/C++-${badgeColors.deepPurple}.svg`,
      ],
      githubLink: 'https://github.com/Dj-Viking/meetTheReplacements',
      // deployLink: 'https://dj-viking.github.io/Nomadica/',
    },
  ]

  // const testHref = '/'
  return (
    <div className="project-flex-column">
      {
        projects.map(project => 
        (
          <section 
            className="project-section"
            key={project.name}
            id={project.name}
          > 
            <div className="card-title">
              <h2 className="card-header">
                {project.name}
              </h2>
              <img 
                className="work-img"
                src={`${project.imageSrc}`} 
                alt="project snapshot" 
              />
            </div>
            <div className="card-description">
              <p className="project-description">
                {project.description}
              </p>
              <div className="border-bottom2"></div>
              <div className="tech-used">
                Built using:  
              </div>
              {
                project.technologyBadges && 
                project.technologyBadges.map(badge => 
                (
                  <img
                    alt="project badge"
                    src={badge}
                    className="project-badge"
                    key={badge.split('/')[4].split('-')[0]}
                    id={badge.split('/')[4].split('-')[0]}
                  >
                  </img>
                ))
              }
              <div className="project-button-container">
                <a 
                  target="_blank" 
                  href={project.githubLink} 
                  rel="noopener noreferrer"
                > 
                  <button 
                    className="project-btn"
                  > GitHub Repository
                  </button>
                </a>
                {
                  project.deployLink &&
                  <a 
                    target="_blank" 
                    href={project.deployLink} 
                    rel="noopener noreferrer"
                  > 
                    <button 
                      className="project-btn"
                    > Deployed App Page
                    </button>
                  </a>
                }
              </div>
            </div>
          </section>
        ))
      }
      <div className="project-button-container">
        <a
          href="https://github.com/dj-viking/repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="project-btn">
            <img 
              src={require('../assets/images/github.svg')}
              height="16"
              width="16"
              alt="icon"
              className="github-icon"
            /> 
            See More Projects
            <img 
              src={require('../assets/images/github.svg')}
              height="16"
              width="16"
              alt="icon"
              className="github-icon"
            /> 
          </button>
        </a>  
      </div>
    </div>
  )
}

export default Projects;