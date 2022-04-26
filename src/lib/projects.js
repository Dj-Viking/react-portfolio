import badgeColors from "./badgeColors"

//IMAGE IMPORTS
import CubeWave from '../assets/images/cube-wave.gif';
import FFT from '../assets/images/fft-audio-gif.gif';
import Nomadica from '../assets/images/nomadica-img.png';
import MeetTheReplacements from '../assets/images/meet-the-replacements.jpg';
import LEDMatrix from '../assets/images/led-matrix-gif.gif'
import BookClub from '../assets/images/book-club.png';

export const projects = [
  {
    name: 'LED Art Matrix',
    description: 'MERN-stack application LED Matrix emulator build with React, custom tooling to dynamically generate stylesheets',
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