import React from 'react'

import MichaelImage from '../assets/Michael.jpeg'


const Intro = ({ Slide }) => {

  return <Slide index={0}>

    <div className="tile is-ancestor">
      <div className="tile is-parent is-4">
        <article className="tile is-child notification">
          <div className="content">
            <p className="title project-title">Hello!</p>
            <p className="subtitle"></p>
            <div className="content">
              <p> </p>
    

            </div>
          </div>
        </article>
      </div>
      <div className="tile is-parent is-10">
        <article className="tile is-child is-9 notification">
          <figure className="image michael-image">
            <img id="michael-image" src={MichaelImage} />
          </figure>
        </article>

      </div>

    </div>



  </Slide>



}


export default Intro