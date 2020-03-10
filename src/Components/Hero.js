import React, { useState, useEffect } from 'react'
// import Animation from './Animation'

const Hero = () => {

  const [offset, setOffset] = useState(0)

  const parallaxShift = () => {
    setOffset(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', parallaxShift)
  }, [offset])


  return <>

    <section className="hero is-light is-fullheight" style={{ backgroundPositionY: -offset / 2 }}>

      <div className="hero-body">
        <div className="container">
          {/* {game} */}
        </div>
      </div>

      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              <li><a href="#about">about</a></li>
              <li><a href="#skills">skills</a></li>
              <li><a href="#projects">projects</a></li>
              <li><a href="#contact">contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>

  </>

}


export default Hero