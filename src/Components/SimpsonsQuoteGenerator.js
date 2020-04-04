import React from 'react'

import SimpsonsRandomQuoteDesktop from '../assets/SimpsonsRandomQuote.png'


const SimpsonsQuoteGenerator = ({ page, handlers, Slide }) => {

  return <Slide index={6}>

    <div className="tile is-ancestor">
      <div className="tile is-parent is-4">
        <article className="tile is-child notification">
          <div className="content">
            <p className="title project-title" id="simpsons-title">The Simpsons Random Quote Generator</p>
            <p className="simpsons-sub">My first React App</p>
            <div className="content">
              <p>This simple app uses a Simpsons Random Quote API to fetch and display some basic information</p>
              <ul>
                <li className="left-list"><a id="simpsons-links" href="https://mjadair.github.io/The-Simpsons-Quote-Generator/" target="_blank" rel="noopener noreferrer">Generate some quotes!</a></li>
                <li className="left-list"><a id="simpsons-links" href="https://github.com/mjadair/The-Simpsons-Quote-Generator" target="_blank" rel="noopener noreferrer">See the project on GitHub </a> <i className="devicon-github-plain"></i></li>
              </ul>
              <p className="bold">Main tech used:</p>
              <ul>
                <li>HTML5  <i className="devicon-html5-plain-wordmark"></i></li>
                <li> SCSS  <i className="devicon-sass-original"></i> </li>
                <li> JavaScript  <i className="devicon-javascript-plain"></i> </li>
                <li> React  <i className="devicon-react-original"></i></li>
                <li> Webpack  <i className="devicon-webpack-plain"></i></li>
                <li> Git and GitHub  <i className="devicon-github-plain"></i> </li>
              </ul>

            </div>
          </div>
        </article>
      </div>
      <div className="tile is-parent is-12">
        <article className="tile is-child is-8 notification">

          <figure className="image">
            <img src={SimpsonsRandomQuoteDesktop} id="simpsons-pic" />
          </figure>

        </article>


      </div>
    </div>




  </Slide >


}


export default SimpsonsQuoteGenerator