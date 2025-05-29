import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import Footer from '../components/Footer'

export class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Home/>
        <Footer/>
        
      </div>
    )
  }
}

export default HomePage
