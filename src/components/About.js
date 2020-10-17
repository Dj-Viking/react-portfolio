import React from 'react';

function About() {
  return (
    <section className="about-me">
      <div className="flex-row">
        <h2>
          About Me
        </h2>
        <img className="me-picture" src={require('../images/ME.jpg')} alt="recent snapshot of me" />
        <div className="border-right"></div>
      </div>
      <p className="about-p">
        Anders has adventurous ambitions which include a deep passion for Software Development, Music Production, and the Audio Visual Arts. 
      </p>
      <div className="border-bottom"></div>
      <p className="about-p">
        Always looking to experience a new adventure in the world of programming.
      </p>
      <div className="border-bottom"></div>
      <p className="about-p">
        Utilizing JavaScript to build dynamic web applications from back-end to front-end.
      </p>
      <div className="border-bottom"></div>
      <p className="about-p">
        Including the use of the MERN stack, MongoDB, Express.js, React.js, Node.js, Heroku, CSS3, HTML5, Handlebars.js, MySQL, Sequelize, p5.js and much more
      </p>
      <div className="border-bottom"></div>
    </section>
  )
}

export default About;