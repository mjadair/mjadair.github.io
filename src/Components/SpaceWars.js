import React from 'react'

import SpaceWarsBattle from '../assets/SpaceWarsBattle.png'
import SpaceWarsBattle2 from '../assets/SpaceWarsBattle2.png'
import SpaceWarsBoss from '../assets/SpaceWarsBoss.png'
import SpaceWarsIntro from '../assets/SpaceWarsIntro.png'




const SpaceWars = ({ page }) => {

  return <div id="projects">

    <div className={'slide ' + `${page === 4 ? 'selected' : ''}`} id="slide4">
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child notification">
            <div className="content">
              <p className="title project-title" id="spacewars-title">SPACE WARS</p>
              <p className="subtitle">With even more content</p>
              <div className="content">
                -- Content --
              </div>
            </div>
          </article>
        </div>
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">

              <figure className="image">
                <img src={SpaceWarsBattle2} id="home-desktop" />
              </figure>

            </div>
            <div className="tile is-parent is-6">
              <article className="tile is-child notification ">
                <figure className="image">
                  <img src={SpaceWarsBoss} />
                </figure>
              </article>
            </div>
          </div>
          <div className="tile is-parent is-12">
            <article className="tile is-child notification">
              <figure className="image">
                <img src={SpaceWarsBattle} className="bottom-row" />
              </figure>
            </article>
            <article className="tile is-child notification">
              <figure className="image">
                <img src={SpaceWarsIntro} className="bottom-row" />
              </figure>
            </article>
          </div>
        </div>

      </div>
    </div>
  </div >


}


export default SpaceWars