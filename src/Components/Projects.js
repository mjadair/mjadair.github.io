import React, { useState, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'

import TripBitHomeMobile from '../assets/TripBitHomeMobile.png'
import TripBitHomeDesktop from '../assets/TripBitHomeDesktop.png'
import TripBitBadgesDesktop from '../assets/TripBitBadgesDesktop.png'
import TripBitBadges2Desktop from '../assets/TripBitBadges2Desktop.png'
import TripBitMapDesktop from '../assets/TripBitMapDesktop.png'
import TripBitGroupsDesktop from '../assets/TripBitGroupsDesktop.png'



const config = {
  delta: 10,                             // min distance(px) before a swipe starts
  preventDefaultTouchmoveEvent: true,   // preventDefault on touchmove, *See Details*
  trackTouch: true,                      // track touch input
  trackMouse: false,                     // track mouse input
  rotationAngle: 0                      // set a rotation angle
}




const Projects = () => {

  return <section
    className='hero is-fullheight heading' id="projects"
  >

    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">
          Projects
      </h1>
        <p></p>
        <br />
        <p></p>
      </div>
    </div>
  </section>

}
export default Projects












