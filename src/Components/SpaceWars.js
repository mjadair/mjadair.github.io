import React from 'react'

import SpaceWarsBattle from '../assets/SpaceWarsBattle.png'
import SpaceWarsBattle2 from '../assets/SpaceWarsBattle2.png'
import SpaceWarsBoss from '../assets/SpaceWarsBoss.png'
import SpaceWarsIntro from '../assets/SpaceWarsIntro.png'

const SpaceWars = ({ Slide }) => {

  return <Slide index={3}>

    <div className="tile is-ancestor project-tile">
      <div className="tile is-parent is-4 project-tile">
        <article className="tile is-child notification project-tile">
          <div className="content">
            <p className="title project-title" id="spacewars-title">SPACE WARS</p>
            <p className="space-sub">Grid-based JavaScript game</p>
            <div className="content">
              <p>Space Wars is a vanilla JavaScript game based on the arcade classic, Space Invaders</p>
              <ul className="mobile-list">
                <li className="left-list"><a id="space-links" href="https://mjadair.github.io/Space-Wars/" target="_blank" rel="noopener noreferrer">Play Space Wars</a></li>
                <li className="left-list"><a id="space-links" href="https://github.com/mjadair/Space-Wars" target="_blank" rel="noopener noreferrer">Space Wars on GitHub </a> <i className="devicon-github-plain"></i></li>
              </ul>
              <p className="bold">Main tech used:</p>
              <ul>
                <li>HTML5  <i className="devicon-html5-plain-wordmark"></i></li>
                <li> CSS  <i className="devicon-css3-plain"></i> </li>
                <li> JavaScript  <i className="devicon-javascript-plain"></i> </li>
                <li> Git and GitHub  <i className="devicon-github-plain"></i> </li>
              </ul>

            </div>
          </div>
        </article>
      </div>
      <div className="tile is-vertical project-tile">
        <div className="tile is-parent is-12 project-tile">
          <article className="tile is-child is-7 notification project-tile">
            <figure className="image space-image">
              <img src={SpaceWarsBattle2} id="space-desktop" />
            </figure>
          </article>

          <article className="tile is-child is-5 hidden-mobile notification project-tile">
            <figure className="image space-image">
              <img src={SpaceWarsBoss} />
            </figure>
          </article>
        </div>

        <div className="tile is-parent is-12 hidden-mobile project-tile">
          <article className="tile is-child is-7 notification project-tile">
            <figure className="image space-image">
              <img src={SpaceWarsBattle} className="bottom-row" />
            </figure>
          </article>
          <article className="tile is-child is-5 notification hidden-mobile project-tile">
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