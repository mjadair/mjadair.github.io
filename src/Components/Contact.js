import React from 'react'


const About = () => {

  return <section
    className='hero is-fullheight' id='contact'
  >

    <div className="hero-body about-body">
      <div className="container has-text-centered">
        <h1 className="title"
          value="pubes"
          onClick={(event) => {
            console.log(event.target.value)
          }}>
          CONTACT
        </h1>
        <p></p>
        <br />
        <p></p>
      </div>
    </div>
  </section>

}
export default About