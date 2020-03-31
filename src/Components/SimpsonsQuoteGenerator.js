import React from 'react'

import SimpsonsRandomQuoteDesktop from '../assets/SimpsonsRandomQuote.png'


const SimpsonsQuoteGenerator = ({ page, handlers, Slide }) => {

  return <Slide index={6}>

    <div className="tile is-ancestor">
      <div className="tile is-parent">
        <article className="tile is-child notification">
          <div className="content">
            <p className="title project-title" id="simpsons-title">The Simpsons Random Quote Generator</p>
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
              <img src={SimpsonsRandomQuoteDesktop} id="simpsons-pic" />
            </figure>

          </div>


        </div>
      </div>

    </div>


  </Slide >


}


export default SimpsonsQuoteGenerator