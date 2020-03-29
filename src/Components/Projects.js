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


  return <div className='hero is-fullheight'>


    <CarouselProvider
      naturalSlideWidth={200}
      naturalSlideHeight={100}
      totalSlides={6}
    >





      <h1 className="nameTitle" id="projects-title">Projects</h1>



      <Slider>

        <TripBit Slide={Slide} />
        <Kitchen Slide={Slide} />
        <Nottify Slide={Slide} />
        <SpaceWars Slide={Slide} />
        <MonkeyTennis Slide={Slide} />
        <JSCalculator Slide={Slide} />
        <SimpsonsQuoteGenerator Slide={Slide} />

      </Slider>


    </CarouselProvider>

</div >

}
export default Projects












