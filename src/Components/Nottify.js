import React from 'react'

import NottifyAlbumsDesktop from '../assets/NottifyAlbumsDesktop.png'
import NottifyArtistsDesktop from '../assets/NottifyArtistsDesktop.png'
import NottifyArtistsMobile from '../assets/NottifyArtistsMobile.png'
import NottifyHomeDesktop from '../assets/NottifyHomeDesktop.png'


const Nottify = ({ Slide }) => {

  return <Slide index={2}>


    <div className="tile is-ancestor project-tile">
      <div className="tile is-parent is-4 project-tile">
        <article className="tile is-child notification project-tile">
          <div className="content">
            <p className="title project-title" id="nottify-title">Nottify</p>
            <p className="nottify-sub">A front-end React app that utilises an external API</p>
            <div className="content">
              <p>Nottify uses the Deezer API to let users search for their favourite music artists. The results show a chosen artist&apos;s albums and tracks and allows users to play 30 seconds from those tracks.</p>
              <ul className="mobile-list">
                <li className="left-list"><a id="nottify-links" href="https://mjadair.github.io/Nottify/" target="_blank" rel="noopener noreferrer">Visit Nottify</a></li>
                <li className="left-list"><a id="nottify-links" href="https://github.com/mjadair/Nottify" target="_blank" rel="noopener noreferrer">Nottify on GitHub </a> <i className="devicon-github-plain"></i></li>
              </ul>
              <p className="bold">Main tech used:</p>
              <ul>
                <li>HTML5  <i className="devicon-html5-plain-wordmark"></i></li>
                <li> SCSS  <i className="devicon-sass-original"></i> </li>
                <li> JavaScript  <i className="devicon-javascript-plain"></i> </li>
                <li> React  <i className="devicon-react-original"></i></li>
                <li> Webpack  <i className="devicon-webpack-plain"></i></li>
                <li> Git and GitHub  <i className="devicon-github-plain"></i> </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
      <div className="tile is-vertical project-tile">
        <div className="tile is-parent is-12 project-tile">
          <article className="tile is-child is-9 notification project-tile">
            <figure className="image">
              <img src={NottifyArtistsDesktop} className="home-desktop" />
            </figure>
          </article>
          <article className="tile is-child is-3 notification project-tile">
            <figure className="image mobile-image">
              <img className="mobile-image" src={NottifyArtistsMobile} />
            </figure>
          </article>
        </div>

        <div className="tile is-parent is-12 hidden-mobile project-tile">
          <article className="tile is-child is-6 notification project-tile">
            <figure className="image">
              <img src={NottifyAlbumsDesktop} className="bottom-row" />
            </figure>
          </article>
          <article className="tile is-child is-6 notification hidden-mobile project-tile">
            <figure className="image">
              <img src={NottifyHomeDesktop} className="bottom-row" />
            </figure>
          </article>
        </div>
      </div>
    </div>


  </Slide>

}


export default Nottify