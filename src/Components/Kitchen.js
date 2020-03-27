import React from 'react'

import KitchenHomeDesktop from '../assets/KitchenHomeDesktop.png'
import KitchenRecipeDesktop from '../assets/KitchenRecipeDesktop.png'
import KitchenRecipeMobile from '../assets/KitchenRecipeMobile.png'
import KitchenRecipesDesktop from '../assets/KitchenRecipesDesktop.png'




const Kitchen = ({ page }) => {

  return <div id="projects">

    <div className={'slide ' + `${page === 2 ? 'selected' : ''}`} id="slide2">
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child notification">
            <div className="content">
              <p className="title project-title" id="kitchen-title">The Kitchen</p>
              <p className="subtitle"> </p>
              <div className="content">
              
              </div>
            </div>
          </article>
        </div>
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">

              <figure className="image">
                <img src={KitchenHomeDesktop} id="home-desktop" />
              </figure>

            </div>
            <div className="tile is-parent is-4">
              <article className="tile is-child notification ">
                <figure className="image">
                  <img src={KitchenRecipeMobile} />
                </figure>
              </article>
            </div>
          </div>
          <div className="tile is-parent is-12">
            <article className="tile is-child notification">
              <figure className="image">
                <img src={KitchenRecipesDesktop} className="bottom-row" />
              </figure>
            </article>
            <article className="tile is-child notification">
              <figure className="image">
                <img src={KitchenRecipeDesktop} className="bottom-row" />
              </figure>
            </article>
          </div>
        </div>

      </div>
    </div>
  </div >


}


export default Kitchen