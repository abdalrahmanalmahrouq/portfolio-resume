import React, { Component } from 'react';
// Import PureCounter if installed via NPM
// import PureCounter from '@srexi/purecounterjs'; // If installed via npm
import img from '../asset/img/me.jpg';
export class About extends Component {
 
  render() {
    return (
      <div>
        <main className="main">

          <section id="about" className="about section">
            <div className="container section-title" data-aos="fade-up">
              <h2>About</h2>
           
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <div className="row gy-4 justify-content-center">
                <div className="col-lg-4">
                  <img src={img}className="img-fluid" alt="" />
                </div>
                <div className="col-lg-8 content">
                  <h2>Data Scientest &amp; Web Developer.</h2>
                  <p className="py-3">
                   Passionate about AI, data science, and machine learning, with a strong interest in building intelligent systems, real-time web applications.
                  </p>
                  <div className="row">
                    <div className="col-lg-6">
                      <ul>
                        <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>13 January 2005</span></li>
                
                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>079 10 44 738</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Jordan, Amman</span></li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul>
                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>20</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>abdalrahmanadnan209@gmail.com</span></li>
                        
                      </ul>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </section>

         


          
        </main>
      </div>
    );
  }
}

export default About;
