import React, { useState, useEffect } from 'react'
// import Animation from './Animation'
import Phaser from 'phaser'


const middleX = window.innerWidth / 3
const middleY = window.innerHeight / 2.5

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight - 400,
  backgroundColor: 'b9eaff',
  physics: {
    default: 'arcade'
  },
  scene: {
    preload: preload,
    create: create
  }
}

const game = new Phaser.Game(config)


function preload() {
  this.load.image('banana', '../assets/fruit_banana.png')
}


function create() {
  this.titleText = this.add.text(middleX, middleY, 'MICHAEL ADAIR', { fill: '#000000', fontSize: '40px', fontFamily: 'Times New Roman' })

  const fallingBananas = this.physics.add.group()

  function continuouslyFallingBananas() {
    const xCoord = Math.random() * window.innerWidth
    fallingBananas.create(xCoord, 10, 'banana').setScale(.1).setVelocityY(200)
  }

  const bananaFallLoop = this.time.addEvent({
    delay: 100,
    callback: continuouslyFallingBananas,
    callbackScope: this,
    loop: true,
  })

}



const Hero = () => {

  const [offset, setOffset] = useState(0)

  const parallaxShift = () => {
    setOffset(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', parallaxShift)
  }, [offset])


  return <>

    <section className="hero is-light is-fullheight fractal" style={{ backgroundPositionY: -offset / 2 }}>

      <div className="hero-body">
        <div className="container">
          {/* {game} */}
        </div>
      </div>

      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              <li><a href="#about">about</a></li>
              <li><a href="#skills">skills</a></li>
              <li><a href="#projects">projects</a></li>
              <li><a href="#contact">contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>

  </>

}


export default Hero