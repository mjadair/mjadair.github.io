
// const middleX = window.innerWidth / 3
// const middleY = window.innerHeight / 2.5

// const config = {
//   type: Phaser.AUTO,
//   width: window.innerWidth,
//   height: window.innerHeight - 400,
//   backgroundColor: 'b9eaff',
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
