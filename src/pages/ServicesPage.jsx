import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Services from '../components/Services'
import Footer from '../components/Footer'

export class ServicesPage extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Services/>
        <Footer/>
      </div>
    )
  }
}

export default ServicesPage
