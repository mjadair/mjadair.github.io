import React from 'react'

import MonkeyTennisDesktop from '../assets/MonkeyTennisDesktop.png'
import MonkeyTennisMobile from '../assets/MonkeyTennisMobile.png'


const MonkeyTennis = ({ page, handlers, Slide }) => {

  return <Slide index={4}>

    <div className="tile is-ancestor">
      <div className="tile is-parent">
        <article className="tile is-child notification">
          <div className="content">
            <p className="title project-title" id="monkeytennis-title">Monkey Tennis 🍌</p>
            <p className="subtitle">   </p>
            <div className="content">
            </div>
          </div>
        </article>
      </div>
      <div className="tile is-8">
        <div className="tile">


          <figure className="image monkey-desktop">
            <img  src={MonkeyTennisDesktop} id="monkey-desktop" />
          </figure>


          <div className="tile is-parent is-4">
            <article className="tile is-child notification ">
              <figure className="image mobile-image">
                <img className="mobile-image" src={MonkeyTennisMobile} />
              </figure>
            </article>
          </div>
        </div>

      </div>

    </div>

  </Slide>



}


export default MonkeyTennis