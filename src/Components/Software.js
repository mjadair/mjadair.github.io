import React from 'react'



const Software = ({ Slide }) => {

  return <Slide index={0}>

    <div className="tile is-ancestor about-tile">
      <div className="tile is-parent is-4 about-tile">
        <article className="tile is-child notification about-tile">
          <div className="content">
            <p className="title project-title" id="dev-heading">Development Experience</p>
            <div className="content">
              <p className="about-text">
                I&apos;m currently a Teaching Assistant for General Assembly&apos;s Software Engineering Immersive course in London. I completed the course myself in February 2020.
              </p>
              <p className="about-text">I&apos;m passionate about writing clean, high-quality code and continuously learning and improving.</p>
              <p className="about-text">As a Teaching Assistant, I&apos;ve gained a huge amount of experience reviewing code, helping others learn and keeping up with best practice.</p>
            </div>
          </div>
        </article>
      </div>
      <div className="tile is-parent is-10 about-tile">
        <article className="tile is-child is-9 notification about-tile">
          <div className="content">
            <p className="about-text overline">
            Below are some of the tools I am most familiar with working with. I&apos;m continuously working to improve my knowledge and skillset and can usually be found experimenting with new projects, software languages and frameworks. You can see some of my finished projects further down this page.
            </p>
            <div className="columns is-mobile is-multiline software-columns">
              <div className="column is-3"><i className="devicon-javascript-plain software-icon"></i><div className="label">JavaScript</div></div>
              <div className="column is-3"><i className="devicon-python-plain software-icon"></i><div className="label">Python</div></div>
              <div className="column is-3"><i className="devicon-html5-plain software-icon"></i><div className="label">HTML</div></div>
              <div className="column is-3"><i className="devicon-css3-plain software-icon"></i><div className="label">CSS</div></div>
              <div className="column is-3"><i className="devicon-sass-original software-icon-gold"></i><div className="label">SASS</div></div>

              <div className="column is-3"><i className="devicon-react-original software-icon-gold"></i><div className="label">React.js</div></div>
              <div className="column is-3"><i className="devicon-nodejs-plain software-icon-gold"></i><div className="label">Node.js</div></div>
              <div className="column is-3"><i className="devicon-express-original software-icon-gold"></i><div className="label">Express.js</div></div>
              <div className="column is-3"><i className="devicon-webpack-plain software-icon"></i><div className="label">Webpack</div></div>
              <div className="column is-3"><i className="devicon-django-plain software-icon"></i><div className="label">Django</div></div>

              <div className="column is-3"><i className="fab fa-npm software-icon"></i><div className="label">NPM</div></div>
              <div className="column is-3"><i className="fab fa-yarn software-icon"></i><div className="label">Yarn</div></div>
              <div className="column is-3"><i className="devicon-mongodb-plain software-icon-gold"></i><div className="label">MongoDB</div></div>
              <div className="column is-3"><i className="devicon-postgresql-plain software-icon-gold"></i><div className="label">PostgreSQL</div></div>
              <div className="column is-3"><i className="devicon-mocha-plain software-icon-gold"></i><div className="label">Mocha.js</div></div>
              <div className="column is-3"><i className="devicon-babel-plain software-icon-gold"></i><div className="label">Babel</div></div>
              <div className="column is-3"><i className="devicon-git-plain software-icon"></i><div className="label">Git</div></div>
              <div className="column is-3"><i className="devicon-github-plain software-icon"></i><div className="label">GitHub</div></div>
              <div className="column is-3"><i className="devicon-heroku-original software-icon"></i><div className="label">Heroku</div></div>
              <div className="column is-3"><i className="devicon-visualstudio-plain software-icon"></i><div className="label">VSCode</div></div>
            </div>

          </div>

        </article>

      </div>

    </div>



  </Slide>



}


export default Software