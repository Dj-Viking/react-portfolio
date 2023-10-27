import React from "react";
import GithubIcon from "../assets/images/github.svg";
import { projects } from "../lib/projects";

function Projects() {
    const extraMarginStyle = {
        marginRight: "10px",
        marginLeft: "10px",
    };

    return (
        <div className="project-flex-column" key={(Math.random() * 10000).toString() + "dkfjkdfjkd"}>
            {projects.map((project) => (
                <section
                    className="project-section"
                    key={(Math.random() * 10000).toString() + "dkfjkdfjkd"}
                    id={(Math.random() * 10000).toString() + "dkfjkdfjkd"}
                >
                    <div className="card-title">
                        <h2 className="card-header">
                            <span>{project.name}</span>
                        </h2>
                        <img className="work-img" src={`${project.imageSrc}`} alt="project snapshot" />
                    </div>
                    <div className="card-description">
                        <p className="project-description">{project.description}</p>
                        <div className="border-bottom2"></div>
                        <div className="tech-used">
                            <span>Built using:</span>
                        </div>
                        {project.technologyBadges &&
                            project.technologyBadges.map((badge) => {
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
                                    );
                                } else {
                                    return (
                                        <img
                                            alt="project badge"
                                            src={badge.src}
                                            className="project-badge"
                                            key={(Math.random() * 1029329).toString() + "qy34hyw53nsaben"}
                                            id={(Math.random() * 1029329).toString() + "jqw3hu5aersw435ejntaejnstwa"}
                                        />
                                    );
                                }
                            })}
                        <div className="project-button-container">
                            <a target="_blank" href={project.githubLink} rel="noopener noreferrer">
                                <button className="project-btn" style={extraMarginStyle}>
                                    <span>GitHub Repository</span>
                                </button>
                            </a>
                            {project.deployLink && (
                                <a target="_blank" href={project.deployLink} rel="noopener noreferrer">
                                    <button className="project-btn" style={extraMarginStyle}>
                                        Deployed App Page
                                    </button>
                                </a>
                            )}
                        </div>
                    </div>
                </section>
            ))}
            <div className="project-button-container">
                <a href="https://github.com/Dj-Viking" target="_blank" rel="noopener noreferrer">
                    <button className="project-btn">
                        <img src={GithubIcon} height="16" width="16" alt="icon" className="github-icon" />
                        <span>See More Projects</span>
                        <img src={GithubIcon} height="16" width="16" alt="icon" className="github-icon" />
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Projects;
