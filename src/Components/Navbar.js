import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Navbar = () => {




  return <nav className="navbar is-fixed-bottom" id="nav-styling">
    {/* <AnchorLink href="#heading" className="navbar-item">
      
    Home
  
    </AnchorLink> */}
    <AnchorLink href="#about" className="navbar-item link">
      About 
    </AnchorLink>
    <AnchorLink href="#projects" className="navbar-item link">
      Projects
    </AnchorLink>
    <AnchorLink href="#contact" className="navbar-item link">
      Contact
    </AnchorLink>
  </nav>


}

export default Navbar