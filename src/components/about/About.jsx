import React from 'react'
import Back from '../common/Back'
import image from "../images/Familypic.jpeg"
import Heading from "../common/heading"
import "./About.css";
 

const About = () => {
  return (
    <>
    <section className="about">
        <Back name="About Us" title="Who We Are?"  cover={image} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading title="Our Agency Story" subtitle="Check out our company story and work process"/>
            <p>
              Goldmark Realty was incorporated in the year 2000 with the aim to develop well-designed, competitively priced real estate in Kenya.
            </p>
            <p>
              Our portfolio is well-balanced, comprising a combination of residential, commercial and mixed-use properties. We have managed to gain good reputation in the real estate industry as we deliver a service that provides integrity, professionalism and peace of mind to our clients.
            </p>
          </div>

          <div className="right row">
            <img src={ image } alt="" />
          </div>

        </div>
    </section>
    </>
  )
}

export default About