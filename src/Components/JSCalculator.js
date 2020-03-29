import React from 'react'

import JSCalculatorScreenshot from '../assets/JSCalculatorScreenshot.png'


const JSCalculator = ({ page, handlers }) => {

  return <div id="projects">

    <div className={'slide ' + `${page === 6 ? 'selected' : ''}`} id="slide6">
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child notification">
            <div className="content">
              <p className="title project-title" id="calculator-title">JS Calculator</p>
              <p className="subtitle"></p>
              <div className="content">

              </div>
            </div>
          </article>
        </div>
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">

              <figure className="image">
                <img src={JSCalculatorScreenshot} id="home-desktop" />
              </figure>

            </div>

          </div>

        </div>
      </div>
    </div >
  </div>


}


export default JSCalculator