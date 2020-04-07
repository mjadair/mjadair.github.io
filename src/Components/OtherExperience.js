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
              <p className="about-text">I worked at the BBC for 5 years in a variety of roles including Assistant Producer and Production Manager.</p>
              <p className="about-text">For most of my time with the BBC, I worked on BBC Radio 4&apos;s flagship conversation programme, <a className="gold" href="https://www.bbc.co.uk/programmes/b006qnmr" target="_blank" rel="noopener noreferrer" >Desert Island Discs</a> and was part of the team that won the Broadcasting Press Guild &apos;Best Radio Programme&apos; Award 2017.</p>
              <p className="about-text">I have also worked as a Production Manager</p>
            </div>
          </div>
        </article>
      </div>
      <div className="tile is-parent is-10 about-tile">
        <article className="tile is-child is-9 notification about-tile">
        
          <figure className="image michael-image">
            <img src={DID} />
          </figure>
          <p className="about-text overline">With Tom Hanks </p>
        </article>

      </div>

    </div>



  </Slide>



}


export default OtherExperience