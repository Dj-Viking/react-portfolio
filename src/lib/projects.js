import badgeColors from "./badgeColors";

//IMAGE IMPORTS
import NomadLang from "../assets/images/nomad-lang.png";
import FFT from "../assets/images/fft-audio-gif.gif";
import Nomadica from "../assets/images/nomadica-img.png";
import MeetTheReplacements from "../assets/images/meet-the-replacements.jpg";
import LEDMatrix from "../assets/images/led-matrix-gif.gif";

export const projects = [
    {
        name: "LED Art Matrix",
        description: `MERN-stack application LED Matrix emulator build with React, 
        html Canvas API rendering rectangles, MIDI Controls change visuals supporting XONEK2 and TouchOSC (more to come)`,
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
            },
        ],
        githubLink: "https://github.com/Dj-Viking/LED-Art-matrix",
        deployLink: "https://led-matrices.onrender.com/",
    },
    {
        name: "Nomad Lang",
        description: "Flash card app for foreign language learning. User customizable cards.",
        imageSrc: NomadLang,
        technologyBadges: [
            {
                isLink: true,
                link: "https://vuejs.org/guide/introduction.html",
                src: `https://img.shields.io/badge/Vue3-${badgeColors.vueGreen}.svg`,
            },
            {
                isLink: false,
                src: `https://img.shields.io/badge/TypeScript-${badgeColors.blue}.svg`,
            },
            {
                isLink: false,
                src: `https://img.shields.io/badge/MongoDB:TypeGoose-${badgeColors.green}.svg`,
            },
            {
                isLink: true,
                link: "https://app.codecov.io/gh/Dj-Viking/nomad-lang",
                src: `https://codecov.io/gh/Dj-Viking/Nomad-Lang/branch/main/graph/badge.svg?token=X4CXPYZE2O`,
            },
        ],
        githubLink: "https://github.com/dj-viking/nomad-lang",
        deployLink: "https://nomad-lang.onrender.com",
    },
    {
        name: "Nomadica",
        description: "Front-End Application to Search for Job Salaries by Country Name.",
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
        githubLink: "https://github.com/Dj-Viking/Nomadica",
        deployLink: "https://nomadica.onrender.com/",
    },
    {
        name: "FFT Audio Visualizer",
        description:
            "p5.js sketch also using p5.sound.js library to create a JavaScript based audio visualizer that runs in the browser from a node instance localhost.",
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
            },
        ],
        githubLink: "https://github.com/Dj-Viking/fft-audio-visualizer",
    },
    {
        name: "Meet The Replacements",
        description: "Meet The Replacements Orlando Fringe 2018 theatre show LED set piece.",
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
        githubLink: "https://github.com/Dj-Viking/meetTheReplacements",
    },
];
