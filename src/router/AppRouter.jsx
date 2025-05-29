import React, { Component, Fragment } from 'react'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import { Routes, Route } from 'react-router-dom'
import ResumePage from '../pages/ResumePage'
import ServicesPage from '../pages/ServicesPage'
export class AppRouter extends Component {
  render() {
    return (
      <div>
        <Fragment>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/resume' element={<ResumePage/>}/>
                <Route path='/services' element={<ServicesPage/>}/>
            </Routes>
        </Fragment>
      </div>
    )
  }
}

export default AppRouter
