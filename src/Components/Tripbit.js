import React from 'react'

import TripBitHomeDesktop from '../assets/TripBitHomeDesktop.png'
import TripBitBadgesMobile from '../assets/TripBitBadgesMobile.png'
import TripBitBadges2Desktop from '../assets/TripBitBadges2Desktop.png'
import TripBitMapDesktop from '../assets/TripBitMapDesktop.png'
import TripBitGroupsDesktop from '../assets/TripBitGroupsDesktop.png'


const TripBit = ({ page, handlers, Slide }) => {


  return <Slide index={0}>

    <div className="slide-in-right" id="projects">

      {/* <div className={'slide ' + `${page === 1 ? 'selected' : ''}`} id="slide1"> */}
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child notification">
            <div className="content">
              <p className="title project-title" id="tripbit-title">TripBit</p>
              <p className="subtitle">   </p>
              <div className="content">

              </div>
            </div>
          </article>
        </div>
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">

              <figure className="image">
                <img src={TripBitHomeDesktop} id="home-desktop" />
              </figure>

            </div>
            <div className="tile is-parent is-4">
              <article className="tile is-child notification ">
                <figure className="image">
                  <img src={TripBitBadgesMobile} />
                </figure>
              </article>
            </div>
          </div>
          <div className="tile is-parent is-12">
            <article className="tile is-child notification">
              <figure className="image">
                <img src={TripBitMapDesktop} className="bottom-row" />
              </figure>
            </article>
            <article className="tile is-child notification">
              <figure className="image">
                <img src={TripBitBadges2Desktop} className="bottom-row" />
              </figure>
            </article>
            <article className="tile is-child notification">
              <figure className="image">
                <img src={TripBitGroupsDesktop} className="bottom-row" />
              </figure>
            </article>
          </div>
        </div>

      </div>
    </div>
    {/* </div > */}

  </Slide>

}


export default TripBit