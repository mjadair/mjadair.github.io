import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.css'
import './styles/style.scss'
import '../src/assets/fruit_banana.png'
import Hero from './Components/Hero'


// import Phaser from 'phaser'


// const middleX = window.innerWidth / 3
// const middleY = window.innerHeight / 2.5

// const config = {
//   type: Phaser.AUTO,
//   width: window.innerWidth,
//   height: 600,
//   backgroundColor: "b9eaff",
//   physics: {
//     default: 'arcade'
//   },
//   scene: {
//     preload: preload,
//     create: create
//   }
// }

// const game = new Phaser.Game(config)


// function preload() {
//   this.load.image('banana', '../assets/fruit_banana.png')
// }


// function create() {
//   this.titleText = this.add.text(middleX, middleY, 'MICHAEL ADAIR', { fill: '#000000', fontSize: '40px', fontFamily: 'Times New Roman' })
//   this.input.on('pointerdown', () => {
//     this.scene.stop('StartScene')
//     this.scene.start('GameScene')
//   })

//   const fallingBananas = this.physics.add.group()

//   function continuouslyFallingBananas() {
//     const xCoord = Math.random() * window.innerWidth
//     fallingBananas.create(xCoord, 10, 'banana').setScale(.1).setVelocityY(200)
//   }

//   const bananaFallLoop = this.time.addEvent({
//     delay: 100,
//     callback: continuouslyFallingBananas,
//     callbackScope: this,
//     loop: true,
//   })

// }









const App = () => (
  <Hero />
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)