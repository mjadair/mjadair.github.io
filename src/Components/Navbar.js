import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import About from './About'


const Navbar = () => {
 



  return <nav className="navbar is-fixed-bottom" id="nav-styling">
    <AnchorLink href="#heading" className="navbar-item">
      <span className="icon">
        Home
      </span>
    </AnchorLink>
    <AnchorLink href="#about" className="navbar-item">
      About
    </AnchorLink>
    <AnchorLink href="#projects" className="navbar-item">
      Projects
    </AnchorLink>
    <AnchorLink href="#contact" className="navbar-item">
      Contact
    </AnchorLink>
  </nav>


}

export default Navbar