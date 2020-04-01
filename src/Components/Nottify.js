import React from 'react'

import NottifyAlbumsDesktop from '../assets/NottifyAlbumsDesktop.png'
import NottifyArtistsDesktop from '../assets/NottifyArtistsDesktop.png'
import NottifyArtistsMobile from '../assets/NottifyArtistsMobile.png'
import NottifyHomeDesktop from '../assets/NottifyHomeDesktop.png'
import NottifyPlaylistMobile from '../assets/NottifyPlaylistMobile.png'


const Nottify = ({ page, handlers, Slide }) => {

  return <Slide index={2}>


    <div className="tile is-ancestor">
      <div className="tile is-parent">
        <article className="tile is-child notification">
          <div className="content">
            <p className="title project-title" id="nottify-title">Nottify</p>
            <p className="subtitle"> </p>
            <div className="content">

            </div>
          </div>
        </article>
      </div>
      <div className="tile is-vertical is-8">
        <div className="tile">
          <div className="tile is-parent is-vertical">

            <figure className="image">
              <img  src={NottifyArtistsDesktop} className="home-desktop" />
            </figure>

          </div>
          <div className="tile is-parent is-4">
            <article className="tile is-child notification ">
              <figure className="image mobile-image">
                <img className="mobile-image" src={NottifyArtistsMobile} />
              </figure>
            </article>
          </div>
        </div>
        <div className="tile is-parent is-12 hidden-mobile">
          <article className="tile is-child notification">
            <figure className="image">
              <img src={NottifyAlbumsDesktop} className="bottom-row" />
            </figure>
          </article>
          <article className="tile is-child notification hidden-mobile">
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