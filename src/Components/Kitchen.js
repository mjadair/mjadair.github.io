import React from 'react'

import KitchenHomeDesktop from '../assets/KitchenHomeDesktop.png'
import KitchenRecipeDesktop from '../assets/KitchenRecipeDesktop.png'
import KitchenRecipeMobile from '../assets/KitchenRecipeMobile.png'
import KitchenRecipesDesktop from '../assets/KitchenRecipesDesktop.png'




const Kitchen = ({ Slide }) => {

  return <Slide index={1}>

    <div className="tile is-ancestor project-tile">
      <div className="tile is-parent is-4 project-tile">
        <article className="tile is-child notification project-tile">
          <div className="content">
            <p className="title project-title" id="kitchen-title">The Kitchen</p>
            <p className="kitchen-sub">A full stack MERN App</p>
            <div className="content">
              <p>The Kitchen allows users to search a database of recipe and restaurant recommendations. Logged in users can upload their own recipes, comment on recipes and have recipe shopping lists sent to their registered email address.</p>
              <ul className="mobile-list">
                <li className="left-list"><a id="kitchen-links" href="https://thekitchen.herokuapp.com/" target="_blank" rel="noopener noreferrer">Visit The Kitchen</a></li>
                <li className="left-list"><a id="kitchen-links" href="https://github.com/mjadair/The-Kitchen" target="_blank" rel="noopener noreferrer">The Kitchen on GitHub </a> <i className="devicon-github-plain"></i></li>
              </ul>
              <p className="bold">Main tech used:</p>
              <ul>
                <li>HTML5  <i className="devicon-html5-plain-wordmark"></i></li>
                <li> SCSS  <i className="devicon-sass-original"></i> </li>
                <li> JavaScript  <i className="devicon-javascript-plain"></i> </li>
                <li> Express.js <i className="devicon-express-original"></i> </li>
                <li> Mongo &amp; Mongoose <i className="devicon-mongodb-plain"></i> </li>
                <li> React  <i className="devicon-react-original"></i></li>
                <li> Heroku  <i className="devicon-heroku-original"></i></li>
                <li> Webpack  <i className="devicon-webpack-plain"></i></li>
                <li> Git and GitHub  <i className="devicon-github-plain"></i> </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
      <div className="tile is-vertical project-tile">
        <div className="tile is-parent is-12 project-tile">
          <article className="tile is-child is-9 notification project-tile">
            <figure className="image">
              <img src={KitchenHomeDesktop} className="home-desktop" />
            </figure>
          </article>

          <article className="tile is-child is-3 notification project-tile">
            <figure className="image mobile-image">
              <img className="mobile-image" src={KitchenRecipeMobile} />
            </figure>
          </article>

        </div>
        <div className="tile is-parent is-12 hidden-mobile project-tile">
          <article className="tile is-child is-6 notification">
            <figure className="image">
              <img src={KitchenRecipesDesktop} className="bottom-row" />
            </figure>
          </article>
          <article className="tile is-child is-6 notification hidden-mobile project-tile">
            <figure className="image">
              <img src={KitchenRecipeDesktop} className="bottom-row" />
            </figure>
          </article>
        </div>
      </div>

    </div>
  </Slide >

}


export default Kitchen