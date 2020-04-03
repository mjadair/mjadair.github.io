import React from 'react'

import SpaceWarsBattle from '../assets/SpaceWarsBattle.png'
import SpaceWarsBattle2 from '../assets/SpaceWarsBattle2.png'
import SpaceWarsBoss from '../assets/SpaceWarsBoss.png'
import SpaceWarsIntro from '../assets/SpaceWarsIntro.png'




const SpaceWars = ({ Slide }) => {

  return <Slide index={3}>

    <div className="tile is-ancestor">
      <div className="tile is-parent is-4">
        <article className="tile is-child notification">
          <div className="content">
            <p className="title project-title" id="spacewars-title">SPACE WARS</p>
            <p className="space-sub">Grid-based JavaScript game</p>
            <div className="content">
              <p>Space Wars is a vanilla JavaScript game based on the arcade classic, Space Invaders</p>
              <ul>
                <li className="left-list"><a id="space-links" href="https://mjadair.github.io/Nottify/" target="_blank" rel="noopener noreferrer">Play Space Wars</a></li>
                <li className="left-list"><a id="space-links" href="https://github.com/mjadair/Nottify" target="_blank" rel="noopener noreferrer">Space Wars on GitHub </a> <i className="devicon-github-plain"></i></li>
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