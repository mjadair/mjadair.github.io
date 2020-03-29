import React from 'react'

import MonkeyTennisDesktop from '../assets/MonkeyTennisDesktop.png'
import MonkeyTennisMobile from '../assets/MonkeyTennisMobile.png'


const MonkeyTennis = ({ page, handlers }) => {

  return <div {...handlers} id="projects">

    <div className={'slide ' + `${page === 5 ? 'selected' : ''}`} id="slide5">
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child notification">
            <div className="content">
              <p className="title project-title" id="monkeytennis-title">Monkey Tennis</p>
              <p className="subtitle">   </p>
              <div className="content">
              </div>
            </div>
          </article>
        </div>
        <div className="tile is-8">
          <div className="tile">


            <figure className="image">
              <img src={MonkeyTennisDesktop} id="monkey-desktop" />
            </figure>


            <div className="tile is-parent is-4">
              <article className="tile is-child notification ">
                <figure className="image">
                  <img src={MonkeyTennisMobile} />
                </figure>
              </article>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div >



}


export default MonkeyTennis