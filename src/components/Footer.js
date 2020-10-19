import React from 'react';

function Footer() {
  const icons = [
    {
      name: 'GitHub',
      src: 'github.svg',
      link: 'https://github.com/dj-viking'
    },
    {
      name: 'LinkedIn',
      src: 'linkedin.svg',
      link: 'https://www.linkedin.com/in/anders-ackerman-b1055061/'
    },
    {
      name: 'Email',
      src: 'gmail.svg',
      link: 'mailto:anders.swedishviking@gmail.com'
    },
    {
      name: 'Twitch',
      src: 'twitch.svg',
      link: 'https://twitch.tv/djvikingsintheroad'
    },
  ];
  const aStyle ={
    textDecoration: 'none'
  }
  const imgStyle={ 
    margin: 'auto'
  }
  return (
    <div className="footer">
      {
        icons.map(icon => 
        (
          <div className="footer-button-container">
            <a
              href={`${icon.link}`}
              target="_blank"
              rel="noreferrer noopener"
              key={icon.name}
              id={icon.name}
              style={aStyle}
            >
              <button className="footer-btn">
                <img 
                  src={require(`../assets/images/${icon.src}`)}
                  height="24"
                  width="24"
                  alt={icon.name} 
                  className="footer-icon-style"
                  style={imgStyle}
                /> 
              </button>
            </a>
          </div>
        ))
      }
    </div>
  )
}

export default Footer;