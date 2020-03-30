import React, { useState, useEffect } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'


import TripBit from './Tripbit'
import Kitchen from './Kitchen'
import Nottify from './Nottify'
import SpaceWars from './SpaceWars'
import MonkeyTennis from './MonkeyTennis'
import JSCalculator from './JSCalculator'
import SimpsonsQuoteGenerator from './SimpsonsQuoteGenerator'


const Projects = () => {


  return <div className='hero is-fullheight is-fluid' id="projects">

    <h1 className="nameTitle" id="projects-title">Projects</h1>

    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={80}
      totalSlides={7}
      infinite={true}
      lockOnWindowScroll={true}
      className="slider-container"
    >


      <div className="columns">

        <div className="column">
          <ButtonBack>◁</ButtonBack>
        </div>




        <div className="column is-four-fifths">
          <Slider className="slider-container">


            <TripBit Slide={Slide} />
            <Kitchen Slide={Slide} />
            <Nottify Slide={Slide} />
            <SpaceWars Slide={Slide} />
            <MonkeyTennis Slide={Slide} />
            <JSCalculator Slide={Slide} />
            <SimpsonsQuoteGenerator Slide={Slide} />



          </Slider>

        </div>


        <div className="column">
          <ButtonNext>▷</ButtonNext>
        </div>





      </div>
    </CarouselProvider>

  </div >

}
export default Projects












