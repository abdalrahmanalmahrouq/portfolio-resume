import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import Facts from '../components/Facts'

export class AboutPage extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <About/>
        {/* <Facts/> */}
        <Skills/>
        {/* <Testimonials/> */}
        <Footer/>
        
      </div>
    )
  }
}

export default AboutPage
