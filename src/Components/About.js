import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import Intro from './Intro'
import Software from './Software'
import OtherExperience from './OtherExperience'



const About = () => {

  return <section className='hero is-fullheight about-body' id="about">

    <h1 className="nameTitle hero-head" id="about-title">About</h1>


    <div className="hero-body">

      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        isIntrinsicHeight={true}
        totalSlides={3}
        infinite={true}
        interval={10000}
        isPlaying={true}
        lockOnWindowScroll={true}
        className="slider-container"
      >


        <div className="columns is-mobile is-multiline">




          <div className="column is-half column-left">
            <ButtonBack>◁</ButtonBack>
          </div>

          <div className="column is-half column-right">
            <ButtonNext>▷</ButtonNext>
          </div>

          <Slider className="slider-container container">
            <div className="column is-full">
              <Intro Slide={Slide} />
              <Software Slide={Slide} />
              <OtherExperience Slide={Slide} />
            </div>
          </Slider>

       


        </div>

      </CarouselProvider>

    </div>

  </section >




}
export default About