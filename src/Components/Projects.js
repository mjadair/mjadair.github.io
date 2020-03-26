import React, { useState, useEffect } from 'react'
import TripBit from './Tripbit'


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

    <div className="slidecontrol">
      <nav className="level is-centered is-mobile" role="navigation" aria-label="pagination">
        <a className={'arrow level-item is-centered is-size-5 ' + `${page === 1 ? '' : 'active'}`} onClick={handlePrevious}><i className="fas fa-angle-left"></i></a>
        <a className={'pagenum level-item is-centered is-size-5 is-family-secondary ' + `${page === 1 ? 'current' : ''}`} onClick={handlePage} id='1' aria-label="Goto page 1">1</a>
        <a className={'pagenum level-item is-centered is-size-5 is-family-secondary ' + `${page === 2 ? 'current' : ''}`} onClick={handlePage} id='2' aria-label="Goto page 2">2</a>
        <a className={'arrow level-item is-centered is-size-5 ' + `${page === lastPage ? '' : 'active'}`} onClick={handleNext}><i className="fas fa-angle-right"></i></a>
      </nav>
    </div>




    <TripBit page={page} />

    <div className={'slide ' + `${page === 2 ? 'selected' : ''}`} id="slide2">
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification ">
                <p className="title">Vertical...</p>
                <p className="subtitle">Top tile</p>
              </article>
              <article className="tile is-child notification ">
                <p className="title">...tiles</p>
                <p className="subtitle">Bottom tile</p>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification ">
                <p className="title">Middle tile</p>
                <p className="subtitle">With an image</p>
                <figure className="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/640x480.png" />
                </figure>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification">
              <p className="title">Wide tile</p>
              <p className="subtitle">Aligned with the right tile</p>
              <div className="content">
                -- Content --
              </div>
            </article>
          </div>ß
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification">
            <div className="content">
              <p className="title">Tall tile</p>
              <p className="subtitle">With even more content</p>
              <div className="content">
                -- HERE IS A THING --
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>


  </div>

}
export default Projects












