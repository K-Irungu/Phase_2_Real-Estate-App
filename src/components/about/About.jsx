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
              Over the past couple of decades, we have been consistent in our objective of contributing our quota to the development of Kenya's economy as well as the state of living for many individuals and corporate clients through invesment in real estate.
              Our portfolio is well-balanced, comprising a combination of residential, commercial and mixed-use properties. We have managed to gain gppd reputation in the real estate industry as we deliver a service that provides integrity, professionalism and peace of mind to our clients.
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