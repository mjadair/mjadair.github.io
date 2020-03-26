import React, { useState, useEffect } from 'react'

import TripBitHomeMobile from '../assets/TripBitHomeMobile.png'
import TripBitHomeDesktop from '../assets/TripBitHomeDesktop.png'
import TripBitBadgesDesktop from '../assets/TripBitBadgesDesktop.png'
import TripBitBadges2Desktop from '../assets/TripBitBadges2Desktop.png'
import TripBitMapDesktop from '../assets/TripBitMapDesktop.png'
import TripBitGroupsDesktop from '../assets/TripBitGroupsDesktop.png'


const TripBit = ( { page } ) => {


  return <div className={'slide ' + `${page === 1 ? 'selected' : ''}`} id="slide1">
    <div className="tile is-ancestor">
      <div className="tile is-vertical is-8">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child notification ">
              <p className="title">Vertical...</p>
              <p className="subtitle">Top tile</p>
            </article>
            <article className="tile is-child notification ">
              <p className="title">...tiles</p>
              <p className="subtitle">Bottom tile</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification ">
              <figure className="image">
                <img src={TripBitHomeMobile} />
              </figure>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification">
            <p className="title">Wide tile</p>
            <p className="subtitle">Aligned with the right tile</p>
            <div className="content">
              -- Content --
            </div>
          </article>
        </div>ß
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification">
          <div className="content">
            <p className="title">Tall tile</p>
            <p className="subtitle">With even more content</p>
            <div className="content">
              -- Content --
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>


}


export default TripBit