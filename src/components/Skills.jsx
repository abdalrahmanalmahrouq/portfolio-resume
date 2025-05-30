import React, { Component } from 'react'

export class Skills extends Component {
  render() {
    return (
      <div>
         
    <section id="skills" class="skills section">

  
      <div class="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
    
      </div>

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row skills-content skills-animation">

          <div class="col-lg-6">

            <div class="progress">
              <span class="skill"><span>HTML</span> <i class="val">100%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" style={{width: '100%'}}></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill"><span>CSS</span> <i class="val">90%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar"  style={{width: '90%'}}></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill"><span>JavaScript</span> <i class="val">75%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar"  style={{width: '75%'}}></div>
              </div>
            </div>

          </div>

          <div class="col-lg-6">

            <div class="progress">
              <span class="skill"><span>PHP</span> <i class="val">80%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar"  style={{width: '80%'}}></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill"><span>Python</span> <i class="val">90%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar"  style={{width: '90%'}}></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill"><span>Java</span> <i class="val">40%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar"  style={{width: '40%'}}></div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
      </div>
    )
  }
}

export default Skills
