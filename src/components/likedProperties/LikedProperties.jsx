import React, { useEffect, useState } from 'react'
import Heading from '../common/heading';

const LikedProperties = () => {

  const[favourites, setFavourites] = useState()

  useEffect(() => {
    fetch("https://real-estate-app-build.herokuapp.com/listings")
    .then(r => r.json())
    .then(data => {

      const likedOnes = data.filter(each => each.liked === "🖤")
    
      const likedOnesCards = likedOnes.map((val, index) => {
            const { location, type, imageURL} = val;
            return (
              <div className="likedContainer" key={index}>
                <div className="img">
                    <img src={imageURL} alt="property" />
                </div>
        
                <div className="text">
                  <div className="location flex">
                    <span style={{background: "#25b5791a", color: "#black", fontSize: "18px", }}>
                      {location}
                    </span>
                  </div>
                  <h4>{type}</h4>
                </div>
              </div>
            )
      
      })
      setFavourites(likedOnesCards) 
    })}, []
  );

  return (
    <>
      <section className="properties padding">
        <div className="container">
          <Heading title="Liked Properties" subtitle="Here Are Your Liked Properties" />
          { favourites }
        </div>
      </section>
    </>
  )
}


export default LikedProperties;