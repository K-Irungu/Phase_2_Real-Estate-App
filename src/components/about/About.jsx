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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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