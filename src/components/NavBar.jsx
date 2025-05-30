import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export class NavBar extends Component {
  render() {
    return (
      <div>
        <header id="header" class="header d-flex align-items-center light-background sticky-top">
    <div class="container-fluid position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
       
        
        <h1 class="sitename"><b>AL-MAHROUQ</b></h1>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
           <li><NavLink to='/resume'>Resume</NavLink></li>
           <li><NavLink to='/services'>Projects</NavLink></li>
           
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <div class="header-social-links">
        <a href="https://github.com/abdalrahmanalmahrouq" class="github"><i class="bi bi-github"></i></a>    
        <a href="www.linkedin.com/in/abdalrahman-al-mahrouq-38a54b267" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>

    </div>
  </header>
      </div>
    )
  }
}

export default NavBar
