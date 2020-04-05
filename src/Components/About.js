import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import Intro from './Intro'



const About = () => {

  return <section className='hero is-fullheight about-body' id="about">

    <h1 className="nameTitle hero-head" id="about-title">About</h1>


    <div className="hero-body">


      <div className="columns is-mobile">

        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          isIntrinsicHeight={true}
          totalSlides={2}
          infinite={true}
          lockOnWindowScroll={true}
          className="slider-container"
        >


          <div className="column is-narrow column-left">
            <ButtonBack>◁</ButtonBack>
          </div>

          <Slider className="slider-container container">
            <div className="column">
              <Intro Slide={Slide} />
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
export default About