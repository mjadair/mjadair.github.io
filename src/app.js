import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.css'
import './style.scss'
import '../src/assets/fruit_banana.png'
import Heading from './Components/Heading'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Contact from './Components/Contact'




const App = () => (
  <>
    <Navbar />
    <Heading />
    <About />
    <Projects />
    <Contact />
  </>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)