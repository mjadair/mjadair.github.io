import React from 'react'

import TripBitHomeDesktop from '../assets/TripBitHomeDesktop.png'
import TripBitBadgesMobile from '../assets/TripBitBadgesMobile.png'
import TripBitBadges2Desktop from '../assets/TripBitBadges2Desktop.png'
import TripBitMapDesktop from '../assets/TripBitMapDesktop.png'
import TripBitGroupsDesktop from '../assets/TripBitGroupsDesktop.png'


const TripBit = ({ Slide }) => {


  return <Slide index={0}>

    <div className="tile is-ancestor project-tile">
      <div className="tile is-parent is-4 project-tile">
        <article className="tile is-child notification project-tile">
          <div className="content">
            <p className="title project-title" id="tripbit-title">TripBit</p>
            <p className="tripbit-sub">A full stack App with JS/React front-end {'&'} Python/Django back-end</p>
            <div className="content">
              <p>TripBit is a personal travel tracker and digital &apos;scratch map&apos; where logged in users can add the cities which they have visited to their profile. These cities are displayed on a map and the user is awarded badges based on where they have been. The user can also join groups and compete with friends. </p>
              <ul className="mobile-list">
                <li className="left-list"><a id="Tripbit-links" href="http://trip-bit.herokuapp.com/#/" target="_blank" rel="noopener noreferrer">Visit TripBit</a></li>
                <li className="left-list"><a id="Tripbit-links" href="https://github.com/mjadair/TripBit" target="_blank" rel="noopener noreferrer">TripBit on GitHub </a> <i id="Tripbit-logo" className="devicon-github-plain"></i></li>
              </ul>
              <p className="bold">Main tech used:</p>
              <ul>
                <li>HTML5  <i className="devicon-html5-plain-wordmark"></i></li>
                <li> SCSS  <i className="devicon-sass-original"></i> </li>
                <li> JavaScript  <i className="devicon-javascript-plain"></i> </li>
                <li> Python  <i className="devicon-python-plain"></i></li>
                <li> Django  <i className="devicon-django-plain"></i></li>
                <li> React  <i className="devicon-react-original"></i></li>
                <li> Heroku  <i className="devicon-heroku-original"></i></li>
                <li> PostgreSQL  <i className="devicon-postgresql-plain"></i></li>
                <li> Webpack  <i className="devicon-webpack-plain"></i></li>
                <li> Git and GitHub  <i className="devicon-github-plain"></i> </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
      <div className='tile is-vertical project-tile'>
        <div className="tile is-parent is-12 project-tile">
          <article className="tile is-child is-9 notification project-tile">
            <figure className="image">
              <img src={TripBitHomeDesktop} className="home-desktop" id="tripbit-desktop" />
            </figure>
          </article>


          <article className="tile is-child is-3 notification project-tile">
            <figure className="image mobile-image">
              <img src={TripBitBadgesMobile} />
            </figure>
          </article>

        </div>
        <div className="tile is-parent is-12 hidden-mobile project-tile">
          <article className="tile is-child is-4 notification project-tile">
            <figure className="image">
              <img src={TripBitMapDesktop} className="bottom-row" />
            </figure>
          </article>
          <article className="tile is-child is-4 notification hidden-mobile project-tile">
            <figure className="image">
              <img src={TripBitBadges2Desktop} className="bottom-row" />
            </figure>
          </article>
          <article className="tile is-child is-4 notification hidden-mobile project-tile">
            <figure className="image">
              <img src={TripBitGroupsDesktop} className="bottom-row" />
            </figure>
          </article>
        </div>
      </div>

    </div>

  </Slide>

}


export default TripBit





