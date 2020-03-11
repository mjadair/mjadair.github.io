import React, { useState, useEffect } from 'react'
// import Animation from './Animation'

const Heading = () => {

  // const [offset, setOffset] = useState(0)

  // const parallaxShift = () => {
  //   setOffset(window.pageYOffset)
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', parallaxShift)
  // }, [offset])


  return <>

    <section className="hero is-light is-fullheight" style={{ backgroundPositionY: -offset / 2 }}>

      <div className="hero-body heading">
        <div className="container">
          <h1 className="nameTitle text-flicker-in-glow">Michael Adair</h1>
        </div>
      </div>

      
    </section>

  </>

}


export default Heading