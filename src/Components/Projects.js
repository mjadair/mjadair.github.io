import React, { useState, useEffect } from 'react'
import TripBit from './Tripbit'
import Kitchen from './Kitchen'
import Nottify from './Nottify'
import SpaceWars from './SpaceWars'
import MonkeyTennis from './MonkeyTennis'
import JSCalculator from './JSCalculator'
import SimpsonsQuoteGenerator from './SimpsonsQuoteGenerator'


const lastPage = 6

const Projects = () => {

  const [page, setPage] = useState(1)

  function handlePrevious() {
    if (page !== 1) {
      setPage(page - 1)
    }
    return
  }

  function handleNext() {
    if (page !== lastPage) {
      setPage(page + 1)
    }
    return
  }

  function handlePage(e) {
    setPage(parseInt(e.target.id))
  }





  return <div id="projects">

    <h1 className="nameTitle" id="projects-title">Projects</h1>

    <div className="slidecontrol">
      <nav className="level is-centered is-mobile" role="navigation" aria-label="pagination">
        <a className={'arrow level-item is-centered is-size-5 ' + `${page === 1 ? '' : 'active'}`} onClick={handlePrevious}><i className="fas fa-angle-left"></i></a>
        <a className={'pagenum level-item is-centered is-size-5 is-family-secondary ' + `${page === 1 ? 'current' : ''}`} onClick={handlePage} id='1' aria-label="Goto page 1">1</a>
        <a className={'pagenum level-item is-centered is-size-5 is-family-secondary ' + `${page === 2 ? 'current' : ''}`} onClick={handlePage} id='2' aria-label="Goto page 2">2</a>
        <a className={'pagenum level-item is-centered is-size-5 is-family-secondary ' + `${page === 3 ? 'current' : ''}`} onClick={handlePage} id='3' aria-label="Goto page 3">3</a>
        <a className={'pagenum level-item is-centered is-size-5 is-family-secondary ' + `${page === 4 ? 'current' : ''}`} onClick={handlePage} id='4' aria-label="Goto page 4">4</a>
        <a className={'pagenum level-item is-centered is-size-5 is-family-secondary ' + `${page === 5 ? 'current' : ''}`} onClick={handlePage} id='5' aria-label="Goto page 3">5</a>
        <a className={'pagenum level-item is-centered is-size-5 is-family-secondary ' + `${page === 6 ? 'current' : ''}`} onClick={handlePage} id='6' aria-label="Goto page 4">6</a>
        <a className={'pagenum level-item is-centered is-size-5 is-family-secondary ' + `${page === 7 ? 'current' : ''}`} onClick={handlePage} id='7' aria-label="Goto page 3">7</a>
        <a className={'arrow level-item is-centered is-size-5 ' + `${page === lastPage ? '' : 'active'}`} onClick={handleNext}><i className="fas fa-angle-right"></i></a>
      </nav>
    </div>




    <TripBit page={page} />
    <Kitchen page={page} />
    <Nottify page={page} />
    <SpaceWars page={page} />
    <MonkeyTennis page={page} />
    <JSCalculator page={page} />
    <SimpsonsQuoteGenerator page={page} />


  </div>

}
export default Projects












