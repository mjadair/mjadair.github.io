import React from 'react'

import JSCalculatorScreenshot from '../assets/JSCalculatorScreenshot.png'


const JSCalculator = ({ page, handlers, Slide }) => {

  return <Slide index={7}>

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
        <figure className="image calculator-container">
          <img className="mobile-image" id="calculator-image" src={JSCalculatorScreenshot} />
        </figure>

      </div>

    </div>



  </Slide>



}


export default JSCalculator