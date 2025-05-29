import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Resume from '../components/Resume'
import Footer from '../components/Footer'

export class ResumePage extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Resume/>
        <Footer/>
      </div>
    )
  }
}

export default ResumePage
