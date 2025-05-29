import React, { Component } from 'react'
import AppRouter from './router/AppRouter'
import { BrowserRouter } from 'react-router-dom'
export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <AppRouter/>
        </BrowserRouter>
        
      </div>
    )
  }
}

export default App
