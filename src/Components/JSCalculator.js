import React from 'react'

import JSCalculatorScreenshot from '../assets/JSCalculatorScreenshot.png'


const JSCalculator = ({ Slide }) => {

  return <Slide index={7}>

    <div className="tile is-ancestor project-tile">
      <div className="tile is-parent is-4 project-tile">
        <article className="tile is-child notification project-tile">
          <div className="content">
            <p className="title project-title" id="calculator-title">JS Calculator</p>
            <p className="calc-sub">A basic calculator using JavaScript and CSS FlexBox</p>
            <div className="content">
              <p>In my role as a teaching assistant at General Assembly, some of the first things we cover with students include CSS flexbox and building a basic JavaScript calculator before moving on to DOM Manipulation. I built this to show how these topics can combine. </p>
              <ul className="mobile-list">
                <li className="left-list"><a id="calc-links" href="https://mjadair.github.io/JS-Calculator/" target="_blank" rel="noopener noreferrer">Use JS Calculator</a></li>
                <li className="left-list"><a id="calc-links" href="https://github.com/mjadair/JS-Calculator" target="_blank" rel="noopener noreferrer">JS Calculator on Github</a> <i className="devicon-github-plain"></i></li>
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
      <div className="tile is-parent is-12 project-tile">
        <article className="tile is-child is-9 notification project-tile">
          <figure className="image calculator-container">
            <img className="mobile-image" id="calculator-image" src={JSCalculatorScreenshot} />
          </figure>
        </article>

      </div>

    </div>



  </Slide>



}


export default JSCalculator