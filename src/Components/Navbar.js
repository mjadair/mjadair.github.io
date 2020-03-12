import React from 'react'

const Navbar = () => {
  // return <div className="hero-foot" >
  //   <nav className="navbar is-fixed-bottom is-fullwidth" >
  //     <div className="container" id="navfooter">

  //       <a className="navbar-item" href="#about">about</a>
  //       <a className="navbar-item" href="#skills">skills</a>
  //       <a className="navbar-item" href="#projects">projects</a>
  //       <a className="navbar-item" href="#contact">contact</a>

  //     </div>
  //   </nav>
  // </div>



  return <nav className="navbar is-fixed-bottom" id="nav-styling">
    <a href="#home" className="navbar-item">
      <span className="icon">
        <i className="fas fa-home"></i>
      </span>
    </a>
    <a href="#about" className="navbar-item">
      About
      </a>
    <a href="#projects" className="navbar-item">
      Projects
      </a>
    <a href="#contact" className="navbar-item">
      Contact
      </a>
  </nav>


}

export default Navbar