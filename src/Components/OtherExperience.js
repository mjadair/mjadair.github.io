import React from 'react'

import DID from '../assets/DID.jpeg'


const OtherExperience = ({ Slide }) => {

  return <Slide index={2}>

    <div className="tile is-ancestor about-tile">
      <div className="tile is-parent is-4 about-tile">
        <article className="tile is-child notification about-tile">
          <div className="content">
            <p className="title project-title" id="dev-heading">Other Experience</p>
            <div className="content">
              <p className="about-text"> </p>
              <p className="about-text"></p>
              <p className="about-text"></p>
            </div>
          </div>
        </article>
      </div>
      <div className="tile is-parent is-10 about-tile">
        <article className="tile is-child is-9 notification about-tile">
          <figure className="image michael-image">
            <img src={DID}/>
          </figure>
        </article>

      </div>

      </div>



  </Slide>



    }
    
    
export default OtherExperience