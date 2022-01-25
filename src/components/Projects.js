import React from 'react';
import badgeColors from '../lib/badgeColors.js';

//IMAGE IMPORTS
import CubeWave from '../assets/images/cube-wave.gif';
import FFT from '../assets/images/fft-audio-gif.gif';
import Nomadica from '../assets/images/nomadica-img.png';
import MeetTheReplacements from '../assets/images/meet-the-replacements.jpg';
import LEDMatrix from '../assets/images/led-matrix-gif.gif'
import GithubIcon from '../assets/images/github.svg'
import BookClub from '../assets/images/book-club.png';

function Projects() {

  const projects = [
    {
      name: 'LED Art Matrix',
      description: 'MERN-stack application LED Matrix emulator using SCSS, React, custom tooling to generate stylesheets',
      imageSrc: LEDMatrix,
      technologyBadges: [
        {
          isLink: true,
          link: "https://app.codecov.io/gh/Dj-Viking/LED-Art-matrix",
          src: `https://codecov.io/gh/Dj-Viking/LED-Art-matrix/branch/main/graph/badge.svg?token=6KIXEPI5DA`,
        },
        {
          isLink: false,
          src: `https://img.shields.io/badge/React.js-${badgeColors.teal}.svg`,
        },
        {
          isLink: false,
          src: `https://img.shields.io/badge/TypeScript-${badgeColors.blue}.svg`,
        }
      ],
      githubLink: 'https://github.com/Dj-Viking/LED-Art-matrix',
      deployLink: 'https://led-matrices.herokuapp.com',
    },
    {
      name: 'Cube Wave',
      description: 'p5.js sketch of an animated 3D cube.',
      imageSrc: CubeWave,
      technologyBadges: [
        {
          isLink: false,
          src: `https://img.shields.io/badge/p5.JS-${badgeColors.blue}.svg`,
        },
        {
          isLink: false,
          src: `https://img.shields.io/badge/HTML_Canvas-${badgeColors.orange}.svg`,
        },
        {
          isLink: false,
          src: `https://img.shields.io/badge/JavaScript-${badgeColors.yellow}.svg`
        },
        
      ],
      githubLink: 'https://github.com/dj-viking/cube-wave',
      deployLink: 'https://dj-viking.github.io/cube-wave/',
    },
    {
      name: 'Nomadica',
      description: 'Front-End Application to Search for Job Salaries by Country Name.',
      imageSrc: Nomadica,
      technologyBadges: [
        {
          isLink: false,
          src: `https://img.shields.io/badge/Teleport_API-${badgeColors.orange}.svg`,
        },
        {
          isLink: false,
          src: `https://img.shields.io/badge/Rates_API-${badgeColors.orange}.svg`,
        },
        {
          isLink: false,
          src: `https://img.shields.io/badge/Tailwind_CSS-${badgeColors.purple}.svg`,
        },
      ],
      githubLink: 'https://github.com/Dj-Viking/Nomadica',
      deployLink: 'https://nomadica-app.herokuapp.com/',
    },
    {
      name: 'FFT Audio Visualizer',
      description: 'p5.js sketch also using p5.sound.js library to create a JavaScript based audio visualizer that runs in the browser from a node instance localhost.',
      imageSrc: FFT,
      technologyBadges: [
        {
          isLink: false,
          src: `https://img.shields.io/badge/Node_JS-${badgeColors.green}.svg`,
        },
        {
          isLink: false,
          src: `https://img.shields.io/badge/Express_JS-${badgeColors.blue}.svg`,
        },
        {
          isLink: false,
          src: `https://img.shields.io/badge/p5_JS-${badgeColors.purple}.svg`,
        },
        {
          isLink: false,
          src: `https://img.shields.io/badge/p5.sound_JS-${badgeColors.deepPurple}.svg`,
        }
      ],
      githubLink: 'https://github.com/Dj-Viking/fft-audio-visualizer',
      // deployLink: 'https://dj-viking.github.io/Nomadica/',
    },
    {
      name: 'Meet The Replacements',
      description: 'Meet The Replacements Orlando Fringe 2018 theatre show LED set piece.',
      imageSrc: MeetTheReplacements,
      technologyBadges: [
        {
          isLink: false,
          src: `https://img.shields.io/badge/Arduino-${badgeColors.teal}.svg`,
        },
        {
          isLink: false,
          src: `https://img.shields.io/badge/C-${badgeColors.purple}.svg`,
        },
        {
          isLink: false,
          src: `https://img.shields.io/badge/C++-${badgeColors.deepPurple}.svg`,
        },
      ],
      githubLink: 'https://github.com/Dj-Viking/meetTheReplacements',
      // deployLink: 'https://dj-viking.github.io/Nomadica/',
    },
    {
      name: 'Book Club',
      description: 'Content Management web application where users can log in, search for books, save books to their library, and join book clubs to see what other fellow friends and readers are currently reading in their library.',
      imageSrc: BookClub,
      technologyBadges: [
        {
          isLink: false,
          src: `https://img.shields.io/badge/Express-${badgeColors.teal}.svg`,
        },
        {
          isLink: false,
          src: `https://img.shields.io/badge/Handlebars.js-${badgeColors.orange}.svg`,
        },
        {
          isLink: false,
          src: `https://img.shields.io/badge/MySQL_Sequelize-${badgeColors.blue}.svg`,
        },
      ],
      githubLink: 'https://github.com/Dj-Viking/book-club',
      deployLink: 'https://book-sequelizers.herokuapp.com/',
    },
  ];

  const extraMarginStyle = {
    marginRight: '10px',
    marginLeft: '10px'
  };

  // const testHref = '/'
  return (
    <div className="project-flex-column" key={(Math.random() * 10000).toString() + "dkfjkdfjkd"}>
      {
        projects.map(project => 
        (

          <section 
            className="project-section"
            key={(Math.random() * 10000).toString() + "dkfjkdfjkd"}
            id={(Math.random() * 10000).toString() + "dkfjkdfjkd"}
          > 
            <div 
              key={(Math.random() * 10000).toString() + "asdfas"} 
              className="card-title"
            >
              <h2 
                className="card-header" 
                key={(Math.random() * 10000).toString() + "asfasdfasdfasd"}
              >
                <span 
                  key={(Math.random() * 10000).toString() + "asfasdfasdfasd"}
                >
                  {project.name}
                </span>
              </h2>
              <img
                key={(Math.random() * 10000).toString() + "asdfasfadsfasdfadsfdsadfs"} 
                className="work-img"
                src={`${project.imageSrc}`} 
                alt="project snapshot" 
              />
            </div>
            <div 
              className="card-description" 
              key={(Math.random() * 10000).toString() + "adfasdfadsfaxfxaxccvasdsafads"}
            >
              <p 
                className="project-description" 
                key={(Math.random() * 10000).toString() + "asfeqw34fqwfaf"}
              >
                <span
                  key={(Math.random() * 10000).toString() + "aeo;ihjfgaeirpo8gj"}
                >
                  {project.description}
                </span>
              </p>
              <div 
                className="border-bottom2" 
                key={(Math.random() * 10000).toString() + "234tq fadf"}
              ></div>
              <div 
                className="tech-used" 
                key={(Math.random() * 10000).toString() + "q3y45srthaerst"}
              >
                <span 
                  key={(Math.random() * 10000).toString() + "eghrstdhrthrstehrty"}
                >
                  Built using:
                </span>  
              </div>
              {
                project.technologyBadges && 
                project.technologyBadges.map(badge => {
                  if (badge.isLink) {
                    return (
                      <a 
                        href={badge.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={(Math.random() * 10000).toString() + " wegpr[idkjl;'fvga"}
                      >
                        <img 
                          alt="project badge"
                          src={badge.src}
                          className="project badge"
                          key={(Math.random() * 10000).toString() + "q3y46rsw4hjaew4w4"}
                          id={(Math.random() * 102032).toString() + "h5rstwnssbnthberst"}
                        />
                      </a> 
                    )
                  } else {
                    return (
                      <img
                        alt="project badge"
                        src={badge.src}
                        className="project-badge"
                        key={(Math.random() * 1029329).toString() + "qy34hyw53nsaben"}
                        id={(Math.random() * 1029329).toString() + "jqw3hu5aersw435ejntaejnstwa"}
                      />
                    )
                  }
                })
              }
              <div 
                className="project-button-container" 
                key={(Math.random() * 10000).toString() + "jwaehtw4seghqrwa3"}
              >
                <a 
                  target="_blank" 
                  href={project.githubLink} 
                  rel="noopener noreferrer"
                  key={(Math.random() * 10000).toString() + "w34hj5ehjnsta"}
                > 
                  <button 
                    className="project-btn"
                    key={(Math.random() * 10000).toString() + "ehjw453ehrstw345ehjstw4eht345sw"}
                    style={extraMarginStyle}
                  > 
                    <span
                      key={(Math.random() * 10000).toString() + "ghjepw903"}
                    >
                      GitHub Repository
                    </span>
                  </button>
                </a>
                {
                  project.deployLink &&
                  <a 
                    key={(Math.random() * 10000).toString() + "grt4gt34aegrtw345aegrtw345"}
                    target="_blank" 
                    href={project.deployLink} 
                    rel="noopener noreferrer"
                  > 
                    <button 
                      key={(Math.random() * 10000).toString() + "t4egrsdegrstegrst"}
                      className="project-btn"
                      style={extraMarginStyle}
                    > 
                      Deployed App Page
                    </button>
                  </a>
                }
              </div>
            </div>
          </section>
        ))
      }
      <div 
        className="project-button-container" 
        key={(Math.random() * 10000).toString() + "ggaerstegts"}
      >
        <a
          href="https://github.com/Dj-Viking"
          target="_blank"
          key={(Math.random() * 10000).toString() + "hrthest"}
          rel="noopener noreferrer"
        >
          <button 
            className="project-btn" 
            key={(Math.random() * 10000).toString() + "behtehteghreghrswaeghrsta"}
          >
            <img 
              src={GithubIcon}
              key={(Math.random() * 10000).toString() + "eghrstdhrthrstehrty"}
              height="16"
              width="16"
              alt="icon"
              className="github-icon"
            /> 
            <span 
              key={(Math.random() * 10000).toString() + "afhksujap;fiuvghwaerp9g"}
            >
              See More Projects
            </span>
            <img 
              key={(Math.random() * 10000).toString() + "eghrstehsteghrs"}
              src={GithubIcon}
              height="16"
              width="16"
              alt="icon"
              className="github-icon"
            /> 
          </button>
        </a>  
      </div>
    </div>
  );
}

export default Projects;