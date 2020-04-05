import React from 'react'

import MichaelImage from '../assets/Michael.jpeg'


const Intro = ({ Slide }) => {

  return <Slide index={0}>

    <div className="tile is-ancestor about-tile">
      <div className="tile is-parent is-4 about-tile">
        <article className="tile is-child notification about-tile">
          <div className="content">
            <p className="title project-title">Hello!</p>
            <p className="subtitle">Here are words</p>
            <div className="content">
              <p className="about-text">I am writing content in here about me and myself </p>
    

            </div>
          </div>
        </article>
      </div>
      <div className="tile is-parent is-10 about-tile">
        <article className="tile is-child is-9 notification about-tile">
          <figure className="image michael-image">
            <img id="michael-image" src={MichaelImage} />
          </figure>
        </article>

      </div>

    </div>



  </Slide>



}


export default Intro