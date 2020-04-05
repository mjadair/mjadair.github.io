import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'


import TripBit from './Tripbit'
import Kitchen from './Kitchen'
import Nottify from './Nottify'
import SpaceWars from './SpaceWars'
import MonkeyTennis from './MonkeyTennis'
import JSCalculator from './JSCalculator'
import SimpsonsQuoteGenerator from './SimpsonsQuoteGenerator'


const Projects = () => {


  return <section className='hero is-fullheight' id="projects">

    <h1 className="nameTitle hero-head" id="projects-title">Projects</h1>


    <div className="hero-body">


      <div className="columns is-mobile">

        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          isIntrinsicHeight={true}
          totalSlides={7}
          infinite={true}
          lockOnWindowScroll={true}
          className="slider-container"
        >


          <div className="column is-narrow column-left">
            <ButtonBack>◁</ButtonBack>
          </div>

          <Slider className="slider-container container">
            <div className="column">
              <TripBit Slide={Slide} />
              <Kitchen Slide={Slide} />
              <Nottify Slide={Slide} />
              <SpaceWars Slide={Slide} />
              <MonkeyTennis Slide={Slide} />
              <JSCalculator Slide={Slide} />
              <SimpsonsQuoteGenerator Slide={Slide} />
            </div>

          </Slider>

          <div className="column is-narrow column-right">
            <ButtonNext>▷</ButtonNext>
          </div>

        </CarouselProvider>

      </div>

    </div>

  </section >

}
export default Projects












