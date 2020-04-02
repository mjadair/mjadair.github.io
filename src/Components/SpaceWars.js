import React from 'react'

import SpaceWarsBattle from '../assets/SpaceWarsBattle.png'
import SpaceWarsBattle2 from '../assets/SpaceWarsBattle2.png'
import SpaceWarsBoss from '../assets/SpaceWarsBoss.png'
import SpaceWarsIntro from '../assets/SpaceWarsIntro.png'




const SpaceWars = ({ page, handlers, Slide }) => {

  return <Slide index={3}>

    <div className="tile is-ancestor">
      <div className="tile is-parent is-4">
        <article className="tile is-child notification">
          <div className="content">
            <p className="title project-title" id="spacewars-title">SPACE WARS</p>
            <p className="subtitle"></p>
            <div className="content">

            </div>
          </div>
        </article>
      </div>
      <div className="tile is-vertical">
        <div className="tile is-parent is-12">
          <article className="tile is-child is-6 notification ">
            <figure className="image space-image">
              <img src={SpaceWarsBattle2} id="space-desktop" />
            </figure>
          </article>

          <article className="tile is-child is-6 hidden-mobile notification ">
            <figure className="image space-image">
              <img src={SpaceWarsBoss} />
            </figure>
          </article>
        </div>

        <div className="tile is-parent is-12 hidden-mobile">
          <article className="tile is-child is-6 notification">
            <figure className="image space-image">
              <img src={SpaceWarsBattle} className="bottom-row" />
            </figure>
          </article>
          <article className="tile is-child is-6 notification hidden-mobile">
            <figure className="image space-image">
              <img src={SpaceWarsIntro} className="bottom-row" />
            </figure>
          </article>
        </div>
      </div>

    </div>


  </Slide >


}


export default SpaceWars