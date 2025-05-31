import React, { Component } from 'react'
import img from '../asset/img/back.png'
import '../asset/css/custom.css'
export class Home extends Component {
  render() {
    return (
      <div>
         <main class="main">

   
    <section id="hero" class="hero section">

      <img src={img} alt="" data-aos="fade-in"/>

      <div class="container text-center" data-aos="zoom-out" data-aos-delay="100">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h2 className='tit'>Abdalrahman AL-Mahrouq</h2>
            <p style={{color:'white'}}>I'm a passionate Developer  from Jordan</p>
           
          </div>
        </div>
      </div>

    </section>

  </main>
      </div>
    )
  }
}

export default Home
