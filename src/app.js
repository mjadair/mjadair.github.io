import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.css'
import './styles/style.scss'
import '../src/assets/fruit_banana.png'
import Heading from './Components/Heading'
import About from './Components/About'
import Navbar from './Components/Navbar'




const App = () => (
  <>
    <Heading />
    <About />
    <Navbar />
  </>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)