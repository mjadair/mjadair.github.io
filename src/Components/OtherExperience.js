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
              <p className="about-text">For most of my time with the BBC, I worked on BBC Radio 4&apos;s flagship conversation programme and one of the UK&apos; most popular podcasts, <a className="gold" href="https://www.bbc.co.uk/programmes/b006qnmr" target="_blank" rel="noopener noreferrer" >Desert Island Discs</a> and was part of the small team that won the Broadcasting Press Guild &apos;Best Radio Programme&apos; Award 2017.</p>
              <p className="about-text">I have also worked as a Production Manager, planning and running several large scale events for BBC Radio Production, including the BBC Edinburgh Festivals Project and the 2018 Royal Wedding.</p>
              <p className="about-text">For my full CV have a look at my <a href="https://www.linkedin.com/in/michael-adair1/" target="_blank" rel="noopener noreferrer" className="gold"> LinkedIn </a>. </p>
            </div>
          </div>
        </article>
      </div>
      <div className="tile is-parent is-10 about-tile">
        <article className="tile is-child is-9 notification about-tile">

          <figure className="image michael-image">
            <img className="mobile-image" src={DID} />
          </figure>
          <p className="about-text overline">With Tom Hanks </p>
        </article>

      </div>

    </div>



  </Slide>



}


export default OtherExperience