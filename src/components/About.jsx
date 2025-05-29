import React, { Component } from 'react';
// Import PureCounter if installed via NPM
// import PureCounter from '@srexi/purecounterjs'; // If installed via npm

export class About extends Component {
  componentDidMount() {
    // Initialize PureCounter after component mounts
    if (window.PureCounter) {
      new window.PureCounter();
    }
    // If using NPM:
    // new PureCounter();
  }

  render() {
    return (
      <div>
        <main className="main">

          <section id="about" className="about section">
            <div className="container section-title" data-aos="fade-up">
              <h2>About</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <div className="row gy-4 justify-content-center">
                <div className="col-lg-4">
                  <img src="assets/img/profile-img.jpg" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-8 content">
                  <h2>UI/UX Designer &amp; Web Developer.</h2>
                  <p className="fst-italic py-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className="row">
                    <div className="col-lg-6">
                      <ul>
                        <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul>
                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>email@example.com</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                      </ul>
                    </div>
                  </div>
                  <p className="py-3">
                    Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                    Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="stats" className="stats section">
            <div className="container section-title" data-aos="fade-up">
              <h2>Facts</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <div className="row gy-4">
                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                    <p>Clients</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                    <p>Projects</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
                    <p>Hours Of Support</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
                    <p>Workers</p>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* Other sections can remain unchanged */}
        </main>
      </div>
    );
  }
}

export default About;
