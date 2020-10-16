import Sketch, { p5 } from 'react-p5';

class Particle {
  constructor(){
      //position
      this.pos = p5.createVector(p5.random(width), p5.random(height));
      //velocity
      this.vel = p5.createVector(p5.random(-2, 2), p5.random(-2, 2));
      //size
      this.size = 10;
  }
  //update movement by adding velocity
  update(){
      this.pos.add(this.vel);
      this.edges();
  }

  //draw single particle
  draw(){
      p5.noStroke();
      p5.fill('rgba(255, 100, 255, .5)');
      p5.circle(this.pos.x, this.pos.y, this.size);
  
  }

  //detect edges
  edges(){
      if(this.pos.x < 0 || this.pos.x > width) {
          this.vel.x *= -1;
      }

      if(this.pos.y < 0 || this.pos.y > height) {
          this.vel.y *= -1;
      }
  }

  //connect particles
  checkParticles(particles){
      particles.forEach(particle => {
          const distance = p5.dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);

          if(distance < 120){
              p5.stroke('rgba(66, 255, 200, .5)');
              p5.line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
          }
      });
  }
}

export default Particle;