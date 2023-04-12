import React from "react";

//IMAGE IMPORTS
import GitHubIcon from "../assets/images/github.svg";
import LinkedInIcon from "../assets/images/linkedin.svg";
import GmailIcon from "../assets/images/gmail.svg";
import TwitchIcon from "../assets/images/twitch.svg";

function Footer() {
    const icons = [
        {
            name: "GitHub",
            src: GitHubIcon,
            link: "https://github.com/dj-viking",
        },
        {
            name: "LinkedIn",
            src: LinkedInIcon,
            link: "https://www.linkedin.com/in/anders-ackerman-b1055061/",
        },
        {
            name: "Email",
            src: GmailIcon,
            link: "mailto:anders.swedishviking@gmail.com",
        },
        {
            name: "Twitch",
            src: TwitchIcon,
            link: "https://twitch.tv/djvikingsintheroad",
        },
    ];
    const aStyle = {
        textDecoration: "none",
    };
    const imgStyle = {
        margin: "auto",
    };
    return (
        <div className="footer">
            {icons.map((icon, index) => (
                <div
                    key={`${icon.name}${index + 2}`}
                    className="footer-button-container"
                >
                    <a
                        href={`${icon.link}`}
                        target="_blank"
                        rel="noreferrer noopener"
                        key={`${icon.name}${index + 1}`}
                        id={icon.name}
                        style={aStyle}
                    >
                        <button className="footer-btn">
                            <img
                                src={icon.src}
                                key={`${icon.name}${index}`}
                                height="24"
                                width="24"
                                alt={icon.name}
                                className="footer-icon-style"
                                style={imgStyle}
                            />
                        </button>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Footer;
