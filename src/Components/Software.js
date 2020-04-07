import React from 'react'



const Software = ({ Slide }) => {

  return <Slide index={0}>

    <div className="tile is-ancestor about-tile">
      <div className="tile is-parent is-4 about-tile">
        <article className="tile is-child notification about-tile">
          <div className="content">
            <p className="title project-title" id="about-heading">Software</p>
            <div className="content">
              <p className="about-text">
                I&apos;m currently a Teaching Assistant for General Assembly&apos;s Software Engineering Immersive course in London. I completed the course myself in February 2020.
              </p>
              <p className="about-text">Working as a </p>
              <p className="about-text"></p>
            </div>
          </div>
        </article>
      </div>
      <div className="tile is-parent is-10 about-tile">
        <article className="tile is-child is-9 notification about-tile">
          <div className="content">

            <div className="columns is-mobile is-multiline">
              <div className="column is-3-mobile is-one-fifth-desktop"><i className="devicon-javascript-plain software-icon"></i><div className="label">JavaScript</div></div>
              <div className="column is-3-mobile is-one-fifth-desktop"><i className="devicon-python-plain software-icon"></i><div className="label">Python</div></div>
              <div className="column is-3-mobile is-one-fifth-desktop"><i className="devicon-html5-plain software-icon"></i><div className="label">HTML</div></div>
              <div className="column is-3-mobile is-one-fifth-desktop"><i className="devicon-css3-plain software-icon"></i><div className="label">CSS</div></div>
              <div className="column is-3-mobile is-one-fifth-desktop"><i className="devicon-sass-original software-icon"></i><div className="label">SASS</div></div>

              <div className="column is-3-mobile is-one-fifth-desktop"><i className="devicon-react-original software-icon"></i><div className="label">React.js</div></div>
              <div className="column is-3-mobile is-one-fifth-desktop"><i className="devicon-nodejs-plain software-icon"></i><div className="label">Node.js</div></div>
              <div className="column is-3-mobile is-one-fifth-desktop"><i className="devicon-express-original software-icon"></i><div className="label">Express.js</div></div>
              <div className="column is-3-mobile is-one-fifth-desktop"><i className="devicon-webpack-plain software-icon"></i><div className="label">Webpack</div></div>
              <div className="column is-3-mobile is-one-fifth-desktop"><i className="devicon-django-plain software-icon"></i><div className="label">Django</div></div>

              <div className="column is-3-mobile is-one-fifth-desktop"><i className="fab fa-npm software-icon"></i><div className="label">NPM</div></div>
              <div className="column is-3-mobile is-one-fifth-desktop"><i className="fab fa-yarn software-icon"></i><div className="label">Yarn</div></div>
              <div className="column is-3-mobile is-one-fifth-desktop"><i className="devicon-mongodb-plain software-icon"></i><div className="label">MongoDB</div></div>
              <div className="column is-3-mobile is-one-fifth-desktop"><i className="devicon-postgresql-plain software-icon"></i><div className="label">PostgreSQL</div></div>
              <div className="column is-3-mobile is-one-fifth-desktop"><i className="devicon-mocha-plain software-icon"></i><div className="label">Mocha.js</div></div>
              <div className="column is-3-mobile is-one-fifth-desktop"><i className="devicon-babel-plain software-icon"></i><div className="label">Babel</div></div> 
              <div className="column is-3-mobile is-one-fifth-desktop"><i className="devicon-git-plain software-icon"></i><div className="label">Git</div></div>
              <div className="column is-3-mobile is-one-fifth-desktop"><i className="devicon-github-plain software-icon"></i><div className="label">GitHub</div></div>
              <div className="column is-3-mobile is-one-fifth-desktop"><i className="devicon-heroku-original software-icon"></i><div className="label">Heroku</div></div>
              <div className="column is-3-mobile is-one-fifth-desktop"><i className="devicon-visualstudio-plain software-icon"></i><div className="label">VSCode</div></div>
            </div>

            {/* <p className="about-text">
            
              </p>
            <p className="about-text">Working as a </p>
            <p className="about-text"></p> */}
          </div>

        </article>

      </div>

    </div>



  </Slide>



}


export default Software