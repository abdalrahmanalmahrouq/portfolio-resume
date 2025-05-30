import React, { Component } from 'react'

export class Facts extends Component {
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
      </div>
    )
  }
}

export default Facts
