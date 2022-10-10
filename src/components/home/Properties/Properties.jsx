import React from 'react'
import Heading from '../../common/heading'
import PropertiesCard from './PropertiesCard'
import "./Properties.css"


const Properties = ({ filter }) => {

  



  return (
    <>
      <section className="properties padding">
        <div className="container">
          <Heading title="Properties" subtitle="Select your prefered property here" />
          <PropertiesCard filter={ filter }  />
          
           
        </div>
      </section>
    </>
  )
}

export default Properties