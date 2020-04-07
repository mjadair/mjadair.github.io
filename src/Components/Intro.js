import React from 'react'

import MichaelImage from '../assets/Michael.jpeg'


const Intro = ({ Slide }) => {

  return <Slide index={0}>

    <div className="tile is-ancestor about-tile">
      <div className="tile is-parent is-4 about-tile">
        <article className="tile is-child notification about-tile">
          <div className="content">
            <p className="title project-title" id="about-heading">Hello!</p>
            <div className="content">
              <p className="about-text">I&apos;m Michael. I used to make radio programmes at the BBC. I really enjoyed my time there, but wanted to use my creativity and love of technology to build things with purpose and continuously learn new, relevant skills. </p>

              <p className="about-text">After learning the basics of Web Development by myself, I enrolled in General Assembly&apos;s Software Engineering</p>
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