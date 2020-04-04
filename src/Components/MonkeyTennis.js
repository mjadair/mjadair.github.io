import React from 'react'

import MonkeyTennisDesktop from '../assets/MonkeyTennisDesktop.png'
import MonkeyTennisMobile from '../assets/MonkeyTennisMobile.png'


const MonkeyTennis = ({ Slide }) => {

  return <Slide index={4}>

    <div className="tile is-ancestor">
      <div className="tile is-parent is-4">
        <article className="tile is-child notification">
          <div className="content">
            <p className="title project-title" id="monkeytennis-title">Monkey Tennis 🍌</p>
            <p className="monkey-sub">A game built with PhaserJS</p>
            <div className="content">
              <p>Monkey Tennis is a game built using the PhaserJS framework. Based on the classic arcade game Breakout, it uses Phaser&apos;s built in physics and graphics tools</p>
              <ul>
                <li className="left-list"><a id="monkey-links" href="https://mjadair.github.io/Monkey-Tennis/" target="_blank" rel="noopener noreferrer">Play Monkey Tennis 🐒</a></li>
                <li className="left-list"><a id="monkey-links" href="https://github.com/mjadair/Monkey-Tennis" target="_blank" rel="noopener noreferrer">Monkey Tennis on GitHub </a> <i className="devicon-github-plain"></i></li>
              </ul>
              <p className="bold">Main tech used:</p>
              <ul>
                <li>HTML5  <i className="devicon-html5-plain-wordmark"></i></li>
                <li>Phaser JS 🎾</li>
                <li> JavaScript  <i className="devicon-javascript-plain"></i> </li>
                <li> Git and GitHub  <i className="devicon-github-plain"></i> </li>
              </ul>

            </div>
          </div>
        </article>
      </div>
      <div className="tile is-parent is-12">
        <article className="tile is-child is-6">
          <figure className="image monkey-desktop">
            <img src={MonkeyTennisDesktop} id="monkey-desktop" />
          </figure>
        </article>

        <article className="tile is-child is-2 notification ">
          <figure className="image mobile-image">
            <img className="mobile-image" src={MonkeyTennisMobile} />
          </figure>
        </article>
      </div>
    </div>




  </Slide>



}


export default MonkeyTennis