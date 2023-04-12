import React from "react";
import Sketch from "react-p5";

function Home() {
    //build the particles animation here..the scoping only really works inside
    // this component...tried splitting up the class
    // into a different file but it relies on things defined
    // inside setup()
    const particles = [];
    function setup(p5) {
        const canvasAnchor = document.querySelector("#canvas-anchor");
        const canvasDivEl = document.querySelector("#canvas-div");
        let width = canvasDivEl.offsetWidth - 15;
        let height = canvasDivEl.offsetHeight + 100;
        const canvas = p5.createCanvas(width, height);
        canvas.parent("canvas-div");
        canvasDivEl.appendChild(canvasAnchor);

        const particlesLength = Math.floor(window.innerWidth / 50);

        class Particle {
            constructor() {
                //position
                this.pos = p5.createVector(p5.random(width), p5.random(height));
                //velocity
                this.vel = p5.createVector(p5.random(-2, 2), p5.random(-2, 2));
                //size
                this.size = 10;
            }
            //update movement by adding velocity
            update() {
                this.pos.add(this.vel);
                this.edgeCheck();
                this.mouseCheck();
            }
            //draw single particle
            draw() {
                p5.noStroke();
                p5.fill("rgba(255, 100, 255, .5)");
                p5.circle(this.pos.x, this.pos.y, this.size);
            }
            //detect edgeCheck
            edgeCheck() {
                if (this.pos.x < 0 || this.pos.x > width) {
                    this.vel.x *= -1;
                }
                if (this.pos.y < 0 || this.pos.y > height) {
                    this.vel.y *= -1;
                }
            }

            /**
             * p5.mouseX and mouseY are relative to the start and end of the canvas itself
             * not the browser window
             */
            mouseCheck() {
                //if mouse is in canvas
                // get bounding client rect of canvas div
                // adjust velocity depending on mouse position
                const rect = document
                    .querySelector("#defaultCanvas0")
                    .getBoundingClientRect();
                if (p5.mouseX >= 0 && p5.mouseX <= rect.width) {
                    if (p5.mouseX < this.pos.x) {
                        this.vel.x *= -1;
                    }
                    if (p5.mouseY < this.pos.y) {
                        this.vel.y *= -1;
                    }
                }
            }
            //connect particles
            checkParticles(particles) {
                particles.forEach((particle) => {
                    const distance = p5.dist(
                        this.pos.x,
                        this.pos.y,
                        particle.pos.x,
                        particle.pos.y
                    );
                    if (distance < 120) {
                        p5.stroke("rgba(66, 255, 200, .5)");
                        p5.line(
                            this.pos.x,
                            this.pos.y,
                            particle.pos.x,
                            particle.pos.y
                        );
                    }
                });
            }
        }
        for (let i = 0; i < particlesLength; i++) {
            particles.push(new Particle());
        }
    }

    function draw(p5) {
        p5.background("rgba(66, 146, 206, .2)");
        particles.forEach((particle, index) => {
            particle.update();
            particle.draw();
            particle.checkParticles(particles.slice(index));
        });
    }

    return (
        <div>
            <section className="hero-flex">
                <section className="hero">
                    <div className="hero-title">
                        <div id="canvas-div">
                            <div id="canvas-anchor">
                                <Sketch setup={setup} draw={draw} />
                            </div>
                        </div>
                        <h3>Web &amp; Software Development Portfolio</h3>
                    </div>
                </section>
            </section>
        </div>
    );
}

export default Home;
